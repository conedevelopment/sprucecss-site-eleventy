<p class="lead">A cart button for the site header with an item count and a dropdown panel listing the cart items, the subtotal and the checkout buttons.</p>

## Anatomy

- **`.mini-cart__toggle`**: a link to the cart page with the `__count` badge. With JavaScript, it opens the panel instead.
- **`.mini-cart__panel`**: a labelled region with the `__header`, the `__items` (thumbnail, name, options, price and a remove button), the `__empty` message and the `__footer` (subtotal, note and buttons).
- Every item carries its `data-price` and `data-quantity`, so the count and the subtotal can be recalculated.

## Accessibility and Usability

- **Progressive enhancement:** without JavaScript, the toggle is a plain link to the cart page. The script turns it into a disclosure button (`role="button"`, `aria-expanded`, `aria-controls`) that also reacts to the space key.
- The count has hidden text ("4 items"), so the button reads "Cart, 4 items".
- When the panel opens, the focus moves into it; `Escape` and the close button return the focus to the toggle. A click outside closes it without moving the focus.
- It's not a modal: the rest of the page stays usable, so it uses a region, not `role="dialog"`. For a modal cart, use the [Drawer](/ui/content-and-layout/drawer/).
- The remove buttons name the product ("Remove Ceramic Pour-Over"); a removal is announced with the new subtotal, and the focus moves to the next remove button.

## Technical Details

- The script dispatches a bubbling `cart:remove` event; update the server-side cart in its listener. The [Product Details](/ui/ecommerce/product-details/) dispatches `cart:add`: re-render the panel from your cart endpoint when it fires.
- The panel is positioned under the toggle from the inline end, and it's never wider than the viewport.
- The item list scrolls after about four items (`max-block-size: 18rem`), so the checkout button stays visible.
