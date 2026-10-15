<p class="lead">The buy box of a product page: brand, title, rating, sale price, color and size options, stock status, quantity, "Add to cart", wishlist and the product information.</p>

## Anatomy

- **`.product-details`**: a `form` that posts the selected options and the quantity to the cart. `data-variants` holds the price and the stock of every size; `data-currency` the currency for the formatting.
- **`.product-details__option`**: a `fieldset` of radio buttons, either color `__swatch`es (the color is the `--swatch` custom property) or `__size` pills. The legend shows the selected value.
- **`.product-details__stock`**: the stock status (`--low`, `--out`).
- **`.product-details__buy`**: the quantity, the "Add to cart" and the wishlist buttons.
- **`.product-details__info`**: native `details` elements for the longer information.

## Accessibility and Usability

- The options are native radio buttons in a `fieldset` with a `legend`: they are a group with arrow key navigation, and screen readers announce "Color: Forest green, radio button, 1 of 3". The swatches have the color name as hidden text.
- A sold-out size is `disabled` and has hidden "(sold out)" text; visually it's struck through, so it's not just grayed out.
- The rating says "Rated 4.6 out of 5" in text, and the sale price has "Sale price" and "Regular price" labels, because a strikethrough isn't announced.
- The wishlist button is a toggle (`aria-pressed`); adding to the cart and the wishlist are announced in a polite live region.
- Use an `h1` for the title on a real product page; the demo uses `h2` because the page already has one.

## Technical Details

- When the size changes, the script updates the price, the stock message, the maximum quantity and the button label ("Add to cart · $378" for two). The price stays correct on the server; this is only the display.
- On submit, the script dispatches a bubbling `cart:add` event with the `FormData` instead of reloading the page: add the item with a request, then update the [Mini Cart](/ui/ecommerce/mini-cart/). Without JavaScript, the form posts normally.
- The selected states use `:has(:checked)` and `:has(:focus-visible)`, so the custom swatches keep the native keyboard behavior.
