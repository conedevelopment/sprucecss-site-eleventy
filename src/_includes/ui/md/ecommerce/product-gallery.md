<p class="lead">The image gallery of a product page: a large image with hover zoom, previous and next buttons, a counter and a row of thumbnails.</p>

## Anatomy

- **`.product-gallery__main`**: the large image. The zoom origin follows the pointer through the `--zoom-x` and `--zoom-y` custom properties.
- **`.product-gallery__arrow`**: the previous (`--previous`) and next (`--next`) buttons, and the `__counter`.
- **`.product-gallery__thumbs`**: a list of thumbnail links to the large images; the current one has `aria-current="true"`.

## Accessibility and Usability

- The thumbnails are links to the large images. Without JavaScript, they open the photo; with JavaScript, they swap the main image.
- Every image has its own description: the thumbnails are numbered ("Image 2: Outdoors"), and the large image gets the long description of the selected one.
- A polite live region announces the switch: "Image 2 of 4" and the description. The visual counter ("2 / 4") is hidden from screen readers.
- The arrow keys move between the images when a thumbnail has the focus; they follow the reading direction in right-to-left languages, and the arrow icons are mirrored.
- The hover zoom only works with a precise pointer (`hover: hover` and `pointer: fine`), so it never gets in the way of scrolling on touch screens, and it doesn't animate with `prefers-reduced-motion: reduce`.

## Technical Details

- The main image has `fetchpriority="high"` because it's usually the largest element of the page (the Largest Contentful Paint); the thumbnails are `loading="lazy"`.
- Serve the large images at about twice the displayed size, so the 1.75× zoom stays sharp.
- Combine it with the [Product Details](/ui/ecommerce/product-details/) in a two-column product page.
