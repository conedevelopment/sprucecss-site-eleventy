<p class="lead">The offer of a product bundle at a glance: one card per product (a book, a video course) with its key numbers, what's included and its value, then the bundle price that adds them up.</p>

## Technical Details

- Every product is a list item with an `h3`; the key numbers are a description list (`dt` label, `dd` value) shown value first with `column-reverse`, so they're read in a natural order.
- The regular and the bundle price have hidden "Regular price" and "Bundle price" labels, because a strikethrough isn't announced.
- The links jump to the sections that go deeper (the chapters, the lessons) and the button to the pricing (`#pricing`).
- Override the content with `offerBlock`.
