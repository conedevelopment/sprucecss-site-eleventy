<p class="lead">The header of an article: breadcrumb, a balanced title, a lead paragraph and the meta line with the author, categories, date and reading time.</p>

## Anatomy

- **`.post-heading`** follows the block anatomy: `.post-heading > .container > .post-heading__inner`.
- **`.post-heading__inner`** is a `layout-stack('m')` with the [Breadcrumb List](/ui/navigation/breadcrumb-list/), the `h1` title (`__title`), the lead (`__lead`) and the meta line (`__meta`, with the compact [Post Author](/ui/content-and-layout/post-author/)).

## Accessibility

- The breadcrumb comes before the title in the DOM, so the reading order is the same as the visual order: where you are, then what you're reading.
- The date is a `time` element with a visually hidden "Published on" in front of it, so it isn't read as a bare date.
- There's one `h1` on the page, and it's this title.

## Technical Details

- The breadcrumb scrolls horizontally on small screens without breaking the centered layout.
- The title uses `text-wrap: balance` and the lead `text-wrap: pretty`, which avoid single words on the last line.
- The title size is fluid with [responsive-font-size()](/docs/sass/functions/#responsive-font-size).
