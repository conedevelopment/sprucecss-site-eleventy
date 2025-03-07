---
title: "Variables"
description: "The variables are fundamental for better customisability. Luckily Spruce CSS gives you a lot of them."
order: 15
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/sass/variables.md"
---

<p class="lead">Spruce CSS has several Sass variables that it can generate into CSS custom properties.</p>

Our central concept is not to expose a CSS custom property that isn’t needed for later customization, but with version 2, you can opt-in to the fully CSS custom property mode.

By default, Spruce only generates CSS variables for the colors and transition settings. If you turn on the `css-custom-properties` to true, it will also generate additional ones for the buttons, form elements, etc.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
);
```

More information about the [difference between Sass and CSS variables](https://css-tricks.com/difference-between-types-of-css-variables/).

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/tree/main/scss/config)


## Breakpoints

We store the breakpoints in the `$breakpoints` map, which we use in the <code><a href="/docs/sass/mixins#breakpoint">breakpoint</a></code> mixin.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_breakpoint.scss)

```scss
@use 'sprucecss/scss/spruce' with (
  $breakpoints: (
    'xs': 32em,
    'sm': 48em,
    'md': 64em,
    'lg': 80em,
    'xl': 90em,
    'xxl': 110em,
  ),
);
```

## Buttons

```scss
@use 'sprucecss/scss/spruce' with (
  $btn: (
    'border-radius': map.get($display, 'border-radius-sm'),
    'border-width': 1px,
    'focus-ring-box-shadow-type': outside,
    'focus-ring-offset': 2px,
    'focus-ring-size': 2px,
    'focus-ring-type': outline,
    'font-family': null,
    'font-size': map.get($typography, 'font-size-base'),
    'font-style': null,
    'font-weight': 500,
    'gap': map.get($spacers, 'xs'),
    'icon-padding': 0.75em,
    'icon-size': 1em,
    'padding': 0.75em 1em,
    'shadow-size': 0.25rem,
    'text-transform': null,
  ),
  $btn-lg: (
    'font-size': 1.15rem,
    'gap': map.get($spacers, 'xs'),
    'icon-padding': 0.9em,
    'padding': 0.9em 1.15em,
  ),
  $btn-sm: (
    'font-size': 0.8rem,
    'gap': map.get($spacers, 'xxs'),
    'icon-padding': 0.5em,
    'icon-size': 0.8rem,
    'padding': 0.5em 0.75em,
  ),
);
```

## Character escaping

We use the `$escaping-characters` under the <code><a href="/docs/sass/functions/#svg-escape">svg-escape</a></code> function to neutralize the characters when we use inline SVG through `data:image`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_escaping-characters.scss)

```scss
@use 'sprucecss/scss/spruce' with (
  $escaping-characters: (
    ('<', '%3c'),
    ('>', '%3e'),
    ('#', '%23'),
    ('(', '%28'),
    (')', '%29'),
  ),
);
```

## Display

```scss
@use 'sprucecss/scss/spruce' with (
  $display: (
    'border-radius-lg': 0.925rem,
    'border-radius-sm': 0.425rem,
  ),
);
```

## Form Check

```scss
@use 'sprucecss/scss/spruce' with (
  $form-check: (
    'border-radius': map.get($display, border-radius-sm),
    'border-width': 1px,
    'focus-ring-box-shadow-type': outside,
    'focus-ring-offset': 2px,
    'focus-ring-size': 2px,
    'focus-ring-type': outline,
    'font-size': 1.125rem,
    'font-weight': map.get($form-check, 'font-weight'),
    'line-height': map.get($typography, 'line-height-heading'),
    'margin-block': 0.1em,
    'vertical-alignment': center,
  ),
  $form-check-lg: (
    'font-size': map.get($typography, 'size-lg'),
  ),
  $form-check-sm: (
    'font-size': map.get($typography, 'font-size-base'),
  ),
);
```

## Form Control

```scss
@use 'sprucecss/scss/spruce' with (
  $form-control: (
    'border-radius': map.get($display, 'border-radius-sm'),
    'border-width': 1px,
    'focus-ring-box-shadow-type': outside,
    'focus-ring-offset': 2px,
    'focus-ring-size': 0.25rem,
    'focus-ring-type': box-shadow,
    'font-family': null,
    'font-size': map.get($typography, 'font-size-base'),
    'font-weight': null,
    'line-height': 1.5,
    'padding': 0.5em 0.75em,
    'textarea-block-size': 6rem,
  ),
  $form-control-lg: (
    'font-size': map.get($typography, 'size-lg'),
    'padding': 0.65em 1em,
  ),
  $form-control-sm: (
    'border-radius': 0.35em,
    'font-size': map.get($typography, 'size-sm'),
    'padding': 0.25em 0.5em,
  ),
  $form-control-color: (
    'aspect-ratio': 1,
    'block-size': 100%,
    'inline-size': 2.625rem,
    'padding': 0.5em,
  ),
  $form-control-color-lg: (
    'aspect-ratio': 1,
    'block-size': 100%,
    'inline-size': 3.204rem,
    'padding': 0.5em,
  ),
  $form-control-color-sm: (
    'aspect-ratio': 1,
    'block-size': 100%,
    'inline-size': 1.925rem,
    'padding': 0.25em,
  ),
);
```

## Form Description

```scss
@use 'sprucecss/scss/spruce' with (
  $form-description: (
    'font-size': null,
    'font-style': null,
    'font-weight': null,
  ),
);
```

## Form Fieldset

```scss
@use 'sprucecss/scss/spruce' with (
  $form-fieldset: (
    'layout-gap': map.get($spacers, 's'),
    'legend-font-family': null,
    'legend-font-size': clamp(#{map.get($font-sizes, 'h5')}, 5vw, #{map.get($font-sizes, 'h4')}),
    'legend-font-weight': 700,
  ),
);
```

## Form File

```scss
@use 'sprucecss/scss/spruce' with (
  $form-file: (
    'background': 'primary',
  ),
);

```
## Form Group

```scss
@use 'sprucecss/scss/spruce' with (
  $form-group: (
    'gap': map.get($spacers, 'xs'),
  ),
  $form-group-check: (
    'gap': map.get($spacers, 's'),
  ),
  $form-group-row: (
    'container-inline-size': 38rem,
    'gap': map.get($spacers, 'xxs') map.get($spacers, 's'),
    'label-inline-size': 10rem,
    'vertical-alignment': center,
  ),
);
```

## Form Icon

```scss
@use 'sprucecss/scss/spruce' with (
  $form-icon: (
    'checkbox-indeterminate': '<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.5,11.1c-0,-0.331 -0.269,-0.6 -0.6,-0.6l-13.8,0c-0.331,0 -0.6,0.269 -0.6,0.6l0,1.8c0,0.331 0.269,0.6 0.6,0.6l13.8,0c0.331,0 0.6,-0.269 0.6,-0.6l-0,-1.8Z" style="fill:#COLOR#;"/></svg>',
    'checkbox': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.525,13.777l-2.411,-2.412c-0.234,-0.233 -0.613,-0.233 -0.846,0l-1.27,1.27c-0.233,0.233 -0.233,0.612 0,0.846l4.104,4.103c0.116,0.117 0.269,0.175 0.422,0.175l0.003,0c0.152,0 0.305,-0.058 0.421,-0.175l9.054,-9.053c0.233,-0.234 0.233,-0.613 -0,-0.846l-1.27,-1.269c-0.233,-0.234 -0.612,-0.234 -0.846,-0l-7.361,7.361Z" style="fill:#COLOR#;"/></svg>',
    'invalid': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M12,2c5.519,0 10,4.481 10,10c0,5.519 -4.481,10 -10,10c-5.519,0 -10,-4.481 -10,-10c0,-5.519 4.481,-10 10,-10Zm0,1.667c4.599,-0 8.333,3.734 8.333,8.333c0,4.599 -3.734,8.333 -8.333,8.333c-4.599,0 -8.333,-3.734 -8.333,-8.333c-0,-4.599 3.734,-8.333 8.333,-8.333Zm0.813,11.649c-0,-0.081 -0.065,-0.146 -0.146,-0.146l-1.334,0c-0.081,0 -0.146,0.065 -0.146,0.146l0,1.169c0,0.08 0.065,0.146 0.146,0.146l1.334,-0c0.081,-0 0.146,-0.066 0.146,-0.146l-0,-1.169Zm-0,-7.784c-0,-0.09 -0.073,-0.163 -0.163,-0.163l-1.3,0c-0.09,0 -0.163,0.073 -0.163,0.163l0,6.351c0,0.09 0.073,0.163 0.163,0.163l1.3,-0c0.09,-0 0.163,-0.073 0.163,-0.163l-0,-6.351Z" style="fill:#COLOR#;"/></svg>',
    'radio': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="6" style="fill:#COLOR#;"/></svg>',
    'select': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,12.507l-3.816,-3.815c-0.171,-0.172 -0.45,-0.172 -0.622,-0l-0.933,0.933c-0.172,0.172 -0.172,0.451 0,0.623l5.06,5.06c0.172,0.172 0.45,0.172 0.622,0l5.06,-5.06c0.172,-0.172 0.172,-0.451 -0,-0.623l-0.933,-0.933c-0.172,-0.172 -0.451,-0.172 -0.622,-0l-3.816,3.815Z" style="fill:#COLOR#;"/></svg>',
    'switch': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" style="fill:#COLOR#;"/></svg>',
    'valid': '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M12,2c5.519,0 10,4.481 10,10c0,5.519 -4.481,10 -10,10c-5.519,0 -10,-4.481 -10,-10c0,-5.519 4.481,-10 10,-10Zm0,1.667c4.599,-0 8.333,3.734 8.333,8.333c0,4.599 -3.734,8.333 -8.333,8.333c-4.599,0 -8.333,-3.734 -8.333,-8.333c-0,-4.599 3.734,-8.333 8.333,-8.333Zm-1.476,10.182l-2.984,-2.984c-0.065,-0.065 -0.17,-0.065 -0.235,0l-0.943,0.943c-0.065,0.065 -0.065,0.171 -0,0.236l4.043,4.042c0.033,0.033 0.076,0.05 0.119,0.049c0.044,0.001 0.087,-0.016 0.12,-0.049l6.994,-6.994c0.065,-0.065 0.065,-0.17 0,-0.235l-0.943,-0.943c-0.065,-0.065 -0.17,-0.065 -0.235,-0l-5.936,5.935Z" style="fill:#COLOR#;"/></svg>',
  ),
);
```

## Form Label

```scss
@use 'sprucecss/scss/spruce' with (
  $form-label: (
    'font-family': null,
    'font-size': null,
    'font-style': null,
    'font-weight': null,
    'text-align': start,
    'text-transform': null,
  ),
);
```

## Form Range

```scss
@use 'sprucecss/scss/spruce' with (
  $form-range: (
    'focus-ring-box-shadow-type': outside,
    'focus-ring-offset': 2px,
    'focus-ring-size': 2px,
    'focus-ring-type': outline,
    'thumb-block-size': 1rem,
    'thumb-border-radius': 0.5rem,
    'thumb-inline-size': 1rem,
    'track-block-size': 0.25rem,
    'track-border-radius': 0.15rem,
  ),
);
```

## Form Row

```scss
@use 'sprucecss/scss/spruce' with (
  $form-row: (
    'inline-size': 20ch,
  ),
);
```

## Form Select

```scss
@use 'sprucecss/scss/spruce' with (
  $form-select: (
    'icon-inline-size': 1.25em,
    'icon-right-offset': 0.5em,
    'padding-inline-end': calc(0.75em + 1.25em),
  ),
);
```

## Form Switch

```scss
@use 'sprucecss/scss/spruce' with (
  $form-switch: (
    'border-width': 1px,
    'font-size': 1.125rem,
    'font-weight': map.get($form-label, 'font-weight'),
    'line-height': map.get($typography, 'line-height-heading'),
    'margin-block-start': 0.25em,
  ),
  $form-switch-lg: (
    'font-size': map.get($typography, 'size-lg'),
  ),
  $form-switch-sm: (
    'font-size': map.get($typography, 'font-size-base'),
  ),
);
```

## Generators

```scss
@use 'sprucecss/scss/spruce' with (
  $generators: (
    'content': (
      'accessibility': true,
      'default': true,
      'display': true,
      'divider': true,
      'layout': true,
      'media': true,
      'normalize': true,
      'print': true,
      'root': true,
      'table': true,
      'typography': true,
      'utilities': true,
    ),
    'form': (
      'btn': true,
      'file-btn': true,
      'form-check': true,
      'form-control': true,
      'form-description': true,
      'form-feedback': true,
      'form-fieldset': true,
      'form-group': true,
      'form-label': true,
      'form-range': true,
      'form-row': true,
      'form-switch': true,
    ),
  ),
);
```

## Layout

```scss
@use 'sprucecss/scss/spruce' with (
  $layout: (
    'container-inline-size': 84rem,
  ),
);

```

## Print

To learn more about the print option, [please visit the related page](/docs/getting-started/print/).

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_print.scss)

```scss
@use 'sprucecss/scss/spruce' with (
  $print: (
    'page-margin': 2cm,
    'hidden-elements': 'header, footer, aside, nav, form, iframe, [class^="aspect-ratio"]',
  ),
);
```


## Spacers

Spacers are generated by a predefined $spacer value, and the `$spacers` map with added multiplication.

Using the [spacer()](/docs/sass/functions/#spacer) helper function we can get any value by key name from the `$spacers` map.

```scss
@use 'sprucecss/scss/spruce' with (
  $spacer: 1rem,
  $spacers: (
    'xxs': $spacer * 0.25,
    'xs': $spacer * 0.5,
    's': $spacer,
    'm': $spacer * 1.5,
    'l': $spacer * 3,
    'xl': $spacer * 4.5,
    'xxl': $spacer * 7,
    'xxxl': $spacer * 10,
  ),
);
```

## Tables

```scss
@use 'sprucecss/scss/spruce' with (
  $table: (
    'caption-font-size': null,
    'caption-font-style': null,
    'caption-font-weight': null,
    'line-height': map.get($typography, 'line-height-md'),
    'padding': map.get($spacers, 's'),
    'responsive-inline-size': 40rem,
    'stripe': odd,
  ),
  $table-sm: (
    'padding': map.get($spacers, 'xs'),
  ),
);
```

## Transition and Animation

```scss
@use 'sprucecss/scss/spruce' with (
  $transition: (
    'duration': 0.15s,
    'timing-function': ease-in-out,
  ),
);
```

## Typography

You can access any font size with the [font-size() helper function](/docs/sass/functions#font-size).

```scss
@use 'sprucecss/scss/spruce' with (
  $typography: (
    'border-radius': map.get($display, 'border-radius-sm'),
    'font-family-base': #{Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif},
    'font-family-cursive': #{ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace},
    'font-family-heading': #{Avenir, 'Avenir Next LT Pro', Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif},
    'font-size-base': 1rem,
    'font-size-lead': clamp(1.15rem, 2vw, 1.35rem),
    'font-size-lg': 1.125rem,
    'font-size-ratio': 1.25,
    'font-size-sm': 0.875rem,
    'font-weight-base': null,
    'font-weight-heading': 700,
    'inline-padding': 0.1em 0.3em,
    'letter-spacing-heading': null,
    'line-height-base': 1.8,
    'line-height-heading': calc(2px + 2ex + 2px),
    'line-height-lg': 1.8,
    'line-height-md': 1.5,
    'line-height-sm': 1.2,
  ),
  $font-sizes: (
    'h1': math.pow(map.get($typography, 'font-size-ratio'), 4) * map.get($typography, 'font-size-base'),
    'h2': math.pow(map.get($typography, 'font-size-ratio'), 3) * map.get($typography, 'font-size-base'),
    'h3': math.pow(map.get($typography, 'font-size-ratio'), 2) * map.get($typography, 'font-size-base'),
    'h4': math.pow(map.get($typography, 'font-size-ratio'), 1) * map.get($typography, 'font-size-base'),
    'h5': map.get($typography, 'font-size-base'),
    'h6': map.get($typography, 'font-size-base'),
  ),
);
```
