<p class="lead">A drag-and-drop file upload area with a list of the selected files.</p>

## Technical Details

- It is a real (visually hidden) `input type="file"` with its `label` as the drop area: clicking, keyboard focus (<kbd>Enter</kbd>/<kbd>Space</kbd> on the input) and native validation keep working. The focus ring is drawn on the area.
- Dropped files are added to the input through a `DataTransfer` object, so they are submitted with the form like picked files.
- The list shows the name and size of each file with a remove button, and a polite live region announces the changes.
- `accept` and `multiple` work as usual; check the size and type on the server too.
