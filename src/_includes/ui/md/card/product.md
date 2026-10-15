<p class="lead">A product card for shop listings with an image, a sale tag, a star rating, the price and an "Add to cart" action.</p>

## Technical Details

- The whole card is clickable through the `a11y-card-link` mixin, but the button stays a separate, focusable target (it sits above the overlay with `z-index`).
- The star rating is decorative: the visual stars are `aria-hidden`, and a visually hidden text says "Rated 4.5 out of 5". The fill uses a mask driven by the `--rating` custom property, so fractional ratings work.
- The old price is a `<del>` element with a hidden "Original price" label.
- Product images use `object-fit: cover` in a square `aspect-ratio` box.
