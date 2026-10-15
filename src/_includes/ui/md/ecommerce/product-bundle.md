<p class="lead">A "Frequently bought together" bundle: the product and its add-ons with checkboxes, a live total with a bundle discount and one button that adds them all.</p>

## Anatomy

- **`.product-bundle__images`**: the product images separated by "+" signs; an unchecked item's image is dimmed (`__media--off`).
- **`.product-bundle__items`**: a checkbox per product with its price. The main product is always included: it has a check icon instead of a checkbox (`__fixed`), and a hidden input submits it.
- **`.product-bundle__summary`**: the total, the regular price, the savings note and the submit button.

## Accessibility and Usability

- The image row is decorative (`aria-hidden`), because the checkbox list carries the same information as text.
- The main product is not a disabled checkbox (those are skipped by the keyboard and easy to misread as unavailable); it's plain text starting with "This item:".
- The new total is announced when an item is toggled ("Total: $226.80, 10% bundle discount included"), and the button says how many products it adds.
- The regular price has a hidden "Regular price:" label, because the strikethrough isn't announced.

## Technical Details

- Every checkbox has its `data-price`; the bundle discount is `data-discount` on the wrapper (`0.1` is 10%) and only applies when every item is selected. Calculate the real price on the server.
- Without JavaScript, the form posts the selected items (`items[]`), and the server-rendered total stays as it is.
- On wide screens, the list and the summary sit side by side (`md` breakpoint).
