<p class="lead">A vertical timeline for histories, roadmaps and processes: markers on a connecting line, with a date, a title and a description for each step.</p>

## Anatomy

- **`.l-timeline`** is an ordered list (`ol`), because the order matters.
- **`.l-timeline__item`** draws its marker with `::before`; the list's `::before` is the line.
- **`.l-timeline__content`** holds the date (`__date` with a `time` element), the title (`__title`) and any content.

## Customization

- `--size`: the size of the markers.
- `--line-size`: the width of the line and the marker ring.
- `--offset`: aligns the marker with the first line of text; it's calculated from the base line height.

Everything is in `em`, so the timeline scales with its font size.

## Technical Details

- The line and the markers are positioned with logical properties (`inset-inline-start`, `inset-block`), so the timeline mirrors in RTL.
- The marker ring uses the background color as a gap, so it works on any background color in the dark mode and every style.
- The decorative parts are pseudo-elements; screen readers read the list as a plain ordered list.
