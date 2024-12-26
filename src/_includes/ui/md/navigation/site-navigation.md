---
title: 'Site Navigation'
order: 44
previewURL: 'https://ui.sprucecss.com/html/navigation/site-navigation-preview.html'
previewHeight: '20rem'
---

<p class="lead">The site navigation component is a simple hamburger toggle button on mobile controlled by the <code>aria-expanded</code> attribute.</p>

## Technical Details

- It uses `aria-expanded` attribute to control the state.
- The script uses `matchMedia` to check the viewport width.

## Resources

- [Marking elements expandable using aria-expanded](https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/expanded/)
- [Window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [breakpoint](/docs/sass/mixins#breakpoint)
