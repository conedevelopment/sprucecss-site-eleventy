---
title: "Variables"
description: "The variables are fundamental for better customizability. Luckily, Spruce CSS gives you a lot of them."
order: 17
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/sass/variables.md"
---

<p class="lead">Spruce CSS has several Sass variables and maps that it can generate into CSS custom properties.</p>

Our central concept is not to expose a CSS custom property that isn’t needed for later customization, but you can opt in to the full custom property mode.

By default, Spruce only generates CSS variables for the colors and the transition settings. If you set `css-custom-properties` to `true`, it also generates them for the typography, display, shadows, buttons, form elements, tables and more, with [style hooks](/docs/customization/styles/#style-hooks).

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
);
```

## How to Overwrite

Every map below is merged with your values, so you only pass the keys you change, at the first `@use` of Spruce:

```scss
@use 'sprucecss/scss/spruce' with (
  $btn: (
    'border-radius': 0,
    'font-weight': 700,
  ),
  $shadows: (
    'md': 0 6px 20px hsl(0deg 0% 0% / 12%),
  ),
);
```

The code blocks show the source of the installed version, with the default values. Read more about the [difference between Sass and CSS variables](https://css-tricks.com/difference-between-types-of-css-variables/), and see the [colors](/docs/sass/colors/), [settings](/docs/customization/settings/) and [styles](/docs/customization/styles/) on their own pages.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/tree/main/scss/config)

## Breakpoints

The breakpoints used by the [breakpoint](/docs/sass/mixins/#breakpoint), `breakpoint-down`, `breakpoint-between` and `container-query` mixins.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_breakpoint.scss)

```scss
{{ spruceConfig.breakpoint | safe }}
```

## Buttons

The button maps. The `$btn-sm` and `$btn-lg` maps only overwrite what differs from `$btn`. New in v3: `box-shadow`, `disabled-opacity`, `letter-spacing`, `line-height`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_button.scss)

```scss
{{ spruceConfig.button | safe }}
```

## Character Escaping

The characters the [svg-escape()](/docs/sass/functions/#svg-escape) function escapes when an SVG is used as a `data:image`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_escaping-characters.scss)

```scss
{{ spruceConfig.escaping | safe }}
```

## Details

**New in v3.** The [details element](/docs/elements/details-and-dialog/) options.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_details.scss)

```scss
{{ spruceConfig.details | safe }}
```

## Dialog

**New in v3.** The [dialog element](/docs/elements/details-and-dialog/#dialog) options.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_dialog.scss)

```scss
{{ spruceConfig.dialog | safe }}
```

## Display

Shared shape tokens. New in v3: `border-radius-md`, `border-radius-pill` and `border-width-base`. Get them with [radius()](/docs/sass/functions/#radius) or `config(…, $display)`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_display.scss)

```scss
{{ spruceConfig.display | safe }}
```

## Divider

**New in v3.** The `hr` element options.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_divider.scss)

```scss
{{ spruceConfig.divider | safe }}
```

## Form Check

Checkboxes and radio buttons.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_check.scss)

```scss
{{ spruceConfig.formCheck | safe }}
```

## Form Control

Inputs, selects and textareas, with the size and color input maps. New in v3: `box-shadow`, `letter-spacing`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_control.scss)

```scss
{{ spruceConfig.formControl | safe }}
```

## Form Description

The help text under the controls.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_description.scss)

```scss
{{ spruceConfig.formDescription | safe }}
```

## Form Fieldset

Fieldsets and legends.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_fieldset.scss)

```scss
{{ spruceConfig.formFieldset | safe }}
```

## Form File

The file input button (`background` is the name of a button color variant).

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_file.scss)

```scss
{{ spruceConfig.formFile | safe }}
```

## Form Group

The form group layouts.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_group.scss)

```scss
{{ spruceConfig.formGroup | safe }}
```

## Form Icon

The SVG icons of the form elements. `#COLOR#` is replaced with the related color.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_icon.scss)

```scss
{{ spruceConfig.formIcon | safe }}
```

## Form Label

New in v3: `line-height`, `required-content`, `required-gap`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_label.scss)

```scss
{{ spruceConfig.formLabel | safe }}
```

## Form Range

New in v3: the `$form-range-sm` and `$form-range-lg` maps.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_range.scss)

```scss
{{ spruceConfig.formRange | safe }}
```

## Form Row

The `.form-row--mixed` layout.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_row.scss)

```scss
{{ spruceConfig.formRow | safe }}
```

## Form Select

The select arrow and the validation icon placement.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_select.scss)

```scss
{{ spruceConfig.formSelect | safe }}
```

## Form Switch

Switches.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_switch.scss)

```scss
{{ spruceConfig.formSwitch | safe }}
```

## Generators

Turn the style generation on or off by part. See the [Generators](/docs/elements/generators/) page.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_generator.scss)

```scss
{{ spruceConfig.generator | safe }}
```

## Layout

The default container width.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_layout.scss)

```scss
{{ spruceConfig.layout | safe }}
```

## Media

**New in v3.** Image and figure options.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_media.scss)

```scss
{{ spruceConfig.media | safe }}
```

## Print

The [print styles](/docs/getting-started/print/).

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_print.scss)

```scss
{{ spruceConfig.print | safe }}
```

## Progress

**New in v3.** The [progress and meter](/docs/elements/progress-and-meter/) elements.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_progress.scss)

```scss
{{ spruceConfig.progress | safe }}
```

## Shadows

**New in v3.** The shadow scale. Get them with [shadow()](/docs/sass/functions/#shadow); in custom property mode they are output as `--spruce-shadow-*`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_shadow.scss)

```scss
{{ spruceConfig.shadow | safe }}
```

## Spacers

The spacers are generated from the `$spacer` value. Get them with [spacer()](/docs/sass/functions/#spacer) and [spacer-clamp()](/docs/sass/functions/#spacer-clamp).

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_spacer.scss)

```scss
{{ spruceConfig.spacer | safe }}
```

## Tables

New in v3: `border-width`, `caption-text-align`, the `heading-*` keys and `vertical-align`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_table.scss)

```scss
{{ spruceConfig.table | safe }}
```

## Transition

The default transition settings. In custom property mode, the duration is `0` for users who prefer reduced motion.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_transition.scss)

```scss
{{ spruceConfig.transition | safe }}
```

## Typography

The typography tokens and the heading scale. Get the sizes with [font-size()](/docs/sass/functions/#font-size). New in v3: `blockquote-*`, `font-family-mono`, `font-size-code`, `font-weight-strong`, `letter-spacing-base`, `link-*`, `list-gap`, `pre-*`, `text-transform-heading`, `text-wrap-base`, `text-wrap-heading`.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_typography.scss)

```scss
{{ spruceConfig.typography | safe }}
```

## Z-Index

**New in v3.** The layer scale. Get the values with [z-index()](/docs/sass/functions/#z-index).

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_z-index.scss)

```scss
{{ spruceConfig.zIndex | safe }}
```
