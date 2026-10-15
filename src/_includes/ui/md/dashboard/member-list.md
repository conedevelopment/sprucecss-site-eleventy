<p class="lead">Team management: an invite form, the members with their roles, and the pending invitations with resend and revoke actions.</p>

## Anatomy

- **`.member-list__invite`**: the email and role fields with the submit button; they wrap on narrow screens.
- **`.member-list__item`**: the `__person` (avatar, name, email or invitation status), the `__role` select and the `__actions`. The `--pending` modifier marks an invitation.
- **`[data-member-template]`**: a `template` element with the markup of a new invitation, used by the script.

## Accessibility and Usability

- Every role select has a specific, visually hidden label ("Role of Ben King"); the action buttons have hidden context too ("Remove Ben King"), so a screen reader's list of controls makes sense.
- The current user's role can't be changed (`disabled`) and they can't remove themselves; a note says why instead of a missing button.
- New invitations and removals are announced in a polite live region. After a removal, the focus moves to the next row (or the invite field), so it doesn't get lost.
- The invite email field has `type="email"` and `required`, so the browser validates it.

## Technical Details

- The script adds the new invitation from the `template` and dispatches `member:invite` (`email`, `role`) and `member:remove` (`name`) events: send the requests to your back-end in their listeners. Without JavaScript, the invite form submits normally.
- Save role changes on the `change` event of the selects.
- The row is a grid with named areas: one line from the `sm` breakpoint, two lines (person; role and actions) below it.
