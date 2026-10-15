<p class="lead">The "thank you" page after a purchase: the confirmation, what happens next, the order summary, the delivery and payment details, an account sign-up for guests and the next actions.</p>

## Anatomy

- **`.order-confirmation__header`**: the success icon, the order number, the title and where the receipt went.
- **`.order-confirmation__next`**: an ordered list of the next steps; the finished ones have `--done`.
- **`.order-confirmation__grid`**: two `__card`s, the order summary (items and totals) and the delivery and payment details.
- **`.order-confirmation__account`**: an optional form to create an account with the email address already known.
- **`.order-confirmation__actions`**: "Continue shopping" and "View order".

## Accessibility and Usability

- The title has `tabindex="-1"`: if the checkout ends with a client-side route change, move the focus to it, so screen reader users hear the confirmation first.
- The totals and the details are description lists, the address is an `address` element, and the delivery date is a `time` element.
- The finished step has hidden "Done:" text; the check mark is generated content.
- Offer the account creation **after** the purchase, not before it: the guest checkout stays short, and the password field is the only thing to fill in (`autocomplete="new-password"`, so password managers suggest a strong one).
- Mask the payment details ("Visa ending in 4242"); never show the full card number.

## Technical Details

- No JavaScript. The success icon pops in once, only without `prefers-reduced-motion: reduce`.
- Use the same order data as the confirmation email, and link "View order" to the [Order Tracking](/ui/ecommerce/order-tracking/).
