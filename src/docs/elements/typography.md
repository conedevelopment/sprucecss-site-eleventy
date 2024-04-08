---
title: "Typography"
description: "Spruce CSS comes with fluid typography; it scales automatically depending on the viewport."
order: 19
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/elements/typography.mdx"
---

<p class="lead">Typography is an essential part of any system. With Spruce, you get basic styles for the most related HTML elements.</p>

- The type scale is REM (root-relative EM) based. The base size is set to 1rem by default through `config('font-size-base', $typography)`, which will usually be 16px (depending on the browser's defaults). You can also change the ratio with the `config('font-size-ratio', $typography)` variable.
- You can use four different font sizing variables: `config('font-size-base', $typography)` (1rem), `$font-size-sm` (0.875rem), `config('font-size-lg', $typography)` (1.125rem) and `config('font-size-lead', $typography)` (clamp(1.15rem, 2vw, 1.35rem)).
- You can access the heading font sizes under the `$font-sizes` with the [font-size()](/docs/sass/functions#font-size) function.

[View on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_typography.scss)

## Headings

The font sizes for the heading tags are located in the `$font-sizes` map. We use the `math.pow()` Sass function to generate the scale which looks like the following:

```scss
$font-sizes: (
  h1: math.pow($font-size-ratio, 4) * $font-size-base,
  h2: math.pow($font-size-ratio, 3) * $font-size-base,
  h3: math.pow($font-size-ratio, 2) * $font-size-base,
  h4: math.pow($font-size-ratio, 1) * $font-size-base,
  h5: $font-size-base,
  h6: $font-size-base
);
```

{% preview %}
<h1 class="preview-heading">h1: The quick brown fox jumps over the lazy dog</h1>
<h2 class="preview-heading">h2: The quick brown fox jumps over the lazy dog</h2>
<h3 class="preview-heading">h3: The quick brown fox jumps over the lazy dog</h3>
<h4 class="preview-heading">h4: The quick brown fox jumps over the lazy dog</h4>
<h5 class="preview-heading">h5: The quick brown fox jumps over the lazy dog</h5>
<h6 class="preview-heading">h6: The quick brown fox jumps over the lazy dog</h6>
{% endpreview %}

```html
<h1>h1: The quick brown fox jumps over the lazy dog</h1>
<h2>h2: The quick brown fox jumps over the lazy dog</h2>
<h3>h3: The quick brown fox jumps over the lazy dog</h3>
<h4>h4: The quick brown fox jumps over the lazy dog</h4>
<h5>h5: The quick brown fox jumps over the lazy dog</h5>
<h6>h6: The quick brown fox jumps over the lazy dog</h6>
```

### Get Heading Size

To access any of the `$font-sizes` map sizes, you can use the <code><a href="/docs/sass/functions#font-size">font-size()</a></code> function that allows you also to create responsive font sizing. The function utilizes the <code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">clamp()</a></code> CSS function to set a minimum, optimal and maximum value.

## Paragraphs and Lead

{% preview %}
<p>Mauris sit amet ipsum eget orci congue egestas a eu ipsum. Mauris porttitor tincidunt ligula at finibus. Vestibulum feugiat semper aliquet.</p>
{% endpreview %}

```html
<p>Mauris sit amet ipsum eget orci congue egestas a eu ipsum. Mauris porttitor tincidunt ligula at finibus. Vestibulum feugiat semper aliquet.</p>
```

You can create paragraphs with bigger font-size using the `lead` class.

{% preview %}
<p class="lead">Mauris sit amet ipsum eget orci congue egestas a eu ipsum. Mauris porttitor tincidunt ligula at finibus. Vestibulum feugiat semper aliquet.</p>
{% endpreview %}

```html
<p class="lead">Mauris sit amet ipsum eget orci congue egestas a eu ipsum. Mauris porttitor tincidunt ligula at finibus. Vestibulum feugiat semper aliquet.</p>
```

## Blockquote

You can use a `blockquote` element with citation:

{% preview %}
<figure class="quote">
    <blockquote>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</blockquote>
    <figcaption>
        &mdash; Albert Einstein, <cite><a href="https://quoteinvestigator.com/2010/05/04/universe-einstein/">Quote Investigator</a></cite>
    </figcaption>
</figure>
{% endpreview %}

```html
<figure class="quote">
    <blockquote>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</blockquote>
    <figcaption>&mdash; Albert Einstein,
        <cite><a href="https://quoteinvestigator.com/2010/05/04/universe-einstein/">Quote Investigator</a></cite>
    </figcaption>
</figure>
```

or without citation:

{% preview %}
<blockquote>
    <p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>
</blockquote>
{% endpreview %}

```html
<blockquote>
    <p>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>
</blockquote>
```

## Inline Text elements

{% preview %}
<ul class="inline-text-element-list">
    <li><code>code element</code> <code>code</code></li>
    <li><abbr title="Accessibility">A11Y</abbr> <code>abbr</code></li>
    <li><mark>mark element</mark> <code>mark</code></li>
    <li><del>del element</del> <code>del</code></li>
    <li><s>strikethrough element</s> <code>s</code></li>
    <li><ins>ins element</ins> <code>ins</code></li>
    <li><u>u element</u> <code>u</code></li>
    <li><small>small element</small> <code>small</code></li>
    <li><strong>strong element</strong> <code>strong</code> <code>b</code></li>
    <li><em>em element</em> <code>em</code></li>
    <li><cite>cite element</cite> <code>cite</code></li>
    <li>sup <sup>element</sup> <code>sup</code></li>
    <li>sub <sub>element</sub> <code>sub</code></li>
</ul>
{% endpreview %}

```html
<code>code element</code>
<abbr title="Accessibility">A11Y</abbr>
<mark>mark element</mark>
<del>del element</del>
<s>strikethrough element</s>
<ins>ins element</ins>
<u>u element</u>
<small>small element</small>
<strong>strong element</strong>
<em>em element</em>
<cite>cite element</cite>
sup <sup>element</sup>
sub <sub>element</sub>
```

## Lists

{% preview %}
<ul>
    <li>Milk</li>
    <li>Cheese
        <ul>
            <li>Blue cheese</li>
            <li>Feta</li>
        </ul>
    </li>
</ul>

<ol>
    <li>Alpha</li>
    <li>Beta</li>
    <li>Gamma</li>
    <li>Delta</li>
</ol>

<dl>
    <dt>Chrome</dt>
    <dd>
        Nulla accumsan elit ac libero mattis malesuada id sed lorem. Aliquam at commodo dui.
    </dd>
    <dt>Firefox</dt>
    <dd>
        Morbi fermentum varius arcu, in hendrerit turpis. Ut vestibulum nibh sed lorem blandit, ac ultrices arcu dictum.
    </dd>
</dl>
{% endpreview %}

```html
<!-- Unordered list -->
<ul>
    <li>Milk</li>
    <li> Cheese
        <ul>
            <li>Blue cheese</li>
            <li>Feta</li>
        </ul>
    </li>
</ul>

<!-- Ordered list -->
<ol>
    <li>Alpha</li>
    <li>Beta</li>
    <li>Gamma</li>
    <li>Delta</li>
</ol>

<!-- Definition list -->
<dl>
    <dt>Chrome</dt>
    <dd>
        Nulla accumsan elit ac libero mattis malesuada id sed lorem. Aliquam at commodo dui.
    </dd>
    <dt>Firefox</dt>
    <dd>
        Morbi fermentum varius arcu, in hendrerit turpis. Ut vestibulum nibh sed lorem blandit, ac ultrices arcu dictum.
    </dd>
</dl>

```

## Variables, Helpers

- [Typography related variables](/docs/sass/variables/#typography)
- [font-size() function](/docs/sass/functions/#font-size)
- [responsive-font-size() function](/docs/sass/functions/#responsive-font-size)
