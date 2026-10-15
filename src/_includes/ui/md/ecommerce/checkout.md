<p class="lead">A one-page checkout: billing details, the payment method and an editable order summary with a live total, in a two-column layout.</p>

## Anatomy

- **`.l-checkout`** follows the block anatomy: `.l-checkout > .container > .l-checkout__inner` (the `form`).
- **`.l-checkout__column`** holds the sections: `__billing` (the form fields), `__payment` ([Payment Card](/ui/card/payment/)s) and `__summary` ([Order Card](/ui/card/order/)s, the total and the submit button in `__order`).

## Accessibility and Usability

- Every field has the right `type` and `autocomplete` value (`name`, `email`, `country-name`, `postal-code`, `address-level2`, `street-address`), so browsers fill in the address in one go.
- The required fields and the terms checkbox are `required`, so the browser validates them before submitting.
- The payment section keeps its visible heading; the fieldset legend inside is visually hidden, so it's not shown twice but still names the radio group.
- The submit button repeats the amount ("Pay €200"), so people know what they confirm.

## Technical Details

- The total updates when a quantity changes or a line is removed: `ecommerce/checkout.js` sums the order lines (it listens to the `change` and `order:remove` events of the [Order Card](/ui/card/order/)). Always recalculate the price on the server.
- Load the scripts of the [Number Group](/ui/form/number-group/) and the [Order Card](/ui/card/order/) too.
- Two columns from the `md` breakpoint; on phones, the summary follows the payment.
