<p class="lead">An order line for carts and checkouts: thumbnail, product details, a quantity control, the line total and a remove button.</p>

## Anatomy

- **`.order-card`** is an `article` with the unit price in `data-unit-price`.
- **`.order-card__thumb`** holds a product image or an icon.
- **`.order-card__title`**, **`.order-card__meta`** (a description list for the variant and unit price).
- **`.order-card__actions`** groups the [Number Group](/ui/form/number-group/), the line total (`.order-card__total`) and the remove button.

## Accessibility

- The quantity input is named by "Quantity of" + the product title (`aria-labelledby`), so every input in the list is distinguishable.
- The remove button reads "Remove" and is described by the product title (`aria-describedby`).
- After a removal, the focus moves to the next line's remove button, and a live region announces "… removed from the order.". Without this, the focus would be lost on the page.
- The line total is a polite live region, so its change is announced after a quantity change.

## Technical Details

- Vanilla JavaScript. Load the [Number Group](/ui/form/number-group/) script for the quantity controls and `card/order.js` for the totals and the removal.
- The prices are formatted with `Intl.NumberFormat`, from the page language.
- A removal dispatches an `order:remove` event on the `document`, so you can update the cart summary or send the request to your back end.
- On narrow screens the actions go to their own row; from the `sm` breakpoint, the card is one row.
