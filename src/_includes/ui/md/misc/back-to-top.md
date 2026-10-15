<p class="lead">A floating "Back to top" link that appears after the user scrolls down.</p>

## Technical Details

- It is a link to `#top` (it works without JavaScript); the script moves the focus to the top of the page too, so keyboard users continue from there.
- It is hidden with `visibility` (not just opacity) when not needed, so it isn't focusable while invisible.
- The scroll respects `prefers-reduced-motion`: smooth only when motion is OK.
- The visibility is toggled by an `IntersectionObserver` on a sentinel element, which is cheaper than a scroll listener.
