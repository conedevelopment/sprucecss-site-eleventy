<p class="lead">A dependency-free donut chart with a total in the middle and a legend with the values. The ring is a single CSS <code>conic-gradient</code>.</p>

## Anatomy

- **`.donut-chart__ring`**: the ring with the total (`__total`) in the middle. The segments are set with cumulative custom properties: `--segment-1` is the end of the first segment, `--segment-2` the end of the second, and so on (42%, 42% + 28% = 70%, 70% + 18% = 88%); the last segment fills the rest.
- **`.donut-chart__legend`**: a list of `__key` items with a swatch, the label and the value. The *n*th key gets the *n*th segment color.

## Accessibility and Usability

- The legend holds the data as text, so screen readers get "Organic search, 42%" for every segment; the ring itself is only a background.
- The ring colors use the alert tokens next to the primary color. Because the values are written out in the legend, the chart doesn't rely on telling the colors apart.
- Keep a donut to four or five segments; group the rest into "Other". For more categories, use the [Bar Chart](/ui/dashboard/bar-chart/).

## Technical Details

- The hole is a `mask` with a `radial-gradient`; change the size and the ring width with `--donut-chart-size` (default `11rem`) and `--donut-chart-thickness` (default `1.5rem`).
- The colors are `--donut-chart-color-1` to `--donut-chart-color-4`. For more segments, add a color, a `--segment-*` stop to the gradient and raise the loop in the SCSS.
- Calculate the cumulative stops on the server (or in your template), so no JavaScript is needed.
