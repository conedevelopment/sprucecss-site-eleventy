<p class="lead">Alternating image and text rows to explain features in depth.</p>

## Technical Details

- Every row is an `article` with its own heading. The image switches sides on every even row (only visually, with `order`, so the reading order stays "image, text").
- The arrow of the link is decorative and mirrors in RTL.
- Two columns from the `md` breakpoint.
- Override the content with `featureMediaBlock`.
