import { execSync } from 'child_process';
import { JSDOM } from 'jsdom';
import { parse, stringify } from 'himalaya';
import Image from '@11ty/eleventy-img';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import slugify from 'slugify';
import dateFilter from './src/filters/date.js';
import htmlMinTransform from './src/transforms/html-min-transform.js';
import w3DateFilter from './src/filters/w3-date.js';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
  class: "anchor-heading__link",
  symbol: "<svg width='24' height='24' viewBox='0 0 24 24' version='1.1' fill='currentColor' aria-hidden='true' focusable='false'><path d='M22.203,1.813c-1.135,-1.136 -2.725,-1.8 -4.331,-1.813c-1.648,-0.013 -3.26,0.658 -4.431,1.813l-2.937,2.937c0.417,-0.069 0.841,-0.106 1.269,-0.106c0.837,0 1.661,0.136 2.451,0.404c0.216,0.073 0.427,0.155 0.633,0.246l1.033,-1.032c0.482,-0.484 1.151,-0.773 1.832,-0.798c0.752,-0.028 1.502,0.266 2.033,0.798c1.066,1.065 1.066,2.799 0,3.865l-2.118,2.117l-3.446,3.446c-0.67,0.67 -1.688,0.949 -2.606,0.716c-0.8,-0.204 -1.493,-0.791 -1.826,-1.546c-0.04,-0.09 -0.074,-0.181 -0.103,-0.274l-2.564,2.58c0.24,0.357 0.517,0.689 0.824,0.99c0.687,0.675 1.528,1.197 2.445,1.497c0.165,0.054 0.332,0.1 0.502,0.139c1.974,0.457 4.156,-0.129 5.634,-1.516c0.048,-0.045 5.706,-5.701 5.706,-5.701c2.416,-2.416 2.416,-6.346 0,-8.762Zm-12.394,17.14c-0.216,-0.074 -0.427,-0.156 -0.634,-0.247c0,-0 -1.033,1.033 -1.033,1.033c-0.484,0.485 -1.155,0.774 -1.84,0.798c-0.747,0.025 -1.497,-0.267 -2.025,-0.798c-1.065,-1.066 -1.065,-2.8 0,-3.866l5.835,-5.775c0.121,-0.122 0.268,-0.216 0.422,-0.293c0.7,-0.354 1.556,-0.387 2.281,-0.088c0.748,0.308 1.363,0.973 1.581,1.756c0.001,0.006 0.003,0.013 0.005,0.019c0,0 2.59,-2.589 2.591,-2.591c0.069,-0.069 -0.749,-0.946 -0.833,-1.029c-0.327,-0.325 -0.691,-0.614 -1.082,-0.86c-0.781,-0.492 -1.67,-0.815 -2.587,-0.922c-1.847,-0.215 -3.786,0.45 -5.097,1.771l-5.564,5.564c-2.416,2.416 -2.416,6.346 -0,8.762c1.142,1.143 2.744,1.807 4.359,1.813c1.631,0.006 3.25,-0.66 4.403,-1.813l2.937,-2.937c-0.416,0.07 -0.84,0.106 -1.269,0.106c-0.836,-0 -1.661,-0.136 -2.45,-0.403Z'/></svg>",
  style: "aria-labelledby",
});

const markdownItAnchorOptions = {
  level: [1, 2, 3],
  slugify: (str) =>
    slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    }),
  tabIndex: false,
  permalink(slug, opts, state, idx) {
    state.tokens.splice(
      idx,
      0,
      Object.assign(new state.Token("div_open", "div", 1), {
        attrs: [["class", `anchor-heading ${state.tokens[idx].tag}`]],
        block: true,
      })
    );

    state.tokens.splice(
      idx + 4,
      0,
      Object.assign(new state.Token("div_close", "div", -1), {
        block: true,
      })
    );

    linkAfterHeader(slug, opts, state, idx + 1);
  },
};

const md = markdownIt({
  html: true,
}).use(markdownItAnchor, markdownItAnchorOptions);

/*
 * Wrap <table> into .table-responsive and add .table
 */
md.renderer.rules.table_open = function(tokens, idx) {
  return '<div class="table-responsive"><table class="table">';
};

md.renderer.rules.table_close = function(tokens, idx) {
  return '</table></div>';
};

async function getImage(src, cls) {
  const metadata = await Image(src, {
    formats: ['svg'],
    dryRun: true,
  });
  const svg = parse(metadata.svg[0].buffer.toString());

  svg[0].attributes.push({
    key: 'class',
    value: cls ? cls : 'icon'
  });

  return stringify(svg);
}

