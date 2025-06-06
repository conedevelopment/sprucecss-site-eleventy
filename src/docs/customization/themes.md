---
title: "Themes"
description: "Create dark - or any additional - theme easily with Spruce CSS and custom CSS properties."
order: 13
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/customization/themes.md"
---

<p class="lead">Spruce uses CSS custom properties to handle the theming. It means that you can easily overwrite the colors if needed (like in a case of a dark theme mode).</p>

## Detect Dark Mode

Achieving a dark or any color mode can be different project by project. Spruce CSS gives you the structure to handle themes, but it’s on you to manage end detect them.

Our method usually adds a `data-theme-mode` attribute on the HTML element and does the styling based on its value. We detect the `prefers-color-scheme` and/or the user settings, then add the dark value if needed.

```html
<html lang="en" data-theme-mode="dark">
```

## Set Up the Dark Colors

Setting up any theme mode is simple but can be tricky and complicated because of the many values (from the `$colors` map). For redeclaring dark mode, we have a predefined empty `$dark-colors` map which you can use when importing Spruce (but you can use any object you like).

First, declare the new colors, and keep in mind you have to use the same key names because we will overwrite them.

The following values are the ones that we use for this site’s dark mode.

```scss
@use 'sass:color';

$color-black: hsl(206deg 100% 7%);
$color-danger: hsl(0deg 71% 51%);
$color-gray: hsl(0deg 0% 97%);
$color-gray-dark: hsl(0deg 0% 100% / 8%);
$color-primary: hsl(261deg 54% 70%);
$color-secondary: hsl(227deg 92% 55%);
$color-success: hsl(150deg 100% 33%);
$color-white: hsl(0deg 0% 95%);

$colors: (
  'base': (
    'background': $color-black,
    'blockquote-border': $color-primary,
    'border': $color-gray-dark,
    'code-background': hsl(207deg 64% 18%),
    'code-foreground': $color-white,
    'heading': $color-white,
    'link': $color-primary,
    'link-hover': color.scale($color-primary, $lightness: 20%),
    'mark-background': hsl(50deg 100% 80%),
    'mark-foreground': $color-black,
    'marker': $color-primary,
    'primary': $color-primary,
    'secondary': $color-secondary,
    'text': $color-gray,
  ),
  'btn': (
    'primary-background': hsl(261deg 52% 59%),
    'primary-background-hover': hsl(261deg 52% 65%),
    'primary-foreground': $color-white,
    'primary-shadow': color.adjust($color-primary, $lightness: -25%),
    'secondary-background': $color-secondary,
    'secondary-background-hover': color.adjust($color-secondary, $lightness: 5%),
    'secondary-foreground': $color-white,
    'secondary-shadow': color.adjust($color-secondary, $lightness: -20%),
  ),
  'form': (
    'background': color.scale($color-black, $lightness: 5%),
    'background-disabled': $color-black,
    'border': $color-gray-dark,
    'border-disabled': $color-gray-dark,
    'border-focus': $color-primary,
    'check-background': $color-primary,
    'check-focus-ring': $color-primary,
    'check-foreground': $color-black,
    'group-label-background': color.scale($color-black, $lightness: 2.5%),
    'group-label-foreground': $color-gray,
    'invalid': $color-danger,
    'invalid-focus-ring': color.adjust($color-danger, $alpha: -0.75),
    'label': $color-white,
    'legend': $color-white,
    'placeholder': hsl(0deg 0% 60%),
    'range-thumb-background': $color-primary,
    'range-thumb-focus-ring': $color-primary,
    'range-track-background': hsl(206deg 100% 20%),
    'ring-focus': color.adjust($color-primary, $alpha: -0.75),
    'select-foreground': hsl(0deg 0% 100%),
    'text': $color-gray,
    'valid': $color-success,
    'valid-focus-ring': color.adjust($color-success, $alpha: -0.75),
  ),
  'selection': (
    'background': $color-primary,
    'foreground': $color-white,
  ),
  'scrollbar': (
    'thumb-background': hsl(0deg 0% 100% / 15%),
    'thumb-background-hover': hsl(0deg 0% 100% / 25%),
    'track-background': hsl(0deg 0% 100% / 5%),
  ),
  'table': (
    'border': $color-gray-dark,
    'caption': $color-gray,
    'heading': $color-white,
    'hover': hsl(0deg 0% 100% / 5%),
    'text': $color-gray,
    'stripe': hsl(0deg 0% 100% / 2.5%),
  ),
);
```

## Generate the Variables

Use the `generate-color-variables` to generate the color variables under a specified selector.

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-color-variables(
  $dark-colors,
  ':root[data-theme-mode="dark"]'
);
```

## Set Up Other Necessities

Usually, setting up a theme is not just mean overwriting the color variables. We want to do more.

For example, we want to set the `color-scheme` to `dark` to discolor the scrollbars. Also, in the case of Spruce CSS, we may wish to change the select image too.

```scss
[data-theme-mode="dark"] {
  color-scheme: dark;

  select.form-control:not([multiple]):not([size]) {
    @include field-icon(
      config('select', $form-icon, false),
      color('select-foreground', 'form', true, $dark-colors)
    );
  }
}
```
