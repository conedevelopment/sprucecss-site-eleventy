<p class="lead">A settings form split into labelled sections, with a sticky footer that tracks unsaved changes, and a danger zone for destructive actions.</p>

## Anatomy

- **`.settings-panel__section`**: a `section` with the `__intro` (title and description) on the side and the `__fields` next to it. Below the `md` breakpoint, they stack.
- **`.settings-panel__switch`**: a Spruce `.form-switch` with a description under it.
- **`.settings-panel__section--danger`**: the destructive actions, visually separated.
- **`.settings-panel__footer`**: the sticky footer with a status message, the "Discard" (`type="reset"`) and "Save changes" buttons.

## Accessibility and Usability

- Every section is labelled by its heading, so screen reader users can jump between them.
- The descriptions are connected to their fields with `aria-describedby`; the switches use `role="switch"` and are announced as on or off.
- The footer status is a `role="status"` live region: "You have unsaved changes" and "Your changes have been saved" are announced without moving the focus.
- The buttons are disabled while there is nothing to save, and the browser asks for confirmation before leaving the page with unsaved changes.
- The store address prefix and suffix (`https://`, `.shop`) are hidden from screen readers; the description under the field says the full address.

## Technical Details

- The script compares the serialized `FormData` with the last saved state, so changing a field back clears the "unsaved" state.
- On submit, the script prevents the page reload and dispatches a `settings:save` event with the `FormData`. Send it in a listener:

```js
form.addEventListener('settings:save', (event) => {
  fetch('/settings', { method: 'POST', body: event.detail.data });
});
```

- Without JavaScript, the form submits normally and the buttons are always enabled.
