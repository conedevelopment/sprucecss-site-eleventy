<p class="lead">A pricing table built from cards. Highlight the recommended plan, list the features and give every plan one clear call to action.</p>

## Technical Details

- Each plan is an `<article>` labelled by its title, so screen reader users can jump between plans.
- The feature lists have `role="list"` because `list-style: none` removes the list semantics in Safari.
- The featured card uses `.pricing-card--featured` and a badge; it is lifted only from the `md` breakpoint, so the cards align when stacked.
- The layout uses the `layout-grid` mixin: the cards wrap without media queries.
- All visual values come from tokens (`radius()`, `shadow()`, `color('surface')`), so the cards follow the dark mode and every design style.
- The markup is rendered from a `pricingPlans` list (name, price, yearly price, description, features, call to action, featured). Each amount carries `data-monthly` and `data-yearly` attributes, which the [Pricing block](/blocks/pricing/) uses for its billing toggle.
