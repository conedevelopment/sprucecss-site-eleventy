document.querySelectorAll('[data-checkout]').forEach((checkout) => {
  const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

  // Sum the remaining order lines: unit price × quantity.
  const update = () => {
    const total = [...checkout.querySelectorAll('[data-order-card]')].reduce((sum, card) => {
      return sum + Number(card.dataset.unitPrice) * Number(card.querySelector('input[type="number"]').value);
    }, 0);

    checkout.querySelectorAll('[data-checkout-total]').forEach((element) => { element.textContent = format.format(total); });
  };

  checkout.addEventListener('change', update);
  document.addEventListener('order:remove', update);
  update();
});
