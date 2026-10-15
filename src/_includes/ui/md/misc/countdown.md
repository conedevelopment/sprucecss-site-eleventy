<p class="lead">A countdown timer for launches, sales and events.</p>

## Technical Details

- Set the end with `data-countdown-end` (an ISO date, like `2026-12-31T23:59:59Z`); the demo uses `data-countdown-days` relative to now.
- The visible timer is a `role="timer"` region with `aria-live="off"`, so screen readers aren't interrupted every second. A visually hidden text with the remaining time (in words) updates once a minute.
- `font-variant-numeric: tabular-nums` keeps the digits from jumping while they change.
- When the time is up, the component dispatches a `countdownend` event and shows zeros; swap the content there (for example, "The sale has ended").
