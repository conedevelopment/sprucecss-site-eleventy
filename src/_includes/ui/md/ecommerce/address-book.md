<p class="lead">The saved addresses of a customer account, with the default address marked and actions to edit, delete or make another address the default.</p>

## Anatomy

- **`.address-book__item`**: an `article` card with the `__label`, the `address` element and the `__actions`. **`--default`** highlights the card, shows the "Default" [Badge](/ui/misc/badge/) and hides the "Set as default" and "Delete" buttons.
- **`.address-book__item--add`**: a dashed card that links to the new address form.

## Accessibility and Usability

- The address uses the `address` element (a contact address, which is what this is) with the name first, like on an envelope.
- The action buttons have hidden text with the address label ("Delete Office"), so each is unique.
- The default address can't be deleted; make another one the default first. This avoids an account without a default address at checkout.
- Deleting asks for confirmation; after it, the focus moves to the next card's link. Both changes are announced in a polite live region.
- Making an address the default moves it to the first place and keeps the focus on it.

## Technical Details

- The default state is one class: the badge and the button visibility follow it in CSS, so the script only moves the class.
- Without JavaScript, point the buttons to forms that post to the server (or make them links to confirmation pages).
- Replace the `window.confirm()` with a [Modal](/ui/content-and-layout/modal/) for a consistent look.
