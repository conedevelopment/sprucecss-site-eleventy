<p class="lead">A table of API keys with masked values, buttons to show and copy a key, the last use and a revoke action.</p>

## Anatomy

- **`.api-keys__header`**: the title, a short warning and the "Create key" button.
- **`.api-keys__table`**: a standard Spruce CSS `.table` in a `.table-responsive` wrapper; the key name is the row header (`th scope="row"`) with an environment [Badge](/ui/misc/badge/).
- **`.api-keys__key`**: the masked `code` and the show/copy icon buttons.

## Accessibility and Usability

- The show button is a toggle (`aria-pressed`), and every icon button has hidden text with the key's name ("Copy the Production key"), so the buttons are unique out of context.
- Copying and revoking are confirmed in a polite live region.
- The key is masked by default, showing only the prefix and the last four characters: enough to recognize it, not enough to use it.
- Revoking is destructive, so it asks for confirmation first. After revoking, the row's buttons are removed and the focus moves to the section heading instead of the page.

## Technical Details

- The full key is in `data-api-key` here only for the demo. In a real app, never render a secret into the page after it's created: show it once on creation, then only the masked version, and let the server reveal it after a re-authentication.
- Copying uses `navigator.clipboard.writeText()`; the copy button stays hidden where the Clipboard API isn't available (it needs a secure context).
- Replace the `window.confirm()` with a [Modal](/ui/content-and-layout/modal/) for a consistent look.
