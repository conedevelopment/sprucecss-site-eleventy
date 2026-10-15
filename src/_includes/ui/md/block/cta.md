<p class="lead">A closing call to action: a colored banner with an email sign-up and social proof.</p>

## Technical Details

- It combines a sign-up form (like the [Newsletter](/ui/form/newsletter/) component) with the [Avatar](/ui/misc/avatar/) group; load the avatar styles too.
- The banner uses the primary button colors and redefines the heading and text color tokens for its subtree, so it reads well in every style and in dark mode.
- The email input has a visually hidden label; the avatars are decorative (`aria-hidden`), the text carries the meaning.
- Override the copy with `ctaBlock` (`title`, `text`, `placeholder`, `action`, `proof`).
- Set `actions` (`[{ label, href, primary }]`) to show buttons instead of the form, for a final "buy now" call; the primary one is inverted on the brand background.
- The form has a required GDPR consent checkbox, unchecked by default (consent must be an active choice), with a link to the privacy policy. Keep the wording specific: what the person signs up for and how to unsubscribe. Store the consent with a timestamp on the server. Change its text with `consent`.
