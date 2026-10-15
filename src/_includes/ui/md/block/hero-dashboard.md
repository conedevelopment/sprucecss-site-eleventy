<p class="lead">A product hero for a SaaS: the headline and the calls to action above a browser window that shows the real dashboard, built from live components instead of a screenshot.</p>

## Technical Details

- It combines the [Metric Grid](/ui/dashboard/metric-grid/) and the [Funnel Chart](/ui/dashboard/funnel-chart/) inside a browser frame. Because they're real components, the preview follows the dark mode and every design style, and it's sharp on every screen.
- The preview is a picture of the product, not part of the page content: the frame is `aria-hidden="true"` and `inert`, so screen readers skip it and its links can't be focused. The headline and the lead describe the product instead.
- The frame is cut off at the bottom of the block (a maximum height and a fade into the background), so it works as a teaser of a longer screen.
- The title is the page's `h1`; use this block once, at the top.
- Override the copy with `heroDashboardBlock`, and the preview data with `metricGrid` and `funnelChart` objects.
