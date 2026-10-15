<p class="lead">Blocks are complete, full-width page areas: heroes, feature grids, pricing, testimonials, FAQs, contact forms and more. Stack them, and you have a page. There are {{ collections.blocks.length - 1 }} blocks so far.</p>

## Blocks, Components and Pages

- **[Components](/ui/getting-started/introduction/)** are smaller UI pieces: a card, a toast, a tag input.
- **Blocks** combine components into a page area with a heading and a layout.
- **[Pages](/pages/)** combine blocks (and components) into complete page templates.

## Anatomy of a Block

Every block follows the same structure, so they line up on any page:

```html
<section class="features-block" aria-labelledby="features-title">
    <div class="container">
        <div class="features-block__inner">
            <!-- the heading and the content of the block -->
        </div>
    </div>
</section>
```

- **`.features-block`** is the full-width area: its vertical padding, background and color tokens. A background color or image spans the whole viewport.
- **`.container`** centers the content and limits its width (the [Container](/ui/content-and-layout/container/) component). Use its modifiers (`--narrow`, `--wide`) to change the width of a single block.
- **`.features-block__inner`** is the layout of the content: a flex column with a gap (`display: flex; flex-direction: column; gap: spacer('l');`), a grid or two columns. The gap of the parent spaces the sections, so their own margins never matter.

The outer element is a `section` labelled by its heading, so every block is a landmark that screen reader users can jump to.

## Data-Driven Content

The blocks render their content from an object, so you can reuse the same markup with different copy. Without an object, the block shows its default content.

```html
{% raw %}{% set featuresBlock = {
    "heading": { "eyebrow": "Services", "title": "How I can help", "id": "features-title" },
    "items": [
        { "icon": "pen", "title": "Product design", "text": "From flows to polished interfaces." }
    ]
} %}
{% include "ui/html/block/features.html" %}{% endraw %}
```

The examples use [Nunjucks](https://mozilla.github.io/nunjucks/), but the markup is plain HTML: copy the rendered code from the HTML tab into any stack.

## Shared Parts

- **[Block Heading](/ui/content-and-layout/block-heading/):** the eyebrow, title and introduction of every block.
- **Icons:** a shared icon partial (`block/icon.html`) with simple stroke icons that follow the text color.
- **Components:** many blocks reuse components, like the [pricing cards](/ui/card/pricing/) or the [testimonial cards](/ui/card/testimonial/). Load their stylesheets too; every block lists its dependencies.

## Styles and Dark Mode

The blocks use the Spruce CSS tokens only (`color('surface')`, `radius('lg')`, `shadow('md')`, `config('border-width-base', $display)`), so they follow the dark mode and every [design style](/docs/customization/styles/). Try it with the style picker above every preview, and open a block in full screen to see it as a real page area.

## AI Skill

The `sprucecss-blocks` [AI skill](/docs/ai/skills/) teaches coding assistants the block structure, the naming and the data-driven pattern, the `sprucecss-spacing` skill the spacing rules, and the `sprucecss-block-rhythm` skill how blocks meet on a page (a block after a block on the same background has no top padding), so they can build new blocks that fit. With the `sprucecss-library` skill they reuse the existing blocks instead: every block has a Markdown version with its code and dependencies (add `.md` to its address, like [/blocks/faq.md](/blocks/faq.md)).
