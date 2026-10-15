/**
 * Compile the Spruce UI component styles (src/_includes/ui/scss -> src/_includes/ui/css).
 *
 * Every component is compiled together with the site's Spruce CSS configuration
 * (custom properties, colors, style presets), so the component previews follow the
 * dark mode and the selected design style. The component sources stay copy-paste ready:
 * they only `@use 'sprucecss/scss/spruce' as *;`.
 *
 * Usage: node scripts/build-ui-css.js [--watch] [--style=compressed]
 */
import { mkdirSync, readdirSync, watch, writeFileSync } from 'node:fs';
import path from 'node:path';
import * as sass from 'sass';

const root = path.resolve(import.meta.dirname, '..');
const sourceDir = path.join(root, 'src/_includes/ui/scss');
const outputDir = path.join(root, 'src/_includes/ui/css');
const style = process.argv.find((arg) => arg.startsWith('--style='))?.split('=')[1] ?? 'expanded';

const findSources = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const fullPath = path.join(dir, entry.name);

  if (entry.isDirectory()) {
    return findSources(fullPath);
  }

  return entry.name.endsWith('.scss') && !entry.name.startsWith('_') ? [fullPath] : [];
});

const compile = (file) => {
  const relative = path.relative(sourceDir, file);
  const output = path.join(outputDir, relative.replace(/\.scss$/, '.css'));
  const source = `@use 'config/config';\n@use '${relative.replace(/\\/g, '/').replace(/\.scss$/, '')}';\n`;

  try {
    const result = sass.compileString(source, {
      // The component folder comes first, so a component never resolves to a site partial with the same name.
      loadPaths: [sourceDir, path.join(root, 'src/scss'), path.join(root, 'node_modules')],
      style,
      silenceDeprecations: ['import']
    });

    mkdirSync(path.dirname(output), { recursive: true });
    writeFileSync(output, result.css + '\n');
    return true;
  } catch (error) {
    console.error(`✖ ${relative}\n${error.message}`);
    process.exitCode = 1;
    return false;
  }
};

const build = () => {
  const files = findSources(sourceDir);
  const failed = files.filter((file) => !compile(file)).length;

  console.log(failed
    ? `Compiled ${files.length - failed} of ${files.length} Spruce UI component stylesheets; ${failed} failed.`
    : `Compiled ${files.length} Spruce UI component stylesheets.`);
};

build();

if (process.argv.includes('--watch')) {
  watch(sourceDir, { recursive: true }, (event, filename) => {
    if (filename?.endsWith('.scss')) {
      compile(path.join(sourceDir, filename));
      console.log(`Recompiled ${filename}`);
    }
  });
}
