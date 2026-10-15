---
title: "Variables"
description: "Spruce CSS is a highly customizable framework through variables. In this post, you will learn how to customize and get them."
order: 12
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/customization/variables.md"
---

<p class="lead">Spruce CSS is highly customizable through variables. On this page, you will learn how to get and customize them.</p>

## Get Any Variable

To get a variable, use one of the getters, or the variable name with the `spruce` namespace (or without one if you imported the code with `as *`).

To see the complete list of the getter functions, please visit the [functions page](/docs/sass/functions).

```scss
@use 'sprucecss/scss/spruce' as *;

.component {
  border-radius: config('border-radius-lg', $display); // or radius('lg')
  box-shadow: shadow('md');
  color: color('secondary');
  font-size: font-size('h2');
  padding-block: spacer('m');
  z-index: z-index('dropdown');
}
```

## Override Variables

There are two types of variables: single values and maps. All of them can be overwritten or extended with the `with` option of `@use`. The maps are merged, so you only set the keys you change.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'base': (
      'primary-darkest': hsl(272deg 100% 9%),
      'heading': hsl(271deg 100% 9%),
    ),
    'btn': (
      'new-background': hsl(0deg 0% 95%),
      'new-foreground': hsl(0deg 0% 10%),
    ),
  ),
  $btn-lg: (
    'border-radius': 0.25em,
    'text-transform': uppercase,
  ),
  $layout: (
    'container-inline-size': 70rem,
  ),
);
```
{% notification %}You must do the overwrite (of any of the variables or maps) at the first use of <code>@use</code> in your code — <a href="https://sass-lang.com/documentation/at-rules/use">more information about the newer imports in Sass</a>.{% endnotification %}

## Change Values at Runtime

In [custom property mode](/docs/customization/settings/#css-custom-properties), the values are CSS custom properties, so you can change them without recompiling: globally, for a section, or for a single component through the [style hooks](/docs/customization/styles/#style-hooks).

```css
/* Every button in the hero gets a bigger padding and a pill shape. */
.hero {
  --spruce-btn-padding: 1em 1.75em;
  --spruce-btn-border-radius: 62.5rem;
}
```

Want to change many values at once and keep them together? Create a [style preset](/docs/customization/styles/#create-your-own-style).
