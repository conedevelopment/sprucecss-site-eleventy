<p class="lead">A month calendar with events. On wide screens, it's a seven-column grid; on phones, it turns into an agenda list of the days with events. No JavaScript.</p>

## Anatomy

- **`.calendar__header`**: the month title (a `time` element), the previous/today/next links and a primary action.
- **`.calendar__weekdays`**: the decorative weekday row.
- **`.calendar__day`**: one `li` per day (`--outside` for the days of the neighboring months, `data-has-events` when it has events), with the `__date` and a list of `__event` links.
- **`.calendar__event`**: an event with an optional `time`; `--all-day` for full-day events and `--success`, `--warning`, `--info` for the categories.

## Accessibility and Usability

- The days are an ordered list, and every date has hidden context ("Sunday, October 4, today"), so the visual weekday columns aren't needed to understand it. The weekday row is `aria-hidden`.
- Today is marked with `aria-current="date"`, not only with the highlight.
- All-day events have hidden "All day:" text; the other events start with their time.
- The month navigation uses links (`?month=2026-11`), so it works without JavaScript and every month has a URL.

## Technical Details

- Render the days on the server: start on the Monday (or Sunday) before the 1st and fill complete weeks. The grid uses `repeat(7, minmax(0, 1fr))`, and the 1px gap on a border-colored background draws the cell borders.
- Long event titles are truncated with an ellipsis in the grid; the full title is in the link, and it wraps in the agenda layout.
- The agenda view hides the days without events with `:not([data-has-events])` below the `sm` breakpoint (today is always shown).
- The chevrons are mirrored in right-to-left languages.
