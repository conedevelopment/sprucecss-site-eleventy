<p class="lead">A dependency-free bar chart in two layouts: horizontal bars for rankings and vertical columns for time series. It is a plain list with the values written out, styled with CSS.</p>

## Anatomy

- **`.bar-chart`**: a `figure`; the `figcaption` holds the `__title` and the `__subtitle`.
- **`.bar-chart__items`**: an ordered list with the `--max` custom property (the largest value, or your scale's maximum).
- **`.bar-chart__item`**: one data point with its `--value`, a `__label`, a decorative `__bar` and the formatted `__value`. Add `__item--highlight` to emphasize one bar (like today).
- **`.bar-chart--column`**: the vertical variant. Set its height with `--bar-chart-block-size` (default `12rem`).

## Accessibility and Usability

- The data is real text: screen readers read "Backpacks, $4,820" for every item, and the text can be copied, translated and zoomed. The bar is `aria-hidden`.
- The highlighted column is marked with `aria-current="date"` and hidden text ("today, so far"), not only with the color.
- The day abbreviations are `abbr` elements with the full name.
- The grow animation runs only without `prefers-reduced-motion: reduce`.

## Technical Details

- The bar length is `calc(var(--value) / var(--max) * 100%)`, so you only print two numbers from your back-end: no JavaScript, no chart library. For interactive charts with axes and tooltips, see the [Chart](/ui/dashboard/chart/) component.
- The colors are the `--bar-chart-color` and `--bar-chart-track` custom properties (`primary` and `surface-muted` by default; the highlight uses `secondary`).
- The horizontal bars grow from the inline start, so they mirror in right-to-left languages.
