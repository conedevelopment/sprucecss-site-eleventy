(() => {
  document.querySelectorAll('[data-shipping-options]').forEach((form) => {
    const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: 'USD' });
    const subtotal = Number(form.dataset.subtotal);
    const cost = form.querySelector('[data-shipping-cost]');
    const total = form.querySelector('[data-shipping-total]');
    const live = form.querySelector('[data-shipping-live]');

    form.addEventListener('change', (event) => {
      if (event.target.name !== 'shipping') {
        return;
      }

      const price = Number(event.target.dataset.price);

      cost.textContent = price ? format.format(price) : 'Free';
      total.textContent = format.format(subtotal + price);
      live.textContent = `Total: ${total.textContent}`;
    });
  });
})();
