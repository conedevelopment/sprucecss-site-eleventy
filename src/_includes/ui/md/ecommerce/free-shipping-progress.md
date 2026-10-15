<p class="lead">A progress bar toward the free shipping threshold for the cart, with the missing amount and a product suggestion that fills the gap.</p>

## Anatomy

- **`.free-shipping`**: the wrapper with `data-threshold` and `data-subtotal`; it gets `--unlocked` once the threshold is reached.
- **`.free-shipping__message`**: the icon and the text with the missing amount.
- **`.free-shipping__bar`**: a native `progress` element.
- **`.free-shipping__suggestion`**: an optional add-on product with its own "Add" form.

## Accessibility and Usability

- The message is a polite live region: when the cart changes, the new missing amount (or "You’ve unlocked free shipping!") is announced.
- The `progress` element has a label ("Progress toward free shipping"), and its fallback text is the amount.
- The "Add" button has hidden context ("Add Steel Water Bottle"); after adding, it's disabled and says "Added".
- Say the exact amount ("$11.00 away"); it's more motivating and clearer than a bar alone.

## Technical Details

- Update the component with a `cart:update` event on it, with the new subtotal in `detail` (`{ subtotal: 113 }`), for example after your add-to-cart request. The demo dispatches it from the suggestion's form.
- Without JavaScript, the message and the bar are rendered by the server, and the "Add" form posts normally.
- Use it in the [Mini Cart](/ui/ecommerce/mini-cart/), the [Cart Summary](/ui/ecommerce/cart-summary/) or a banner on the product page.
