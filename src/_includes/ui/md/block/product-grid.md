<p class="lead">A product listing with category filters and product cards.</p>

## Technical Details

- It combines the [Product Card](/ui/card/product/) component; load its stylesheet too.
- The filters are toggle buttons (`aria-pressed`) in a labelled group; the script shows the matching products and announces the result in a polite live region. Without JavaScript, every product is visible.
- Every "Add to cart" button has the product name in a hidden text, so the buttons are distinguishable for screen reader users.
- Override the content with `productGridBlock`.
- Products can have a star `rating` (with `reviews`, the count) and an `oldPrice`; both have hidden labels ("Rated 4.8 out of 5", "Original price"). The heart is a toggle button (`aria-pressed`) labelled with the product name, above the card link overlay.
- Set `action` to add a "view all" button under the grid.
