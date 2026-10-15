<p class="lead">A conversion funnel: how many people reach each step of a flow, as a share of the first step, with the drop-off between the steps.</p>

## Anatomy

- **`.funnel-chart`** is a `figure`; the `figcaption` holds the `__title` and the `__period`.
- **`.funnel-chart__steps`** is an ordered list (the order matters); every `__step` has a `__label`, a `__bar`, the `__numbers` (count and share) and the `__drop` from the previous step.

## Accessibility and Usability

- The chart is real text in an ordered list, so screen readers read every step with its count, share and drop-off; the bars are decorative.
- The biggest drop-off is the most useful number on a funnel, so it's written out under every step instead of left to the eye.

## Technical Details

- The bar width comes from the `--value` custom property (the share in percent), set inline per step; the bar is centered, so the steps narrow like a funnel. A tiny share keeps a 0.25rem minimum, so the bar stays visible.
- The drop-off is calculated in the template from the previous step's value.
- On small screens, the label and the numbers sit above a full-width bar.
