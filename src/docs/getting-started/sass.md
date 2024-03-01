---
title: "Sass"
description: "Utilizing Sass helps you achieve more with less code and faster with built-in mixins and functions."
order: 4
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/getting-started/sass.mdx"
---

<p class="lead">Spruce uses Sass (Syntactically Awesome Style Sheets) to generate CSS code. Sass is a popular and mature CSS extension language that lets us write stylesheets more programmatically.</p>

## Is Sass Needed to Use Spruce?

Yes, it is. Spruce uses a few utility classes. It uses [mixins](/docs/sass/mixins), [functions](/docs/sass/functions), and [variables](/docs/sass/variables) (both Sass and CSS custom properties) to give a better development experience. To get the most out of it, you should use Sass.

You can also [use it as plain CSS](/docs/getting-started/installation#install-manually), but it is a simpler version, and we only recommend it for prototyping.

## Why Use Sass?

Well, for this question, there are a lot of reasonable answers. In this case, we like the idea of generating only as much code as we need. With this, [Sass](https://sass-lang.com/) is a great help:
- using mixins and functions, we can create valuable helpers to access various functions or generated variables.
- It is a framework (of some sort); it must be expandable and adjustable. With Sass `@use`, we can easily configure the default variables and settings.
- Sass is more than just nesting (an excellent feature too). We can programmatically write and generate our CSS code.
- It is evolving with new features. Also, today [setup the compiling](https://sprucecss.com/blog/the-simplest-sass-compile-setup) is a simple task through npm script.

## Dart Sass, @use and @forward

Spruce CSS framework uses the newest Dart Sass. Sass is a tool with great support and development, so following the latest recommendations is always a good idea.

For example, the @import statement is now deprecated, and the [@use](https://sass-lang.com/documentation/at-rules/use), [@forward](https://sass-lang.com/documentation/at-rules/forward), takes its place.

For more information about this change, please visit the [official documentation](https://sass-lang.com/).
