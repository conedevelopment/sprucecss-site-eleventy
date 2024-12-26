---
title: 'Post Content'
order: 15
previewURL: 'https://ui.sprucecss.com/html/content-and-layout/post-content-preview.html'
previewHeight: '40rem'
---

<p class="lead">A centered post layout with overflown media elements.</p>

## Technical Details

- We use the `:is` selector to include the elements in the selection for the narrower column.
- Using the `aspect-ratio` we make the iframes responsive.
- Controlling the vertical space is a bit tricky when it comes to various media elements and text, so we've added some exceptions.

## Dependencies

- [Container](/ui/content-and-layout/container)
- [Gallery](/ui/content-and-layout/gallery)
