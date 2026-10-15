<p class="lead">A breadcrumb trail that shows where the current page sits in the site's hierarchy, with links to every level above it.</p>

## Anatomy

- **`.breadcrumb`** is a `nav` labelled "Breadcrumb", so it's a separate landmark.
- **`.breadcrumb-list`** is an ordered list (`ol`), because the order of the levels matters.
- The last item is the current page, marked with `aria-current="page"`.

## Accessibility

- It follows the [WAI-ARIA Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/) pattern: a labelled `nav`, an ordered list and `aria-current="page"` on the last link.
- The separators are CSS pseudo-elements, so screen readers don't read "slash" or "greater than" between the levels.
- A long current title is truncated visually (24ch), but the full text is still in the DOM for screen readers.

## Technical Details

- On narrow screens, the list scrolls horizontally instead of wrapping (with Spruce's thin scrollbar).
- The separator is drawn with logical borders and rotates the other way in RTL.
- The colors come from the tokens (`text`, `muted`, `primary`); the old `breadcrumb` color group isn't needed.
- Add [BreadcrumbList structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) to show the trail in search results.
