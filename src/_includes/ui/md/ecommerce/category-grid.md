<p class="lead">"Shop by category" tiles with a photo, the category name and the number of products, with the first category featured as a larger tile.</p>

## Anatomy

- **`.category-grid__header`**: the title and a link to all categories.
- **`.category-grid__list`**: a grid of `__item`s; each is one `__link` with the image, the `__name` and the `__count`. The first item has the `--featured` modifier.

## Accessibility and Usability

- Every tile is one link, and its text ("Bags, 64 products") is its accessible name; the image is decorative (`alt=""`).
- The text sits on a dark gradient, so it stays readable on any photo; the focus ring is offset from the rounded tile.
- The zoom on hover only runs when the user doesn't prefer reduced motion.

## Technical Details

- Two columns on small screens (the featured tile spans both), and four from the `md` breakpoint, where the featured tile spans two columns and two rows. With five categories, the grid is full on both layouts.
- The rows have a fixed height (`grid-auto-rows`), and the images cover the tile with `object-fit`, so photos of any size line up.
