---
title: "Create a Button Variant"
description: "Add a new button color to Spruce CSS and generate its solid, outline, soft and ghost variants."
order: 32
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/guides/create-a-button-variant.md"
---

<p class="lead">Spruce CSS generates the button variants from colors. Add a few colors and one line of Sass per variant.</p>

## 1. Add the Colors

Declare the colors under the `btn` group of the `$colors` map with a prefix you can reference later (here: `dark-`):

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'dark-background': hsl(205deg 100% 2%),
      'dark-background-hover': hsl(205deg 100% 12%),
      'dark-foreground': hsl(0deg 0% 100%),
    ),
  ),
);
```

These three are enough. For more control, add any of the optional keys:

| Key | Used by |
|---|---|
| `dark-foreground-hover` | The solid variant hover text. |
| `dark-focus-ring` | The focus ring of every variant. |
| `dark-shadow` | Generates the `.btn--dark-shadow` modifier. |
| `dark-outline-border`, `dark-outline-foreground`, `dark-outline-background-hover`, `dark-outline-foreground-hover` | The outline variant. |
| `dark-soft-background`, `dark-soft-background-hover`, `dark-soft-foreground` | The soft variant (otherwise mixed from the background). |
| `dark-ghost-foreground`, `dark-ghost-background-hover` | The ghost variant (otherwise mixed from the background). |

{% notification %}Spruce decides at compile time which optional keys exist, so add them to the base `$colors` map (a style preset or theme can then overwrite their values).{% endnotification %}

## 2. Generate the Classes

```scss
@use 'sprucecss/scss/spruce' as *;

.btn--dark { @include btn-variant('dark'); }
.btn--outline-dark { @include btn-variant-outline('dark'); }
.btn--soft-dark { @include btn-variant-soft('dark'); }
.btn--ghost-dark { @include btn-variant-ghost('dark'); }
```

## 3. Use Them

```html
<a href="#" class="btn btn--dark">Get started</a>
<a href="#" class="btn btn--outline-dark">Learn more</a>
<button type="button" class="btn btn--soft-dark">Save draft</button>
<button type="button" class="btn btn--ghost-dark">Cancel</button>
```

## Dark Mode

If the dark mode needs different values, add the same keys to `$dark-colors`. The variants read the colors through custom properties, so no extra CSS is needed.

See the [buttons](/docs/elements/buttons/) page and the [button mixins](/docs/sass/mixins/#btn-variant) for all options.
