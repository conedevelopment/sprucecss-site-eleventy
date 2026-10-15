---
title: "Media"
description: "Responsive images, videos, iframes and figures with captions in Spruce CSS."
order: 25
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/media.md"
---

<p class="lead">Under media, you can find some of the media-related styles.</p>

## Images

In Spruce, we use a general responsive styling for all images. We also disable the `user-select`. Give images a radius globally with the `img-border-radius` key of the `$media` map (new in v3).

{% preview %}
<img src="https://images.unsplash.com/photo-1515060939377-d73d9c162a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80" alt="A sandy beach with teal colored water from above." />
{% endpreview %}

```css
img {
    block-size: auto;
    display: block;
    max-inline-size: 100%;
    user-select: none;
}
```

## Video

**New in v3.** Videos are responsive too: they never overflow their container and keep their aspect ratio.

```html
<video controls width="1280" height="720" poster="poster.jpg">
    <source src="video.mp4" type="video/mp4">
</video>
```

## Figure

To create an image caption, use the `figure` and `figcaption` elements. The `figure` margin is reset, and the caption is centered below the image (no classes needed).

{% preview %}
<figure class="figure">
    <img src="https://images.unsplash.com/photo-1534179639155-4910efc143c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="A sandy beach from above with a lot of colorful sunshades."/>
    <figcaption class="figure-caption">The beach where we were sunbathing last summer.</figcaption>
</figure>
{% endpreview %}

```html
<figure class="figure">
    <img src="..." alt="..."/>
    <figcaption class="figure-caption">The beach where we were sunbathing last summer.</figcaption>
</figure>
```

### Caption Options

**New in v3.** Configure the captions with the `$media` map:

```scss
@use 'sprucecss/scss/spruce' with (
  $media: (
    'figcaption-font-size': 0.875rem,
    'figcaption-font-style': italic,
    'figcaption-margin-block-start': 0.75rem,
    'figcaption-text-align': start,
    'img-border-radius': 0.5rem,
  ),
);
```

## Iframes

Iframes are block elements that fill their container. Wrap them in an element with an `aspect-ratio` to keep the proportions:

```html
<div style="aspect-ratio: 16 / 9;">
    <iframe src="https://www.youtube-nocookie.com/embed/..." title="Video title" allowfullscreen></iframe>
</div>
```
