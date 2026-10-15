---
title: "Utilities"
description: "The few utility classes Spruce CSS ships: accessibility helpers, display, typography and the opt-in text utilities."
order: 29
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/utilities.md"
---

<p class="lead">Spruce CSS is not a utility-first framework, but some helpers are useful everywhere. The new groups are opt-in, so they never add CSS you don't use.</p>

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'utilities': (
      'display': true,     // default
      'typography': true,  // default
      'text': false,       // opt-in
      'layout': false,     // opt-in, see the Layout page
    ),
  ),
);
```

## Accessibility (Always On)

| Class | Description |
|---|---|
| `.sr-only` | Hides the element visually but keeps it for screen readers. |
| `.sr-only-focusable` | Hidden until it (or an element inside it) gets the focus, like a skip link. |

```html
<a class="sr-only-focusable" href="#content">Skip to content</a>
```

The same helpers are available as mixins: `visually-hidden` and `visually-hidden-focusable`.

## Display

| Class | Description |
|---|---|
| `.hidden`, `[hidden]` | `display: none !important;` |

## Typography

`.h1` – `.h6` apply the heading font sizes to any element, so you can keep the right heading level with a different look.

```html
<h2 class="h4">A second-level heading with a smaller size</h2>
```

## Text (Opt-In)

{% preview %}
<p class="text-center">.text-center</p>
<p class="text-muted">.text-muted — a secondary text.</p>
<p class="text-mono">.text-mono — monospace text.</p>
<p class="text-truncate">.text-truncate — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tortor mi, vivamus bibendum erat lacus, quis tincidunt urna dictum non.</p>
{% endpreview %}

| Class | Declaration |
|---|---|
| `.text-start`, `.text-center`, `.text-end` | `text-align` (logical values) |
| `.text-sm`, `.text-lg` | `font-size` from `font-size-sm` / `font-size-lg` |
| `.text-muted` | `color: color('muted')` |
| `.text-mono` | `font-family` from `font-family-mono` |
| `.text-uppercase` | `text-transform: uppercase` |
| `.text-balance`, `.text-pretty` | `text-wrap: balance` / `pretty` |
| `.text-nowrap` | `white-space: nowrap` |
| `.text-truncate` | One-line ellipsis (the `text-ellipsis` mixin) |

## Layout (Opt-In)

See the [Layout](/docs/elements/layout/) page for `.l-stack`, `.l-cluster`, `.l-grid`, `.l-sidebar`, `.l-switcher`, `.l-reel` and `.l-center`.
