---
title: "Buttons"
description: "Button variants (solid, outline, soft, ghost, link), sizes, states, groups and custom variants in Spruce CSS."
order: 23
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/buttons.md"
---

<p class="lead">Spruce comes with button variations for color, emphasis, size, width and state, and it can generate your own color variants.</p>

## Defaults

You can use three solid color variants: primary, secondary and danger (new in v3). To overwrite the colors, see the [configurable variables](#configurable-variables) section.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary">Primary</button>
    <a href="https://conedevelopment.com" class="btn btn--secondary">Secondary</a>
    <button type="button" class="btn btn--danger">Delete</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary">Primary</button>
<a href="https://conedevelopment.com" class="btn btn--secondary">Secondary</a>
<button type="button" class="btn btn--danger">Delete</button>
```

{% notification "good" %}Use <code>&lt;a&gt;</code> for links and navigation between pages and <code>&lt;button&gt;</code> for actions (in page) like a form sending or modal opening. {% endnotification %}

## Outlined

Use the `btn--outline-*` modifier class for outlined buttons. If you want to have more control over the look, use the following specific color values under the `btn` at the `$colors` map, like in this example:

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'dark-background': hsl(0deg 0% 0%),
      'dark-background-hover': hsl(0deg 0% 20%),
      'dark-foreground': hsl(0deg 0% 100%),
      'dark-outline-border': hsl(260deg 4% 70%),
      'dark-outline-foreground': hsl(0deg 0% 0%),
      'dark-outline-foreground-hover': hsl(0deg 0% 100%),
      'dark-outline-background-hover': hsl(0deg 0% 0%),
      'dark-outline-focus-ring': hsl(295deg 100% 50%),
    ),
  ),
);
```

To make a custom outline button, you need to use the <a href="/docs/sass/mixins/#btn-variant-outline"><code>btn-variant-outline</code></a> mixin.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--outline-primary">Primary</button>
    <a href="https://conedevelopment.com" class="btn btn--outline-secondary">Secondary</a>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--outline-primary">Primary</button>
<a href="https://conedevelopment.com" class="btn btn--outline-secondary">Secondary</a>
<button type="button" class="btn btn--outline-danger">Delete</button>
```

## Soft and Ghost

**New in v3.** Lower-emphasis variants for secondary actions. Soft buttons have a tinted background; ghost buttons are transparent until hovered. Both mix the variant color at runtime with `color-mix()`, so they follow the dark mode and the styles.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--soft-primary">Soft primary</button>
    <button type="button" class="btn btn--soft-secondary">Soft secondary</button>
    <button type="button" class="btn btn--soft-danger">Soft danger</button>
</div>
<div class="button-grid">
    <button type="button" class="btn btn--ghost-primary">Ghost primary</button>
    <button type="button" class="btn btn--ghost-secondary">Ghost secondary</button>
    <button type="button" class="btn btn--ghost-danger">Ghost danger</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--soft-primary">Soft primary</button>
<button type="button" class="btn btn--ghost-primary">Ghost primary</button>
```

## Link

**New in v3.** The `btn--link` modifier looks like a link but keeps the button’s size and alignment, so it lines up with other buttons.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary">Save</button>
    <button type="button" class="btn btn--link">Cancel</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--link">Cancel</button>
```

## Shadow

Use the `btn--*-shadow` modifier class to add a shadow to the button. This class is generated automatically if there is a color value under the `btn` section with the `*-shadow` key in the `$colors` map.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary btn--primary-shadow">Primary</button>
    <a href="https://conedevelopment.com" class="btn btn--secondary btn--secondary-shadow">Secondary</a>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary btn--primary-shadow">Primary</button>
<a href="https://conedevelopment.com" class="btn btn--secondary btn--secondary-shadow">Secondary</a>
```

## Sizes

Spruce comes with three button sizes: small, regular and large. For the regular size, you don't need a modifier. Use the `btn--sm` class for small and the `btn--lg` class for large buttons.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary btn--sm">Small</button>
    <button type="button" class="btn btn--primary">Regular</button>
    <button type="button" class="btn btn--primary btn--lg">Large</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary btn--sm">Small</button>
<button type="button" class="btn btn--primary">Regular</button>
<button type="button" class="btn btn--primary btn--lg">Large</button>
```

## Pill

**New in v3.** Use the `btn--pill` modifier for fully rounded buttons.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary btn--pill btn--sm">Small pill</button>
    <button type="button" class="btn btn--primary btn--pill">Pill</button>
    <button type="button" class="btn btn--outline-primary btn--pill btn--lg">Large pill</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary btn--pill">Pill</button>
```

## Loading State

**New in v3.** Add the `btn--loading` class while an action runs: the label becomes invisible (but keeps the button’s width), a spinner appears in the text color, and the clicks are blocked. Set `aria-busy="true"` too, and announce the result when it finishes.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary btn--loading" aria-busy="true">Saving</button>
    <button type="button" class="btn btn--outline-primary btn--loading" aria-busy="true">Saving</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary btn--loading" aria-busy="true">Saving</button>
```

## Disabled State

To disable any button element, use the `disabled` boolean attribute. The disabled style is dimmer (`opacity: 0.5;`, configurable with the `disabled-opacity` key of `$btn`) and has `pointer-events: none;` to prevent user actions.

The `disabled` attribute doesn't work on links, so use the `btn--disabled` modifier class (or `aria-disabled="true"`, which gets the same style). Also, omit the `href` attribute.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary" disabled>Disabled button</button>
    <button type="button" class="btn btn--secondary" disabled>Disabled button</button>
</div>
<div class="button-grid">
    <a class="btn btn--primary btn--disabled" aria-disabled="true">Disabled button</a>
    <a class="btn btn--secondary btn--disabled" aria-disabled="true">Disabled button</a>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary" disabled>Disabled button</button>
<button type="button" class="btn btn--secondary" disabled>Disabled button</button>
<a class="btn btn--primary btn--disabled" aria-disabled="true">Disabled button</a>
<a class="btn btn--secondary btn--disabled" aria-disabled="true">Disabled button</a>
```

## Block Buttons

To display a block button, you can use the `btn--block` modifier class.

{% preview %}
<div class="button-grid button-grid--stacked">
    <button type="button" class="btn btn--primary btn--block">Block button</button>
    <button type="button" class="btn btn--secondary btn--block">Block button</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary btn--block">Block button</button>
<button type="button" class="btn btn--secondary btn--block">Block button</button>
```

## With Icon

To use any icon with Spruce, you must specify it in image format, preferably in SVG, because we set its height and width. Use with the `btn__icon` class on the image. Place it before (left) or after the caption (right) depending on the position.

The `.btn` has `inline-flex` display with a `gap` value.

{% preview %}
<div class="button-grid button-grid--stacked">
    <button type="button" class="btn btn--primary">{% svgIcon "./src/_includes/icon/arrow-right.svg", "btn__icon" %} Read more</button>
    <button type="button" class="btn btn--secondary">Read more {% svgIcon "./src/_includes/icon/arrow-right.svg", "btn__icon" %}</button>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary">
    <svg class="btn__icon">...</svg>
    Read more
</button>
<button type="button" class="btn btn--secondary">
    Read more
    <svg class="btn__icon">...</svg>
</button>
```

## Icon

To make an only icon button use the `btn--icon` modifier class. If you create an icon button, use `aria-label` to add a caption.

{% preview %}
<div class="button-grid button-grid--stacked">
    <button class="btn btn--secondary btn--icon" aria-label="Copy Text">{% svgIcon "./src/_includes/icon/copy.svg", "btn__icon" %}</button>
</div>
{% endpreview %}

```html
<button class="btn btn--secondary btn--icon" aria-label="Copy Text">
    <svg class="btn__icon">...</svg>
    Read more
</button>
```

## Button Group

**New in v3.** Wrap related buttons in a `.btn-group` to attach them. Use `.btn-group--vertical` to stack them. Give the group a `role="group"` and an `aria-label`; for toggle buttons, use `aria-pressed`.

{% preview %}
<div class="button-grid">
    <div class="btn-group" role="group" aria-label="Text alignment">
        <button type="button" class="btn btn--outline-primary" aria-pressed="true">Left</button>
        <button type="button" class="btn btn--outline-primary" aria-pressed="false">Center</button>
        <button type="button" class="btn btn--outline-primary" aria-pressed="false">Right</button>
    </div>
    <div class="btn-group btn-group--vertical" role="group" aria-label="Vertical group">
        <button type="button" class="btn btn--outline-secondary">Top</button>
        <button type="button" class="btn btn--outline-secondary">Middle</button>
        <button type="button" class="btn btn--outline-secondary">Bottom</button>
    </div>
</div>
{% endpreview %}

```html
<div class="btn-group" role="group" aria-label="Text alignment">
    <button type="button" class="btn btn--outline-primary" aria-pressed="true">Left</button>
    <button type="button" class="btn btn--outline-primary" aria-pressed="false">Center</button>
    <button type="button" class="btn btn--outline-primary" aria-pressed="false">Right</button>
</div>
```

## Configurable Variables

There are [default variables](/docs/sass/variables/#buttons) that you can configure to customize the button's look. New in v3: `box-shadow`, `disabled-opacity`, `letter-spacing` and `line-height`.

```scss
@use 'sprucecss/scss/spruce' with (
  $btn: (
    'border-radius': 0.25rem,
    'font-weight': 700,
    'letter-spacing': 0.02em,
  ),
);
```

Spruce manages the colors in a separate Sass map named [$colors](/docs/sass/colors/) (under the `btn` group). In custom property mode, you can also change any button value at runtime through the [style hooks](/docs/customization/styles/#style-hooks), like `--spruce-btn-padding`.

## Add a Custom Button Variant

You can create new button color variants with the `btn-variant` mixin. First, declare the new button's colors in the `$colors` map under the `btn` group. Then call the mixin on the preferred selector. The `btn-variant-outline`, `btn-variant-soft` and `btn-variant-ghost` mixins create the other variants from the same colors.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'brand-background': hsl(330deg 80% 50%),
      'brand-background-hover': hsl(330deg 80% 44%),
      'brand-foreground': hsl(0deg 0% 100%),
    ),
  ),
);
```

```scss
.btn--brand { @include btn-variant('brand'); }
.btn--outline-brand { @include btn-variant-outline('brand'); }
.btn--soft-brand { @include btn-variant-soft('brand'); }
.btn--ghost-brand { @include btn-variant-ghost('brand'); }
```

For more information, visit the [mixins page](/docs/sass/mixins/#btn-variant).
