<p class="lead">A service or feature card with an icon, a title, a short description and a link. The whole card is clickable and turns into a high-contrast, inverted state on hover and keyboard focus.</p>

## Anatomy

- **`.info-card-list`** is a responsive list of cards (auto-fit columns, min. 16rem).
- **`.info-card`** is one card with an icon (`__icon`), the caption (`__title`, `__text`) and a link (`__link`).

## Accessibility

- The [a11y-card-link](/docs/sass/mixins/#a11y-card-link) mixin stretches the link over the card, so the whole card is a target, but there is only one link in the tab order (not one per title, icon and button).
- "Learn more" alone is a vague name, so the link is described by the card title (`aria-describedby`).
- The inverted state also appears on `:focus-within`, with a focus outline around the card, so keyboard users see which card they're on.
- The lift on hover only happens without reduced motion.

## Technical Details

- On hover, the card switches to the primary color and the button foreground color, so the contrast stays right in every style and the dark mode.
- Don't put other interactive elements in the card: the stretched link sits above them.
