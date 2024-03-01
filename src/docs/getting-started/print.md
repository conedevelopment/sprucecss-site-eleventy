---
title: "Print"
description: "With some necessary print styles, you can control better your print view with Spruce CSS framework."
order: 7
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/getting-started/print.mdx"
---

<p class="lead">Spruce has some print-related styles. Nothing severe or fancy, but a set of minimal styles.</p>

You can turn on basic print styles from the `$settings` map; set the `print` to `true` to turn it on.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'print': true,
  ),
);
```

[Print-related variables](/docs/sass/variables#print).

**You get the following with the print styles:**

- with the `page-margin` key (default value: 2cm), you can control the margin of the printed page.
- With the `hidden-elements` key, you can hide elements from print view.
- You get the URLs of the links after `<a>` elements.
