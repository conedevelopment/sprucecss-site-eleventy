---
title: "Installation"
description: "Install Spruce easily with npm or use it as a standalone dependency; it's all on you."
order: 2
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/getting-started/installation.mdx"
---

<p class="lead">Spruce CSS is built on Sass; to get its full potential, you should use with it. If you want, you can load the compiled CSS too, but you will lose many features.</p>

## Install with NPM

```terminal
npm install sprucecss --save
```

## Install with Yarn

```terminal
yarn add sprucecss
```

## Install Manually

[Download the latest release](https://github.com/conedevelopment/sprucecss/archive/refs/heads/main.zip), find the dist folder at the root (the compiled files), and use the preferred CSS file (minified, regular).

```html
<link href="spruce.min.css" rel="stylesheet">
<link href="spruce.css" rel="stylesheet">
```

## Using Spruce CSS with Sass

The manageability of Spruce CSS comes from its Sass features, variables, mixins, and functions. You should use the preprocessor for the proper workflow (e.g., overwriting the default [variables](/docs/sass/variables)).

With the help of the [mixins](/docs/sass/mixins) and [functions](/docs/sass/functions), you can write code easier.

### Import It With @use

To import it into your project, you must use Sass’s `@use`, a newer type of `@import` similar to the JavaScript modules. Unlike using `@import`, you must import (use it) it in every file where you want to use Spruce, its variables, functions, or mixins.

``` scss
@use 'sprucecss/scss/spruce' as *;
```

### Namespacing

The `@use` rule loads the mixins, functions, and variables without a namespace, so you can simply refer to anything by its name:

```scss
.section {
  @include layout-stack('m');
}
```

We include the <a href="/docs/sass/mixins/#layout-stack" class="code-link">`layout-stack`</a> mixin that will make a simple stacked layout.

If you prefer the namespaces, leave the `as *` part out and use the following:

```scss
@use 'sprucecss/scss/spruce';

.section {
  @include spruce.layout-stack('m');
}
```

{% notification %}Based on your compile configuration you may need the tilde <code>~</code> character (at start of the @use statement). This is a shorthand to the <code>node_modules</code> folder in a Webpack configuration, so you don’t have to use a relative path.{% endnotification %}

### Load Styles

Importing Spruce means you load its variables, functions, and mixins. To use its styles, you must include them explicitly with a mixin.

To load the styles, you need to include a generator mixin. A generator (a naming convention in Spruce CSS only) mixin is a wrapper mixin whose goal is to generate a specified style, usually once in your project. These are complete declarations with selectors, so you can’t use them inside code blocks.

You can control the flow of the style generation in a lot of ways (for more information, [please visit our Generators page](/docs/elements/generators)), but there is one main mixin to use:

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-styles;
```

## Compiling Sass

Depending on your development setup, using Sass could be a burden. We think that Sass is a handy tool and easy to use. Compiling is one of the more significant barriers; for this reason, we wrote an article about [a simple Sass compile setup](https://pineco.de/the-simplest-sass-compile-setup/).

Also, we made a [Spruce CSS Eleventy Starter](https://github.com/conedevelopment/sprucecss-eleventy-starter), a boilerplate starter template based on the popular static site generator 11ty. It includes a basic compile setup and, of course, Spruce CSS. You can find more information about it on GitHub.
