<p class="lead">A lightweight, swipeable carousel built on CSS scroll snapping. It works without JavaScript; the script only adds the previous/next buttons and the active dot.</p>

## Technical Details

- The track is a horizontally scrolling list using the new `layout-reel` mixin (`scroll-snap-type: inline mandatory`), so touch, trackpad and keyboard scrolling work natively.
- The track is focusable (`tabindex="0"`), so keyboard users can scroll it with the arrow keys.
- The dots are anchor links to the slides; the script keeps `aria-current` on the visible slide's dot using an `IntersectionObserver`.
- Slides use `aria-roledescription="slide"` and an "N of M" label. There is no autoplay on purpose.
- Smooth scrolling is turned on only when the user doesn't prefer reduced motion.
