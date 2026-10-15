---
title: "Progress and Meter"
description: "Native progress bars (including the indeterminate state) and meters styled by Spruce CSS."
order: 27
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/progress-and-meter.md"
---

<p class="lead">Use the native <code>progress</code> element for task progress and <code>meter</code> for a value within a known range (like disk usage or a password's strength).</p>

## Progress

{% preview %}
<div class="l-stack" style="--stack-gap: 1rem;">
    <progress max="100" value="25">25%</progress>
    <progress max="100" value="70">70%</progress>
</div>
{% endpreview %}

```html
<label class="form-label" for="upload-progress">Uploading…</label>
<progress id="upload-progress" max="100" value="70">70%</progress>
```

### Indeterminate

Leave out the `value` attribute when the progress is unknown. The animation runs only when the user doesn't prefer reduced motion.

{% preview %}
<progress aria-label="Loading"></progress>
{% endpreview %}

```html
<progress aria-label="Loading"></progress>
```

## Meter

The meter uses the `alert` colors: success for the optimum range, warning for the sub-optimum and danger for the worst range. Set the ranges with the `low`, `high` and `optimum` attributes.

{% preview %}
<div class="l-stack" style="--stack-gap: 1rem;">
    <meter min="0" max="100" low="30" high="70" optimum="80" value="90">90</meter>
    <meter min="0" max="100" low="30" high="70" optimum="80" value="50">50</meter>
    <meter min="0" max="100" low="30" high="70" optimum="80" value="20">20</meter>
</div>
{% endpreview %}

```html
<meter min="0" max="100" low="30" high="70" optimum="80" value="90">90</meter>
```

## Accessibility

- Give every progress bar a label: a `label` element, `aria-label` or `aria-labelledby`.
- The text inside the element is a fallback for very old browsers; it is not read by modern screen readers.
- For live updates (like an upload), also announce the milestones in a polite live region.

## Customization

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'form': (
      'progress-background': hsl(215deg 63% 93%),
      'progress-foreground': hsl(262deg 71% 49%),
    ),
  ),
  $progress: (
    'block-size': 0.5rem,
    'border-radius': map.get($display, 'border-radius-pill'),
  ),
);
```

Turn the styles off with `$generators: ('content': ('progress': false))`.
