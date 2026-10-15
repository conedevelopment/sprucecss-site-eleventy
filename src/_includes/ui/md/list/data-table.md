<p class="lead">A sortable, filterable data table built on Spruce's `.table` styles and a few lines of vanilla JavaScript.</p>

## Technical Details

- The sort controls are real buttons inside the column headers; the header's `aria-sort` attribute reflects the state (`ascending`, `descending`, `none`), which screen readers announce.
- Text columns sort with `Intl.Collator` (locale and number aware); `data-type="date"` columns sort chronologically.
- The filter input updates a polite live region with the number of matching rows and shows an empty-state message when nothing matches.
- The table is wrapped in `.table-responsive`, so it scrolls horizontally on small screens. Without JavaScript, it is a regular readable table.
