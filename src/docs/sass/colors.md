---
title: "Colors"
description: "Through colors, you can genuinely make Spruce CSS your own. Control everything with the $colors map."
order: 14
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/sass/variables.mdx"
---

<p class="lead">Spruce CSS comes with a bunch of Sass variables and generates CSS custom properties.</p>

## List of Colors

You can access the following colors through Spruce’s `$colors` map by default. You can also use the [color() helper function](/docs/sass/functions#color) to access the colors.

<div class="l-color">
  <h3 class="l-color__title">Shared</h3>
  <div class="l-color__inner">
    {% color "hsl(205deg 100% 2%)", "black", "$color-black" %}
    {% color "hsl(0deg 71% 51%)", "danger", "$color-danger" %}
    {% color "hsl(0deg 71% 51%)", "danger", "$color-danger" %}
    {% color "hsl(208deg 9% 42%)", "gray", "$color-gray" %}
    {% color "hsl(215deg 63% 93%)", "gray light", "$color-gray-light" %}
    {% color "hsl(262deg 71% 49%)", "primary", "$color-primary" %}
    {% color "hsl(227deg 92% 55%)", "secondary", "$color-secondary" %}
    {% color "hsl(150deg 100% 33%)", "success", "$color-success" %}
    {% color "hsl(0deg 0% 100%)", "white", "$color-white", true %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Alert</h3>
  <div class="l-color__inner">
    {% color "hsl(0deg 71% 51%)", "danger", "$color-danger" %}
    {% color "hsl(195deg 100% 42%)", "info", "hsl(195deg 100% 42%)" %}
    {% color "hsl(150deg 100% 33%)", "success", "$color-success" %}
    {% color "hsl(48deg 89% 55%)", "warning", "hsl(48deg 89% 55%)" %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Base</h3>
  <div class="l-color__inner">
    {% color "hsl(0deg 0% 100%)", "background", "$color-white", true %}
    {% color "hsl(262deg 71% 49%)", "blockquote-border", "$color-primary" %}
    {% color "hsl(215deg 63% 93%)", "border", "$color-gray-light" %}
    {% color "hsl(261.82deg 73.33% 97.06%)", "code-background", "color.change($color-primary, $lightness: 97%)" %}
    {% color "hsl(205deg 100% 2%)", "code-foreground", "$color-black" %}
    {% color "hsl(205deg 100% 2%)", "heading", "$color-black" %}
    {% color "hsl(262deg 71% 49%)", "link", "$color-primary" %}
    {% color "hsl(261.97deg 71% 39.22%)", "link-hover", "color.scale($color-primary, $lightness: -20%)" %}
    {% color "hsl(50deg 100% 80%)", "mark-background", "hsl(50deg 100% 80%)" %}
    {% color "hsl(205deg 100% 2%)", "mark-foreground", "$color-black" %}
    {% color "hsl(262deg 71% 49%)", "marker", "$color-primary" %}
    {% color "hsl(262deg 71% 49%)", "primary", "$color-primary" %}
    {% color "hsl(227deg 92% 55%)", "secondary", "$color-secondary" %}
    {% color "hsl(205deg 100% 2%)", "strong", "$color-black" %}
    {% color "hsl(208deg 9% 42%)", "text", "$color-gray" %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Btn (Button)</h3>
  <div class="l-color__inner">
    {% color "hsl(262deg 71% 49%)", "primary-background", "$color-primary" %}
    {% color "hsl(262.13deg 70.85% 39.02%)", "primary-background-hover", "color.adjust($color-primary, $lightness: -10%)" %}
    {% color "hsl(0deg 0% 100%)", "primary-foreground", "$color-white", true %}
    {% color "hsl(261.72deg 70.73% 83.92%)", "primary-shadow", "color.adjust($color-primary, $lightness: 35%)" %}
    {% color "hsl(227deg 92% 55%)", "secondary-background", "$color-secondary" %}
    {% color "hsl(226.92deg 92.14% 44.9%)", "secondary-background-hover", "color.adjust($color-secondary, $lightness: -10%)" %}
    {% color "hsl(0deg 0% 100%)", "secondary-foreground", "$color-white", true %}
    {% color "hsl(227.23deg 92.16% 90%)", "secondary-shadow", "color.adjust($color-secondary, $lightness: 35%)" %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Form</h3>
  <div class="l-color__inner">
    {% color "hsl(0deg 0% 100%)", "background", "$color-white", true %}
    {% color "hsl(0deg 0% 95%)", "background-disabled", "hsl(0deg 0% 95%)" %}
    {% color "hsl(260deg 4% 70%)", "border", "hsl(260deg 4% 70%)" %}
    {% color "hsl(215deg 63% 93%)", "border-disabled", "$color-gray-light" %}
    {% color "hsl(262deg 71% 49%)", "border-focus", "$color-primary" %}
    {% color "hsl(262deg 71% 49%)", "check-background", "$color-primary" %}
    {% color "hsl(262deg 71% 49%)", "check-focus-ring", "$color-primary" %}
    {% color "hsl(0deg 0% 100%)", "check-foreground", "$color-white", true %}
    {% color "hsl(210deg 60% 98%)", "group-label-background", "hsl(210deg 60% 98%)", true %}
    {% color "hsl(208deg 9% 42%)", "group-label-foreground", "$color-gray" %}
    {% color "hsl(0deg 71% 51%)", "invalid", "$color-danger" %}
    {% color "hsl(0deg 71.2% 50.98% / 25%)", "invalid-focus-ring", "color.adjust($color-danger, $alpha: -0.75)" %}
    {% color "hsl(205deg 100% 2%)", "label", "$color-black" %}
    {% color "hsl(205deg 100% 2%)", "legend", "$color-black" %}
    {% color "hsl(208deg 7% 40%)", "placeholder", "hsl(208deg 7% 40%)" %}
    {% color "hsl(262deg 71% 49%)", "range-thumb-background", "$color-primary" %}
    {% color "hsl(262deg 71% 49%)", "range-thumb-focus-ring", "$color-primary" %}
    {% color "hsl(215deg 63% 93%)", "range-track-background", "$color-gray-light" %}
    {% color "hsl(261.91deg 71.2% 49.02% / 25%)", "ring-focus", "color.adjust($color-primary, $alpha: -0.75)" %}
    {% color "hsl(205deg 100% 2%)", "select-foreground", "$color-black" %}
    {% color "hsl(262deg 71% 49%)", "switch-background", "$color-primary" %}
    {% color "hsl(262deg 71% 49%)", "switch-focus-ring", "$color-primary" %}
    {% color "hsl(0deg 0% 100%)", "switch-foreground", "$color-white", true %}
    {% color "hsl(208deg 9% 42%)", "text", "$color-gray" %}
    {% color "hsl(150deg 100% 33%)", "valid", "$color-success" %}
    {% color "hsl(150deg 100% 32.94% / 25%)", "valid-focus-ring", "color.adjust($color-success, $alpha: -0.75)" %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Selection</h3>
  <div class="l-color__inner">
    {% color "hsl(0deg 0% 100%)", "foreground", "$color-white", true %}
    {% color "hsl(262deg 71% 49%)", "background", "$color-primary" %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Scrollbar</h3>
  <div class="l-color__inner">
    {% color "hsl(0deg 0% 0% / 15%)", "thumb-background", "hsl(0deg 0% 0% / 15%)" %}
    {% color "hsl(0deg 0% 0% / 25%)", "thumb-background-hover", "hsl(0deg 0% 0% / 25%)" %}
    {% color "hsl(0deg 0% 0% / 5%)", "track-background", "hsl(0deg 0% 0% / 5%)" %}
  </div>
</div>

<div class="l-color">
  <h3 class="l-color__title">Table</h3>
  <div class="l-color__inner">
    {% color "hsl(215deg 63% 93%)", "border", "$color-gray-light" %}
    {% color "hsl(208deg 9% 42%)", "caption", "$color-gray" %}
    {% color "hsl(205deg 100% 2%)", "heading", "$color-black" %}
    {% color "hsl(0deg 0% 0% / 5%)", "hover", "hsl(0deg 0% 0% / 5%)" %}
    {% color "hsl(0deg 0% 0% / 2.5%)", "stripe", "hsl(0deg 0% 0% / 2.5%)", true %}
    {% color "hsl(208deg 9% 42%)", "text", "$color-gray" %}
  </div>
</div>

## Shared Colors

We store the color values in a central map named `$colors`. It is a nested object separated by components.

To eliminate the repetition, we use some helper variables for the more generic colors (which we use more than once). You can overwrite these directly to make the theming easier or from the object one by one.

```scss
@use 'sprucecss/scss/spruce' with (
  $color-black: hsl(205deg 100% 2%),
  $color-danger: hsl(0deg 71% 51%),
  $color-gray: hsl(208deg 9% 42%),
  $color-gray-light: hsl(215deg 63% 93%),
  $color-primary: hsl(262deg 71% 49%),
  $color-secondary: hsl(227deg 92% 55%),
  $color-success: hsl(150deg 100% 33%),
  $color-white: hsl(0deg 0% 100%),
);
```

## Customize Colors

Below is the full declaration of the `$colors` map.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'alert': (
      'danger': $color-danger,
      'info': hsl(195deg 100% 42%),
      'success': $color-success,
      'warning': hsl(48deg 89% 55%),
    ),
    'base': (
      'background': $color-white,
      'blockquote-border': $color-primary,
      'border': $color-gray-light,
      'code-background': color.change($color-primary, $lightness: 97%),
      'code-foreground': $color-black,
      'heading': $color-black,
      'link': $color-primary,
      'link-hover': color.scale($color-primary, $lightness: -20%),
      'mark-background': hsl(50deg 100% 80%),
      'mark-foreground': $color-black,
      'marker': $color-primary,
      'primary': $color-primary,
      'secondary': $color-secondary,
      'strong': $color-black,
      'text': $color-gray,
    ),
    'btn': (
      'primary-background': $color-primary,
      'primary-background-hover': color.adjust($color-primary, $lightness: -10%),
      'primary-foreground': $color-white,
      'primary-shadow': color.adjust($color-primary, $lightness: 35%),
      'secondary-background': $color-secondary,
      'secondary-background-hover': color.adjust($color-secondary, $lightness: -10%),
      'secondary-foreground': $color-white,
      'secondary-shadow': color.adjust($color-secondary, $lightness: 35%),
    ),
    'form': (
      'background': $color-white,
      'background-disabled': hsl(0deg 0% 95%),
      'border': hsl(260deg 4% 70%),
      'border-disabled': $color-gray-light,
      'border-focus': $color-primary,
      'check-background': $color-primary,
      'check-focus-ring': $color-primary,
      'check-foreground': $color-white,
      'group-label-background': hsl(210deg 60% 98%),
      'group-label-foreground': $color-gray,
      'invalid': $color-danger,
      'invalid-focus-ring': color.adjust($color-danger, $alpha: -0.75),
      'label': $color-black,
      'legend': $color-black,
      'placeholder': hsl(208deg 7% 40%),
      'range-thumb-background': $color-primary,
      'range-thumb-focus-ring': $color-primary,
      'range-track-background': $color-gray-light,
      'ring-focus': color.adjust($color-primary, $alpha: -0.75),
      'select-foreground': $color-black,
      'switch-background': $color-primary,
      'switch-focus-ring': $color-primary,
      'switch-foreground': $color-white,
      'text': $color-gray,
      'valid': $color-success,
      'valid-focus-ring': color.adjust($color-success, $alpha: -0.75),
    ),
    'selection': (
      'foreground': $color-white,
      'background': $color-primary,
    ),
    'scrollbar': (
      'thumb-background': hsl(0deg 0% 0% / 15%),
      'thumb-background-hover': hsl(0deg 0% 0% / 25%),
      'track-background': hsl(0deg 0% 0% / 5%),
    ),
    'table': (
      'border': $color-gray-light,
      'caption': $color-gray,
      'heading': $color-black,
      'hover': hsl(0deg 0% 0% / 5%),
      'stripe': hsl(0deg 0% 0% / 2.5%),
      'text': $color-gray,
    ),
  );
);
```

{% notification %}We declare the colors with the modern HSL syntax. The generated values are given and converted by Sass by default.{% endnotification %}

## Get Color Values

Spruce generates prefixed CSS variables at `:root` by group from the nested map above.

You can always access a generated variable by name, but it is easier to use the custom getter function named <a href="/docs/sass/functions/#color"><code>color()</code></a>.

```scss
a {
  color: color('primary');
}

.control {
  background-color: color('primary-background', 'btn');
}
```

## Overwrite, Add New Color

Because the colors are in a Sass map, it is easy to overwrite them or add new values, blocks.


```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'base': (
      'primary': hsl(0 0% 15%),
      'tertiary': hsl(332deg 49% 29%),
    ),
    'my-custom-component': (
      'background': hsl(0deg 0% 100%),
    ),
  ),
);
```

## Dark Colors

Spruce CSS supports dark-mode, which we mainly achieve through CSS Custom Properties. You can use the `$dark-colors` map to set up your dark colors.

```scss
$dark-colors: ();
```

## List Colors

In this example, you can see how you can generate a component - an alert - using Spruce’s colors with Sass’s `@each` and `map.get`.

```scss
@use 'sass:color';
@use 'sass:map';
@use 'sprucecss/scss/spruce' as *;

.alert {
  border: 1px solid;
  border-left: 0.35rem solid;
  border-radius: config('border-radius-lg', $display);
  font-weight: 500;
  gap: spacer('m');
  justify-content: space-between;
  padding: 0.65em 1em;

  @each $name, $value in map.get($colors, 'alert') {
    @at-root .alert--#{$name} {
      background-color: color.scale($value, $lightness: 90%);
      color: color.scale($value, $lightness: -30%);
    }
  }
}
```
