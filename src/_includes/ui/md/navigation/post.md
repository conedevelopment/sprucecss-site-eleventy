<p class="lead">Previous and next links at the end of an article, with the titles of the neighboring posts, so readers can keep going.</p>

## Anatomy

- **`.post-navigation`** is a `nav` with its own label ("More posts"), so it's distinguishable from the main navigation.
- **`.post-navigation-item`** is a link card with `--prev` or `--next`; each has an arrow (`__icon`), a small label (`__label`) and the title (`__title`).

## Accessibility

- The visible label ("Previous post") and the title together make the link name, so screen reader users hear where it goes, not just "Previous".
- The arrows are decorative (`aria-hidden="true"`) and flip in RTL.
- `rel="prev"` and `rel="next"` describe the relation for browsers and tools.

## Technical Details

- A two-column grid from the `sm` breakpoint; when there's only a next post, it stays in the end column (`grid-column: -2`).
- The whole card is the link, which gives a large target; the hover and focus states use the primary color.
- The colors come from the tokens, so it no longer needs the site's `navigation` color group.
