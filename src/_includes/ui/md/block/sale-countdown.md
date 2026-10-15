<p class="lead">A limited-time sale: a banner with a live countdown and a call to action, followed by the discounted products.</p>

## Technical Details

- It combines the [Countdown](/ui/misc/countdown/) (styled on the brand background) and [Product Cards](/ui/card/product/). Load the countdown script too.
- The countdown runs to `data-countdown-days` from now; set a fixed `data-countdown-end` date (like `2026-10-31T23:59:00`) for a real sale. The timer is `aria-live="off"`, and the script updates a hidden summary once a minute, so screen readers aren't flooded with seconds.
- The sale prices have hidden "Sale price" and "Original price" labels, because a strikethrough isn't announced.
- The banner overrides the heading, text and muted color tokens, and the text selection uses the secondary button colors, so everything stays readable on the brand color in every style.
- Only show a countdown for a deadline that's real.
- Override the content with `saleCountdownBlock`.
