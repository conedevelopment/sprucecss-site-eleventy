<p class="lead">A text input that turns entries into removable tags (chips), for skills, labels or email recipients.</p>

## Technical Details

- <kbd>Enter</kbd> or <kbd>,</kbd> adds a tag, <kbd>Backspace</kbd> in an empty field removes the last one, and duplicates are ignored.
- Every tag has a remove button with a specific label ("Remove CSS"). After a removal the focus returns to the input.
- Additions and removals are announced through a visually hidden live region.
- The values are mirrored to a hidden input (comma separated), so the component works in a regular form submit.
- The box borrows the form control tokens and the `short-ring('input')` focus ring, so it looks like any other Spruce input.
