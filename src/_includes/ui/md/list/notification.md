<p class="lead">A notification feed with unread markers, status icons, relative times and a "Mark all as read" action.</p>

## Technical Details

- Each row is fully clickable through the `a11y-card-link` mixin; the focus ring is drawn on the whole row.
- Unread items are bold and marked with a dot; screen readers get a hidden "Unread:" prefix (the dot is decorative).
- "Mark all as read" removes the unread state and updates the counter.
- The status colors come from the `alert` color group, mixed with `color-mix()` for the icon background.
