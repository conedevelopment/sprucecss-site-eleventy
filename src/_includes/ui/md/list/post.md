<p class="lead">A responsive grid of post cards for blogs, news and resource pages: one column on phones, two from the `sm` and three from the `md` breakpoint.</p>

## Anatomy

- **`.l-post-list`** follows the block anatomy: `.l-post-list > .container > .l-post-list__inner`.
- **`.l-post-list__inner`** is a `ul`, and every [Post Card](/ui/card/post/) is an `li`, so screen readers announce the number of posts.

## Accessibility

- The thumbnails have an empty `alt`: the card title next to them already says what the post is about, and repeating it would read the title twice.
- Each card has one link (stretched over the card), so the list doesn't create three tab stops per post.

## Technical Details

- The number of columns is the `--columns` custom property, changed at the breakpoints; set it on `.l-post-list__inner` to override.
- The images have `width`, `height` and `loading="lazy"`, which prevents layout shifts and saves bandwidth.
- Pair it with the [Pagination](/ui/navigation/pagination/) component for long lists.
