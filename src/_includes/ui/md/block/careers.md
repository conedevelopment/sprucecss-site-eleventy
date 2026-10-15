<p class="lead">A careers block with open positions and a team filter.</p>

## Technical Details

- Each row is fully clickable through the job title link (`a11y-card-link`), with a focus ring on the whole row.
- The team filter is a native `select`; the script filters the list and announces the number of positions in a polite live region. Without JavaScript, every job is listed.
- It combines the [Badge](/ui/misc/badge/) component for the employment type.
- Override the content with `careersBlock`.
