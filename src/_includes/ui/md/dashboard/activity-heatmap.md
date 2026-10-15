<p class="lead">A calendar heatmap that shows the daily activity (orders, commits, sign-ups) of the last weeks. Dependency-free: a table with one cell per day and five intensity levels.</p>

## Anatomy

- **`.activity-heatmap__grid`**: a `table` with the weeks as columns and the weekdays as rows. Every cell has a `data-level` from `0` (none) to `4` (most) and the exact value as hidden text.
- **`.activity-heatmap__day--hidden`**: hides the row label visually (only Mon, Wed and Fri are shown) but keeps it for screen readers.
- **`.activity-heatmap__legend`**: the "Less – More" scale, using the same `data-level` colors.

## Accessibility and Usability

- It's a real data table with a caption and row and column headers, so screen reader users can move through it cell by cell and hear "Tuesday, Sep 14, Sep 15: 12 orders".
- The intensity is not only a color: every cell holds its value as text. The legend is decorative (`aria-hidden`).
- On small screens the table scrolls; the scroll container is a focusable, labelled region, so keyboard users can scroll it too.

## Technical Details

- Calculate the levels on the server: split your range into four buckets (for example by quartiles) and print `data-level` for every day. The demo markup was generated, which is what you'd do in your template.
- The levels are `color-alpha('primary', …)`, so the heatmap follows the primary color of every style and the dark mode.
- Change the cell size and the gap with `--activity-heatmap-cell` (default `1.125rem`) and `--activity-heatmap-gap` (default `3px`).
