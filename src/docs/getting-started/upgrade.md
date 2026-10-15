---
title: "Upgrade to v3"
description: "Upgrade Spruce CSS from v2 to v3: what is new, what changed in the default output and how to adopt the new features."
order: 5
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/getting-started/upgrade.md"
---

<p class="lead">Spruce CSS v3 is a major release because it adds a lot, not because it breaks a lot. The Sass API is compatible with v2: no variable, map key, mixin or function was removed or renamed.</p>

## Update the Package

```terminal
npm install sprucecss@^3
```

Recompile, and check the [changes in the default output](#changes-in-the-default-output) below. For most projects, that's it.

## Changes in the Default Output

With the default configuration, every v2 declaration is still generated. These are the visual differences you may notice:

| Change | How to revert |
|---|---|
| Headings use `text-wrap: balance`. | `$typography: ('text-wrap-heading': null)` |
| `code`, `kbd`, `samp`, `pre` use the `font-family-mono` stack. | Set `font-family-mono` in `$typography`. |
| `kbd` has a border; `pre` has a background, padding and radius; `pre code` loses the inline code background. | Overwrite the `kbd-border`, `pre-background` colors or the `pre-*` typography keys. |
| `details`, `dialog`, `progress` and `meter` are styled (with zero specificity, `:where()`). | `$generators: ('content': ('details': false, 'dialog': false, 'progress': false))` |
| The native controls get `accent-color` from the primary color. | `$settings: ('accent-color': false)` |
| `video` is responsive (`max-inline-size: 100%`). | — |
| `.sr-only` also uses `clip-path: inset(50%)`. | — |

### Bug Fixes That Change Sizes

- `.form-control--sm` / `--lg` and `.form-check--lg` now get their intended font sizes (the old config referenced non-existing keys, so the value was `null`).
- `.form-check--sm` / `--lg` work in custom property mode and no longer inherit the small/large form control radius and padding.

### Custom Property Mode

If you use `'css-custom-properties': true`, the component custom properties now reference their [style hooks](/docs/customization/styles/#style-hooks):

```css
/* v2 */
.btn { --spruce-padding: 0.75em 1em; }

/* v3 */
.btn { --spruce-padding: var(--spruce-btn-padding, 0.75em 1em); }
```

The computed values are the same, and your overrides of `--spruce-padding` on `.btn` still work. Turn the hooks off with `$settings: ('style-hooks': false)` to get the v2 output.

## Adopt the New Features

1. **Dark mode:** replace your manual dark mode with the [`dark-mode` generator](/docs/customization/themes/). Your `$dark-colors` map works as it is.
2. **Styles:** turn on the [`styles` generator](/docs/customization/styles/) and let users pick a look, or set a default style.
3. **Tokens:** use `shadow()`, `radius()`, `z-index()`, `color-alpha()` and `color-tint()` in your components ([functions](/docs/sass/functions/)).
4. **Elements:** [details and dialog](/docs/elements/details-and-dialog/), [progress and meter](/docs/elements/progress-and-meter/), new [button variants](/docs/elements/buttons/), [table modifiers](/docs/elements/tables/) and [form options](/docs/elements/forms/).
5. **Layout:** the new `layout-cluster`, `layout-switcher`, `layout-reel` mixins and the opt-in [layout utilities](/docs/elements/layout/).
6. **AI:** add the [AI skills](/docs/ai/skills/) to your project so your coding assistant writes idiomatic Spruce CSS.

## Tooling

- The npm package now has `sass` and `style` entry points, so `@use 'pkg:sprucecss';` works with Sass's Node package importer, and CSS bundlers can resolve `sprucecss` to the compiled CSS.
- A new `css/spruce.complete.css` bundle has every opt-in feature turned on.

The full list is in the [changelog](https://github.com/conedevelopment/sprucecss/blob/main/CHANGELOG.md).
