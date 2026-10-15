<p class="lead">The container centers the content of a page area, limits its width and keeps a fluid gap on the sides. Every page, header, footer and [block](/blocks/) uses it.</p>

## Variations

| Class | Width |
|---|---|
| `.container` | `container-inline-size` from the `$layout` map (84rem by default). |
| `.container--narrow` | 50rem, for reading content like articles and forms. |
| `.container--wide` | 110rem, for dashboards and wide galleries. |
| `.container--full` | No maximum width, only the side gap. |

## Technical Details

- It uses the `layout-center` mixin: `inline-size: 100%`, `margin-inline: auto`, a maximum `inline-size` and a `padding-inline` gap. Every property is logical, so it works in RTL.
- Add a variation by changing the `--inline-size` custom property, for example `.container--article { --inline-size: 42rem; }`, or set it inline for a one-off.
- The `--gap` custom property controls the side padding; its default is fluid (`spacer-clamp('m', 'l')`), so it grows with the viewport.
- In the [blocks](/blocks/), the container always sits between the block and its inner element: `.block-name > .container > .block-name__inner`.

## Customization

```scss
@use 'sprucecss/scss/spruce' with (
  $layout: (
    'container-inline-size': 76rem,
  ),
);
```
