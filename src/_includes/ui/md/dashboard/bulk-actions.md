<p class="lead">A selectable table with a "select all" checkbox and a toolbar of actions that appears for the selected rows.</p>

## Anatomy

- **`.bulk-actions`**: a `form` around the toolbar and the table, so the checked rows and the clicked action are submitted together (`orders[]` and `action`).
- **`.bulk-actions__bar`**: a `role="toolbar"` with the selection count and the action buttons; it gets the `--active` modifier when something is selected.
- **`.bulk-actions__table`**: a Spruce `.table`; the selected rows are highlighted with `tr:has(:checked)`, without JavaScript.

## Accessibility and Usability

- Every row checkbox has a specific label ("Select order #10482"), not a generic "Select".
- The select-all checkbox becomes **indeterminate** when only some rows are selected, which screen readers announce as "mixed".
- A polite live region announces the selection ("3 of 5 selected"). After "Clear", the focus moves to the select-all checkbox, so it isn't lost.
- **Shift + click** selects a range, like in file managers and mail clients.
- Use a confirmation (a [Modal](/ui/content-and-layout/modal/)) for destructive actions like "Archive" or "Delete".

## Technical Details

- **Progressive enhancement:** without JavaScript, the action buttons are always visible and the form still submits the checked rows. The script reveals the select-all checkbox and the "Clear" button and shows the actions only when there is a selection.
- Combine it with the [Data Table](/ui/list/data-table/) for sorting and filtering.
