<p class="lead">The frame of an admin interface: a sidebar navigation, a sticky top bar with search and actions, and the main content area. Below the <code>md</code> breakpoint, the sidebar becomes an off-canvas panel.</p>

## Anatomy

- **`.app-shell__sidebar`**: the brand, the navigation (`.app-shell__menu` lists with optional `.app-shell__menu-title` groups) and the signed-in user.
- **`.app-shell__topbar`**: the menu toggle (mobile only), the search form and `.app-shell__actions`.
- **`.app-shell__content`**: the `main` element; put the [Page Header](/ui/dashboard/page-header/) and your widgets here.

## Accessibility and Usability

- The first focusable element is a skip link to the `main` element (which has `tabindex="-1"`, so it can receive the focus).
- The current page is marked with `aria-current="page"`; the counter badge has hidden text ("12 new").
- The menu toggle has `aria-controls` and `aria-expanded`. When the sidebar opens, the focus moves into it; `Escape` and a click on the backdrop close it and return the focus.
- The closed off-canvas sidebar is `visibility: hidden`, so its links are not reachable with the keyboard.

## Technical Details

- **Progressive enhancement:** the off-canvas behavior starts only when `dashboard/app-shell.js` adds the `.app-shell--enhanced` class. Without JavaScript, the sidebar stays in the flow above the content on small screens.
- The desktop sidebar is `position: sticky` and as tall as the shell. Change the size with the `--app-shell-sidebar-inline-size` (default `16rem`) and `--app-shell-block-size` (default `100dvb`) custom properties.
- The breakpoint in the script (`64em`) must match the `md` breakpoint of your Spruce configuration.
- The off-canvas sidebar slides from the inline start, so it comes from the right in right-to-left languages.
- Set the brand with `appShell` (`{ brand, title }`), and fill the main area with `appShellContent`: capture your page content with `{% raw %}{% set appShellContent %}…{% endset %}{% endraw %}` before the include. Without it, the shell shows a title and placeholders.
