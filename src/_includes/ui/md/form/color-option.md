<p class="lead">A color swatch picker for product variants: native radio buttons styled as swatches, with the color name next to the legend and sold-out colors crossed out.</p>

## Anatomy

- **`.form-color-option`** is a `fieldset`; the `legend` names the group and shows the selected color (`.form-color-option__selected`).
- **`.form-color`** is one swatch: a visually hidden radio input and its visible circle (`.form-color__label`). Set the color with the `--color` custom property.
- **`.form-color--check-light`** and **`.form-color--check-dark`** set the color of the check mark; pick the one that contrasts with the swatch.

## Accessibility

- A swatch has no visible text, so every input has an `aria-label` with the color name (and "(sold out)" when it's disabled). The `title` gives the same name as a tooltip on hover.
- The selected swatch gets a check mark and a double ring, so the state isn't communicated by color only.
- Native radio inputs keep the keyboard support: the arrow keys move between the colors.
- Each swatch has an inset hairline, so light colors (like Lavender) stay visible on a light background.

## Technical Details

- The script only updates the selected name next to the legend (from `data-label`); without JavaScript the control still works.
- The check mark is the checkbox icon of the Spruce form config (`$form-icon`), drawn with the `field-icon` mixin.

## Customization

```html
<label class="form-color form-color--check-light" style="--color: hsl(140deg 50% 35%);">
    <input class="form-color__control" type="radio" name="color" value="forest" aria-label="Forest" data-label="Forest">
    <span class="form-color__label"></span>
</label>
```

Change the size with `--size` on `.form-color`.
