<p class="lead">A feature grid block: a heading and a responsive grid of icon cards.</p>

## Technical Details

- The content comes from a `featuresBlock` object (`heading` and `items` with `icon`, `title`, `text`); without it, the default copy renders. The home page templates override it.
- The heading is the [Block Heading](/ui/content-and-layout/block-heading/) component; the block is labelled by it.
- The items are a list (`role="list"` keeps the semantics) in one, two, then three or four columns from the `lg` breakpoint. The template picks three columns when the items fill rows of three but not of four (6 or 9 items), and four otherwise (4 or 8 items), so the rows are always full.
- The icons are decorative and live in a shared `block/icon.html` partial.
