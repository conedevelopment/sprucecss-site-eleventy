<p class="lead">Objectives and key results (OKRs) for a period: every goal with its status, overall progress, owner and the progress of its key results.</p>

## Anatomy

- **`.goal-tracker__goal`**: one objective as an `article`, with a status modifier (`--on-track`, `--at-risk`, `--behind`) that sets the `--goal-color`.
- **`.goal-tracker__summary`**: a `progress` element with the overall percentage and the owner.
- **`.goal-tracker__results`**: the key results with their current value, target and a `__bar`.

## Accessibility and Usability

- The status is a [Badge](/ui/misc/badge/) with a word ("At risk"); the color repeats it.
- The overall `progress` is labeled by the goal title (`aria-labelledby`), so it's announced as "Grow the self-serve revenue, 72%".
- The key result bars are decorative; the values next to them are the content.

## Technical Details

- The overall `progress` comes with the data: the average of the key results' progress, each capped at 100%, so an overachieved result can't hide a lagging one. The key result bars are capped the same way in the template.
- The `progress` and the bars use the `--goal-color` custom property, set by the status modifier.
- Units of up to two characters (`%`, `k$`) are attached to the numbers; longer ones ("of 6 steps shipped") follow the target.
