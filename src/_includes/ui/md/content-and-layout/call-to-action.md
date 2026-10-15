<p class="lead">A closing call to action: a short, specific headline, one supporting sentence and one or two buttons. It comes as a plain split section and a highlighted, boxed version.</p>

## Anatomy

- **`.call-to-action`** is a `section` named by its title (`aria-labelledby`), so it shows up as a landmark region.
- **`.call-to-action__heading`** holds an optional eyebrow (`.call-to-action__eyebrow`) and the title.
- **`.call-to-action__caption`** holds the description and the buttons (`.call-to-action__btns`).
- **`.call-to-action--boxed`** puts it into a tinted card, with the actions aligned to the end on wide screens.

## Writing Tips

- Keep one primary action; a second, outlined button is for the softer option ("Book a call" next to "Get a quote").
- Use verbs in the button labels that say what happens next. "Get a quote" beats "Submit" or "Learn more".
- Answer the main objection in the description (price, effort, commitment): "No credit card required."

## Technical Details

- The layout is a two-column grid from the `md` breakpoint and a single column below.
- Use links (`a.btn`) when the action goes to another page and `button` elements only for actions on the page.
- For a full-width page section with a container, use the [CTA block](/blocks/cta/).
