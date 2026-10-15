---
title: "Generators"
description: "Generator mixins output the styles of Spruce CSS. Turn any part on or off, or call the generators with your own selectors."
order: 20
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/generators.md"
---

<p class="lead">The generators are special (a naming convention in Spruce CSS only) mixins, which we use to generate base styles.</p>

By default, Spruce CSS doesn’t generate styles: importing it, you access the variables, mixins and functions, but nothing more. If you wish to use the styling, you have to include it explicitly.

## The Goal of the Generators

The goal is to separate other Spruce CSS functionality from the style generation and modularity. There can be cases where you don’t need all or any of the given CSS code.

## The Difference Between Generator Mixin and a Regular Mixin

- A generator mixin is always prefixed with `generate-*`.
- A generator mixin gives back complete rules with selectors (some of them accept the selectors as arguments). It is a wrapper to call style declarations.
- A generator mixin is usually used once per project. Including any of them more than once may generate unnecessary repetition and bloat.

## generate-color-variables

Using `generate-color-variables`, we can generate our CSS variables from a map object everywhere we want. You can find [an example in the core](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_root.scss#L7).

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_color.scss#L4)

### Argument(s)

| Name                  | Default Value          | Description                                                |
|-----------------------|------------------------|------------------------------------------------------------|
| `$colors`             | `$colors`              | The color Sass map.                                        |
| `$selector`           | `:root`                | The selector which will scope the CSS custom properties.   |

### Example(s)

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-color-variables(
  $colors,
  ':root'
);

```

## generate-variables

A useful internal utility mixin to generate CSS custom properties anywhere. We use it in custom property mode to generate the scoped variables where needed. With the `$hook` argument (new in v3), every value reads a namespaced [style hook](/docs/customization/styles/#style-hooks) first.

{% notification %}If you want to see it in action check out the <a href="https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_check.scss#L14">check form component</a>.{% endnotification %}

### Argument(s)

| Name                  | Default Value          | Description                                                |
|-----------------------|------------------------|------------------------------------------------------------|
| `$map`                |                        | The name Sass map.                                         |
| `$exclude`            | `null`                 | A Sass list what to exclude from the map.                  |
| `$include`            | `null`                 | A Sass list what to include from the map.                  |
| `$hook`               | `null`                 | The name of the style hook namespace (like `'btn'`).       |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_variables.scss)

## generate-styles

The `generate-styles` mixin is a shorthand to call all the mixins from the list below. You can control the output with the [$generators](/docs/sass/variables/#generators) map.

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-styles;
```

Turn any part off (or the opt-in parts on) with the `$generators` map:

```scss
@use 'sprucecss/scss/spruce' with (
  $generators: (
    'content': (
      'dark-mode': true,  // opt-in
      'dialog': false,
      'styles': true,     // opt-in
    ),
    'form': (
      'btn-group': false,
      'form-range': false,
    ),
  ),
);
```

| Group | Key | Default | Generates |
|---|---|---|---|
| `content` | `accessibility` | `true` | `.sr-only`, `.sr-only-focusable` |
| `content` | `dark-mode` | `false` | The [dark mode](/docs/customization/themes/) |
| `content` | `default` | `true` | Base element styles (selection, links, box sizing) |
| `content` | `details` | `true` | [`details`](/docs/elements/details-and-dialog/) |
| `content` | `dialog` | `true` | [`dialog`](/docs/elements/details-and-dialog/#dialog) |
| `content` | `display` | `true` | The `$display` and shadow custom properties |
| `content` | `divider` | `true` | `hr` |
| `content` | `layout` | `true` | The `$layout` custom properties |
| `content` | `media` | `true` | Images, video, iframes, figures |
| `content` | `normalize` | `true` | normalize.css |
| `content` | `print` | `true` | [Print styles](/docs/getting-started/print/) (also needs the `print` setting) |
| `content` | `progress` | `true` | [`progress` and `meter`](/docs/elements/progress-and-meter/) |
| `content` | `root` | `true` | The `:root` custom properties |
| `content` | `styles` | `false` | The [style presets](/docs/customization/styles/) |
| `content` | `table` | `true` | [Tables](/docs/elements/tables/) |
| `content` | `typography` | `true` | [Typography](/docs/elements/typography/) |
| `content` | `utilities` | `true` | [Utilities](/docs/elements/utilities/) |
| `form` | `btn` | `true` | [Buttons](/docs/elements/buttons/) and their variants |
| `form` | `btn-group` | `true` | `.btn-group` |
| `form` | `file-btn` … `form-switch` | `true` | The [form elements](/docs/elements/forms/) |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_generator.scss)

- [generate-normalize](https://github.com/conedevelopment/sprucecss/blob/main/scss/plugin/_normalize.scss)
- [generate-root](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_root.scss)
- [generate-accessibility](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_accessibility.scss)
- [generate-default](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_default.scss)
- [generate-divider](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_divider.scss)
- [generate-media](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_media.scss)
- [generate-table](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_table.scss)
- [generate-typography](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_typography.scss)
- [generate-utilities](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_utilities.scss)
- [generate-print](https://github.com/conedevelopment/sprucecss/blob/main/scss/print/_index.scss)
- [generate-details](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_details.scss) (new)
- [generate-dialog](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_dialog.scss) (new)
- [generate-progress](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_progress.scss) (new)
- [generate-btn](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_button.scss)
- [generate-btn-group](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_button.scss) (new)
- [generate-file-btn](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_file.scss)
- [generate-form-check](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_check.scss)
- [generate-form-control](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_control.scss)
- [generate-form-description](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_description.scss)
- [generate-form-fieldset](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_fieldset.scss)
- [generate-form-group-label](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_group-label.scss)
- [generate-form-group](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_group.scss)
- [generate-form-label](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_label.scss)
- [generate-form-row](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_row.scss)
- [generate-form-feedback](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_validation.scss)
- [generate-form-range](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_range.scss)
- [generate-form-switch](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_switch.scss)
- [generate-dark-mode](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_theme.scss) (new)
- [generate-style-presets](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_theme.scss) (new)

## generate-field-icons

**New in v3.** Regenerate the SVG field icons (select arrow, checkbox, radio, switch knob, validation icons) for a color map under a selector. The icons are data URIs, so they can’t follow CSS custom properties; use this mixin when you change the related colors for a theme. The dark mode and the styles call it for you.

| Name        | Default Value            | Description                                         |
|-------------|--------------------------|-----------------------------------------------------|
| `$colors`   |                          | The color map (only the defined keys are used).     |
| `$scope`    |                          | The scope selector.                                 |
| `$control`  | `'.form-control'`        | The form control selector.                          |
| `$check`    | `'.form-check__control'` | The checkbox and radio selector.                    |
| `$switch`   | `'.form-switch__control'`| The switch selector.                                |
| `$suffix`   | `''`                     | A suffix for every control selector.                |

```scss
@include generate-field-icons($high-contrast-colors, '[data-theme-mode="high-contrast"]');
```

## generate-style

**New in v3.** Generate one [style preset](/docs/customization/styles/) under any scope. `generate-style-presets` calls it for every preset based on the `styles` settings.

```scss
@include generate-style('brutalist', map.get($styles, 'brutalist'), '.promo');
```
