<p class="lead">A list of collapsible cards for FAQs and long, optional content: only the titles show, and each card opens on demand with a smooth height animation.</p>

## Anatomy

- **`.accordion-list`** with `data-accordion` groups the cards; `data-accordion="multiple"` lets more than one stay open.
- **`.accordion-card`** has a heading (`__title`) and the content (`__content`, with an inner `div`).
- The script puts a **`.accordion-card__toggle`** button (with the `__label` and the `__icon`) into the heading.

## Accessibility

- It follows the [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern: the button inside the heading has `aria-expanded` and `aria-controls`, so the heading structure stays and the state is announced.
- A collapsed content gets the `inert` attribute: it's hidden from screen readers and its links can't be focused (`aria-hidden` alone left them focusable).
- Without JavaScript, every card stays open and readable; the script collapses them.
- The focus ring appears on the icon, only for keyboard focus (`:focus-visible`).

## Technical Details

- The height animates with `grid-template-rows` from `0fr` to `1fr`, so no height has to be measured; it's turned off for reduced motion.
- Each list works on its own: opening a card only closes the others in the same list.
- If the URL hash is the id of a content, that card opens on load, so you can link to a question.
- No dependencies. For a no-JavaScript option, the native `details` element (styled by Spruce) is a good alternative.

## Resources

- [Collapsible Sections](https://inclusive-components.design/collapsible-sections/) by Heydon Pickering
