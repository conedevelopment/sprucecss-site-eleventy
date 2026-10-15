(() => {
  const status = document.querySelector('[data-order-status]');
  const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

  document.querySelectorAll('[data-order-card]').forEach((card) => {
    const input = card.querySelector('input[type="number"]');
    const total = card.querySelector('[data-order-total]');
    const title = card.querySelector('.order-card__title').textContent.trim();

    // The number group dispatches "change" after every step; update the line total.
    input.addEventListener('change', () => {
      total.textContent = format.format(Number(card.dataset.unitPrice) * Number(input.value));
    });

    card.querySelector('[data-order-remove]').addEventListener('click', () => {
      // Move the focus to the next card (or the previous one) before this one is gone.
      const next = card.nextElementSibling?.matches('[data-order-card]') ? card.nextElementSibling : card.previousElementSibling;

      card.classList.add('is-removing');
      setTimeout(() => {
        card.remove();
        next?.querySelector('[data-order-remove]')?.focus();
        status.textContent = `${title} removed from the order.`;
        document.dispatchEvent(new CustomEvent('order:remove', { detail: { title } }));
      }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 200);
    });
  });
})();
