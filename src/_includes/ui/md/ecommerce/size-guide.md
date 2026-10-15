<p class="lead">A size chart in a modal dialog with a centimeter/inch switch and measuring instructions.</p>

## Anatomy

- **`[data-size-guide-open]`**: the opener, a link to the size guide page with the `id` of the dialog.
- **`.size-guide`**: a native `dialog` with a sticky `__header` and the `__body`.
- **`.size-guide__units`**: a segmented control from two native radio buttons.
- **`.size-guide__table`**: the chart; every cell stores its range in centimeters (`data-cm="87-92"`).
- **`.size-guide__measure`**: a description list with the measuring instructions and a `__tip`.

## Accessibility and Usability

- `showModal()` traps the focus in the dialog, closes it with `Escape` and returns the focus to the opener. A click on the backdrop closes it too.
- The unit switch is a labelled radio group (`role="radiogroup"`, `aria-label="Units"`) of native radio buttons, so the arrow keys work and screen readers announce "cm, radio button, 1 of 2".
- The table has a caption that says the current unit, and row and column headers.
- **Progressive enhancement:** the opener is a link to a size guide page; with JavaScript, it opens the dialog instead.

## Technical Details

- The centimeters are the source of truth; the inches are calculated from them (`cm / 2.54`, one decimal), so the two can't get out of sync.
- Default to the unit of the shopper's locale (for example, inches for `en-US`) by checking the right radio button on the server.
- Link it from the size option of the [Product Details](/ui/ecommerce/product-details/).
