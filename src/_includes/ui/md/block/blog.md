<p class="lead">A "latest posts" block: a start-aligned heading with a "View all" link and a grid of post cards.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/) and the [Post Card](/ui/card/post/) components (the cards keep the post card markup and styles).
- Every card is an `article` with a machine-readable `time`; the whole card is clickable through the post card's link overlay.
- Override the content with `blogBlock` (`heading`, `action`, `posts`).
