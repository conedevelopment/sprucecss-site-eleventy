<p class="lead">The end of a case study: one large photo card that leads to the next project, so the reader keeps going instead of going back.</p>

## Technical Details

- The block is labelled by its eyebrow ("Next case study", an `h2`); the project title is an `h3` with the link.
- The whole card is clickable with the `a11y-card-link()` mixin; keyboard focus outlines the card. The arrow is decorative.
- The photo is a real `img` behind the text with a dark shade, so the white text stays readable on any image; the card redefines the heading and text color tokens.
- The arrow mirrors and moves the other way in RTL; the hover motion runs only when the user doesn't prefer reduced motion.
- Override the content with `nextProjectBlock`.
