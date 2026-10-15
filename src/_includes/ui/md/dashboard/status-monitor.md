<p class="lead">A service status panel with the overall state, the current state of every service and its uptime history for the last 30 days.</p>

## Anatomy

- **`.status-monitor__overall`**: the summary banner (`--degraded`, `--outage`; operational by default).
- **`.status-monitor__service`**: the name, the `__status` (`--degraded`, `--outage`), the `__bars` (one `li` per day with `data-status`) and the `__summary` (uptime and incidents).

## Accessibility and Usability

- The state is always written out ("Degraded performance"); the colored dot is decorative.
- The 30 bars would be 30 extra stops for a screen reader, so the bar list is `aria-hidden` and the `__summary` says the same in one sentence ("Last 30 days: 99.82% uptime, 2 incidents"). Link the incidents to their reports in a real status page.
- The overall banner is a `role="status"` live region: update its text and screen readers announce the change without moving the focus.
- Every bar has a `title` with the date and the state for mouse users.

## Technical Details

- Dependency-free: the bars are a CSS grid with `grid-auto-flow: column`, so any number of days fills the width.
- The colors are the `--status-monitor-operational`, `--status-monitor-degraded` and `--status-monitor-outage` custom properties (the success, warning and danger alert colors).
- Poll your status endpoint and swap the HTML when you need live updates.
