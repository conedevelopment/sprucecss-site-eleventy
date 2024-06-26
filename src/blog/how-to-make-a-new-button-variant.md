---
title: "How to Make a New Button Variant"
date: "2023-10-12"
featuredImage: "./src/img/blog/how-to-04.png"
alt: ""
tags: ["how-to"]
---

<p class="lead">Follow these simple steps to create a new button in the Spruce CSS framework.</p>

## 1. Add the New Colors to the Config

You must declare your new colors under the `$colors` map's `btn` property. In this post, we make a "dark" button (both filled and outlined variation), and our declaration looks like this:

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'dark-background': hsl(205deg 100% 2%),
      'dark-background-hover': hsl(205deg 100% 5%),
      'dark-foreground': hsl(0deg 0% 100%),
      'dark-outline-background-hover': hsl(205deg 100% 2%),
      'dark-outline-border': hsl(260deg 4% 70%),
      'dark-outline-foreground': hsl(205deg 100% 2%),
      'dark-outline-foreground-hover': hsl(0deg 0% 100%),
      'dark-outline-focus-ring': hsl(205deg 100% 2%),
      'dark-shadow': hsl(205deg 100% 2% / 5%),
    ),
  ),
);
```

{% notification %}
You must choose an use a prefix (like "dark-") that you can reference later.
{% endnotification %}

As you see, there are a bunch of options. The `dark-outline-*` is only for the outlined variation. We declare them to gain more control over their appearance.

For a basic button, you only need three of the values:

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'dark-background': hsl(205deg 100% 2%),
      'dark-background-hover': hsl(205deg 100% 5%),
      'dark-foreground': hsl(0deg 0% 100%),
    ),
  ),
);
```

## 2. Declare Your Button Classes

Using the [btn-variant](/docs/sass/mixins/#btn-variant) and [btn-variant-outline](/docs/sass/mixins/#btn-variant-outline) mixins you can generate two custom variant.

```scss
.btn--dark {
  @include btn-variant('dark');
}

.btn--outline-dark {
  @include btn-variant-outline('dark');
}
```

## 3. Use Your Buttons

After the declaration, you can use your new button modification classes.

```html
<a href="https://sprucecss.com" class="btn btn--dark">
  Open Spruce CSS
</a>

<a href="https://sprucecss.com" class="btn btn--outline-dark">
  Open Spruce CSS
</a>
```

If you declare the `dark-shadow` property, you can use the `btn--dark-shadow` to add a shadow to the button but only on the filled variation.

```html
<a href="https://sprucecss.com" class="btn btn--dark btn--dark-shadow">
  Open Spruce CSS
</a>
```
