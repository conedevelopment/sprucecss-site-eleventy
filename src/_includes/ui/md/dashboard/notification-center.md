<p class="lead">A notification inbox panel with an unread counter, an All/Unread filter and buttons to mark one or all notifications as read.</p>

## Anatomy

- **`.notification-center__header`**: the title with the unread [Badge](/ui/misc/badge/) and the "Mark all as read" button.
- **`.notification-center__filter`**: two toggle buttons (All, Unread).
- **`.notification-center__item`**: an `__icon` or an [Avatar](/ui/misc/avatar/), the `__body` (text and meta) and, on `--unread` items, the `__read` dot button.
- **`.notification-center__empty`** and **`__footer`**.

## Accessibility and Usability

- The unread dot is a real button with hidden text ("Mark as read: Deployment succeeded"), so it's reachable by keyboard and says what it does.
- After marking an item as read, its button is removed, so the focus moves to the next item's first control (or the "Mark all as read" button) instead of getting lost.
- The changes are announced in a polite live region ("Marked as read. 2 unread."), and the counter has a hidden "unread" text.
- The unread items have a tinted background and the dot; the dot alone carries the state for screen readers through its button.

## Technical Details

- The filter toggles the `hidden` attribute of the read items. It needs JavaScript, so it's hidden without it; the "Mark all as read" button can also submit a form to the server.
- Wire the buttons to your API and update the badge in the [App Shell](/ui/dashboard/app-shell/) header too.
