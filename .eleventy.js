require('dotenv').config();

const { parse, stringify } = require('himalaya');
const dateFilter = require('./src/filters/date.js');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const Image = require('@11ty/eleventy-img');
const isProduction = process.env.NODE_ENV === 'production';
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const w3DateFilter = require('./src/filters/w3-date.js');
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');

const md = markdownIt({
  html: true,
});

md.use(markdownItPrism);

module.exports = config => {
  config.addFilter('date', dateFilter);
  config.addFilter('w3Date', w3DateFilter);
  config.addPlugin(syntaxHighlight);

  config.addFilter('markdown', (content) => {
    return md.render(content);
  });

  config.addPassthroughCopy('./src/img/**');
  config.addPassthroughCopy('./src/css/**');
  config.addPassthroughCopy('./src/js/**');
  config.addPassthroughCopy('./src/font/**');

  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.md')];
  });

  config.addNunjucksAsyncShortcode('svgIcon', async (src, cls) => {
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
  });

  config.addShortcode('image', async function(src, alt = "", widths = [], sizes = "") {
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
