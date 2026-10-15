<p class="lead">An audit log of who did what and when, grouped by day, with the type of the event, the IP address and the device, and an instant filter.</p>

## Anatomy

- **`.activity-log__filter`**: a small `GET` form with the event type select.
- **`.activity-log__day`**: a `section` per day, labelled by its date, with an ordered list of `__item`s.
- **`.activity-log__item`**: the type `__icon` and the `__body` with the `__text` (actor, action, object) and the `__meta` (time, IP address, device).

## Accessibility and Usability

- The days are labelled sections with a `time` element, so screen reader users can jump between them, and machines can read the dates.
- The type of each event is hidden text ("Security event, 7:30 AM"), because the icon is decorative.
- The filter result is announced in a live region ("2 events shown"); when nothing matches, an empty message is shown instead of a blank area.
- Write the entries in plain language with the names of the people and objects, and link the objects (orders, products) to their pages.

## Technical Details

- **Progressive enhancement:** without JavaScript, the filter form submits (`?type=security`) and the server returns the filtered log. With JavaScript, the "Filter" button is hidden and the list filters instantly; the days without a matching event are hidden.
- "Show older activity" is a link to the next page; replace it with a "load more" request if you prefer.
- Keep the security events (failed sign-ins, two-factor changes) visible to the account owners; they are the reason audit logs exist.
