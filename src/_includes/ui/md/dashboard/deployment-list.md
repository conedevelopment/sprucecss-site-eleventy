<p class="lead">A list of deployments with their status, environment, branch, commit, author, time and build duration, like on a hosting dashboard.</p>

## Anatomy

- **`.deployment-list__item`**: a status modifier (`--ready`, `--building`, `--failed`, `--canceled`) sets the `--status-color` of the `__dot`.
- **`.deployment-list__main`**: the commit `__message` (a link to the deployment) and the `__meta` row with the `__env` pill (`--production` is highlighted), the `__branch` and the commit hash.
- **`.deployment-list__time`**: the time, the duration and the author.

## Accessibility and Usability

- The status is a word next to the dot ("Failed"); the color and the pulsing dot of a running build only repeat it.
- The icon and the hash have hidden labels ("Branch:", "Commit:"), so they make sense when read aloud.
- The pulse animation only runs when the user doesn't prefer reduced motion.
- Long commit messages are truncated with an ellipsis; the link goes to the deployment, where the full message is.

## Technical Details

- The dot's halo is a `box-shadow` with `color-mix()` of the status color, so one custom property colors both.
- From the `md` breakpoint, the time moves to a third column aligned to the end; below it, it sits under the message.
- Update a building item with your API (polling or server-sent events) and announce the result in a live region if the user is waiting for it.
