<p class="lead">Event cards with a date badge, an image, the event type, the place and the time.</p>

## Technical Details

- The date is a `time` element with a machine-readable `datetime`, so calendars and assistive technologies can use it.
- The whole card is clickable through the title link (`a11y-card-link`), with a focus ring on the card.
- The image is decorative (empty `alt`); the title carries the meaning.
- It combines the [Badge](/ui/misc/badge/) component.
