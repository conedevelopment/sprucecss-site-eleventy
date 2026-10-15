<p class="lead">Invite people to a workspace by email with a role, and manage the pending invitations (resend or cancel).</p>

## Anatomy

- **`.team-invite__form`**: the email field, the role select and the submit button in a row from the `sm` breakpoint, with an `__error` message below.
- **`.team-invite__pending`**: the list of pending invitations; every `__item` has an `__initial`, the address and meta, and the resend/cancel buttons.

## Accessibility and Usability

- The form validates on submit, not while typing: the error is linked to the field with `aria-describedby`, the field gets `aria-invalid="true"`, and the focus returns to it.
- The errors say how to fix the problem ("Enter an email address, like name@company.com"), and duplicate invitations and a full plan are caught before sending.
- The resend and cancel buttons have hidden text with the address, so a list of "Cancel" buttons stays unambiguous.
- Sending, resending and canceling are confirmed in a polite live region. After canceling, the focus moves to the email field, because the button is gone.

## Technical Details

- The form has `novalidate`, so the script shows its own messages instead of the browser bubbles; it still uses `checkValidity()` for the email format. Without JavaScript, the form posts to the server.
- New invitations are cloned from the first item (the template), and the free seat counter follows the list.
- Replace the demo logic with your API calls, and validate on the server too.
