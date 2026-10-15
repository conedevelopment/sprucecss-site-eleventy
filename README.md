<p>
  <a href="https://sprucecss.com/">
    <br>
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="./.github/spruce-logo-dark.svg">
      <source media="(prefers-color-scheme: dark)" srcset="./.github/spruce-logo-light.svg">
      <img alt="Spruce CSS" width="140" src="./.github/spruce-logo-dark.svg">
    </picture>
    <br>
  </a>
</p>

**The Spruce CSS documentation and the Spruce UI component library, built with [11ty](https://www.11ty.dev/) (Spruce CSS v3).**

[![Netlify Status](https://api.netlify.com/api/v1/badges/32f689b9-2e24-462f-be66-22e1233d7f9b/deploy-status)](https://app.netlify.com/sites/sprucecss/deploys)

## Get Up and Running

We use `eleventy --serve` and compile Sass with sass-cli with npm scripts.

1. **Clone the repository**

2. **Install the dependencies**

    In the `package.json` file, you will find all of the dependencies (and scripts) to install them using the following command:

    ```shell
    npm install
    ```

3. **Run the development mode**

    To run the development mode, use the `npm run start`. This script will also watch for changes.

    ```shell
    npm run start
    ```

4. **Run the production mode**

    Before you go live, you should use the production script to compress the Sass files.

    ```shell
    npm run build
    ```

Requirements: Node.js 22+ and npm 10+.

## SCSS

The project compiles the SCSS files from the `./src/scss` folder into the `./src/css` folder. The project includes [Spruce CSS](https://sprucecss.com/), which gives the styling with some [Spruce UI](https://sprucecss.com/ui/getting-started/introduction/) components.

The site uses the Spruce CSS v3 dark mode and design styles. Every component preview has a style picker, and the header has a light, dark and system theme switcher. The site's own color groups (hero, footer, code tab) are added to the style presets in `src/scss/config/_site-styles.scss`.

## Spruce UI Components

Every component lives in five places under `src`:

- `ui/{category}/{name}.njk` - the page (front matter and includes),
- `_includes/ui/html/{category}/{name}.html` - the markup,
- `_includes/ui/scss/{category}/{name}.scss` - the copy-paste ready source (`@use 'sprucecss/scss/spruce' as *;`),
- `_includes/ui/js/{category}/{name}.js` - the optional vanilla JavaScript,
- `_includes/ui/md/{category}/{name}.md` - the description.

Add the page to `src/_data/componentNavigation.json` too. The component styles are compiled by `npm run ui:compile` (`scripts/build-ui-css.js`) together with the site's Spruce CSS configuration, so the previews follow the dark mode and the selected style.

## Other Scripts

- **sass:lint/sass:fix** Lint the SCSS files (the site and the components) with [Stylelint](https://stylelint.io/) and the [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) preset with `npm run sass:lint`. Use `npm run sass:fix` for automatic fixes.
- **js:lint/js:fix** Lint the JavaScript files with [semistandard](https://github.com/standard/semistandard).
- **ui:compile/ui:watch** Compile the Spruce UI component styles.
