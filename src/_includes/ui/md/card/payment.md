<p class="lead">A payment method picker for checkouts: every option is a card with a title, a short note and an optional logo, and the whole card selects the native radio button.</p>

## Anatomy

- **`.payment-card-group`** is a `fieldset` with a `legend` ("Payment method").
- **`.payment-card`** is a `label` that wraps the radio input (`__control`), the caption (`__title`, `__description`) and the logo (`__logo`).

## Accessibility

- The card is the `label` of the radio button, so a click anywhere on it selects the option, and the name comes from the visible title. Earlier versions used an `aria-label` and a stretched pseudo-element; the native label is simpler and more robust.
- The note is linked with `aria-describedby`, so it's read after the option name.
- The logos are decorative (`alt=""`) next to the text title, so the name isn't repeated.
- Native radio buttons keep the arrow key navigation inside the group.

## Technical Details

- The selected card is highlighted with `:has(:checked)`, without JavaScript.
- The radio uses the Spruce form check style (`.form-check__control`).
- Add any content to the caption, like fees or delivery times; keep it short, it's read with every option.
