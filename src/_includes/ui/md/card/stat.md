<p class="lead">KPI cards with a value, the change versus the previous period and a sparkline.</p>

## Technical Details

- The direction of the change is written out for screen readers ("Increased by 12.4%"); the arrow and the color are only visual hints.
- The sparkline is an inline SVG `polyline` with `vector-effect="non-scaling-stroke"`, so the line keeps its width at any size. It is decorative (`aria-hidden`); expose the data in a table if it matters.
- The chart color follows the primary color of every style.
- For an animated counter, see the [Number Card](/ui/card/number/) or the [Stats block](/blocks/stats/).
