<p class="lead">A responsive site header with the logo, the main navigation (a menu button on small screens), a contact link and a call to action. The sticky version stays at the top with a translucent background.</p>

## Anatomy

- **`.site-header`** is the `header` element (the banner landmark). **`.site-header--sticky`** makes it stick to the top.
- **`.site-header__inner`** follows the container anatomy; **`.site-header__column`** groups the logo and the [Site Navigation](/ui/navigation/site-navigation/); **`.site-header__actions`** holds the email (from the `sm` breakpoint) and the button.
- A [Skip Link](/ui/misc/skip-link/) comes before the header.

## Accessibility

- The logo link's `alt` text says where it goes ("Cone home"), because the image is the only content of the link.
- The skip link lets keyboard users jump over the header to the main content (the `main` element, `#content` here).
- The sticky header only covers the page as much as it has to; add `scroll-padding-block-start` to the `html` element with its height, so in-page links and focused elements don't end up under it.

## Technical Details

- The header's minimum height is `--block-size` (4.5rem); the mobile navigation panel opens right below it.
- The translucent sticky background uses `color-alpha('background', 0.85)` with a backdrop blur, and the `sticky` level of the [z-index](/docs/sass/functions/#z-index) scale.
- Load the [Site Navigation](/ui/navigation/site-navigation/) script for the menu button.
- Override the links, the email and the action with `siteHeader` (`{ links: [{ label, href, current, children }], email, action: { label, href, icon } }`); the current link gets `aria-current="page"`. A link with `children` (`[{ label, href, current }]`) becomes a dropdown (see the [Site Navigation](/ui/navigation/site-navigation/)).
