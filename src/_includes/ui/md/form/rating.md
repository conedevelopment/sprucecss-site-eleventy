<p class="lead">A star rating input made of native radio buttons, with no JavaScript.</p>

## Technical Details

- Under the stars there are five radio buttons in a `fieldset` with a `legend`, so it works with the keyboard (arrow keys) and screen readers ("4 stars, selected").
- The radios are visually hidden, not removed; the focus ring is drawn on the star of the focused radio.
- The fill effect uses `:has()` and the general sibling combinator: every star up to the checked (or hovered) one is filled.
- The checked state also needs the radio to be **before** its star in the DOM, so keep the input + label order.
