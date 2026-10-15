<p class="lead">A file browser for a folder: the path, a grid or list view of the folders and files with type icons, an upload button and the storage usage.</p>

## Anatomy

- **`.file-manager__header`**: the folder `__path` (a breadcrumb), the `__view` switch and the upload button.
- **`.file-manager__items`**: every `__item` has a type modifier (`--folder`, `--image`, `--pdf`, `--doc`, `--sheet`, `--video`, `--zip`), an `__icon` with the file extension, the `__name` link, the `__meta` (size or file count) and the `__modified` date. The `--list` modifier switches to the list view.
- **`.file-manager__storage`**: a `meter` of the used space.

## Accessibility and Usability

- The path is a `nav` with an ordered list; the current folder has `aria-current="location"`.
- The whole tile is clickable with the `a11y-card-link` mixin, but only the name is a link for assistive technology, so the files aren't announced twice.
- The icons are decorative; the name has the extension and the type colors only repeat it.
- The view switch is a group of toggle buttons (`aria-pressed`) with hidden text ("Grid", "List").
- Long file names are truncated with an ellipsis in the grid; give the link a `title` with the full name if your names are often long.

## Technical Details

- The chosen view is saved in `localStorage` (in a `try` block) and restored on the next visit. The switch is hidden without JavaScript, and the grid view stays.
- The grid fills the row with as many 9.5rem tiles as fit (`auto-fill`, so a folder with few files keeps the tile size).
- The `meter` uses `optimum="0"`, so it turns yellow and red as the storage fills up (see [Usage Meter](/ui/dashboard/usage-meter/)).
