(() => {
  // Demo codes; a real shop validates the code on the server.
  const codes = {
    SPRUCE10: { type: 'percent', value: 10, detail: '10% off' },
    FREESHIP: { type: 'shipping', detail: 'Free shipping' }
  };
  const shippingCost = 6.9;
  const money = (value) => `$${value.toFixed(2)}`;

  document.querySelectorAll('[data-coupon-form]').forEach((section) => {
    const form = section.querySelector('[data-coupon-form-form]');
    const input = form.elements.code;
    const message = section.querySelector('[data-coupon-form-message]');
    const applied = section.querySelector('[data-coupon-form-applied]');
    const template = section.querySelector('[data-coupon-form-chip]');
    const subtotal = Number(section.dataset.subtotal);
    const active = new Set();

    const setMessage = (text, type) => {
      message.textContent = text;
      message.className = `coupon-form__message${type ? ` coupon-form__message--${type}` : ''}`;
      input.setAttribute('aria-invalid', String(type === 'error'));
    };

    const render = () => {
      let discount = 0;
      let shipping = shippingCost;

      applied.replaceChildren();
      active.forEach((code) => {
        const coupon = codes[code];
        const chip = template.content.firstElementChild.cloneNode(true);

        if (coupon.type === 'percent') discount += subtotal * coupon.value / 100;
        if (coupon.type === 'shipping') shipping = 0;

        chip.querySelector('.coupon-form__code').textContent = code;
        chip.querySelector('.coupon-form__detail').textContent = coupon.detail;
        chip.querySelector('.coupon-form__remove .sr-only').textContent = `Remove the code ${code}`;
        chip.querySelector('.coupon-form__remove').dataset.code = code;
        applied.append(chip);
      });

      section.querySelector('[data-coupon-form-discount-row]').hidden = discount === 0;
      section.querySelector('[data-coupon-form-discount]').textContent = `−${money(discount)}`;
      section.querySelector('[data-coupon-form-shipping]').textContent = shipping ? money(shipping) : 'Free';
      section.querySelector('[data-coupon-form-total]').textContent = money(subtotal - discount + shipping);
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const code = input.value.trim().toUpperCase();

      if (!code) {
        setMessage('Enter a discount code.', 'error');
      } else if (!codes[code]) {
        setMessage(`The code ${code} isn’t valid. Check the spelling, or it may have expired.`, 'error');
      } else if (active.has(code)) {
        setMessage(`The code ${code} is already applied.`, 'error');
      } else {
        active.add(code);
        render();
        setMessage(`${code} applied: ${codes[code].detail.toLowerCase()}.`, 'success');
        form.reset();
        return;
      }

      input.focus();
    });

    applied.addEventListener('click', (event) => {
      const button = event.target.closest('.coupon-form__remove');

      if (!button) return;

      active.delete(button.dataset.code);
      render();
      setMessage(`The code ${button.dataset.code} is removed.`);
      input.focus();
    });
  });
})();
