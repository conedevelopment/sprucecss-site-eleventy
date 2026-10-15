<p class="lead">Messages that inform about the state of the page or the result of an action: four types, a one-line and a detailed version, an icon and an optional dismiss button.</p>

## Variations

- **`.alert--info`**, **`--success`**, **`--warning`**, **`--danger`**: one modifier for every color of the `alert` group in `$colors`, generated with a loop.
- A single line (`.alert__text`) or a title with more text (`.alert__caption`, `.alert__title`).
- Dismissible: add `data-alert` and a `.alert__close` button with `data-alert-close`.

## Accessibility

- Don't put `role="alert"` on messages that are in the HTML when the page loads: it's meant for urgent, dynamic messages, and screen readers would interrupt the user to read every alert at once. Static alerts are just content.
- For a message that appears after an action, insert it into a live region that's already on the page: `role="status"` for non-urgent results ("Saved."), `role="alert"` for errors that need attention. The demo button shows this.
- The type isn't communicated by color only: every type has its own icon, and the text should say what happened.
- The dismiss button has a visually hidden "Dismiss" label; after dismissing, the focus moves to the next control instead of being lost.

## Technical Details

- The colors come from the alert tokens with `color-mix()`, so the background and the border follow the dark mode and every style (earlier versions computed fixed light colors in Sass).
- Change the accent of any alert with the `--alert-color` custom property.
- The thicker start border uses `border-inline-start-width`, so it moves to the right in RTL.
