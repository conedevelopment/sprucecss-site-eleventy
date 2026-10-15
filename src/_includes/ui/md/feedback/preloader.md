<p class="lead">Small loading indicators for pending content and buttons: a spinning circle and three bouncing bars, in three sizes and any color.</p>

## Variations

- **`.preloader--circle`**: a rotating ring.
- **`.preloader--bars`**: three bars with a sequenced animation.
- **`.preloader--sm`** and **`.preloader--lg`**: 1rem and 2.5rem instead of 1.5rem.

## Accessibility

- A standalone preloader has `role="status"` and a visually hidden text ("Loading the report"), so screen readers announce what is loading. Be specific when you can.
- Inside a button, the preloader is decorative (`aria-hidden="true"`), and the button text says what's happening ("Saving…"). Use `aria-disabled="true"` instead of `disabled`, so the button stays focusable and its new label is read.
- With reduced motion, the animation slows down (circle) or turns into a gentle fade (bars) instead of stopping: a frozen loader would look like a broken page.

## Customization

Every instance can be customized with custom properties:

- `--size`: the width and height (1.5rem).
- `--color`: the color (the current text color by default, so it matches its context).
- `--animation-duration`: the length of one loop (1s).
- `--border-width`: the ring width of the circle (a sixth of the size).

## Technical Details

- The old class names (`.preloader--circle`, `.preloader--bars` without `.preloader`) still work.
- The ring is drawn with logical border colors, and it rotates with the `rotate` property.
- For a whole-page loading state, consider a [Skeleton](/ui/feedback/skeleton/) instead: it shows the shape of the content that's coming.
