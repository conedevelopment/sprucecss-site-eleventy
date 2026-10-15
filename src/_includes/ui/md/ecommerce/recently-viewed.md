<p class="lead">A horizontally scrolling row of the products the customer has looked at, with arrow buttons and a "Clear history" action.</p>

## Anatomy

- **`.recently-viewed__header`**: the title, the arrow `__controls` and the clear button.
- **`.recently-viewed__track`**: a list laid out as one scrolling row (a grid with `grid-auto-flow: column` and scroll snapping); every `__item` is one link with the image, the `__name` and the `__price`.

## Accessibility and Usability

- The track is a native scroll container: it works with touch, the trackpad, the scrollbar and the keyboard. It's focusable (`tabindex="0"`) and labeled by the heading, so keyboard users can scroll it with the arrow keys, and the links inside are reachable with Tab anyway.
- The arrow buttons are an extra for mouse users. They're disabled at the start and the end, and hidden when everything fits (and without JavaScript).
- One link per product (the image is decorative, `alt=""`), so each product is announced once.
- The smooth scrolling is only on when the user doesn't prefer reduced motion.
- "Clear history" replaces the row with a message and moves the focus to it, so the focus isn't lost with the removed button.

## Technical Details

- The column width shows five items on a wide screen, with a 10rem minimum; a partly visible item at the edge hints that there's more to scroll.
- The arrows scroll by 80% of the visible width, so one item stays visible as an anchor. In RTL, `scrollLeft` is negative, so the script uses its absolute value and flips the direction.
- A `ResizeObserver` updates the arrows when the container size changes.
- Store the history in `localStorage` or on the account, and render the latest items first.
