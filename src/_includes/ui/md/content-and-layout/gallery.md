<p class="lead">Two image grid layouts: an even, intrinsic grid that fits as many columns as there is room for, and an uneven, editorial grid with mixed sizes.</p>

## Variations

- **`.gallery--even`**: square tiles with the [layout-grid](/docs/sass/mixins/#layout-grid) mixin (min. 15rem per column), no breakpoints needed.
- **`.gallery--uneven`**: a six-column grid with eight placed items (`.gallery-item--1` … `--8`). Below the `sm` breakpoint it falls back to two even columns.

## Anatomy

- **`.gallery`** is a `ul` with an `aria-label`, so it's announced as a list of images with a count.
- **`.gallery-item`** is an `li`; **`.gallery-item__link`** links to the full-size image.

## Accessibility

- Each image is the only content of its link, so its `alt` text is the link's name. An empty `alt` here would leave screen reader users with unnamed links (earlier versions had this problem).
- Write what's in the image in the `alt`, not "image of".
- The zoom on hover and focus is turned off for reduced motion; keyboard focus gets an outline.

## Technical Details

- The images use `object-fit: cover` and `aspect-ratio`, so different image sizes line up.
- Set `width`, `height` and `loading="lazy"` on the images to avoid layout shifts and save bandwidth.
- For a lightbox that opens the images in a dialog, use the [Gallery block](/blocks/gallery/).
