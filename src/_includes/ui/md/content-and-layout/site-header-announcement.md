<p class="lead">A product site header with a dismissible announcement bar above it, the navigation centered between the logo and the "Log in" and "Get started" buttons.</p>

## Anatomy

- **`.site-header-announcement__banner`**: a region with a [Badge](/ui/misc/badge/), the message, a link and the `__close` button. Its `data-announcement` id identifies the message.
- **`.site-header-announcement__inner`**: the `__logo`, the [Site Navigation](/ui/navigation/site-navigation/) and the `__actions`.

## Accessibility and Usability

- The banner is a labeled region ("Announcement"), so it can be found and skipped like the other landmarks; it comes before the header, after the [Skip Link](/ui/misc/skip-link/).
- The close button has hidden text ("Dismiss the announcement"); after closing, the focus moves to the logo link instead of getting lost.
- The arrow after the link text is decorative (`aria-hidden`).
- On small screens, "Log in" moves into the menu, and "Get started" stays visible next to the menu button.

## Technical Details

- Set the message with an `announcement` object (`id`, `badge`, `text`, `link`).
- A dismissed announcement is saved in `localStorage` by its id and stays hidden; publish a new message with a new id to show it again. Without JavaScript, the banner shows and the close button stays hidden.
- To avoid a flash of a dismissed banner, hide it with an inline script in the `head`, or render it on the server based on a cookie.
- The header is translucent with a backdrop blur; add `position: sticky` and `inset-block-start: 0` to keep it at the top.
- "Product" and "Solutions" have dropdowns (the [Site Navigation](/ui/navigation/site-navigation/) submenus).
