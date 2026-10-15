---
title: "Typography"
description: "Spruce CSS comes with fluid typography; it scales automatically depending on the viewport."
order: 21
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/typography.md"
---

<p class="lead">Typography is an essential part of any system. With Spruce, you get basic styles for the most related HTML elements.</p>

- The type scale is REM (root-relative EM) based. The base size is set to 1rem by default through `config('font-size-base', $typography)`, which will usually be 16px (depending on the browser's defaults). You can also change the ratio with the `config('font-size-ratio', $typography)` variable.
- You can use four different font sizes: `config('font-size-base', $typography)` (1rem), `config('font-size-sm', $typography)` (0.875rem), `config('font-size-lg', $typography)` (1.125rem) and `config('font-size-lead', $typography)` (`clamp(1.15rem, 2vw, 1.35rem)`).
- You can access the heading font sizes under the `$font-sizes` with the [font-size()](/docs/sass/functions#font-size) function.

- Headings are balanced (`text-wrap: balance`) by default, so a long title doesn't leave a single word on its last line.

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

## Links

The link style is configurable through the `$typography` map (new in v3):

```scss
@use 'sprucecss/scss/spruce' with (
  $typography: (
    'link-font-weight': 600,
    'link-text-decoration': underline,
    'link-text-decoration-hover': none,
    'link-text-decoration-thickness': 1px,
    'link-text-underline-offset': 0.2em,
  ),
);
```

## Inline Text Elements

{% preview %}
<ul class="inline-text-element-list">
    <li><code>code element</code> <code>code</code></li>
    <li><kbd>Ctrl</kbd> + <kbd>K</kbd> <code>kbd</code></li>
    <li><samp>Build finished</samp> <code>samp</code></li>
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
<kbd>Ctrl</kbd> + <kbd>K</kbd>
<samp>Build finished</samp>
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

## Code Blocks

Use `pre` with a `code` element inside. New in v3: code blocks get a background, padding, radius and horizontal scrolling, and the inner `code` loses the inline code style.

{% preview %}
<pre><code>.card {
  border-radius: radius('lg');
  box-shadow: shadow('md');
  padding: spacer('m');
}</code></pre>
{% endpreview %}

```html
<pre><code>.card {
  border-radius: radius('lg');
}</code></pre>
```

Customize them with the `pre-background` and `pre-foreground` colors and the `pre-padding`, `pre-border-radius`, `font-family-mono` and `font-size-code` typography keys.

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

## Configuration

The typographic elements are configurable through the [`$typography` map](/docs/sass/variables/#typography). The keys added in v3:

| Key | Default | Description |
|---|---|---|
| `blockquote-border-width` | `0.5rem` | The border of `blockquote` and `.quote`. |
| `blockquote-font-size`, `blockquote-font-style` | `null` | The size and style of the quote text. |
| `font-family-mono` | System monospace stack | `code`, `kbd`, `samp`, `pre`. |
| `font-size-code` | `null` | The font size of the code elements. |
| `font-weight-strong` | `null` | The weight of `strong` and `b`. |
| `letter-spacing-base` | `null` | The letter spacing of the `body`. |
| `link-*` | — | See [Links](#links). |
| `list-gap` | `spacer('xxs')` | The gap between list items. |
| `pre-border-radius`, `pre-padding` | `0.425rem`, `1rem` | The code block shape. |
| `text-transform-heading` | `null` | Like `uppercase` for every heading. |
| `text-wrap-base` | `null` | Like `pretty` for paragraphs. |
| `text-wrap-heading` | `balance` | The heading wrapping. |

## Variables, Helpers

- [Typography related variables](/docs/sass/variables/#typography)
- [font-size() function](/docs/sass/functions/#font-size)
- [responsive-font-size() function](/docs/sass/functions/#responsive-font-size)
