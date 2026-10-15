<p class="lead">A return request form: choose the items of an order, give a reason for each, pick the refund method and see the estimated refund.</p>

## Anatomy

- **`.returns-form__items`**: a `fieldset` of `__item`s; each has a checkbox, an image, the `__name` label, the `__meta` and a `__reason` select that appears when the item is selected.
- **`.returns-form__methods`**: the refund options as large radio `__method` cards.
- **`.returns-form__footer`**: the live `__summary` and the submit button.

## Accessibility and Usability

- The steps are two `fieldset`s with numbered `legend`s, so screen reader users hear the question before the options.
- The product name is the checkbox label, and the variant and price are linked as its description (`aria-describedby`).
- The reason selects have hidden context ("Reason for returning Linen Overshirt"), and they're `required` only for the selected items.
- The summary is a polite live region: it says how many items are selected and the estimated refund, and the submit error ("Select at least one item") appears there with the focus on the first checkbox.

## Technical Details

- The selected cards and the reason fields use `:has(:checked)`, so the visual state needs no JavaScript; the script only calculates the refund and sets `required`.
- The store credit option adds its `data-bonus` percentage to the estimate. Calculate the real refund on the server.
- Without JavaScript, the form still posts everything; the reasons are visible in browsers without `:has()` support.
