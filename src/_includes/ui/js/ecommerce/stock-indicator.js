(() => {
  // The low stock threshold: from this amount, the indicator warns.
  const low = 5;

  document.querySelectorAll('[data-stock-indicator]').forEach((indicator) => {
    const status = indicator.querySelector('[data-stock-status]');
    const text = indicator.querySelector('[data-stock-text]');
    const detail = indicator.querySelector('[data-stock-detail]');
    const notify = indicator.querySelector('[data-stock-notify]');

    const update = (input) => {
      const stock = Number(input.dataset.stock);
      const state = stock === 0 ? 'out' : stock <= low ? 'low' : 'in';

      status.className = `stock-indicator__status stock-indicator__status--${state}`;
      text.textContent = { in: 'In stock', low: `Only ${stock} left`, out: 'Out of stock' }[state];
      detail.textContent = {
        in: `Size ${input.value} ships tomorrow.`,
        low: `Size ${input.value}: order soon. Ships tomorrow.`,
        out: `Size ${input.value} is sold out.`
      }[state];
      notify.hidden = state !== 'out';
    };

    indicator.addEventListener('change', (event) => {
      if (event.target.matches('[data-stock]')) update(event.target);
    });

    notify.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!notify.reportValidity()) return;

      detail.textContent = `We’ll email ${notify.elements.email.value} when it’s back.`;
      notify.hidden = true;
      // The form is gone; the status keeps the focus context.
      indicator.querySelector('[data-stock]:checked').focus();
    });

    update(indicator.querySelector('[data-stock]:checked'));
  });
})();
