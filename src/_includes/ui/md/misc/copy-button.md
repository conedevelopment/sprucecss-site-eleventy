<p class="lead">A button that copies a value (an install command, an API key, a link) to the clipboard and confirms it.</p>

## Technical Details

- It uses the async Clipboard API (`navigator.clipboard.writeText`), which needs a secure context (HTTPS or localhost); if it fails, the text is selected so the user can copy it manually.
- The visible label changes to "Copied!" for two seconds, and the result is announced in a polite live region.
- Point the button to any element with `data-copy-target="id"`: it copies the `value` of form fields or the text of other elements. Or set the text directly with `data-copy-text`.
