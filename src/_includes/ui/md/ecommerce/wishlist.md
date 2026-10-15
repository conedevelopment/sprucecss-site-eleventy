<p class="lead">Saved products with their price, stock status and actions: move to the cart, get notified when an item is back in stock, or remove it.</p>

## Anatomy

- **`.wishlist__header`**: the title with the item `__count` and a share button.
- **`.wishlist__items`**: a grid of `__card`s (an `article` per product) with the `__image`, the `__name` link, the `__variant`, the `__price` (with the original price in `del` on sale), the `__stock` status and the `__actions`.
- **`.wishlist__empty`**: the empty state with a link back to the shop.

## Accessibility and Usability

- Every button has hidden text with the product name ("Remove Ceramic Pour-Over from the wishlist"), so a list of identical buttons stays clear.
- After moving or removing an item, the focus moves to the next item's link (or the empty state's link), because the clicked button is gone; the change is announced in a polite live region.
- The sale price has hidden "Sale price" and "Original price" labels, because a strikethrough isn't announced.
- The stock status is written out ("Only 2 left"); the colored dot only repeats it. An out-of-stock item offers a "Notify me" toggle (`aria-pressed`) instead of an action that can't work.

## Technical Details

- The grid uses `auto-fill`, so a short list keeps the card size instead of stretching one card across the row.
- The share button uses the Web Share API where it's available, and copies the link otherwise.
- Persist the changes with your API; the script only updates the page.
