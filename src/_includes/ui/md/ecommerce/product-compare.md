<p class="lead">A side-by-side product comparison table with a sticky label column, removable products and a switch that hides the identical rows.</p>

## Anatomy

- **`.product-compare__table`**: a Spruce `.table` with the products in the columns: the header cells (`__product`) hold the image, the name, the price, "Add to cart" and the remove button.
- **`[data-compare-row]`**: a feature row with a row header; the script marks the identical rows with `data-same`.
- **`[data-compare-differences]`**: the "Only show differences" switch.

## Accessibility and Usability

- It's a real table with a caption, column headers (the products) and row headers (the features), so screen readers announce "Heritage Backpack, Capacity, 26 L" for every cell.
- The check and dash icons have hidden "Yes" and "No" text.
- The scroll container is a focusable, labelled region, so keyboard users can scroll it; the feature labels stay visible while scrolling (`position: sticky`).
- The remove buttons name the product; after a removal, the change is announced and the focus moves to the next remove button. The last two products can't be removed, because there would be nothing to compare.
- Hiding the identical rows is announced ("2 identical rows hidden"); identical values are also dimmed when they're shown.

## Technical Details

- **Progressive enhancement:** without JavaScript, the full table is shown; the switch and the remove buttons are revealed by the script. Remove the product from the server-side comparison list too (for example, with a link to `?remove=…`).
- A row is "the same" when the text content of all its cells is equal, so it works with icons that have hidden text.
- The table has a `40rem` minimum width and scrolls horizontally on smaller screens. For more than four products, keep the scrolling and the sticky column.
