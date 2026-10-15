<p class="lead">A site footer that opens with a newsletter signup, followed by the brand and three link columns, and the legal links and social profiles at the bottom.</p>

## Anatomy

- **`.site-footer-newsletter__signup`**: the `__intro` (heading and text) and the `__form`, side by side from the `md` breakpoint.
- **`.site-footer-newsletter__columns`**: a `nav` with the `__brand` (logo and text) and the link `__column`s, each with a `__title` and `__links`.
- **`.site-footer-newsletter__bottom`**: the copyright, the `__legal` links and the `__social` links.

## Accessibility

- The form is labeled by the signup heading, and the email field has a hidden label (the placeholder isn't a label).
- Every link list is labeled by its column title (`aria-labelledby`), and the column titles are `h2`s, so screen reader users can jump between them.
- The social links are icons with hidden text ("GitHub") in a labeled group, and they're at least 2.75rem (44px) in both directions.
- The logo link's name is the visible brand name; the mark is decorative.

## Technical Details

- The columns are an auto-fit grid on small screens and a fixed `2fr 1fr 1fr 1fr` layout from `lg`.
- The social links come from a shared include (`social-links.html`); swap the profiles there.
- Connect the form to your newsletter provider; use the [Newsletter](/ui/form/newsletter/) component for a version with the consent checkbox and the states.
- The form has a required GDPR consent checkbox, unchecked by default (consent must be an active choice), with a link to the privacy policy. Keep the wording specific: what the person signs up for and how to unsubscribe. Store the consent with a timestamp on the server.
