<p class="lead">A quantity input with decrease and increase buttons, built on a native number input, so the keyboard, the form submission and the validation work as usual.</p>

## Anatomy

- **`.number-group`** wraps the controls and draws the field (it's generated with the `generate-form-control` mixin, so it looks like any other input).
- **`.number-group__input`** is a native `input type="number"` with `min`, `max` and `step`.
- **`.number-group__decrement`** and **`.number-group__increment`** are icon buttons pointing to the input with `aria-controls`.

## Accessibility

- The input has a visible `label`, and the help text is linked with `aria-describedby`.
- The icon buttons have visually hidden text ("Decrease quantity", "Increase quantity").
- At the limits, the matching button gets `disabled`, so it's clear why nothing happens.
- The <kbd>↑</kbd> / <kbd>↓</kbd> keys still work in the input; the buttons are an extra, not a replacement.

## Technical Details

- The buttons use the native `stepUp()` and `stepDown()` methods, which respect `step`, `min` and `max`.
- A typed value outside the range is corrected on `change`, and a bubbling `change` event fires after every button press, so the rest of the page (like a cart total) can react.
- The browser spin buttons are hidden; the numbers use `tabular-nums`, so the width doesn't jump.
