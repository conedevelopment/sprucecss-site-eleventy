---
title: "Layout"
description: "Build intrinsic, responsive layouts without a grid system: Spruce CSS layout mixins and the opt-in layout utility classes."
order: 28
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/layout.md"
---

<p class="lead">Spruce CSS has no classical grid system. Instead, it gives you a set of intrinsic layout primitives: they adapt to the available space, mostly without media queries.</p>

Every primitive exists as a [mixin](/docs/sass/mixins/) for your components, and (new in v3) as an opt-in utility class for quick prototyping and content pages.

## Turn On the Utilities

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'utilities': (
      'layout': true,
    ),
  ),
);
```

Each class is configurable with custom properties, inline or in your CSS.

## Stack

Vertical rhythm: equal space between the direct children.

{% preview %}
<div class="l-stack layout-preview" style="--stack-gap: 0.5rem;">
    <div class="layout-preview__box">One</div>
    <div class="layout-preview__box">Two</div>
    <div class="layout-preview__box">Three</div>
</div>
{% endpreview %}

```html
<div class="l-stack" style="--stack-gap: 0.5rem;">…</div>
```

```scss
.article { @include layout-stack('m'); }
```

## Cluster

Inline items that wrap, like tags, buttons or navigation links.

{% preview %}
<div class="l-cluster layout-preview">
    <div class="layout-preview__box">HTML</div>
    <div class="layout-preview__box">CSS</div>
    <div class="layout-preview__box">Sass</div>
    <div class="layout-preview__box">JavaScript</div>
    <div class="layout-preview__box">Accessibility</div>
</div>
{% endpreview %}

```html
<div class="l-cluster" style="--cluster-gap: 0.5rem; --cluster-justify: center;">…</div>
```

```scss
.tags { @include layout-cluster('xs', $justify: flex-start, $align: center); }
```

## Grid

Responsive columns with a minimum width, without media queries.

{% preview %}
<div class="l-grid layout-preview" style="--grid-min: 9rem;">
    <div class="layout-preview__box">One</div>
    <div class="layout-preview__box">Two</div>
    <div class="layout-preview__box">Three</div>
    <div class="layout-preview__box">Four</div>
</div>
{% endpreview %}

```html
<div class="l-grid" style="--grid-min: 15rem; --grid-gap: 1rem;">…</div>
```

```scss
.cards { @include layout-grid('m', 15rem); }
```

## Sidebar

A fixed-width sidebar next to a fluid main area; they stack when the main area would get narrower than 50%.

{% preview %}
<div class="l-sidebar layout-preview" style="--sidebar-inline-size: 10rem;">
    <div class="layout-preview__box">Sidebar</div>
    <div class="layout-preview__box">Main content</div>
</div>
{% endpreview %}

```html
<div class="l-sidebar" style="--sidebar-inline-size: 15rem;">
    <aside>…</aside>
    <main>…</main>
</div>
```

```scss
.page { @include layout-sidebar('l', 15rem); }
```

## Switcher

A row of equal columns that switches to a column when the container is narrower than the threshold.

{% preview %}
<div class="l-switcher layout-preview" style="--switcher-threshold: 30rem;">
    <div class="layout-preview__box">One</div>
    <div class="layout-preview__box">Two</div>
    <div class="layout-preview__box">Three</div>
</div>
{% endpreview %}

```html
<div class="l-switcher" style="--switcher-threshold: 40rem;">…</div>
```

```scss
.features { @include layout-switcher(40rem, 'm', $limit: 4); }
```

## Reel

A horizontally scrollable row with scroll snapping, for carousels and card rows.

{% preview %}
<div class="l-reel layout-preview" style="--reel-item-inline-size: 10rem;">
    <div class="layout-preview__box">One</div>
    <div class="layout-preview__box">Two</div>
    <div class="layout-preview__box">Three</div>
    <div class="layout-preview__box">Four</div>
    <div class="layout-preview__box">Five</div>
    <div class="layout-preview__box">Six</div>
</div>
{% endpreview %}

```html
<div class="l-reel" style="--reel-item-inline-size: 16rem;">…</div>
```

```scss
.gallery { @include layout-reel(16rem, 's'); }
```

## Center

A centered container with a maximum width and inline padding.

```html
<div class="l-center" style="--center-inline-size: 60rem;">…</div>
```

```scss
.container { @include layout-center('m', 70rem); }
```

## Custom Properties

| Class | Custom properties (defaults) |
|---|---|
| `.l-stack` | `--stack-gap` (`spacer('m')`) |
| `.l-cluster` | `--cluster-gap` (`spacer('s')`), `--cluster-justify` (`flex-start`) |
| `.l-grid` | `--grid-gap` (`spacer('m')`), `--grid-min` (`12.5rem`) |
| `.l-sidebar` | `--sidebar-gap` (`spacer('m')`), `--sidebar-inline-size` (`18.75rem`) |
| `.l-switcher` | `--switcher-gap` (`spacer('m')`), `--switcher-threshold` (`30rem`) |
| `.l-reel` | `--reel-gap` (`spacer('m')`), `--reel-item-inline-size` (`18rem`) |
| `.l-center` | `--center-gap` (`spacer('m')`), `--center-inline-size` (`container-inline-size`) |

## Responsive Helpers

When you need a breakpoint, use the [breakpoint mixins](/docs/sass/mixins/#breakpoint): `breakpoint('md')` (min-width), `breakpoint-down('md')`, `breakpoint-between('md', 'xl')`, or the `container-query()` mixin for component-level responsiveness.
