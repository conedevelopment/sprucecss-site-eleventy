<p class="lead">A sign-in form with social login, email and password, a "keep me signed in" option and links to sign up and reset the password.</p>

## Anatomy

- **`.auth-form`** is a centered, narrow stack (max. 26rem) with a heading (`__heading`, `__title`, `__subtitle`).
- **`.auth-form__social`** holds the social login buttons; **`.auth-form__separator`** is the "or" line between the options.
- **`.form-group-stack`** is the form, with a [layout-stack](/docs/sass/mixins/#layout-stack) between the fields.
- **`.form-label--space-between`** puts the label and the "Forgot password?" link on one line.

## Accessibility and Usability

- The fields use the right `type` and `autocomplete` values (`email`, `current-password`), so browsers and password managers fill them in and mobile keyboards show `@`.
- The "Forgot password?" link sits outside the `label`; inside, it would become part of the field's name.
- There's no `autofocus`: it would skip the page heading for screen reader users. Add it only when the form is the whole page.
- The social buttons are `type="button"`, so they don't submit the email form.
- The separator is a short sentence ("or sign in with email") instead of a lone "or".

## Technical Details

- Only Spruce form elements are used, so the form follows every style and the dark mode. Add the [Password Field](/ui/form/password-field/) for a show/hide toggle.
- For a sign-up form, change the title, use `autocomplete="new-password"` and describe the password rules with `aria-describedby`.
