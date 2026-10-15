(() => {
  const money = (value) => `$${value.toFixed(2)}`;

  document.querySelectorAll('[data-cart-drawer]').forEach((drawer) => {
    const freeShipping = Number(drawer.dataset.freeShipping);
    const subtotalOutput = drawer.querySelector('[data-cart-drawer-subtotal]');
    const countOutput = drawer.querySelector('[data-cart-drawer-count]');
    const shippingText = drawer.querySelector('[data-cart-drawer-shipping]');
    const progress = drawer.querySelector('[data-cart-drawer-progress]');
    const empty = drawer.querySelector('[data-cart-drawer-empty]');
    const live = drawer.querySelector('[data-cart-drawer-live]');

    const update = () => {
      const items = [...drawer.querySelectorAll('[data-cart-drawer-item]')];
      let subtotal = 0;
      let count = 0;

      items.forEach((item) => {
        const quantity = Number(item.querySelector('[data-cart-drawer-quantity]').value);
        const line = Number(item.dataset.price) * quantity;

        item.querySelector('[data-cart-drawer-line]').textContent = money(line);
        subtotal += line;
        count += quantity;
      });

      subtotalOutput.textContent = money(subtotal);
      countOutput.textContent = count;
      empty.hidden = items.length > 0;
      progress.value = Math.min(subtotal, freeShipping);
      progress.textContent = `${Math.min(subtotal, freeShipping)} of ${freeShipping}`;
      shippingText.innerHTML = subtotal >= freeShipping
        ? 'You get <strong>free shipping</strong>.'
        : `Add <strong>${money(freeShipping - subtotal)}</strong> more for free shipping.`;

      return subtotal;
    };

    drawer.addEventListener('click', (event) => {
      const step = event.target.closest('[data-cart-drawer-step]');

      if (!step) {
        return;
      }

      const item = step.closest('[data-cart-drawer-item]');
      const output = item.querySelector('[data-cart-drawer-quantity]');
      const name = item.querySelector('.cart-drawer__name').textContent;
      const quantity = Number(output.value) + Number(step.dataset.cartDrawerStep);

      if (quantity < 1) {
        // Removing the item: move the focus to the next sensible place before the button disappears.
        const next = item.nextElementSibling || item.previousElementSibling;

        item.remove();
        (next?.querySelector('[data-cart-drawer-step]') || drawer.querySelector('[data-drawer-close]')).focus();
        update();
        live.textContent = `${name} removed from the cart.`;

        return;
      }

      output.value = quantity;
      live.textContent = `${name}: quantity ${quantity}. Subtotal ${money(update())}.`;
    });

    update();
  });
})();
