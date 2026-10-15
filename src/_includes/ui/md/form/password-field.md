<p class="lead">A password input with a show/hide toggle, a live strength meter and a checklist of the requirements.</p>

## Technical Details

- The toggle is a real button with `aria-pressed` and a hidden label that switches between "Show password" and "Hide password"; it changes the input type between `password` and `text`.
- The strength is shown with the native `<meter>` element (styled by Spruce's new `progress` generator) and announced through a polite live region.
- The input is described by both the strength text and the rules (`aria-describedby`), and each rule gets an `.is-valid` class when met.
- Use `autocomplete="new-password"` so password managers can suggest a strong password.
