<p class="lead">The toolbar above a product listing: the number of results, a filters button, the sort order and a grid/list view switch.</p>

## Anatomy

- **`.listing-toolbar__bar`**: a `GET` form with the `__count`, the `__filters` link (with the active filter `__badge`), the `__sort` select and the `__view` buttons.
- **`.listing-toolbar__results`**: the listing (here a demo); the `--list` modifier switches it to the list layout.

## Accessibility and Usability

- The view switch is a `role="group"` of two toggle buttons (`aria-pressed`), with hidden text for the icons ("Grid", "List").
- Sorting is announced in a polite live region ("Sorted by Price: low to high"), because the change happens out of sight.
- The filter badge has hidden text ("2 active"), so the link reads "Filters, 2 active".
- The product cards are clickable as a whole with the `a11y-card-link` mixin, while the title link stays the only link for assistive technology.

## Technical Details

- **Progressive enhancement:** without JavaScript, the "Apply" button submits the sort (`?sort=price-asc`), and the server sorts. With JavaScript, the button is hidden, and the select sorts the items on the page by their `data-price`, `data-rating`, `data-date` and `data-order` attributes. With pagination, sort on the server instead (reload the page or fetch the results).
- The chosen view is saved in `localStorage` (in a `try` block, because the storage can be unavailable) and restored on the next visit. The view buttons need JavaScript, so they're hidden without it.
- Point the filters link to the [Product Filters](/ui/ecommerce/product-filters/) (or a [Drawer](/ui/content-and-layout/drawer/) with them on small screens).
