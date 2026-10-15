<p class="lead">A size picker for product pages: native radio buttons styled as tiles, with the current choice next to the legend and crossed-out sold-out sizes.</p>

## Anatomy

- **`.form-size-option`** is a `fieldset`; its `legend` names the group and shows the selected size (`.form-size-option__selected`).
- **`.form-size`** is one option: a visually hidden radio input (`.form-size__control`) and its visible tile (`.form-size__label`).
- **`.form-size-option__guide`** is an optional link to a size guide, wrapped in a `p` (`__help`): a link is an inline element, so the parent stack’s top margin only works on a block around it.

## Accessibility

- Native radio inputs keep the expected keyboard support: <kbd>Tab</kbd> moves into the group, the arrow keys change the selection.
- The `fieldset` and `legend` give the group its name; screen readers announce "Size, M, radio button, 3 of 6".
- Sold-out sizes are `disabled` and get a visually hidden "(sold out)" note, so the state isn't communicated by the crossed-out style only.
- The focus ring uses the button focus ring of Spruce (`short-ring`).

## Technical Details

- The script only updates the selected label (from the `data-label` attribute); the control works without JavaScript, and the form submits the `value` as usual.
- The tiles are at least 2.75rem large, which keeps them easy to tap.
- The colors come from the form and button tokens, so it follows the dark mode and every style.

## Customization

Use any labels (shoe sizes, capacities, plans): the tiles grow with their content. To change the shape, override the `border-radius` of `.form-size__label`.
