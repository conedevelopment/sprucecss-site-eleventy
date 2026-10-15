<p class="lead">A review wall with the average rating, a rating distribution and verified review cards.</p>

## Technical Details

- The distribution uses native `meter` elements (styled by Spruce CSS) with an `aria-label` per row; the percentages are also visible as text.
- The stars are decorative; the rating is in a visually hidden text ("Rated 5 out of 5"). The fill is a mask driven by `--rating`, so fractional ratings work, and it mirrors in RTL.
- The summary column is sticky on large screens.
- It combines the [Badge](/ui/misc/badge/) component for the "Verified" label.
- Override the content with `reviewsBlock`.
