import { existsSync, globSync, readFileSync } from 'node:fs';
import path from 'node:path';

/**
 * The Spruce UI library in a machine-readable form: every component, block and page with its sources
 * (the HTML include, the SCSS, the JavaScript, the description) and its dependencies.
 *
 * It feeds the Markdown endpoints (/ui/card/lesson.md, /blocks/offer.md, /pages/course-home.md),
 * /library.json and the Blocks and Pages sections of /llms.txt, so AI agents can use the library
 * with only the sprucecss npm package installed.
 */
const src = path.resolve(import.meta.dirname, '..');
const read = (file) => readFileSync(path.join(src, file), 'utf8');

// The front matter as simple key-value pairs (strings and JSON arrays).
const frontMatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const data = {};

  if (!match) {
    return data;
  }

  match[1].split('\n').forEach((line) => {
    const pair = line.match(/^(\w+):\s*(.*)$/);

    if (!pair) {
      return;
    }

    const value = pair[2].trim();

    try {
      data[pair[1]] = JSON.parse(value.replace(/^'(.*)'$/, '"$1"'));
    } catch {
      data[pair[1]] = value.replace(/^['"]|['"]$/g, '');
    }
  });

  return data;
};

// The includes of a `{% set name %}…{% endset %}` block of a library page.
const includesOf = (source, name) => {
  const block = source.match(new RegExp(`\\{% set ${name} %\\}([\\s\\S]*?)\\{% endset %\\}`));

  return block ? [...block[1].matchAll(/\{% include "([^"]+)" %\}/g)].map((match) => match[1]) : [];
};

// Drop the site-only lines of a source file (a second line marked with DELETE, like the code tab does).
const clean = (code) => {
  const lines = code.split('\n');

  return (lines[1]?.includes('DELETE') ? [lines[0], ...lines.slice(2)] : lines).join('\n').trim();
};

// The first Nunjucks comment of an HTML include documents its data object ("Override with `xBlock`…").
const dataNote = (html) => html.match(/^\{#-?\s*([\s\S]*?)\s*-?#\}/)?.[1] ?? '';

// The description: the Markdown of the page, with the site links made absolute and the Nunjucks raw tags removed.
const description = (file, siteUrl) => {
  if (!file || !existsSync(path.join(src, '_includes', file))) {
    return { lead: '', body: '' };
  }

  const markdown = read(path.join('_includes', file))
    .replace(/\{%-? ?(end)?raw ?-?%\}/g, '')
    .replace(/\]\(\//g, `](${siteUrl}/`);
  const lead = markdown.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1].replace(/<[^>]+>/g, '').trim() ?? '';
  const body = markdown.replace(/<p class="lead">[\s\S]*?<\/p>\s*/, '').trim();

  return { lead, body };
};

// A stylesheet or script dependency ("card/lesson", "block/offer") points to the library item that owns it.
const dependencyUrl = (dependency) => {
  if (dependency.startsWith('block/')) {
    return `/blocks/${dependency.slice(6)}.md`;
  }

  if (dependency.startsWith('page/')) {
    return null;
  }

  return existsSync(path.join(src, 'ui', `${dependency}.njk`)) ? `/ui/${dependency}.md` : null;
};

const dependencies = (styles, scripts, external) => ({
  styles: styles.map((name) => ({ name, scss: `${name}.scss`, url: dependencyUrl(name) })),
  scripts: scripts.map((name) => ({ name, js: `${name}.js`, url: dependencyUrl(name) })),
  external
});

export default function () {
  const siteUrl = JSON.parse(read('_data/site.json')).url;
  const items = [];

  // Components: src/ui/{category}/{name}.njk, the category label comes from the folder's JSON data.
  globSync('ui/*/*.njk', { cwd: src }).sort().forEach((file) => {
    const folder = path.dirname(file);
    const source = read(file);
    const data = frontMatter(source);
    const category = JSON.parse(read(path.join(folder, `${path.basename(folder)}.json`))).category;
    const html = includesOf(source, 'html');

    if (category === 'Getting Started' || !html.length) {
      return;
    }

    const slug = path.join(folder, path.basename(file, '.njk')).replace(/\\/g, '/');

    items.push({
      type: 'component',
      title: data.extendedTitle || data.title,
      category,
      page: `/${slug}/`,
      url: `/${slug}.md`,
      source,
      html,
      scss: includesOf(source, 'scss'),
      js: includesOf(source, 'js'),
      description: includesOf(source, 'description')[0]
    });
  });

  // Blocks: src/blocks/{name}.njk (the introduction has no code).
  globSync('blocks/*.njk', { cwd: src }).sort().forEach((file) => {
    const source = read(file);
    const data = frontMatter(source);
    const html = includesOf(source, 'html');

    if (!html.length) {
      return;
    }

    const name = path.basename(file, '.njk');

    items.push({
      type: 'block',
      title: data.title,
      category: data.category,
      page: `/blocks/${name}/`,
      url: `/blocks/${name}.md`,
      source,
      html,
      scss: includesOf(source, 'scss'),
      js: includesOf(source, 'js'),
      description: includesOf(source, 'description')[0]
    });
  });

  // Every component and block: the dependencies come from the stylesheets and scripts its page loads.
  items.forEach((item) => {
    const styles = [...item.source.matchAll(/href="\/_includes\/ui\/css\/([^"]+)\.css"/g)].map((match) => match[1]);
    const scripts = [...item.source.matchAll(/src="\/_includes\/ui\/js\/([^"]+)\.js"/g)].map((match) => match[1]);
    const external = [...item.source.matchAll(/src="(https?:\/\/[^"]+)"/g)].map((match) => match[1]);

    item.dependencies = dependencies(styles, scripts, external);
    delete item.source;
  });

  // Pages: src/pages/{name}.njk, composed from the parts listed in their front matter.
  globSync('pages/*.njk', { cwd: src }).sort().forEach((file) => {
    const data = frontMatter(read(file));
    const name = path.basename(file, '.njk');

    items.push({
      type: 'page',
      title: data.title,
      category: data.kind,
      order: data.order ?? 99,
      page: `/pages/${name}/`,
      url: `/pages/${name}.md`,
      html: [data.pageInclude],
      scss: [`ui/scss/page/${name}.scss`].filter((scss) => existsSync(path.join(src, '_includes', scss))),
      js: [],
      lead: data.description,
      previewStyle: data.previewStyle || '',
      dependencies: dependencies(data.pageStyles ?? [], data.pageScripts ?? [], data.pageExternalScripts ?? [])
    });
  });

  // Read the sources once: the SCSS and the JavaScript as plain text, the HTML is rendered by the template.
  items.forEach((item) => {
    const info = description(item.description, siteUrl);

    item.lead = item.lead || info.lead;
    item.notes = info.body;
    item.dataNote = item.html.map((file) => dataNote(read(path.join('_includes', file)))).filter(Boolean).join('\n');
    item.scssCode = item.scss.map((file) => clean(read(path.join('_includes', file)))).join('\n\n');
    item.jsCode = item.js.map((file) => clean(read(path.join('_includes', file)))).join('\n\n');
    delete item.description;
  });

  return {
    siteUrl,
    items,
    components: items.filter((item) => item.type === 'component'),
    blocks: items.filter((item) => item.type === 'block'),
    pages: items.filter((item) => item.type === 'page').sort((a, b) => a.order - b.order)
  };
}
