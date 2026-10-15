<p class="lead">The billing page of an account: the current plan and its renewal, the payment method and the invoice history.</p>

## Anatomy

- **`.billing-overview__cards`**: the `__card--plan` (plan, price, renewal date and actions) and the payment method `__card`.
- **`.billing-overview__history`**: the invoices in a `.table` with a status [Badge](/ui/misc/badge/) and a download link.

## Accessibility and Usability

- Every card is an `article` labeled by its own label (`aria-labelledby`), so the regions have names.
- The download links all say "PDF" visually, so each has hidden text with the date ("PDF, invoice from March 14, 2026"); a list of identical link names is useless out of context.
- The status badges are words (Paid, Refunded), not only colors.
- The renewal date is a `time` element with a machine-readable `datetime`.

## Technical Details

- The cards fill the row with an auto-fit grid (18rem minimum); their actions are pushed to the bottom (`margin-block-start: auto`), so the buttons line up.
- The card brand mark is a placeholder; use the card network's logo from your payment provider.
- The table scrolls inside `.table-responsive` on small screens.
