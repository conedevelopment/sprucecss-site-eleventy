<p class="lead">This collection of reusable user interfaces (total of {{ collections.ui.length - 2 }}) aims to help you create more coherently with Spruce CSS. These are useful, modern, expanding patterns that can assist you in your daily development job.</p>

## Patterns and Components

Patterns and components can be interchangeable in our case. Spruce UI gives you smaller and larger building blocks, and we show one example of implementation for common patterns.

## How to Use

The components are simple copy-paste ones. All you need to do is to set up your development environment (with Sass compile and installed Spruce CSS), create a preferred folder structure, paste the necessary files, and import/forward them.

- Some components use custom JS too, which you will see under the code panel.
- Some of them have dependencies that you must include in your build.

## Blocks and Page Templates

- **[Blocks](/blocks/)** are complete, full-width page sections (heroes, features, pricing, testimonials, FAQ, galleries, contact and more). They follow one anatomy (`.block > .container > .block__inner`), combine the smaller components, and their content is data-driven: set an object like `featuresBlock` before the include to replace the default copy.
- **[Pages](/pages/)** are complete templates composed only of existing components and blocks, like the [Startup](/pages/startup-home/), [Portfolio](/pages/portfolio-home/) and [Course](/pages/course-home/) home pages. Each opens in a new tab, in its own design style.
- Use the **full screen** button in the code panel to see a component or a block as a real page.

## Design Styles

Every component is built with the Spruce CSS tokens, so they follow the [design styles](/docs/customization/styles/). Use the **style picker** in the header to restyle the whole site, or the picker above each preview to try a style on one component only.

## Accessibility and JavaScript

- The components follow the WAI-ARIA Authoring Practices where a pattern exists (tabs, dialogs, tooltips, carousels) and use native elements (`dialog`, `details`, radio buttons, `meter`) whenever possible.
- Every interactive component uses plain, dependency-free vanilla JavaScript (no Alpine.js or other framework). The script is in the JS tab; load it with `defer`.
- See the [Config](/ui/getting-started/config/) page for the Spruce CSS configuration the components expect.

## For AI Agents and Tools

The library isn't part of the `sprucecss` npm package, but every component, block and page has a machine-readable version, so coding assistants can use it directly:

- **Markdown endpoints:** add `.md` to the address of any component, block or page (like [/blocks/pricing-tiers.md](/blocks/pricing-tiers.md) or [/ui/card/lesson.md](/ui/card/lesson.md)). You get the rendered HTML, the SCSS, the JavaScript, the notes and the dependencies in loading order, each linking to its own endpoint.
- **Index:** [/library.json](/library.json) lists every item with its type, category, description and dependencies, and [/llms.txt](/llms.txt) has the same list next to the docs.
- **AI skill:** the `sprucecss-library` [skill](/docs/ai/skills/) tells the assistant to look an item up in the library, copy it with its dependencies and change only the content.
