---
title: 'Container'
order: 10
previewURL: 'https://ui.sprucecss.com/html/content-and-layout/container-preview.html'
previewHeight: '20rem'
---

<p class="lead">The container is the most generic element of our layout. With this snippet, you can manage and customize it as you wish.</p>

## Variations

- **default**: uses the `container-inline-size` value for width from the `$layout` map.
- **--wide**: uses 100% container width.
- **--narrow**: uses 50rem container width.

## Technical Details

- You only need to modify the `--inline-size` variable to add new variations.
- The `--gap` variable (that controls the inline margin) uses the clamp function to make it more dynamic.
