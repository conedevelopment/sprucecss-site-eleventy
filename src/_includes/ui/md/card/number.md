<p class="lead">Highlight your numbers (projects, clients, uptime) with large figures that count up when they scroll into view.</p>

## Anatomy

- **`.number-card-list`** is a responsive list (auto-fit columns, min. 12rem).
- **`.number-card`** has the figure (`__data`) and its label (`__caption`).
- The animated number is a `span` with the target in `data-countup`; the final value is in the HTML too.

## Accessibility

- Screen readers read a visually hidden copy of the final value ("12,000+"); the animated digits are hidden from them, so they never hear "0" or a half-counted number.
- With reduced motion, there's no animation at all: the final numbers stay as they are in the HTML.
- Without JavaScript, the final numbers show as well.

## Technical Details

- An `IntersectionObserver` starts each counter when half of it is visible, once. It counts with `requestAnimationFrame` and an ease-out curve; change `duration` in the script (2s by default).
- The numbers are formatted with `Intl.NumberFormat` in the page language (12,000 or 12 000), and `tabular-nums` keeps the width steady while counting.
- The size is fluid with [responsive-font-size()](/docs/sass/functions/#responsive-font-size).
