<p class="lead">Two promotional banners side by side: a gift guide, a membership, a seasonal category. Each has a short pitch, a button and a photo.</p>

## Technical Details

- The banners are a list under a visually hidden `h2` ("Offers"); every banner has its own `h3`.
- The buttons have the banner title as hidden text, so two "Shop now" links stay distinguishable in a list of links.
- `brand: true` puts a banner on the primary button colors; it redefines the heading, text and muted color tokens and inverts its button, so it reads well in every style and in dark mode.
- The banners wrap with an auto-fit grid; on phones they stack.
- Override the content with `promoBannersBlock`.
