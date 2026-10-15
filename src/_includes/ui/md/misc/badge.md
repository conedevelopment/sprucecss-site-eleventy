<p class="lead">Small status labels, tags and counters.</p>

## Technical Details

- One custom property (`--badge-color`) drives the whole badge; the tinted background is a `color-mix()` of it, so a new color is one line: `.badge--brand { --badge-color: #{color('brand')}; }`.
- Modifiers: `--primary`, `--success`, `--warning`, `--danger`, `--info` (colors), `--solid`, `--outline`, `--count`, `--interactive` (for links).
- The badge size is relative (`em`), so it scales with its context, like inside a button.
- Counters need context for screen readers: add a hidden text like "12 unread messages". Never rely on the color alone to communicate a status.
