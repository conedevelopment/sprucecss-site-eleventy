<p class="lead">A contact block with the contact methods and a complete form.</p>

## Technical Details

- Every field has a visible label; required fields use the `.form-label--required` marker and the `required` attribute, and the inputs have `autocomplete` hints.
- The name and email fields sit side by side with the `layout-switcher` mixin and stack when the form is narrow.
- Phone and email are real `tel:` and `mailto:` links.
- Override the content with `contactBlock` (`heading`, `methods`, `topics`, `submit`).
