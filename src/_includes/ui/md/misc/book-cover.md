<p class="lead">A book cover drawn with CSS only: a tilted front with a spine highlight and the page edges behind it. Use it for an ebook, a guide or a lead magnet without designing an image.</p>

## Technical Details

- The cover is one `role="img"` element with an `aria-label` ("The cover of … by …"), so screen readers hear one image, not the text pieces.
- The text scales with the cover: the cover is a size container, and the font sizes and paddings use `cqi` units.
- The colors come from the primary button tokens (`primary-background`, `primary-foreground`, `secondary-background`), so the cover follows every design style and the dark mode.
- Change the size with `--book-cover-inline-size` (or the `--sm` and `--lg` modifiers) and the angle with `--book-cover-tilt`. On hover the cover turns toward the reader, only when the user doesn't prefer reduced motion. The tilt and the spine mirror in RTL.
- Override the text with `bookCover` (`{ edition, title, subtitle, author, size }`).
