<p class="lead">The latest orders of a store in a compact table: the order number, the customer, the date, the status and the total.</p>

## Technical Details

- It's a real `table` with a hidden caption and the order number as the row header (`th scope="row"`), so screen readers announce every cell with its order.
- The status is a [Badge](/ui/misc/badge/) with a text label; the color and the dot only repeat it. Load the badge stylesheet too.
- Dates are `time` elements with a machine-readable `datetime`; the totals use tabular numbers and align to the end.
- The table scrolls horizontally on small screens (`table-responsive`) instead of squeezing the cells.
- Override the content with `recentOrders`; the `status` is one of `paid`, `pending`, `shipped` and `refunded`.
