<p class="lead">Highlighted notes for documentation and articles: info, tip, warning and danger.</p>

## Technical Details

- It is an `aside` with an `aria-label`, so it is a labelled complementary region and the type isn't conveyed by color alone (the title and the icon say it too).
- One custom property (`--callout-color`) colors the border, the icon and the tinted background (`color-mix()`); add a type with one line.
- The thicker edge uses `border-inline-start-width`, so it moves to the right in RTL.
- Callouts are static content; for dismissible system messages, use the [Alert](/ui/feedback/alert/) or the [Banner](/ui/feedback/banner/).
