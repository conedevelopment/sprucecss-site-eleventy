<p class="lead">An online store header: an announcement and utility bar, the logo, a wide product search, the account, wishlist and cart links with a counter, and the category navigation.</p>

## Anatomy

- **`.site-header-store__bar`**: a dark strip with a message and the utility `__links` (from the `md` breakpoint).
- **`.site-header-store__main`**: the `__logo`, the `__search` form and the `__actions` (icon links with a `__label` and the cart `__count`). On small screens, the search moves to its own full-width row.
- **`.site-header-store__navigation`**: the categories in a [Site Navigation](/ui/navigation/site-navigation/), with a "Categories" button on small screens.

## Accessibility

- The search is a `form` with `role="search"` (a search landmark) and a hidden label; the submit button has hidden text.
- The action labels (Account, Wishlist, Cart) are visible from `md` and visually hidden below it, so the icon links always have a name. The cart counter reads "Cart, 3 items".
- The category navigation is labeled "Categories", so it's distinct from other navigation landmarks on the page.
- The icon links are at least 2.75rem (44px) in both directions.

## Technical Details

- The main row is a grid with named areas: `logo search actions` from `md`, and `logo actions` / `search search` below it.
- The sale link keeps its red color with `!important`, because the navigation sets the link colors with a more specific selector.
- Connect the search to the [Autocomplete](/ui/form/autocomplete/) for suggestions, and update the cart count when the cart changes (see [Mini Cart](/ui/ecommerce/mini-cart/)).
- The cart link has `data-drawer-open="cart-drawer"`: with the [Cart Drawer](/ui/ecommerce/cart-drawer/) on the page (and the drawer script), it opens the cart in place; without them it's a normal link to the cart page.
- "Women" and "Men" have dropdowns with their subcategories.
