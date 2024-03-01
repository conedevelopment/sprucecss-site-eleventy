---
title: "Media"
order: 23
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/elements/media.mdx"
---

<p class="lead">Under media, you can find some of the media-related styles.</p>

## Images

In Spruce, we use a general responsive styling for all images. We also disable the `user-select`.

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

## Figure

To create an image caption, use the `figure` and `figcaption` element with the `.figure` and `.figure-caption`.

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
