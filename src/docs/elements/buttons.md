---
title: "Buttons"
order: 21
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/buttons.md"
---

<p class="lead">Spruce comes with basic button variations like size, width, color, state and can also generate your custom color variants.</p>

## Defaults

You can use two default color variants named: primary and secondary. To overwrite colors, see the [configurable variables](#configurable-variables) section.

{% preview %}
<div class="button-grid">
    <button type="button" class="btn btn--primary">Primary</button>
    <a href="https://conedevelopment.com" class="btn btn--secondary">Secondary</a>
</div>
{% endpreview %}

```html
<button type="button" class="btn btn--primary">Primary</button>
<a href="https://conedevelopment.com" class="btn btn--secondary">Secondary</a>
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

Spruce came with three different button sizes: small, regular, large. Using the standard size, you don't have to use any modifier. For small use: `btn--sm`, for large use: `btn--lg` class.

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

## Disabled state

To disable any button element, use the disabled boolean attribute. The disabled style is a bit dimmer (`opacity: 0.5;`) and has the `pointer-evens: none;` to prevent the user actions.

The disabled attribute doesn't work on links, so you have to use the `btn--disabled` modifier class. Also, you should omit the `href` attribute and set the `aria-disabled="true"`.

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

## Configurable Variables

There are [default variables](/docs/sass/variables#buttons) that you can configure to customize the button's look.

Also, Spruce manage the colors in a separate Sass map named [$colors](/docs/sass/variables#colors) (under the btn object).

## Add Custom Button Variant

You can create new button color variants using the `btn-variant` mixin. First, you must declare the new button's colors at the `$color` map under the `btn` object. After this, all you have to do is to call the mixin on the preferred selector.

More information about the `btn-variant()` please visit the [related mixin page](/docs/sass/mixins#btn-variant).
