---
title: "Set Up a Dark Theme"
description: "Turn on the built-in dark mode, customize its colors, follow the system preference and handle component-specific dark styles."
order: 34
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/guides/set-up-a-dark-theme.md"
---

<p class="lead">Spruce CSS v3 has a complete dark mode built in. This guide shows the whole setup: colors, detection and the details that colors alone don't cover.</p>

It builds on the [project configuration](/docs/guides/configure-your-project/) structure.

```text
scss/
├── config/
│   ├── _index.scss
│   ├── _config.scss
│   ├── _dark-colors.scss
│   ├── _dark-mode.scss
│   └── _styles.scss
└── main.scss
```

## 1. Define Your Dark Colors

The default dark palette works out of the box. Override only what you need in `_dark-colors.scss`, with the same structure as the `$colors` map:

```scss
$colors: (
  'base': (
    'background': hsl(222deg 47% 8%),
    'primary': hsl(199deg 89% 60%),
  ),
  'btn': (
    'primary-background': hsl(199deg 89% 48%),
    'primary-background-hover': hsl(199deg 89% 55%),
  ),
);
```

## 2. Turn On the Generator

In `_config.scss`, pass the colors and enable the `dark-mode` generator:

```scss
@use 'dark-colors' as dark;

@use 'sprucecss/scss/spruce' with (
  $dark-colors: dark.$colors,
  $generators: (
    'content': ('dark-mode': true),
  ),
  $settings: (
    'dark-mode': (
      'prefers-color-scheme': true, // optional: follow the system
    ),
  ),
);
```

The generator outputs the dark custom properties under `:root[data-theme-mode="dark"]`, sets `color-scheme: dark` and regenerates the SVG icons of the form elements.

## 3. Add Component Specific Styles

Some things need more than new colors: a different image, a softer shadow, a logo. Keep them in `_dark-mode.scss` with the `dark-mode` mixin:

```scss
@use 'sprucecss/scss/spruce' as *;

@include dark-mode {
  .hero {
    background-image: url('../img/hero-dark.webp');
  }
}

.card {
  box-shadow: shadow('md');

  @include dark-mode {
    box-shadow: none;
  }
}
```

## 4. Switch the Mode

Set `data-theme-mode="dark"` on the `<html>` element. The [Build a Theme Switcher](/docs/guides/build-a-theme-switcher/) guide shows a complete, flash-free switcher with system detection.

## Upgrading From v2

The v2 approach (`generate-color-variables($dark-colors, ':root[data-theme-mode="dark"]')` plus the regenerated select icon) still works. Replace it with the generator to get the complete default palette and all the form icons.
