<p class="lead">The usage of a subscription plan against its limits, with native <code>meter</code> elements that change color as the usage grows, and a stacked storage breakdown.</p>

## Anatomy

- **`.usage-meter__item`**: a `label`, the amount, a `meter` and an optional `__note` (`--warning` or `--danger`).
- **`.usage-meter__storage`**: a stacked bar (`__stack`, one `span` per category with its `--share` in percent) and its `__legend`.

## Accessibility and Usability

- A `meter` is a labelable element: the `label` names it, and screen readers announce its value ("Orders, 8,420 of 10,000"). The fallback text inside the element is shown in browsers without `meter` support.
- The warning and danger notes say the percentage and the consequence in words; the color is only a hint.
- The stacked bar is decorative (`aria-hidden`); its legend lists the exact values.

## Technical Details

- **No JavaScript for the colors:** the `low`, `high` and `optimum` attributes make the browser pick the state. With `optimum="0"` (low is good), a value below `low` is green, between `low` and `high` is yellow and above `high` is red. Spruce styles the three states with the alert colors.
- Use `<progress>` instead of `meter` for a task that moves toward completion; a `meter` is a measurement within a known range.
- The storage colors are `--usage-meter-color-1` to `--usage-meter-color-3`; the empty part of the bar shows the track color (free space).
