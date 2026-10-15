<p class="lead">A public status page block: the live status of every service, the reliability numbers of the last 90 days and a signup for incident emails.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), the [Status Monitor](/ui/dashboard/status-monitor/) (services, uptime bars and incidents) and the [Metric Grid](/ui/dashboard/metric-grid/) with reliability data.
- The Metric Grid gets its data from the block: pass any Metric Grid object as `metrics`. For response times and incidents, a drop is good news, so those metrics are `good` with a `down` trend.
- The overall status in the Status Monitor is a `role="status"` region, so a change is announced when the page updates it.
- Render the page on the server (or from a static status provider) so it works even when your app is down.
- Override the heading and the metrics with `statusBlock`.
