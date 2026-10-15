---
title: "Configure Your Project"
description: "A config folder structure that keeps the Spruce CSS settings, themes and the style generation in one place."
order: 31
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/guides/configure-your-project.md"
---

<p class="lead">A small, predictable folder structure keeps every Spruce CSS setting in one place and makes it easy to add a dark mode, a style or new components later.</p>

Sass allows configuring a module only once, at its first `@use`. This structure makes sure the configuration always loads first.

```text
scss/
├── config/
│   ├── _index.scss
│   ├── _config.scss
│   └── _styles.scss
├── component/
│   ├── _index.scss
│   └── _card.scss
└── main.scss
```

## config/_config.scss

Your settings, variables and colors. See the [settings](/docs/customization/settings/), [variables](/docs/sass/variables/) and [colors](/docs/sass/colors/) pages for every option.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'base': (
      'primary': hsl(221deg 83% 53%),
    ),
    'card': (
      'background': hsl(0deg 0% 100%),
    ),
  ),
  $generators: (
    'content': (
      'dark-mode': true,
    ),
  ),
  $settings: (
    'css-custom-properties': true,
  ),
);
```

## config/_styles.scss

The [generators](/docs/elements/generators/): usually only `generate-styles`.

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-styles;
```

## config/_index.scss

Forward the config files, in order:

```scss
@forward 'config';
@forward 'styles';
```

## component/_card.scss

Every other file just uses Spruce, without configuration:

```scss
@use 'sprucecss/scss/spruce' as *;

.card {
  background-color: color('background', 'card');
  border-radius: radius('lg');
  padding: spacer-clamp('m', 'l');
}
```

## main.scss

The entry point loads the config first, then your components:

```scss
@forward 'config';
@forward 'component';
```

## Why This Structure

- Every configuration lives in one folder.
- It is easy to extend: add `_dark-colors.scss` for a [dark theme](/docs/guides/set-up-a-dark-theme/) or `_fonts.scss` for the `@font-face` rules.
- Any other entry file (like an editor stylesheet) can load the same config with `@use 'config/config';`.
