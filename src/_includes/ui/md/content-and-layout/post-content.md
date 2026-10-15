<p class="lead">The body of an article: text in a comfortable reading column, with images, videos, tables and galleries that can break out wider, and consistent vertical rhythm between them.</p>

## Anatomy

- **`.post-content`** wraps the content from your editor or Markdown; it styles plain elements, so no classes are needed inside.
- Text elements (paragraphs, headings, lists, quotes, `details`, `pre`) are centered at 47.5rem; media and tables take the full width of the container.

## Accessibility

- Every image has an `alt` text that describes it in its context, and the embedded video has a `title`, which is the iframe's accessible name.
- The headings get a `scroll-margin`, so a linked heading isn't glued to the top of the viewport (or hidden under a sticky header).
- The reading column keeps lines around 70–80 characters, which is easier to read.

## Technical Details

- The vertical rhythm comes from [layout-stack](/docs/sass/mixins/#layout-stack), with larger gaps around media and headings and smaller ones after headings.
- The `:is()` selector keeps the exceptions short; add your own elements to the lists.
- Iframes are responsive with `aspect-ratio: 16 / 9`. The video uses `youtube-nocookie.com` and `loading="lazy"`.
- It uses the [Gallery](/ui/content-and-layout/gallery/) component for the image grid.
