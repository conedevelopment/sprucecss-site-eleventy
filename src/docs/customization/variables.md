---
title: "Variables"
description: "Spruce CSS is a highly customizable framework through variables. In this post, you will learn how to customize and get them."
order: 10
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/customization/variables.mdx"
---

<p class="lead">Spruce CSS is a highly customizable through variables. In this post, you will learn how to get and customize them.</p>

## Get Any Variable

To get a variable, you have to use one of the getters or the variable name with the spruce namespace (or without one if you imported the code that way).

To see the complete list of the getter functions, please visit the [functions page](/docs/sass/functions).

```scss
@use 'sprucecss/scss/spruce' as *;

.component {
  border-radius: config('border-radius-lg', $display);
  color: color('secondary');
  font-size: font-size('h2');
  padding-block: spacer('m');
}
```

## Override Variables

There are two types of variables: single one and map. All of them are overwritable, expandable with ```@use```'s ```with``` option.

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
