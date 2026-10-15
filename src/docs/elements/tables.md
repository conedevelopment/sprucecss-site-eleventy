---
title: "Tables"
description: "Opt-in table styles with striped, hover, bordered, small, rounded, sticky header and responsive variants."
order: 22
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/tables.md"
---

<p class="lead">Spruce ships with some basic table styling targeted only with classes to opt-in.</p>

## Default Style

Use the `table` class on an HTML `<table>` element to use the default styling.

{% preview %}
<div class="table-responsive">
    <table class="table">
        <caption>A generic introduction to the table.</caption>
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Block of Text</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John&nbsp;Doe</td>
                <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td><a href="#">Jane&nbsp;Doe</a></td>
                <td>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.</td>
            </tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table">
    <caption>A generic introduction to the table.</caption>
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Block of Text</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>John Doe</td>
            <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
        </tr>
    </tbody>
</table>
```

{% notification "good" %}Use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope">scope attribute</a> to define which header relates with which table cells.{% endnotification %}

## Striped and Hover Styles

Use the `table--striped` class on a `<table>` to display a zebra-striped styling. To add hover style to the table rows, use the `table--hover` class.

You control the stripe pattern with the <code><a href="/docs/sass/variables/#tables">config('stripe', $table)</a></code> variable (odd, even).

{% preview %}
<div class="table-responsive">
    <table class="table table--striped table--hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John&nbsp;Doe</td>
                <td>900</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td><a href="#">Jane&nbsp;Doe</a></td>
                <td>1200</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Jim&nbsp;Doe</td>
                <td>1200</td>
            </tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--striped table--hover">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
        </tr>
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

## Clear Style

Use the `table--clear-border` class on a `<table>` to remove the default border style.

{% preview %}
<div class="table-responsive">
    <table class="table table--clear-border">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John&nbsp;Doe</td>
                <td>900</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td><a href="#">Jane&nbsp;Doe</a></td>
                <td>1200</td>
            </tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--clear-border">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
        </tr>
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

## Small Style

Use the `table--sm` class on a `<table>` to make it smaller.

{% preview %}
<div class="table-responsive">
    <table class="table table--sm">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John&nbsp;Doe</td>
                <td>900</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td><a href="#">Jane&nbsp;Doe</a></td>
                <td>1200</td>
            </tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--sm">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
        </tr>
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

## Rounded Style

Use the `table--rounded` class on a `<table>` to make rounded background. For the best result use it with `table--striped` and `table--clear-border`.

{% preview %}
<div class="table-responsive">
    <table class="table table--rounded table--striped table--clear-border">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John&nbsp;Doe</td>
                <td>900</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jane&nbsp;Doe</td>
                <td>1200</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Jack&nbsp;Doe</td>
                <td>200</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Jill&nbsp;Doe</td>
                <td>1400</td>
            </tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--rounded table--striped table--clear-border">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
        </tr>
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

## In Line Style

Use the `table--in-line` class on a `<table>` to remove the inline padding from the first (on start) and last (on end) `<th>` and `<td>` element.

{% preview %}
<div class="table-responsive">
    <table class="table table--in-line">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John&nbsp;Doe</td>
                <td>900</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jane&nbsp;Doe</td>
                <td>1200</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Jack&nbsp;Doe</td>
                <td>200</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Jill&nbsp;Doe</td>
                <td>1400</td>
            </tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--in-line">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
        </tr>
    </thead>
    <tbody>
        ...
    </tbody>
</table>
```

## Bordered Style

**New in v3.** Use the `table--bordered` class to draw a border around every cell.

{% preview %}
<div class="table-responsive">
    <table class="table table--bordered">
        <thead>
            <tr><th scope="col">Plan</th><th scope="col">Seats</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
            <tr><td>Starter</td><td>1</td><td>For side projects.</td></tr>
            <tr><td>Team</td><td>10</td><td>For growing teams that ship every week, with priority support and advanced analytics.</td></tr>
            <tr><td>Enterprise</td><td>Unlimited</td><td>For organizations.</td></tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--bordered">
    ...
</table>
```

## Vertically Centered

**New in v3.** Browsers center the table cells vertically by default. Many designs align them to the top for long content (set `'vertical-align': top` in the `$table` map); in that case, use `table--middle` to center the cells of a specific table.

{% preview %}
<div class="table-responsive">
    <table class="table table--middle table--striped">
        <thead>
            <tr><th scope="col">Plan</th><th scope="col">Seats</th><th scope="col">Description</th></tr>
        </thead>
        <tbody>
            <tr><td>Starter</td><td>1</td><td>For side projects.</td></tr>
            <tr><td>Team</td><td>10</td><td>For growing teams that ship every week, with priority support and advanced analytics.</td></tr>
            <tr><td>Enterprise</td><td>Unlimited</td><td>For organizations.</td></tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<table class="table table--middle">
    ...
</table>
```

## Sticky Header

**New in v3.** Use the `table--sticky-header` class inside a scrolling container to keep the header row visible. The header gets the `heading-background` table color (or the page background).

{% preview %}
<div style="max-block-size: 14rem; overflow: auto;">
    <table class="table table--sticky-header">
        <thead>
            <tr><th scope="col">Name</th><th scope="col">Value</th><th scope="col">Note</th></tr>
        </thead>
        <tbody>
            <tr><td>Row 1</td><td>10</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 2</td><td>20</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 3</td><td>30</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 4</td><td>40</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 5</td><td>50</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 6</td><td>60</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 7</td><td>70</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 8</td><td>80</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 9</td><td>90</td><td>Scroll the table to see the sticky header.</td></tr>
            <tr><td>Row 10</td><td>100</td><td>Scroll the table to see the sticky header.</td></tr>
        </tbody>
    </table>
</div>
{% endpreview %}

```html
<div style="max-block-size: 20rem; overflow: auto;">
    <table class="table table--sticky-header">
        ...
    </table>
</div>
```

## Responsive, Scrollable Table

Adding the `<div class="table-responsive"></div>` as a wrapper element you can make the tables horizontally scrollable.

You can control the width of the scrollable table with the `config('responsive-inline-size', $table)` globally and locally with the `--inline-size` custom property.

```html
<div class="table-responsive">
    <table class="table table--striped table--hover">
        <thead>
            ...
        </thead>
        <tbody>
            ...
        </tbody>
    </table>
</div>
```

```html
<div class="table-responsive" style="--inline-size: 20rem;">
    <table class="table">
        ...
    </table>
</div>
```

## Customization

You can configure the table’s look through the `$table` map and the `table` colors:

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'table': (
      'heading-background': hsl(220deg 20% 96%),
    ),
  ),
  $table: (
    'border-width': 1px,
    'caption-text-align': start,
    'heading-font-size': 0.75rem,
    'heading-font-weight': 700,
    'heading-letter-spacing': 0.05em,
    'heading-text-transform': uppercase,
    'vertical-align': middle,
  ),
);
```

- [Color variables](/docs/sass/colors/)
- [Table variables](/docs/sass/variables/#tables)

## Generate Your Own

Use the `generate-table` mixin to apply the table styles to another selector, like every table in your content:

```scss
@include generate-table('.post-content table', $has-variations: false, $has-responsive-table: false);
```
