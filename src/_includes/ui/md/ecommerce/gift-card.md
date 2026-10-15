<p class="lead">A gift card purchase form with preset or custom amounts, the recipient, a message and a delivery date, next to a live preview of the card.</p>

## Anatomy

- **`.gift-card__preview`**: the `__card` (credit card proportions) with the `__brand`, `__amount`, `__to` and `__message`, updated as the customer types; sticky from the `md` breakpoint.
- **`.gift-card__form`**: the `__amounts` fieldset (radio `__option`s and the `__custom` amount field), the recipient `__row`, the message with a character counter and the delivery date.

## Accessibility and Usability

- The preview is decorative (`aria-hidden`), because it only repeats the form fields; screen reader users get the same information from the form itself.
- The amounts are native radio buttons in a `fieldset` with a `legend`. Choosing "Other" shows the custom amount field and moves the focus into it.
- The custom amount shows its range in the label ("$10–$500") and validates it with `min` and `max`; the `$` sign is a visual prefix inside the field.
- The message counter is part of the label, so it's read with the field; `maxlength` enforces the limit.

## Technical Details

- Without JavaScript, every field is visible, and the form posts normally; the script only toggles the custom field, sets its `required` and updates the preview.
- The card colors come from the `primary` and `secondary` tokens, so the preview follows the active style.
- Validate the amount and the date on the server too.
