<p class="lead">A purchase option picker for consumable products: buy once, or subscribe with a discount and choose the delivery frequency. The button shows the final price.</p>

## Anatomy

- **`.subscribe-save__options`**: a `fieldset` with two `__option` cards. The one-time option is a `label`; the subscription option wraps a `__label` and the `__details` (the frequency select and the `__perks`).
- **`.subscribe-save__buy`**: the quantity and the submit button.

## Accessibility and Usability

- The options are native radio buttons in a `fieldset` with a `legend`; the whole card is the label, so it's a large click target.
- The discounted price has hidden "Subscription price" and "Regular price" labels, because a strikethrough isn't announced.
- The submit button says the exact commitment ("Subscribe · $20.40 every 4 weeks"), so nobody subscribes by accident. The terms (skip, pause, cancel) are visible before the purchase.

## Technical Details

- The chosen card and the frequency visibility use `:has(:checked)`; in browsers without `:has()`, the details stay visible.
- The price and the discount come from `data-price` and `data-discount`; the script updates the button text when any option changes. Calculate the price on the server.
- Without JavaScript, the form posts the chosen option, frequency and quantity.
