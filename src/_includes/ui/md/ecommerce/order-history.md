<p class="lead">The order list of a customer account: every order with its number, date, total, status, products and the next actions (track, buy again, invoice).</p>

## Anatomy

- **`.order-history__top`**: the title and a `GET` filter for the period.
- **`.order-history__order`**: an `article` per order, labelled by its number. The `__header` holds the key facts (a description list) and the invoice link; the `__body` the `__status`, the product `__items` and the `__actions`.
- **`.order-history__badge`**: the status (`--shipped`, `--delivered`, `--returned`).

## Accessibility and Usability

- The orders are an ordered list (newest first) of articles, each labelled by its order number, so screen reader users can jump between them.
- The repeated links and buttons have hidden context ("View order, order #10482", "Invoice for order #10482"), so a list of links makes sense out of context.
- The status is text ("On the way") with a sentence that answers the next question ("Arriving Thursday, October 8"); the colored dot is decorative.
- Lead with the most useful action for the state: "Track package" while it's on the way, "Buy again" after delivery.

## Technical Details

- No JavaScript: the filter is a `GET` form, and the actions are links.
- The product images are decorative (`alt=""`); the order detail page lists the products by name. If you show only the images, give them the product names as `alt` text.
- From the `md` breakpoint, the status, the images and the actions sit in one row; below it, they stack.
- Link "Track package" to the [Order Tracking](/ui/ecommerce/order-tracking/) and the invoice to the [Invoice](/ui/ecommerce/invoice/).
