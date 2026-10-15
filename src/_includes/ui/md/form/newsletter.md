<p class="lead">A compact newsletter sign-up block with an email field and a submit button.</p>

## Technical Details

- The email input has a visually hidden label (the placeholder is not a label) and `autocomplete="email"`.
- The input grows (`flex: 1 1 14rem`) and the button keeps its natural width; when there is not enough room, the button wraps below the input, without media queries.
- Use `type="email"` and `required` for native validation; announce the result of the submission in a live region (see the Toast component).
- The form has a required GDPR consent checkbox, unchecked by default (consent must be an active choice), with a link to the privacy policy. Keep the wording specific: what the person signs up for and how to unsubscribe. Store the consent with a timestamp on the server.
