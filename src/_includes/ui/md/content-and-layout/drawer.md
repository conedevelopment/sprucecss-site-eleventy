<p class="lead">An off-canvas drawer (side sheet) for filters, a cart or a mobile menu, built on the native <code>&lt;dialog&gt;</code> element.</p>

## Technical Details

- `showModal()` gives you focus trapping, the <kbd>Esc</kbd> key, the inert background and the `::backdrop` for free.
- Any element with `data-drawer-open="id"` opens the drawer; any element with `data-drawer-close` closes it. A link opener (`<a href="/cart" data-drawer-open="cart-drawer">`) still goes to its page without JavaScript. A click on the backdrop closes it too, but a drag that starts in the panel (a range input, a text selection) and ends on the backdrop doesn't.
- Focus returns to the opener when the drawer closes (the browser does it for `dialog`).
- The drawer slides in **and out** with a CSS transition (`@starting-style`, `overlay` and `display` with `allow-discrete`), so the <kbd>Esc</kbd> key animates too. It runs only when the user doesn't prefer reduced motion, and it mirrors in RTL (`--drawer-offset`).
- The page behind the open drawer doesn't scroll (`html:has(.drawer[open])`), and the body of the drawer scrolls on its own (`overscroll-behavior: contain`).
- Change the width with the `--drawer-inline-size` custom property.
