<p class="lead">A complete pricing block: the heading, a monthly/yearly toggle and the pricing cards.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), the [Segmented Control](/ui/form/segmented-control/) and the [Pricing Card](/ui/card/pricing/) components; load their styles too.
- The toggle is a group of native radio buttons. The script swaps every amount between its `data-monthly` and `data-yearly` value, updates the period ("/ month", "/ month, billed yearly") and announces the change in a live region.
- Without JavaScript, the monthly prices are shown.
- Set `toggle: false` in `pricingBlock` to hide the billing toggle (for one-time prices), and a `period` per plan in `pricingPlans` (like "one-time").
