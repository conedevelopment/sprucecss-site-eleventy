<p class="lead">The delivery status of an order: the estimated arrival, a progress tracker, the shipment details and the scan history from the carrier.</p>

## Anatomy

- **`.order-tracking__header`**: the order number, the arrival date as the title and a link to the carrier's tracking page.
- **`.order-tracking__steps`**: an ordered list of steps (`--done`, `--current`, `--todo`). The `--progress` custom property (in percent) fills the line between the dots.
- **`.order-tracking__details`**: a description list with the carrier, the tracking number and the address.
- **`.order-tracking__history`**: a `details` element with the carrier events, newest first.

## Accessibility and Usability

- The current step has `aria-current="step"`, and every step has a hidden state ("Completed:", "Current step:", "Upcoming:"), because the filled dots and the check marks are visual only.
- The most important answer, "when will it arrive?", is the heading; the rest is supporting detail.
- The link to the carrier has hidden text that says it leads to another site.
- The long scan history is collapsed by default, but it's still a semantic ordered list with `time` elements.

## Technical Details

- No JavaScript: render the states and the `--progress` value on the server (for example, 50% at the third of five steps).
- On phones, the steps are vertical; from the `sm` breakpoint, they're horizontal, and the line between them is drawn with `::before` (the track) and `::after` (the progress).
- Keep it on the order page and link to it from the shipping confirmation email.
