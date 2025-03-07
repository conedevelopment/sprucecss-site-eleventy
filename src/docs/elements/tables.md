---
title: "Tables"
order: 20
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

You control the stripe pattern with the <code><a href="/docs/sass/variables#tables">config('stripe', $table)</a></code> variable (odd, even).

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

## Variables

There are some defaults variables that you can configure to customize the table's look.

- [Color variables](/docs/sass/variables/#colors)
- [Display variables](/docs/sass/variables/#tables)
