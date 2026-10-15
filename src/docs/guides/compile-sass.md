---
title: "Compile Sass"
description: "The simplest way to compile Sass for a Spruce CSS project: npm scripts and the Sass command-line interface."
order: 30
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/guides/compile-sass.md"
---

<p class="lead">Sass makes CSS more dynamic, but the compile setup can feel like a burden. You don't need a bundler for it: npm scripts and the official Sass command-line interface are enough.</p>

## 1. Install Node.js

npm comes with Node.js. [Download the installer](https://nodejs.org/en/download/) for your system, or use a package manager like [Homebrew](https://brew.sh/), [Chocolatey](https://chocolatey.org/) or [fnm](https://github.com/Schniz/fnm). Spruce CSS's tooling uses the current LTS version.

## 2. Initialize the Project

Open your terminal in the project folder and create a `package.json` file:

```terminal
npm init -y
```

## 3. Install Sass and Spruce CSS

```terminal
npm install sass --save-dev
npm install sprucecss
```

Use [Dart Sass](https://sass-lang.com/dart-sass/) (the `sass` package). LibSass and Node Sass are deprecated and don't support the module system Spruce is built on.

## 4. Add the Compile Scripts

Add two scripts to the `scripts` object of your `package.json`:

```json
{
  "scripts": {
    "sass:dev": "sass --watch --update --style=expanded --load-path=node_modules assets/scss:assets/css",
    "sass:prod": "sass --no-source-map --style=compressed --load-path=node_modules assets/scss:assets/css"
  }
}
```

- **`sass:dev`** is for development: readable output, source maps, and a watcher that recompiles on every change.
- **`sass:prod`** is for production: compressed output, no source map, runs once.
- **`--load-path=node_modules`** lets you write `@use 'sprucecss/scss/spruce'` without a relative path. With Sass 1.71+ you can also use `--pkg-importer=node` and `@use 'pkg:sprucecss'`.

{% notification %}**What is a source map?** A file that lets the browser map the compiled CSS back to your source files, so the developer tools show the original file names and lines.{% endnotification %}

## 5. Structure the Files

```text
my-project/
├── assets/
│   ├── css/
│   │   └── main.css        // compiled
│   └── scss/
│       ├── config/
│       │   └── _config.scss
│       ├── component/
│       │   └── _card.scss
│       └── main.scss       // entry point
├── node_modules/
└── package.json
```

Sass compiles every file that doesn't start with an underscore (`_`); the partials are only included through `@use` and `@forward`. The next guide, [Configure Your Project](/docs/guides/configure-your-project/), shows what goes into these files.

## 6. Run the Scripts

```terminal
npm run sass:dev
```

```terminal
npm run sass:prod
```

## Going Further

- Lint your SCSS with [Stylelint](https://stylelint.io/) and the [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) preset, like Spruce does.
- Add [Autoprefixer](https://github.com/postcss/autoprefixer) with `postcss-cli` if you support older browsers.
- Use [npm-run-all2](https://github.com/bcomnes/npm-run-all2) to run the Sass watcher next to your dev server.
- Prefer a starter? The [Spruce CSS Eleventy Starter](https://github.com/conedevelopment/sprucecss-eleventy-starter) has all of this set up.
