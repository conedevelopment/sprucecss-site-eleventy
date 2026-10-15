---
title: "Reduce the CSS Size"
description: "Generate only the parts of Spruce CSS you use with the generators, the settings and the style presets include list."
order: 33
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/guides/reduce-the-css-size.md"
---

<p class="lead">Spruce CSS writes CSS only when a generator mixin tells it to. Turn off what you don't use, and your stylesheet gets smaller.</p>

## Turn Off Generators

`generate-styles` calls every generator. Configure which ones run with the [$generators](/docs/sass/variables/#generators) map:

```scss
@use 'sprucecss/scss/spruce' with (
  $generators: (
    'content': (
      'dialog': false,
      'print': false,
      'progress': false,
    ),
    'form': (
      'btn-group': false,
      'form-range': false,
      'form-switch': false,
    ),
  ),
);
```

## Call Only the Generators You Need

For full control, skip `generate-styles` and call the individual generators:

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-normalize;
@include generate-root;
@include generate-default;
@include generate-typography;
@include generate-btn('.btn');

.btn--primary { @include btn-variant('primary'); }
```

The full list is on the [generators](/docs/elements/generators/) page.

## Keep the Opt-In Features Small

- **Styles:** every preset adds CSS. Generate only the ones you offer with `'styles': ('include': ('minimal', 'glass'))`, or set one `default` style without the generator.
- **Utilities:** the text and layout utilities are off by default; turn on only the groups you use.
- **Custom properties:** the custom property mode adds declarations for the hooks. If you don't need runtime theming or styles, keep `css-custom-properties` off, or turn off the `style-hooks` setting.
- **Button variants:** `generate-styles` outputs every built-in variant. If you need only one or two, turn off the `btn` generator and generate the button and your variants yourself.

## Measure

Compile with `--style=compressed` and check the gzipped size:

```terminal
npx sass --style=compressed --load-path=node_modules scss/main.scss | gzip -c | wc -c
```
