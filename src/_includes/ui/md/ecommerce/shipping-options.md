<p class="lead">The shipping step of a checkout: selectable delivery methods with the delivery estimate and the price, and an order total that follows the choice.</p>

## Anatomy

- **`.shipping-options__option`**: a `label` (also a `.form-check`, which sets the radio's size variables) around a radio button, an icon, the `__body` (`__name` and the `__eta`) and the `__price`. The radio's `data-price` is the shipping cost.
- **`.shipping-options__summary`**: the subtotal, the shipping cost and the `__total`; the form's `data-subtotal` is the base.

## Accessibility and Usability

- The methods are native radio buttons in a `fieldset` with a visible `legend`: arrow keys move between them, and the whole card is the click target.
- The delivery estimate is connected with `aria-describedby`, so screen readers announce "Express, radio button, Order in the next 3 hours, arrives tomorrow".
- An unavailable method stays visible and `disabled` with the reason ("Not available for this address"), so people don't wonder where it went.
- The new total is announced in a polite live region when the choice changes.
- Show concrete dates ("arrives Oct 8–10"), not only "3–5 business days".

## Technical Details

- The selected card is styled with `:has(:checked)`, so no class has to be toggled.
- The script only updates the displayed total; calculate the real shipping price and the total on the server. Without JavaScript, the radios still submit with the form.
- Use it in the [Checkout](/ui/ecommerce/checkout/) before the payment step.
