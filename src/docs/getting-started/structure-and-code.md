---
title: "Structure and Code"
description: "Explore the style guide and structure of Spruce CSS micro-framework. You can find some core principles and the main structure on this page."
order: 3
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/getting-started/structure-and-code.mdx"
---

<p class="lead">Spruce tries to be customizable and straightforward. You can find some core principles and the main structure on this page.</p>

## Coding Style Guide and Practices

- Where possible, we use elements and/or attributes to style elements, but it is still a class-based framework.
- We use Stylelint with a [modified configuration](https://github.com/conedevelopment/sprucecss/blob/main/.stylelintrc.json) with [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines) preset to quality control.
- We [alphabetize](https://jerrylowm.medium.com/alphabetize-your-css-properties-for-crying-out-loud-780eb1852153) the property declaration order. It is practical, no joke.
- We use mostly BEM when a more complicated structure is necessary.
- We try not to use px as units. Right now, it is only present at border values.
- We use modern Sass with `@use` and `@forward`.
- We mark the strings as strings, so we will wrap any value that is technically one of them with single quotations.
- We use trailing commas in the map declarations.

## BEM (Block Element Modifier)

We use [BEM](https://getbem.com/naming/), a simple naming convention that helps create manageable code for writing complex components. A simple example looks like this:

- Block: a component element, like `.btn`.
- Element: a child element of the component like `.btn__icon`.
- Modifier: a flag that modifies the component like `.btn--primary`.

## Class vs. Classless Frameworks

A classless framework doesn’t specify classes and special markup for your elements. You use regular HTML elements. The advantage is that you only need to load a CSS file and get many styling immediately.

We think this approach has more problems in the long run, so we use classes. Of course, we also style just elements where it is convenient (like text-related ones).

## The Source Code of Spruce

Spruce uses npm scripts to compile Sass and to do other tasks. The scripts are in the [package.json file](https://github.com/conedevelopment/sprucecss/blob/main/package.json).

**Our two main scripts are:**

- `npm start` is for development purposes. It will fire up the development preview (which is a sandbox for us), a pug-based, simple HTML page where you can see all the styled elements.
- `npm run prod` is for production. It will create the right compiled CSS files.

### The Structure of the Project

You can find the main code under the `scss` folder at the root. The `.vscode` folder contains a VS Code configuration file. The `preview` folder is a developer helper where we can see the effect of the modification right away.

```scss
sprucecss/
├─ .vscode/
├─ css/               // Compiled CSS folder
│  ├─ spruce.css
│  ├─ spruce.min.css
├─ js/
|  |- cookie.js
├─ preview/           // Spruce preview for development
│  ├─ ...
├─ scss/              // Source .scss files, Spruce CSS itself
│  ├─ config/         // Variables
│  ├─ element/
│  ├─ form/
│  ├─ function/
│  ├─ mixin/
│  ├─ plugin/
│  ├─ print/
│  ├─ spruce.scss
├─ test/
├─ .gitignore
├─ package.json
├─ README.md
├─ ...
```

If you plan to contribute first, please visit our [contribution](/docs/getting-started/contribution/). Thank you!

## Browser Support

Spruce uses [Autoprefixer](https://github.com/postcss/autoprefixer) with the [default configurations](https://github.com/browserslist/browserslist#best-practices).

The browser support is flexible, but one of the goals of this framework is to be modern. We plan to support new features early, but we understand the browser landscape is not so simple. Please [open an issue](https://github.com/conedevelopment/sprucecss/issues/new) if you have any questions or ideas regarding this topic.
