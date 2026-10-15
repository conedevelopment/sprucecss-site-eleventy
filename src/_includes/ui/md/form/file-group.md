<p class="lead">A single image upload with a preview: the empty state shows an icon and the requirements, a selected image shows a thumbnail, its file name and a remove button.</p>

## Anatomy

- **`.file-group-container`** creates a container query context; below 30rem, the preview goes above the text.
- **`.file-group`** with the preview (`__preview`, an `__icon` when empty) and the body: `__title`, `__meta` (the requirements) and `__action` (the file input and the remove button).

## Accessibility

- The native file input keeps its label and keyboard support; the requirements are linked to it with `aria-describedby`, so they're read before choosing a file.
- After choosing an image, the focus moves to the "Remove image" button (the input is hidden then), and after removing it, back to the input. A polite live region announces both.
- The remove button has a visible text, not just an icon.

## Technical Details

- When the preview has a `background-image` (set inline, by your back end or by the script), `:has()` swaps the input for the remove button and hides the icon. So the server-rendered "has image" state needs no JavaScript.
- The script previews the chosen file with `URL.createObjectURL()` (no upload, no `FileReader`) and revokes the URL when it changes.
- For drag and drop and multiple files, use the [Dropzone](/ui/form/dropzone/) and the [File List](/ui/form/file-list/).
