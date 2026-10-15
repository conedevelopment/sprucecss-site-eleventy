---
title: "Themes and Dark Mode"
description: "Spruce CSS comes with a built-in, opt-in dark mode and makes any color theme easy through CSS custom properties."
order: 14
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/customization/themes.md"
---

<p class="lead">Spruce CSS outputs every color as a CSS custom property, so a theme is just a new set of values for them. Version 3 ships a complete, opt-in dark mode that you can switch on with one line.</p>

Themes (color modes) and [styles](/docs/customization/styles/) are independent: a theme changes the colors, a style changes the whole look. They work together; every style has a dark palette too.

## Turn On the Dark Mode

Enable the `dark-mode` generator. It needs no other configuration:

```scss
@use 'sprucecss/scss/spruce' with (
  $generators: (
    'content': (
      'dark-mode': true,
    ),
  ),
);
```

The generator outputs:

- the dark color custom properties under the dark mode selector (`:root[data-theme-mode="dark"]` by default);
- `color-scheme: dark`, so the scrollbars and native controls follow;
- the regenerated SVG icons of the select, checkbox, radio, switch and validation states, because data URI images can't use custom properties.

Then set the attribute on the `<html>` element:

```html
<html lang="en" data-theme-mode="dark">
```

## Customize the Dark Colors

The dark mode uses the built-in `$default-dark-colors` palette. Your `$dark-colors` map is deep-merged into it, so you only set what you want to change:

```scss
@use 'sprucecss/scss/spruce' with (
  $dark-colors: (
    'base': (
      'background': hsl(222deg 47% 8%),
      'primary': hsl(199deg 89% 60%),
    ),
    'btn': (
      'primary-background': hsl(199deg 89% 48%),
      'primary-background-hover': hsl(199deg 89% 55%),
    ),
  ),
  $generators: (
    'content': ('dark-mode': true),
  ),
);
```

You can also change the base colors of the default palette with the `$dark-color-background`, `$dark-color-border`, `$dark-color-heading`, `$dark-color-primary`, `$dark-color-secondary` and `$dark-color-text` variables. The full palette is in the [color config on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_color.scss).

## Follow the System Preference

With the `prefers-color-scheme` option, the dark mode applies automatically when the operating system is dark, unless the user explicitly picked the light mode (`data-theme-mode="light"`):

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'dark-mode': (
      'prefers-color-scheme': true,
    ),
  ),
  $generators: (
    'content': ('dark-mode': true),
  ),
);
```

| Setting | Default | Description |
|---|---|---|
| `selector` | `':root[data-theme-mode="dark"]'` | The selector of the dark mode. Use a class (like `'.dark'`) if your stack prefers it. |
| `light-selector` | `'[data-theme-mode="light"]'` | The explicit light mode, which opts out of `prefers-color-scheme`. |
| `prefers-color-scheme` | `false` | Also apply the dark mode with `@media (prefers-color-scheme: dark)`. |

## Detect and Switch the Mode

Spruce gives you the styles; detecting and storing the user's choice is up to your project. A minimal, flash-free setup runs in the `<head>`:

```html
<script>
  const preferred = localStorage.getItem('preferred-theme') ?? 'system';
  const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme-mode', preferred === 'system' ? system : preferred);
</script>
```

You can grab ready-made switchers from Spruce UI: the [theme switcher button](/ui/misc/theme-switcher-button/) and the [theme switcher select](/ui/misc/theme-switcher-select/).

## Dark Mode in Your Components

Most components need nothing: they use colors through the `color()` function, so the custom properties switch automatically. When you need something specific for dark mode, use the `dark-mode` mixin. It works at the root level and inside a rule:

```scss
@use 'sprucecss/scss/spruce' as *;

.hero {
  background-image: url('hero-light.webp');

  @include dark-mode {
    background-image: url('hero-dark.webp');
  }
}

@include dark-mode {
  .logo--light {
    display: none;
  }
}
```

It follows your `dark-mode` settings (selector and `prefers-color-scheme`), so you never repeat the selector.

## Any Other Theme

The same technique works for any theme (high contrast, seasonal, brand variants): generate a color map under your own selector with `generate-color-variables`, and regenerate the field icons if you change the form colors.

```scss
@use 'sprucecss/scss/spruce' as *;

$high-contrast: (
  'base': (
    'background': hsl(0deg 0% 100%),
    'border': hsl(0deg 0% 0%),
    'text': hsl(0deg 0% 0%),
  ),
  'form': (
    'border': hsl(0deg 0% 0%),
    'select-foreground': hsl(0deg 0% 0%),
  ),
);

@include generate-color-variables($high-contrast, '[data-theme-mode="high-contrast"]');
@include generate-field-icons($high-contrast, '[data-theme-mode="high-contrast"]');
```

{% notification %}Upgrading from v2? Your existing manual dark mode (<code>generate-color-variables($dark-colors, …)</code> plus the select icon fix) keeps working. You can replace it with the generator; your <code>$dark-colors</code> map works as it is.{% endnotification %}
