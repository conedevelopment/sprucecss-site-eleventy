<p class="lead">Line and bar chart cards powered by <a href="https://www.chartjs.org/">Chart.js</a>. The data comes from an HTML table in the card, and the chart takes its colors and font from the Spruce tokens, so it follows the dark mode and every design style.</p>

## Dependency: Chart.js

This is the only Spruce UI component with an external dependency. Drawing interactive charts (axes, scaling, tooltips, hover states, resizing) is a lot of code, and [Chart.js](https://www.chartjs.org/) is the most widely used open-source charting library: MIT licensed, about 70 KB gzipped (version 4.5.1), a single file from the CDN (its only dependency, a small color helper, is bundled), renders to `canvas`.

If you only need simple, static charts, use the dependency-free [Bar Chart](/ui/dashboard/bar-chart/), [Donut Chart](/ui/dashboard/donut-chart/) or the sparkline of the [Stat](/ui/card/stat/) card instead.

### Install from a CDN

Load Chart.js before the component script. Pin the version, so an update can't break your charts:

```html
<script defer src="https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js"></script>
<script defer src="/js/chart.js"></script>
```

Both scripts are `defer`red, so they run in this order after the HTML is parsed.

### Install with npm

```shell
npm install chart.js
```

Then expose the `Chart` object before the component script runs (or replace the global in the script with the import):

```js
import Chart from 'chart.js/auto';

window.Chart = Chart;
```

`chart.js/auto` registers every chart type and plugin. For a smaller bundle, register only what the component uses, see the [Chart.js integration guide](https://www.chartjs.org/docs/latest/getting-started/integration.html):

```js
import { Chart, LineController, BarController, LineElement, BarElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } from 'chart.js';

Chart.register(LineController, BarController, LineElement, BarElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);
window.Chart = Chart;
```

The script is written for Chart.js 4.

## Anatomy

- **`.chart-card__header`**: the title, the headline value with the change, and the legend.
- **`.chart-card__canvas`**: the `canvas` with `data-chart="line"` or `data-chart="bar"` and `data-chart-table` pointing to the `id` of the data table. Its height is set here (`16rem`); the chart fills it.
- **`.chart-card__data`**: a `details` element with the data `table`. The row headers are the labels (x axis), the column headers are the series, the cells are the values. Add `data-chart-prefix="$"` to the table to prefix the values in the axis and the tooltip.

## Accessibility and Usability

- A canvas is invisible to screen readers, so it has `role="img"` and an `aria-label` that says what the chart shows and where the data is.
- The data table is always in the document: everyone can read the exact values, and it works as a fallback. Without JavaScript (or if Chart.js doesn't load), the canvas is hidden and the table stays open; the script closes it once the chart is drawn.
- The legend is HTML (not drawn into the canvas), so it is readable and translatable. The second line series is dashed, so the series are distinguishable without color.
- The animation is turned off when `prefers-reduced-motion: reduce` is set.

## Technical Details

- **Colors:** the script reads the computed colors of the legend swatches (`.chart-card__swatch`), the title, the border and the surface of the card. Change the series colors in the SCSS, and the chart follows. Values like `color-mix()` or `oklch()` are converted to `rgba()` through a 1×1 canvas, because Chart.js only parses the classic color formats.
- **Themes and styles:** a `MutationObserver` watches the `class`, `data-theme-mode` and `data-spruce-style` attributes, and the charts redraw with the new colors. Adapt the attribute list if your theme switcher uses something else.
- The card grid (`.chart-cards`) puts the cards side by side when there is room (`layout-grid` with a `22rem` minimum).
