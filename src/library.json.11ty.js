/**
 * /library.json: the index of the Spruce UI library for tools and AI agents.
 * Every item links to its Markdown endpoint with the HTML, SCSS, JavaScript and dependencies.
 */
export const data = {
  permalink: '/library.json',
  eleventyExcludeFromCollections: true
};

export function render ({ spruceUi }) {
  return JSON.stringify({
    name: 'Spruce UI',
    framework: 'sprucecss',
    usage: 'Fetch the markdown URL of an item: it has the HTML, the SCSS, the JavaScript and the ordered dependencies.',
    items: spruceUi.items.map((item) => ({
      type: item.type,
      title: item.title,
      category: item.category,
      description: item.lead,
      preview: spruceUi.siteUrl + item.page,
      markdown: spruceUi.siteUrl + item.url,
      styles: item.dependencies.styles.map((style) => style.name),
      scripts: item.dependencies.scripts.map((script) => script.name),
      external: item.dependencies.external
    }))
  }, null, 2);
}
