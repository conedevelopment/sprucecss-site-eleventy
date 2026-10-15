---
title: "Installation"
description: "Install Spruce easily with npm or use it as a standalone dependency; it's all on you."
order: 2
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/getting-started/installation.md"
---

<p class="lead">Spruce CSS is built on Sass; to get its full potential, you should use it with Sass. You can load the compiled CSS too, but you will lose the configuration and the helpers.</p>

## Install with NPM

```terminal
npm install sprucecss --save
```

## Install with Yarn

```terminal
yarn add sprucecss
```

## Use the Compiled CSS

The package contains two compiled bundles in the `css` folder, each in a regular and a minified version:

| File | What’s inside |
|---|---|
| `spruce.css`, `spruce.min.css` | The default styles in custom property mode. |
| `spruce.complete.css`, `spruce.complete.min.css` | Everything: the dark mode, every [style preset](/docs/customization/styles/), the layout and text utilities. |

Load them from a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sprucecss@3/css/spruce.min.css">
<!-- or, with dark mode and the styles: -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sprucecss@3/css/spruce.complete.min.css">
```

Or [download the latest release](https://github.com/conedevelopment/sprucecss/releases/latest) and use the files from the `css` folder.

## Using Spruce CSS with Sass

The manageability of Spruce CSS comes from its Sass features, variables, mixins, and functions. You should use the preprocessor for the proper workflow (e.g., overwriting the default [variables](/docs/sass/variables)).

With the help of the [mixins](/docs/sass/mixins) and [functions](/docs/sass/functions), you can write code easier.

### Import It With @use

To import it into your project, use Sass’s `@use` rule, the module-based successor of `@import`. Unlike `@import`, you must `@use` Spruce in every file where you want to access its variables, functions or mixins.

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

### Resolve the Package

Tell Sass where to find the package. The simplest is the load path:

```terminal
sass --load-path=node_modules src/scss:dist/css
```

With Sass’s Node package importer (`--pkg-importer=node`), you can use the `pkg:` URL, which reads the `sass` entry point of the package:

```scss
@use 'pkg:sprucecss' as *;
```

{% notification %}Based on your build tool, you may need the tilde <code>~</code> character at the start of the path (an old Webpack shorthand for <code>node_modules</code>). Vite and most modern setups don’t need it.{% endnotification %}

### Configure Once

Sass lets you configure a module only once, at its first `@use`. Keep the configuration in one file and load it first:

```scss
// config/_config.scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
);
```

```scss
// main.scss
@use 'config/config';
@use 'sprucecss/scss/spruce' as *;

@include generate-styles;
```

### Load Styles

Importing Spruce means you load its variables, functions, and mixins. To use its styles, you must include them explicitly with a mixin.

To load the styles, you need to include a generator mixin. A generator (a naming convention in Spruce CSS only) mixin is a wrapper mixin whose goal is to generate a specified style, usually once in your project. These are complete declarations with selectors, so you can’t use them inside code blocks.

You can control the flow of the style generation in a lot of ways (for more information, [please visit our Generators page](/docs/elements/generators)), but there is one main mixin to use:

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-styles;
```

## Compiling Sass

Depending on your development setup, using Sass could be a burden. We think that Sass is a handy tool and easy to use. Compiling is one of the more significant barriers; for this reason, we wrote a guide about [a simple Sass compile setup](/docs/guides/compile-sass/).

## Starter Templates

- [Spruce CSS Eleventy Starter](https://github.com/conedevelopment/sprucecss-eleventy-starter): a boilerplate with the compile setup ready.
- [AI skills](/docs/ai/skills/): let your coding assistant set up and write Spruce CSS for you.
