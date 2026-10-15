<p class="lead">A bento grid of feature tiles in different sizes, each with a small decorative visual.</p>

## Technical Details

- A three-column grid from the `md` breakpoint; tiles can span with the `wide` (2 columns), `tall` (2 rows) and `large` (2×2) sizes. `grid-auto-flow: dense` fills the gaps.
- The visuals (chart, stat, swatches, code, people) are pure CSS, decorative (`aria-hidden`) and built from the color tokens, so they adapt to every style.
- Each tile is a list item with a heading; the order of the items is the reading order.
- Override the content with `bentoBlock`.
