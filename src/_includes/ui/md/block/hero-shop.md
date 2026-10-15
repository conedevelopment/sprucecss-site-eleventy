<p class="lead">A store front hero: the campaign on a large photo with two calls to action, and two smaller tiles that lead into a category or an offer.</p>

## Technical Details

- The photos are real `img` elements behind the text (`object-fit: cover`, stacked with `z-index` inside an isolated tile), so they get `alt`, lazy loading and responsive images like any image. The main photo is the hero image, so it loads with `fetchpriority="high"`.
- A dark gradient shade keeps the white text readable on any photo, in every style; the tiles redefine the heading and text color tokens for their subtree.
- The campaign title is the only `h1`. The side tiles are clickable cards (`a11y-card-link()`) with the link on their `h2`; the "Shop bags" line is decorative.
- On wide screens the tiles stack next to the campaign; on tablets they sit in a row under it.
- Override the content with `heroShopBlock`.
