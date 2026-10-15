(() => {
  document.querySelectorAll('[data-mini-cart]').forEach((cart) => {
    const toggle = cart.querySelector('[data-mini-cart-toggle]');
    const panel = cart.querySelector('#' + toggle.getAttribute('aria-controls'));
    const list = cart.querySelector('[data-mini-cart-items]');
    const live = cart.querySelector('[data-mini-cart-live]');
    const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: 'USD' });

    // Without JavaScript, the toggle is a link to the cart page.
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-expanded', 'false');

    const setOpen = (open, returnFocus = true) => {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));

      if (open) {
        panel.focus();
      } else if (returnFocus) {
        toggle.focus();
      }
    };

    const update = () => {
      const items = [...list.querySelectorAll('[data-mini-cart-item]')];
      const count = items.reduce((sum, item) => sum + Number(item.dataset.quantity), 0);
      const subtotal = items.reduce((sum, item) => sum + Number(item.dataset.price) * Number(item.dataset.quantity), 0);

      cart.querySelector('[data-mini-cart-count]').textContent = count;
      cart.querySelector('[data-mini-cart-subtotal]').textContent = format.format(subtotal);
      cart.querySelector('[data-mini-cart-empty]').hidden = count > 0;
      cart.querySelector('.mini-cart__footer').hidden = count === 0;
      list.hidden = count === 0;
    };

    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      setOpen(panel.hidden);
    });

    // A space press on a link doesn't click it; it does on a button.
    toggle.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        setOpen(panel.hidden);
      }
    });

    cart.querySelector('[data-mini-cart-close]').addEventListener('click', () => setOpen(false));

    cart.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) {
        setOpen(false);
      }
    });

    // Close on a click outside, without stealing the focus from what was clicked.
    document.addEventListener('click', (event) => {
      if (!panel.hidden && !cart.contains(event.target)) {
        setOpen(false, false);
      }
    });

    list.addEventListener('click', (event) => {
      const button = event.target.closest('[data-mini-cart-remove]');

      if (!button) {
        return;
      }

      const item = button.closest('[data-mini-cart-item]');
      const name = item.querySelector('.mini-cart__name').textContent;
      const next = item.nextElementSibling || item.previousElementSibling;

      item.remove();
      update();
      live.textContent = `${name} removed. Subtotal: ${cart.querySelector('[data-mini-cart-subtotal]').textContent}.`;
      cart.dispatchEvent(new CustomEvent('cart:remove', { bubbles: true, detail: { name } }));
      (next?.querySelector('[data-mini-cart-remove]') || panel).focus();
    });

    update();
  });
})();
