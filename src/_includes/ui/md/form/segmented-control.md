<p class="lead">A segmented control (button group style toggle) for switching between a few mutually exclusive options.</p>

## Technical Details

- It is a group of native radio buttons in a `fieldset`, so the arrow keys move the selection and screen readers announce "1 of 3".
- The selected option is styled with `:has(:checked)`, and the focus ring with `:has(:focus-visible)`; no JavaScript needed.
- The legend is visually hidden; keep it so the group has a name.
- Use it for 2–5 short options. For more options, use a `select`.
