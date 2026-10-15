(() => {
  const money = (value) => `$${value.toFixed(2)}`;

  document.querySelectorAll('[data-subscribe-save]').forEach((form) => {
    const submit = form.querySelector('[data-subscribe-save-submit]');
    const price = Number(form.dataset.price);
    const discount = Number(form.dataset.discount);

    const update = () => {
      const { purchase, frequency, quantity } = form.elements;
      const isSubscription = purchase.value === 'subscribe';
      const total = price * Number(quantity.value) * (isSubscription ? 1 - discount / 100 : 1);

      // The button says exactly what happens: the price and, for a subscription, how often.
      submit.textContent = isSubscription
        ? `Subscribe · ${money(total)} every ${frequency.value} weeks`
        : `Add to cart · ${money(total)}`;
    };

    form.addEventListener('change', update);
    update();
  });
})();
