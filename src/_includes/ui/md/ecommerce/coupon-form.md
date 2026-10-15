<p class="lead">A discount code field for the cart or the checkout: apply a code, see it as a removable chip and watch the totals update.</p>

## Anatomy

- **`.coupon-form__form`**: the code field and the apply button.
- **`.coupon-form__message`**: the hint, the error (`--error`) or the confirmation (`--success`).
- **`.coupon-form__applied`**: the applied codes as `__chip`s (code, what it does and a `__remove` button), cloned from a `template`.
- **`.coupon-form__totals`**: a description list with the subtotal, the `__discount`, the shipping and the `__total`.

## Accessibility and Usability

- The message is a polite live region linked to the field (`aria-describedby`), so the result of applying a code is announced; on an error the field gets `aria-invalid` and keeps the focus.
- The errors are specific: an empty field, an invalid or expired code, and a code that's already applied.
- The remove button has hidden text with the code ("Remove the code SPRUCE10"). After removing, the focus goes back to the field.
- The field doesn't autocorrect or spell-check the code (`autocomplete="off"`, `spellcheck="false"`) and shows it in uppercase; the input is normalized to uppercase too.

## Technical Details

- The codes in the script are only a demo: validate the code and calculate the totals on the server, and use the script only to show the result. Without JavaScript, the form posts the code.
- The subtotal comes from `data-subtotal`; a percent code discounts it, and a shipping code makes the shipping free.
- Use it in the [Cart Summary](/ui/ecommerce/cart-summary/) or the [Checkout](/ui/ecommerce/checkout/).