export default function (config) {
  config.addFilter('date', dateFilter);
  config.addFilter('w3Date', w3DateFilter);
  config.addPlugin(syntaxHighlight, {
    preAttributes: {
      tabindex: 0,
      'data-language': function({ language, content, options }) {
        return language;
      }
    },
  });

  config.addFilter('markdown', (content) => {
    return md.render(content.trim());
  });

  config.setLibrary('md', md);

  config.addPassthroughCopy('./src/img/**');
  config.addPassthroughCopy('./src/css/**');
  config.addPassthroughCopy({'./src/_includes/ui/css' : './ui/css'});
  config.addPassthroughCopy('./src/js/**');
  config.addPassthroughCopy('./src/_includes/ui/js/**');
  config.addPassthroughCopy('./src/font/**');
  config.addPassthroughCopy({ './src/img/favicon/favicon.ico': '/favicon.ico' });
  config.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });

  config.addCollection('docs', collection => {
    return [...collection.getFilteredByGlob('./src/docs/**/*.md')].sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  config.addCollection('ui', collection => {
    return [...collection.getFilteredByGlob('./src/ui/**/*.njk')].sort((a, b) => {
      const categoryA = a.data.category || '';
      const categoryB = b.data.category || '';
      const titleA = a.data.title || '';
      const titleB = b.data.title || '';

      if (categoryA === 'Getting Started' && categoryB !== 'Getting Started') {
        return -1;
      }

      if (categoryB === 'Getting Started' && categoryA !== 'Getting Started') {
        return 1;
      }

      if (categoryA === 'Getting Started' && categoryB === 'Getting Started') {
        if (titleA === 'Introduction') return -1;
        if (titleB === 'Introduction') return 1;
      }

      const categoryComparison = categoryA.localeCompare(categoryB);

      if (categoryComparison !== 0) {
        return categoryComparison;
      }

      return titleA.localeCompare(titleB);
    });
  });

  config.addCollection('templates', collection => {
    return [...collection.getFilteredByGlob('./src/templates/*.md')];
  });

  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.md')];
  });

  config.addShortcode('svgIcon', getImage);

  config.addShortcode('image', async function(src, alt = '', widths = [], sizes = '') {
    let metadata = await Image(src, {
      formats: ['webp', 'jpeg'],
      widths,
      outputDir: './dist/img/',
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async',
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  config.addShortcode('color', (color, name, value, bordered = false) => {
    return `<div class="color-card ${bordered ? 'color-card--bordered' : ''}">
              <span class="color-card__color" style="background-color: ${color};"></span>
              <span class="color-card__caption">
                <span class="color-card__name">${name}</span>
                <span class="color-card__value">${value}</span>
              </span>
            </div>`;
  });

  config.addPairedShortcode('preview', content => {
    return `<div class="preview">${content}</div>`;
  });

  /**
   * Displaying a notification block.
   * @param {string} content - The content of the notification.
   * @param {string} type - The type of the notification. Can be `info`, `good` or `bad`.
   * @returns {string} The HTML markup of the notification.
   */
  config.addPairedAsyncShortcode('notification', async (content, type = 'info') => {
    let iconName = null;

    switch (type) {
      case 'bad':
        iconName = 'cross';
        break;
      case 'good':
        iconName = 'check';
        break;
      default:
        iconName = 'info';
    }

    const icon = await getImage(`./src/_includes/icon/${iconName}.svg`, 'notification__icon');
    return `<div class="notification notification--${type}">${icon}<div class="notification__content">${md.render(content)}</div></div>`;
  });

  config.addFilter('toc', function(content) {
    const dom = new JSDOM(md.render(content));
    const document = dom.window.document;

    const elements = document.querySelectorAll('.anchor-heading');
    let toc = '';

    elements.forEach(element => {
      const heading = element.querySelector('h2, h3');

      if (heading && ! ['Example(s)', 'Argument(s)', 'References'].includes(heading.textContent)) {
        toc += `<li class="toc-level-${heading.tagName.toLowerCase()}"><a href="#${heading.id}">${heading.textContent}</a></li>`;
      }
    });

    if (!toc) {
      return;
    }

    return `<div class="toc">
              <h3 class="toc__title">On this page</h3>
              <nav class="toc__navigation" aria-label="Table of Contents">
                <ol>${toc}</ol>
              </nav>
            </div>`;
  });

  config.addFilter('removeFirstLine', function (input) {
    const lines = input.split('\n');

    if (lines[1].includes('DELETE')) {
      return lines.slice(2).join('\n');
    } else {
      return input;
    }
  });

  config.addFilter('removeEmptyLines', (content) => {
    return content
      .split('\n')
      .filter(line => line.trim() !== '')
      .join('\n');
  });

  config.addFilter('groupBy', (array, key) => {
    const grouped = {};

    array.forEach(item => {
      const groupKey = item.data[key] || 'Uncategorized';

      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }

      grouped[groupKey].push(item);
    });

    return grouped;
  });

  config.on('eleventy.after', () => {
    execSync(`npx pagefind --site dist --glob \"**/*.html\"`, { encoding: 'utf-8' })
  });

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
