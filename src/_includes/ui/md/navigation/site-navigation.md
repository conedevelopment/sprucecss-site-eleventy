<p class="lead">The main navigation of a site: a row of links with optional dropdowns on wide screens and a menu button with a collapsible panel on small screens.</p>

## Anatomy

- **`.site-navigation`** is a `nav` labelled "Main"; add `data-site-navigation` for the script.
- **`.site-navigation__btn`** is the menu button (`aria-controls`, `aria-expanded`), with an icon that morphs into a close icon.
- **`.navigation-menu`** is the list of links; the current page has `aria-current="page"`.
- **`.site-navigation__item`** is a menu item with a dropdown: a **`.site-navigation__toggle`** button (with a `__chevron`) and the **`.site-navigation__submenu`** list of links.

## Accessibility

- It's a [disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) button, not an ARIA menu: the links stay plain links in the tab order.
- The button has a visually hidden "Menu" label (earlier versions used "Main", the name of the navigation).
- <kbd>Esc</kbd> closes the panel and returns the focus to the button; it also closes when the focus leaves the navigation or a link is chosen.
- The dropdowns are disclosures too: the toggle is a `button` with `aria-expanded` and `aria-controls`, and the submenu links follow it in the tab order. Only one is open at a time; <kbd>Esc</kbd> closes the open one first (and moves the focus to its toggle), and it also closes when the focus or a click leaves it.
- The toggle is highlighted when its submenu contains the current page.
- The current page is marked with `aria-current="page"` and an underline, not only a color.

## Technical Details

- Progressive enhancement: the script adds `data-enhanced`, and only then does the CSS hide the links behind the button. Without JavaScript, the links are always visible.
- The script handles every navigation on the page, and closes the panel when the viewport grows past the `md` breakpoint (`matchMedia` change event).
- The panel is positioned below the header with logical properties (`inset-block-start`, `inset-inline`); change `--inset-block-start` to adjust it.
- On wide screens, a submenu is a dropdown panel under its toggle; in the small-screen panel, it's an indented list. Without JavaScript, the submenus open on hover and focus (`:focus-within`).
- The toggle opens a submenu but doesn't go anywhere itself; if the parent has its own page, add it as the first link of the submenu (like "View all").
- The animations of the icon and the chevron are turned off for reduced motion.
