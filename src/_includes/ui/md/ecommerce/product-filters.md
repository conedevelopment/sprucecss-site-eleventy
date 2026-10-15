<p class="lead">Faceted filters for a product listing: categories with counts, a dual-handle price range, color swatches, sizes and an availability switch, with removable chips for the active filters.</p>

## Anatomy

- **`.product-filters`**: a `GET` form, so every filter combination has a URL (`?category=backpacks&color=green&price_max=250`).
- **`.product-filters__active`**: the chips of the active filters, rendered by the script.
- **`.product-filters__group`**: a `details` element per facet with a `fieldset` inside.
- **`.product-filters__price`**: two number fields and, with JavaScript, a dual-handle slider (`__range`) synced with them.
- **`.product-filters__footer`**: the sticky submit button with the number of results.

## Accessibility and Usability

- Every facet is a `fieldset` with a `legend`, the color swatches have their names as hidden text, and the counts have hidden "products".
- **The price range:** two overlapping range inputs are hard to use with assistive technology, so the number fields are the accessible controls, and the slider is a pointer shortcut that is hidden from screen readers and from the tab order (`aria-hidden`, `tabindex="-1"`).
- The chips are buttons with a clear name ("Remove filter: Green"). After a removal, the focus moves to the neighboring chip or the "Clear all" link.
- The result count is announced in a polite live region after a short delay, so quick changes don't flood the screen reader.
- The groups are native `details`, so long filter lists can be collapsed.

## Technical Details

- **Progressive enhancement:** without JavaScript, it's a normal form with checkboxes and number fields that submits to the listing.
- The result number in the demo is an estimate; request the real count from your back-end (debounced) and update the button and the live region with it.
- The two range inputs ignore the pointer (`pointer-events: none`) except on their thumbs, so both handles stay draggable. The filled part of the track is drawn with the `--from` and `--to` custom properties.
- Put the form into a [Drawer](/ui/content-and-layout/drawer/) on small screens, and use it with the [Listing Toolbar](/ui/ecommerce/listing-toolbar/).
