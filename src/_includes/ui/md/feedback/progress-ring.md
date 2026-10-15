<p class="lead">A circular progress indicator for a percentage: profile completion, quotas or course progress.</p>

## Technical Details

- One custom property drives it: `style="--value: 72;"`. The circle uses `pathLength="100"`, so the value is the dash length directly; no JavaScript or math needed.
- The SVG is decorative; the number is exposed as an image with a full label ("Profile complete: 72%"), and the visible caption describes it. For a live, changing value, use a native [`progress`](/docs/elements/progress-and-meter/) element instead.
- Sizes and colors are custom properties too (`--size`, `--stroke`, `--color`), with `--sm`, `--success` and `--warning` modifiers. The direction mirrors in RTL.
