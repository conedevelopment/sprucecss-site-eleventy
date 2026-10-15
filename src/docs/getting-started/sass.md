---
title: "Sass"
description: "Utilizing Sass helps you achieve more with less code and faster with built-in mixins and functions."
order: 4
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/getting-started/sass.md"
---

<p class="lead">Spruce uses Sass (Syntactically Awesome Style Sheets) to generate CSS code. Sass is a popular and mature CSS extension language that lets us write stylesheets more programmatically.</p>

## Is Sass Needed to Use Spruce?

For the full experience, yes. Spruce uses only a few utility classes. It uses [mixins](/docs/sass/mixins), [functions](/docs/sass/functions), and [variables](/docs/sass/variables) (both Sass and CSS custom properties) to give a better development experience. To get the most out of it, you should use Sass.

You can also [use it as plain CSS](/docs/getting-started/installation/#use-the-compiled-css). The complete bundle even includes the dark mode and every style, and you can adjust a lot through the CSS custom properties and [style hooks](/docs/customization/styles/#style-hooks).

## Why Use Sass?

Well, for this question, there are a lot of reasonable answers. In this case, we like the idea of generating only as much code as we need. With this, [Sass](https://sass-lang.com/) is a great help:

- Using mixins and functions, we can create valuable helpers to access various functions or generated variables.
- It is a framework (of some sort); it must be expandable and adjustable. With Sass `@use`, we can easily configure the default variables and settings.
- Sass is more than just nesting (an excellent feature too). We can programmatically write and generate our CSS code.
- It is evolving with new features. Also, today [setting up the compiling](/docs/guides/compile-sass/) is a simple task through an npm script.

## Dart Sass, @use and @forward

Spruce CSS framework uses the newest Dart Sass. Sass is a tool with great support and development, so following the latest recommendations is always a good idea.

For example, the `@import` rule is deprecated, and [@use](https://sass-lang.com/documentation/at-rules/use) and [@forward](https://sass-lang.com/documentation/at-rules/forward) take its place. Spruce CSS v3 compiles without deprecation warnings with the latest Dart Sass.

For more information about this change, please visit the [official documentation](https://sass-lang.com/).
