(() => {
  let count = 0;

  document.querySelectorAll('[data-accordion]').forEach((list) => {
    // data-accordion="multiple" lets more than one card stay open.
    const multiple = list.dataset.accordion === 'multiple';
    const cards = [...list.querySelectorAll('.accordion-card')];

    const toggle = (card, open) => {
      card.querySelector('.accordion-card__toggle').setAttribute('aria-expanded', String(open));
      card.querySelector('.accordion-card__content').inert = !open;
    };

    cards.forEach((card) => {
      const heading = card.querySelector('.accordion-card__title');
      const content = card.querySelector('.accordion-card__content');
      const button = document.createElement('button');

      count += 1;
      content.id ||= `accordion-content-${count}`;

      // The heading keeps its level; the button inside it gets the text and the state.
      button.className = 'accordion-card__toggle';
      button.type = 'button';
      button.setAttribute('aria-controls', content.id);
      button.innerHTML = '<span class="accordion-card__label"></span><span class="accordion-card__icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line class="vertical-line" x1="12" y1="5" x2="12" y2="19"></line><line class="horizontal-line" x1="5" y1="12" x2="19" y2="12"></line></svg></span>';
      button.querySelector('.accordion-card__label').textContent = heading.textContent.trim();
      heading.replaceChildren(button);

      // Open the card that's linked from the URL (#id of the content).
      toggle(card, window.location.hash === `#${content.id}`);

      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') !== 'true';

        if (open && !multiple) {
          cards.filter((other) => other !== card).forEach((other) => toggle(other, false));
        }

        toggle(card, open);
      });
    });
  });
})();
