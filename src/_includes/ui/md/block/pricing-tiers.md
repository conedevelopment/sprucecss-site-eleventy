<p class="lead">One-time pricing for a digital product in tiers: every tier lists the same features, included or not, so the difference between them is visible at a glance. A money-back guarantee and the terms close the block.</p>

## Technical Details

- It combines the [Guarantee](/ui/misc/guarantee/) and the [Badge](/ui/misc/badge/); load their stylesheets too.
- The features are listed once (`features`), and every tier says which ones it includes (`includes`, one `true` or `false` per feature). An excluded feature is muted and struck through, with a hidden "Not included:" label, because neither the dash icon nor the strikethrough is announced.
- The old prices have a hidden "Regular price:" label; the buy buttons have the tier name as hidden text, so "Buy the book" stays unique in a list of links.
- The featured tier is taller and has the primary border; its badge is plain text inside the tier.
- The block has `id="pricing"`, so the buy buttons of the page can jump to it.
- Only show a deal (`deal`) that's real, with its end date.
- Override the content with `pricingTiersBlock` and the guarantee with `guarantee`.
