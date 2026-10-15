<p class="lead">A print-ready invoice: header with the serial number, payment details, the addresses, an itemized table with the totals and a footer with the contact details. It looks good on screen and prints (or saves as PDF) on an A4 page.</p>

## Anatomy

- **`.invoice__header`** with the logo and the title (`__title`, `__serial-number`).
- **`.invoice__highlighted`** is a description list for the payment method and the dates (`time` elements).
- **`.invoice__meta`** holds the two `address` blocks (`__meta-block`, `--align-end`).
- **`.invoice__table`** is a Spruce table: the items in `tbody`, the subtotal, tax and total in `tfoot`. Numbers use `.invoice__number`.
- **`.invoice__actions`** has a print button, hidden when printing; **`.invoice__footer`** has the contact details.

## Accessibility

- The table has a (visually hidden) `caption`, column headers with `scope="col"` and the total rows use `th scope="row"`, so every amount is read with its label.
- The tax row says what it is ("Tax (27%)") and shows the amount, not only the rate.

## Technical Details

- The numbers are aligned to the end with `tabular-nums`, so the digits line up.
- `@page` sets an A4 portrait page with no margin, and the print styles size the invoice to 21 × 29.7 cm with `print-color-adjust: exact` for the backgrounds. The print button calls `window.print()`; the dialog offers "Save as PDF" too.
- The legal requirements of an invoice differ by country (tax IDs, wording, numbering); use this as a starting point.
