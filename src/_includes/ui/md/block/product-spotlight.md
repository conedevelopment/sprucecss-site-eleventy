<p class="lead">One product in the spotlight: a large photo, the rating, the price, the highlights, the size and stock, the buy buttons and the delivery estimate.</p>

## Technical Details

- It combines the [Stock Indicator](/ui/ecommerce/stock-indicator/) (sizes, stock level and store pickup) and the [Delivery Estimate](/ui/ecommerce/delivery-estimate/) (cut-off countdown and ZIP code check). Load their styles and scripts too.
- The photo is sticky from the `md` breakpoint, so it stays in view next to the longer details column.
- The stars are a single element: a star-shaped mask over a two-color fill, so a 4.8 rating fills 96% of them. They're decorative; the rating link says the rating and the review count in words.
- The sale price has hidden "Sale price" and "Original price" labels, because a strikethrough isn't announced.
- Override the content with `productSpotlightBlock`; the stock and the delivery parts use their own data attributes.
