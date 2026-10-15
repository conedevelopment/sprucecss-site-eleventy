---
title: "Settings"
description: "By changing the settings parameters, you can customize a generic part of the behavior of Spruce CSS."
order: 13
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/customization/settings.md"
---

<p class="lead">In Spruce CSS, the settings are global options controlled through a Sass map.</p>

You can access any setting with the [setting() helper function](/docs/sass/functions/#setting). Below, you can see the `$settings` map with its default values. The map is deep-merged, so you only need to set the keys you change.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_setting.scss)

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'accent-color': true,
    'color-fallback': false,
    'css-custom-properties': false,
    'dark-mode': (
      'light-selector': '[data-theme-mode="light"]',
      'prefers-color-scheme': false,
      'selector': ':root[data-theme-mode="dark"]',
    ),
    'html-smooth-scrolling': true,
    'hyphens': true,
    'optimal-font-size': '2vw + 1rem',
    'optimal-spacer-size': '5vw',
    'prefix': 'spruce',
    'print': false,
    'reduced-motion': false,
    'scaler': 15,
    'scroll-margin': null,
    'style-hooks': true,
    'styles': (
      'attribute': 'data-spruce-style',
      'default': null,
      'include': null,
    ),
    'utilities': (
      'display': true,
      'layout': false,
      'text': false,
      'typography': true,
    ),
  ),
);
```

## accent-color

**New in v3.** Sets `accent-color` on the `html` element to the primary color, so the native controls that Spruce doesn’t style (like a bare checkbox) match your brand. Set it to `false` to turn it off.

## color-fallback

Setting the `color-fallback` key to `true` turns on the color fallback of the `color()` function.

```scss
// Without fallback
body {
  // color: color('text');
  color: var(--spruce-base-color-text);
}

// With fallback
body {
  // color: color('text');
  color: var(--spruce-base-color-text, #616c75);
}
```

## css-custom-properties

By default, Spruce generates CSS custom properties only for the colors and the transition settings. Set this option to `true` to get custom properties for the typography, display, buttons, form elements, tables and more, which you can change without compiling.

The custom property mode is required by the [style presets](/docs/customization/styles/) and the [style hooks](#style-hooks).

{% notification %}If you want to see it in action, inspect any button on this site.{% endnotification %}

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
);
```

## dark-mode

**New in v3.** The options of the [dark mode](/docs/customization/themes/) generator and the `dark-mode` mixin.

| Key | Default | Description |
|---|---|---|
| `selector` | `':root[data-theme-mode="dark"]'` | The dark mode selector. |
| `light-selector` | `'[data-theme-mode="light"]'` | The explicit light mode selector (opts out of `prefers-color-scheme`). |
| `prefers-color-scheme` | `false` | Also apply the dark mode based on the system preference. |

## html-smooth-scrolling

Turn off the smooth scrolling (`scroll-behavior: smooth;`) on the `html` element. You may need this when you work with a SPA, where it interferes with the route transitions. The smooth scrolling is applied only when the user doesn't prefer reduced motion.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'html-smooth-scrolling': false,
  ),
);
```

## hyphens

By default, Spruce uses a simple hyphenation setup on paragraphs, list items and headings ([see the source](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_typography.scss)).

Turn off the hyphenation:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'hyphens': false,
  ),
);
```

## optimal-font-size

The optimal font size used by the `font-size()` and `responsive-font-size()` functions as the middle value of `clamp()`.

You can modify this value per function call too. A global default is a must, but bigger sizes usually need fine-tuning.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'optimal-font-size': '5vw + 1rem',
  ),
);
```

{% notification %}The default is a simple formula: a value with a viewport unit (vw) to make it fluid, and a root-relative value so it never gets too small. Use quotation marks when you use an operation.{% endnotification %}

### References

- [font-size()](/docs/sass/functions/#font-size)
- [responsive-font-size()](/docs/sass/functions/#responsive-font-size)
- [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

## optimal-spacer-size

The optimal spacer size used by the `spacer-clamp()` function as the middle value of `clamp()`. You can modify it per function call too.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'optimal-spacer-size': '4vw',
  ),
);
```

### References

- [spacer-clamp()](/docs/sass/functions/#spacer-clamp)

## prefix

The prefix of the generated CSS custom properties.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'prefix': 'my-prefix',
  ),
);
```

Generated CSS custom properties:

```css
:root {
  --my-prefix-alert-color-danger: #db2929;
  --my-prefix-alert-color-info: #00a1d6;
  --my-prefix-alert-color-success: #00a854;
  --my-prefix-alert-color-warning: #f2ca26;
}
```

Set it to `null` to remove the prefix.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_root.scss)

## print

Spruce comes with a small set of [print styles](/docs/getting-started/print/). To turn them on, set the `print` value to `true`.

## reduced-motion

**New in v3.** When `true`, Spruce turns off (nearly) all animations and transitions for users who prefer reduced motion, with a global `@media (prefers-reduced-motion: reduce)` rule. Spruce’s own animations already respect the preference; this option is a safety net for the rest of your project.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'reduced-motion': true,
  ),
);
```

## scaler

The global `scaler` value of the [font size functions](/docs/sass/functions/#font-size): how much smaller (in percentage) the fluid sizes get on small screens.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'scaler': 20,
  ),
);
```

## scroll-margin

**New in v3.** Set a length (like `2rem`, or the height of your sticky header) to add a `scroll-margin-block-start` to the `:target` element, so in-page anchors don’t end up under a sticky header.

## style-hooks

**New in v3.** In custom property mode, every component custom property reads a namespaced hook first (like `--spruce-btn-padding`), so you can change a component from any ancestor. Set it to `false` to get the plain v2 output. [Learn more about the hooks](/docs/customization/styles/#style-hooks).

## styles

**New in v3.** The options of the [style presets](/docs/customization/styles/).

| Key | Default | Description |
|---|---|---|
| `attribute` | `'data-spruce-style'` | The attribute that selects a style. |
| `default` | `null` | A style applied to `:root` without the attribute (compile-time choice). |
| `include` | `null` | The list of the generated presets; `null` means every preset. |

## utilities

Spruce uses only a few classic utility classes. The new groups are opt-in.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'utilities': (
      'display': true,
      'layout': true,
      'text': true,
      'typography': true,
    ),
  ),
);
```

See the [Utilities](/docs/elements/utilities/) and [Layout](/docs/elements/layout/) pages for the complete list.
