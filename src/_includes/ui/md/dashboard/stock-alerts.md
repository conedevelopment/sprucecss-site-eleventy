<p class="lead">The products that are running out: what's out of stock and what's low, with the SKU and a quick restock action.</p>

## Technical Details

- The status is written out ("Out of stock", "Low stock: 3 left"); the icon and its color (danger for out of stock, warning for low) only repeat it, so the meaning never depends on color.
- The count badge in the header has a hidden "products need attention"; every restock link has the product name as hidden text.
- The status color is one custom property per item (`--stock-alerts-color`), mixed with `color-mix()` for the icon background.
- Override the content with `stockAlerts`; the `status` is `out` or `low`.
