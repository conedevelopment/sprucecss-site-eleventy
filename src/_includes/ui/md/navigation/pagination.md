<p class="lead">Page links for long lists: previous and next, the first and last pages, the pages around the current one and ellipses for the gaps.</p>

## Variations

- **default**: buttons with the soft primary style; the current page is solid.
- **`.pagination--sm`**: smaller buttons, for comments or tables.

## Anatomy

- **`.pagination`** is a `nav` with a specific label ("Posts pagination"), so it's distinguishable from other navigations.
- **`.pagination__links`** is the list; every page is a **`.pagination__page-number`** link (generated with the `generate-btn` mixin, so it's sized like a button).
- **`.pagination__direction`** are the previous and next links, **`.pagination__ellipsis`** the gaps.

## Accessibility

- Every page link reads "Page 3" (with a visually hidden "Page"), and the current one has `aria-current="page"`.
- The previous and next links keep their text ("Previous page") for screen readers even on phones, where only the arrows are visible.
- On the first page, "Previous" isn't a link but a `span` with `aria-disabled="true"`: there's nowhere to go, so it shouldn't be in the tab order. The ellipses are hidden from screen readers.
- `rel="prev"` and `rel="next"` describe the relation of the pages.
- The links are at least 2.75rem wide, which is easy to tap.

## Technical Details

- The colors come from Spruce's [btn-variant-soft()](/docs/sass/mixins/#btn-variant-soft) mixin and the primary button tokens, so the custom `pagination` button colors aren't needed any more, and it follows the dark mode and every style.
- Show the first, the last and one or two pages around the current one; more makes the control hard to scan.
- The arrows flip in RTL.
