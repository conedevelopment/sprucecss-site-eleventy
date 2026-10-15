<p class="lead">A product preview in a modal dialog: photo, rating, price, options and "Add to cart", without leaving the listing.</p>

## Anatomy

- **`[data-quick-view-open]`**: the opener, a link to the product page with the `id` of the dialog.
- **`.quick-view`**: a native `dialog` labelled by the product title. Inside: the `__close` button, the `__media` and the `__body` form with the options, the quantity and the submit button.
- **`.quick-view__status`**: the confirmation after adding to the cart.

## Accessibility and Usability

- It's a native `dialog` opened with `showModal()`: the browser traps the focus inside, makes the rest of the page inert, closes it with `Escape` and returns the focus to the opener.
- **Progressive enhancement:** the opener is a link to the product page. With JavaScript, it becomes a button (`role="button"`, `aria-haspopup="dialog"`, space key support) that opens the dialog.
- The opener has hidden context ("Quick view: Wireless Headphones"), because a listing has many of them.
- The confirmation is a `role="status"` message with a link to the cart, so the result of the action is clear and announced; the dialog stays open so people can keep shopping.
- Always link to the full product page; a quick view is a shortcut, not a replacement.

## Technical Details

- A click on the backdrop closes the dialog (the click targets the `dialog` element itself).
- On submit, the script dispatches a bubbling `cart:add` event with the `FormData`; add the item with a request in a listener and update the [Mini Cart](/ui/ecommerce/mini-cart/).
- Load the product into the dialog on demand (for example, fetch the HTML of the dialog when the opener is clicked) if a listing has many products.
- Two columns from the `sm` breakpoint; on phones, the image is on top, and the dialog scrolls.
