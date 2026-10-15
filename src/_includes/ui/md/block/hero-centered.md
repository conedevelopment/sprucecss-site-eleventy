<p class="lead">A centered hero with an announcement pill, a big headline, two calls to action, social proof and a product screenshot in a browser frame.</p>

## Technical Details

- Use it at the top of a page; it holds the page's only `h1`.
- The soft glow is a radial gradient of the primary color (`color-alpha()`), so it follows every style and the dark mode.
- The browser frame dots are decorative (`aria-hidden`); describe the screenshot in its `alt`.
- It combines the [Avatar](/ui/misc/avatar/) group for the social proof.
- Override the content with `heroCenteredBlock`.
