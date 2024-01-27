---
title: "How to Setup a Dark Theme in Spruce CSS"
date: "2022-11-13"
featuredImage: "./src/img/blog/how-to-02.png"
alt: ""
tags: ["how-to"]
---

<p class="lead">Creating a dark theme mode is a common trend today, which is understandable because it is a preferred style for many of us.</p>

Using Spruce CSS, you can make any theme, which means you overwrite the default, generated CSS color custom properties.

Spruce has an empty `$dark-colors` map for the dark colors that we can use to attach the new values.

<Notification type="info">We need the <a href="/blog/how-to-configure-spruce-css-in-your-project">config structure</a> from our first how-to post.</Notification>

```scss
.
└── scss/
    ├── config/
    │   ├── _index.scss
    │   ├── _config.scss
    │   ├── _dark-colors.scss
    │   ├── _dark-mode.scss
    │   └── _styles.scss
    └── main.scss
```

## Define the Colors in _dark-colors.scss

Declaring the colors can be extensive, so it is best to separate it into its file. In the file, you need the [colors](/docs/customization/themes#set-up-the-dark-colors) in the same format as under the `$colors` map.

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
    'link-hover': color.scale($color-primary, $lightness: -20%),
    'mark-background': hsl(50deg 100% 80%),
    'mark-foreground': $color-black,
    'marker': $color-primary,
    'primary': $color-primary,
    'secondary': $color-secondary,
    'text': $color-gray,
  ),
  ...
);
```

Under the **_config.scss** file load these colors:

```scss
@use 'dark-colors' as dark;

@use 'sprucecss/scss/spruce' with (
  $dark-colors: dark.$colors
);
```

## Generate the Colors in _dark-mode.scss

If you create a dark mode, you must identify the theme mode somehow. A typical pattern is to set a data attribute at your root element like this:

```html
<html lang="en" data-theme-mode="dark">
```

After this, we can target our `<html>` element (with :root) with the `data-theme-mode="dark"` attribute selector. Hence overwrite the default colors if the attribute with the correct value is present.

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-color-variables(
  $dark-colors,
  ':root[data-theme-mode="dark"]'
);
```

## Additional Settings

Styling an extra theme mode can be tricky; in some cases overwriting just the colors isn’t enough. Sometimes you have to use the previous selector to target any element you want to restyle.

Here it is also a good idea to set the `color-scheme` to dark:

```scss
[data-theme-mode='dark'] {
  color-scheme: dark;
}
```

This will control your browser’s UI color, like the dark sidebar.

In Spruce, the icon of the select element is an inline SVG, so we can’t use CSS variables. Just typical color values to color it. Because of this, we must regenerate it under our theme modes (if needed).

```scss
@use 'sprucecss/scss/spruce' as *;

[data-theme-mode='dark'] {
  select.form-control:not([multiple]):not([size]) {
    @include field-icon(
      config('select', $form-icon, false),
      color('select-foreground', 'form', true, $dark-colors)
    );
  }
}
```
