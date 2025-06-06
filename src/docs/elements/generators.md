---
title: "Generators"
order: 18
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/generators.md"
---

<p class="lead">The generators are special (a naming convention in Spruce CSS only) mixins, which we use to generate base styles.</p>

By default Spruce CSS doesn’t generate styles; importing it, you access the variables, mixins, and functions but nothing more. If you wish to use the styling, you have to include them explicitly.

## The Goal of the Generators

The goal is to separate other Spruce CSS functionality from the style generation and modularity. There can be cases where you don’t need all or any of the given CSS code.

## The Difference Between Generator Mixin and a Regular Mixin

- A generator mixin is always prefixed with `generator-*`.
- A generator mixin gives back complete declarations with selectors (you may parameter the selectors). It is a wrapper to call style declarations.
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

A useful internal utility mixin to generate CSS custom properties anywhere. We use this in custom property mode to generate the scoped variables where needed.

{% notification %}If you want to see it in action check out the <a href="https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_check.scss#L14">check form component</a>.{% endnotification %}

### Argument(s)

| Name                  | Default Value          | Description                                                |
|-----------------------|------------------------|------------------------------------------------------------|
| `$map`                |                        | The name Sass map.                                         |
| `$exclude`            | `null`                 | A Sass list what to exclude from the map.                  |
| `$include `           | `null`                 | A Sass list what to include from the map.                  |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_variables.scss)

## generate-styles

The `generate-styles` is a shorthand to call all the mixins from below the list. You can control the output by the [$generators](/docs/sass/variables/#generators) map.

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-style;
```

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
- [generate-btn](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_button.scss)
- [generate-file-btn](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_file.scss)
- [generate-form-check](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_check.scss)
- [generate-form-control](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_control.scss)
- [generate-form-description](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_description.scss)
- [generate-fieldset](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_fieldset.scss)
- [generate-form-group](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_group.scss)
- [generate-form-label](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_label.scss)
- [generate-form-row](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_row.scss)
- [generate-field-feedback](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_validation.scss)
