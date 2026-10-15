<p class="lead">Toggleable filter chips for refining a list, with a "Clear all" action.</p>

## Technical Details

- Every chip is a toggle `button` with `aria-pressed`, in a labelled group; the selected state shows a check mark, so it doesn't rely on color alone.
- The script toggles the chips, keeps "Clear all" in sync and announces the active filters in a polite live region. It dispatches a `filterchange` event with the selected values, so you can filter your list.
- For a single choice, use the [Segmented Control](/ui/form/segmented-control/) or radio buttons instead.
