<p class="lead">The best-selling products of a period: a ranked list with the product, the units sold, the revenue and its share of the total.</p>

## Technical Details

- It's an ordered list, because the order is the ranking.
- The share bar is decorative (`aria-hidden`): the percentage is in the text, with a hidden "of the revenue". The bar uses one color, the primary, because it shows a magnitude, not a category.
- The bars are sized by the `--share` custom property (0–100), so they need no JavaScript.
- The thumbnails have an empty `alt`, because the product name is next to them.
- Override the content with `topProducts`.
