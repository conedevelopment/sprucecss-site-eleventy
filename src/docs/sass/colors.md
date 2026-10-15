---
title: "Colors"
description: "Through colors, you can genuinely make Spruce CSS your own. Control everything with the $colors map."
order: 16
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/sass/colors.md"
---

<p class="lead">Spruce CSS stores every color in one nested Sass map, <code>$colors</code>, and outputs each of them as a CSS custom property. That is what makes the dark mode and the design styles possible.</p>

## List of Colors

These are the default colors, grouped as in the `$colors` map. The swatches use the live custom properties, so they follow the theme mode and the style you pick in the header. Access any of them with the [color() function](/docs/sass/functions/#color): `color('name', 'group')`.

{% for group in spruceColors.groups %}
<div class="l-color">
<h3 class="l-color__title">{{ group.name | capitalize }}</h3>
<div class="l-color__inner">
{%- for item in group.colors %}{% if item.value != 'null' %}
{% color "var(--spruce-" + group.name + "-color-" + item.name + ")", item.name, item.value, item.name in ['background', 'surface', 'border', 'stripe', 'hover'] %}
{%- endif %}{% endfor %}
</div>
</div>
{% endfor %}

{% notification %}Some keys are <code>null</code> by default (like <code>background-readonly</code> or the table <code>heading-background</code>). Spruce doesn’t output anything for them until you give them a value.{% endnotification %}

## Shared Colors

To avoid repetition, the map uses a few helper variables for the generic colors. Overwrite them to retheme Spruce quickly, or set the map values one by one.

```scss
@use 'sprucecss/scss/spruce' with (
{%- for item in spruceColors.shared %}
  ${{ item.name }}: {{ item.value }},
{%- endfor %}
);
```

## The Full Map

Below is the full declaration of the `$colors` map (from the installed version).

```scss
{{ spruceColors.colorsSource | safe }}
```

{% notification %}We declare the colors with the modern HSL syntax; Sass converts them in the output.{% endnotification %}

### New Colors in v3

| Group | Key | Used by |
|---|---|---|
| `base` | `border-strong` | Stronger dividers, empty states. |
| `base` | `focus-ring` | The `summary` focus ring and the components. |
| `base` | `kbd-border` | The `kbd` element. |
| `base` | `muted` | Secondary text (`.text-muted`, descriptions). |
| `base` | `overlay` | The `dialog` backdrop. |
| `base` | `pre-background`, `pre-foreground` | Code blocks. |
| `base` | `surface`, `surface-muted` | Cards and panels (follows the styles). |
| `btn` | `danger-*` | The danger button variants. |
| `form` | `background-readonly` | Read-only form controls (`null` by default). |
| `form` | `progress-background`, `progress-foreground` | `progress` and `meter`. |
| `form` | `required` | The `.form-label--required` marker. |
| `table` | `heading-background` | The table header row (`null` by default). |

## Get Color Values

Spruce generates prefixed CSS variables at `:root` by group from the nested map. You can access a generated variable by name, but it is easier to use the getter function, [`color()`](/docs/sass/functions/#color). For the raw Sass value, use [`color-value()`](/docs/sass/functions/#color-value).

```scss
a {
  color: color('primary'); // var(--spruce-base-color-primary)
}

.control {
  background-color: color('primary-background', 'btn');
}

.overlay {
  // Runtime mixes that follow the theme and the style:
  background-color: color-alpha('heading', 0.6);
  border-color: color-tint('primary', 80%);
}
```

## Overwrite, Add New Colors

Because the colors are in a Sass map, it is easy to overwrite them or add new values and groups.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'base': (
      'primary': hsl(0deg 0% 15%),
      'tertiary': hsl(332deg 49% 29%),
    ),
    'my-custom-component': (
      'background': hsl(0deg 0% 100%),
    ),
  ),
);
```

A new group is output as `--spruce-my-custom-component-color-background`, and you get it with `color('background', 'my-custom-component')`.

## Dark Colors

The `$dark-colors` map holds your dark mode colors. It is deep-merged into the built-in `$default-dark-colors` palette by the [dark mode generator](/docs/customization/themes/), so you only set what differs.

<details>
<summary>The default dark palette</summary>

```scss
{{ spruceColors.darkSource | safe }}
```

</details>

## List Colors

In this example, you can see how to generate a component (an alert) from the `alert` colors with Sass’s `@each` and `map.get`.

```scss
@use 'sass:color';
@use 'sass:map';
@use 'sprucecss/scss/spruce' as *;

.alert {
  border: 1px solid;
  border-inline-start-width: 0.35rem;
  border-radius: radius('lg');
  padding: 0.65em 1em;

  @each $name, $value in map.get($colors, 'alert') {
    &--#{$name} {
      background-color: color-tint($name, 90%, 'alert');
      color: color.scale($value, $lightness: -30%);
    }
  }
}
```
