<p class="lead">A slide-in cart: the items with quantity steppers, the progress to free shipping, the subtotal and the way to checkout, without leaving the page.</p>

## Technical Details

- It's built on the [Drawer](/ui/content-and-layout/drawer/) (a native `dialog` opened with `showModal()`): load the drawer stylesheet and script too. Any `data-drawer-open="cart-drawer"` element opens it, like the cart link of the [store header](/ui/content-and-layout/site-header-store/); a link keeps working as a link to the cart page without JavaScript.
- Every quantity stepper is a labelled group ("Quantity of Everyday Backpack") with hidden "Decrease" and "Increase" labels; the value is an `output`.
- A polite live region announces the new quantity and subtotal, or that an item was removed. When an item is removed, the focus moves to the next item (or to the close button), never to the document body.
- The free shipping progress is a native `progress` element with a text fallback; the text above it says how much is missing.
- Override the items with `cartDrawer` (`{ freeShipping, items: [{ name, meta, price, quantity, image }] }`); set `cartDrawerNoTrigger` to leave out the demo button on a page.
