<p class="lead">Alternating image and text rows to present product features: a label, a headline, a short description, a list of benefits and a call to action.</p>

## Variations

- **`.feature--start`**: the image comes first (at the start side).
- **`.feature--end`**: the image goes to the end side from the `md` breakpoint.

Alternate them to create a zigzag rhythm down the page.

## Anatomy

- **`.l-feature`** follows the block anatomy: `.l-feature > .container > .l-feature__inner`.
- **`.feature`** is an `article` named by its title, with the image (`__thumbnail`) and the caption: `__subtitle` (a small label), `__title`, `__text`, `__list` (benefits with check marks) and `__btn`.

## Accessibility

- The image is decorative here (`alt=""`): the text carries the message. Give it an `alt` text when it shows something the text doesn't (like a screenshot with data).
- On phones, the image always comes first in the visual order, and the DOM order (image, then text) stays the same, so the reading order matches what you see.
- The check marks are pseudo-elements; the list is read as a plain list.

## Technical Details

- A one-column grid on phones and two columns from the `md` breakpoint; `order` moves the image to the end for `--end`. The arrow in the button flips in RTL.
- The colors come from the tokens (the subtitle uses `color-alpha('primary', …)`), so the old `feature` color group isn't needed.
- For a full-width version with a media slot (video, screenshot), see the [Feature Media block](/blocks/feature-media/).
