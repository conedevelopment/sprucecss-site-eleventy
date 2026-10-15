<p class="lead">A row of key metrics (KPIs) with the current value, the change against the previous period and a sparkline of the trend.</p>

## Anatomy

- **`.metric-grid__header`**: the title and the period the numbers cover.
- **`.metric-grid__item`**: one metric with its `__label`, `__value`, `__delta` (arrow, change and comparison) and `__sparkline`.
- **`--good`** and **`--bad`** color the change and the sparkline green or red.

## Accessibility and Usability

- "Good" and "up" are different things: fewer refunds is a drop and good news, so the color follows `good`, and the arrow follows `trend`.
- The arrow is decorative; a hidden "Up" or "Down" before the change says the direction in words, so the color is never the only signal.
- The sparkline is decorative (`aria-hidden`): it shows the shape of the trend, the exact numbers live in the [Chart](/ui/dashboard/chart/) or a report.

## Technical Details

- The sparkline is an inline SVG `polyline` in a 100 × 100 box, built in the template from 0–100 values; `preserveAspectRatio="none"` stretches it to any size and `vector-effect: non-scaling-stroke` keeps the line width.
- The grid fits as many 13rem columns as the space allows.
- The sparkline keeps the time direction (left to right) in RTL too.
