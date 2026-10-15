<p class="lead">A landing page hero block with an announcement badge, a fluid headline, a lead paragraph, two calls to action and a media column.</p>

## Technical Details

- The block is a `section` element labelled by its heading (`aria-labelledby`). Use only one `h1` per page.
- The title size is fluid with `responsive-font-size(4rem, 40, '5vw + 1rem')`: it shrinks by 40% on small screens.
- The two columns appear from the `lg` breakpoint; on smaller screens the image goes under the text.
- The actions use the `layout-cluster` mixin, so the buttons wrap gracefully.
- The image is above the fold (usually the Largest Contentful Paint), so it is not lazy-loaded and has `fetchpriority="high"`.
