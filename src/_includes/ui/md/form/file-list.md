<p class="lead">A list of selected files for multi-file fields (galleries, attachments): thumbnails and names, with buttons to reorder and remove each file.</p>

## Anatomy

- **`.file-list`** holds the "Choose images" button and the list (`__items`), labelled by the field label.
- **`.file-list-item`** has a thumbnail (`__thumbnail`) or an icon (`__icon`), the file name (`__name`, truncated with an ellipsis) and the actions (`__actions`).

## Accessibility

- Every action button has a short name ("Move up", "Remove") and is described by the file name (`aria-describedby`), so a screen reader says "Remove, pic1234.jpg".
- Reordering with buttons works for everyone, unlike drag and drop alone. After a move, the focus stays on the button (or switches to the other arrow at the edge), and a live region announces the new position: "pic1234.jpg moved to position 2 of 3."
- After a removal, the focus moves to the next file's remove button.
- The first item can't move up and the last can't move down; those buttons are `disabled`.

## Technical Details

- The script only manages the DOM; sync the order and the removals with your form data (like hidden inputs or a `DataTransfer`) or your API.
- The colors come from the tokens; the old `media` color group isn't needed. The remove buttons use the `btn--soft-danger` variant of Spruce.
- Combine it with the [Dropzone](/ui/form/dropzone/) for drag-and-drop selection.
