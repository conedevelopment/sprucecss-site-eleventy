(() => {
  document.querySelectorAll('[data-free-shipping]').forEach((component) => {
    const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: 'USD' });
    const threshold = Number(component.dataset.threshold);
    const bar = component.querySelector('[data-free-shipping-bar]');
    const text = component.querySelector('[data-free-shipping-text]');
    const form = component.querySelector('[data-free-shipping-add]');

    const update = () => {
      const subtotal = Number(component.dataset.subtotal);
      const missing = threshold - subtotal;
      const unlocked = missing <= 0;

      bar.max = threshold;
      bar.value = Math.min(subtotal, threshold);
      bar.textContent = `${format.format(subtotal)} of ${format.format(threshold)}`;
      component.classList.toggle('free-shipping--unlocked', unlocked);
      text.innerHTML = unlocked
        ? 'You’ve unlocked <strong>free shipping</strong>!'
        : `You’re <strong>${format.format(missing)}</strong> away from free shipping.`;
    };

    // Call this when the cart changes, for example from the `cart:add` event of the product forms.
    component.addEventListener('cart:update', (event) => {
      component.dataset.subtotal = event.detail.subtotal;
      update();
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');

      component.dispatchEvent(new CustomEvent('cart:update', {
        detail: { subtotal: Number(component.dataset.subtotal) + Number(button.dataset.price) }
      }));
      button.disabled = true;
      button.firstChild.textContent = 'Added';
    });

    update();
  });
})();
