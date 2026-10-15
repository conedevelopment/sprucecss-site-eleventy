<p class="lead">The shared heading of the blocks: an optional eyebrow, the title and a short introduction.</p>

## Technical Details

- Set a `heading` object before you include it: `{ eyebrow, title, text, id, align }`. The `id` labels the parent `section` (`aria-labelledby`).
- Centered by default; `align: 'start'` (the `.block-heading--start` modifier) aligns it to the start for two-column layouts.
- The title size is fluid with `responsive-font-size()`.
- Every [block](/blocks/) uses it, so their headings look the same in every style.
