<p class="lead">The availability of a product on its page: the stock level of the chosen size, a back-in-stock form for sold-out sizes and the pickup availability in stores.</p>

## Anatomy

- **`.stock-indicator__sizes`**: a `fieldset` of size radio buttons, each with its stock in `data-stock`; a sold-out size is crossed out.
- **`.stock-indicator__status`**: the `__level` bars and the stock text, with the `--low` and `--out` modifiers.
- **`.stock-indicator__notify`**: an email form, shown for a sold-out size.
- **`.stock-indicator__stores`**: the stores with a colored `__dot` and a status text.

## Accessibility and Usability

- The sizes are native radio buttons in a `fieldset` with a `legend`, so they work with the arrow keys and are announced as "Size, M, 2 of 4".
- A sold-out size stays selectable: the customer can choose it to ask for a notification, instead of meeting a disabled control without an explanation.
- The status is a polite live region, so changing the size announces the new stock ("Only 3 left, Size M: order soon").
- The bars and the dots are decorative; the stock and the store status are always written out.

## Technical Details

- The script reads `data-stock` from the chosen size, and shows "low stock" from 5 items (`low` in the script). Render the same state on the server, so the first view is right without JavaScript.
- Real urgency only: show the low stock count when it's true, as a help to decide, not as pressure.
- Combine it with the [Product Details](/ui/ecommerce/product-details/) and the [Size Guide](/ui/ecommerce/size-guide/).
