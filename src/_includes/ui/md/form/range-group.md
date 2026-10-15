<p class="lead">A range slider with a live value display and step buttons, for choosing amounts like seats, storage or a budget.</p>

## Anatomy

- **`.range-group`** with `data-unit-one` and `data-unit-many` (the unit in singular and plural).
- **`.range-group__label`** holds the `label` and an `output` (`__value`) that shows the current value.
- **`.range-group__inner`** puts the decrease and increase buttons around the native range input (`.form-range`).

## Accessibility

- The range input gets an `aria-valuetext` with the unit ("5 seats"), so screen readers read a meaningful value instead of a bare number. The visible `output` is hidden from them to avoid hearing it twice.
- The step buttons have visually hidden labels ("Increase seats") and point to the input with `aria-controls`. At the limits, they become `disabled`.
- The range input keeps its own keyboard support (arrows, <kbd>Page Up</kbd>/<kbd>Page Down</kbd>, <kbd>Home</kbd>/<kbd>End</kbd>); the buttons help touch and mouse users make precise steps.

## Technical Details

- The buttons use the native `stepUp()` and `stepDown()`, which respect `step`, `min` and `max`; a `change` event fires after each press.
- The unit is picked with `Intl.PluralRules`, in the page language.
- It's built from Spruce's form range and button styles, so it follows every style and the dark mode.
