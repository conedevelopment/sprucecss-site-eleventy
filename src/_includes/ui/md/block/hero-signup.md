<p class="lead">A split hero with the value proposition on one side and a complete sign-up form on the other.</p>

## Technical Details

- The form is labelled by its own heading, and every field has a visible label, an `autocomplete` hint and native validation (`required`, `type="email"`, `minlength`).
- The password requirement is connected to the input with `aria-describedby`.
- Two columns from the `lg` breakpoint; on small screens the form follows the text.
- Override the content with `heroSignupBlock`.
