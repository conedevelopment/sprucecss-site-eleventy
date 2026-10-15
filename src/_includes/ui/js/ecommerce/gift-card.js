(() => {
  document.querySelectorAll('[data-gift-card]').forEach((section) => {
    const form = section.querySelector('[data-gift-card-form]');
    const custom = section.querySelector('[data-gift-card-custom]');
    const counter = section.querySelector('[data-gift-card-counter]');
    const preview = {
      amount: section.querySelector('[data-gift-card-amount]'),
      to: section.querySelector('[data-gift-card-to]'),
      message: section.querySelector('[data-gift-card-message]')
    };
    const { amount, custom: customInput, name, message } = form.elements;

    const update = () => {
      const isCustom = amount.value === 'custom';

      // The custom field is only shown (and required) for "Other".
      custom.hidden = !isCustom;
      customInput.required = isCustom;
      preview.amount.textContent = `$${isCustom ? (customInput.value || '—') : amount.value}`;
      preview.to.textContent = name.value.trim() ? `For ${name.value.trim()}` : 'For someone special';
      preview.message.textContent = message.value.trim() || 'Enjoy!';
      counter.textContent = `(${message.maxLength - message.value.length} characters left)`;
    };

    form.addEventListener('input', update);
    form.addEventListener('change', (event) => {
      update();

      if (event.target.name === 'amount' && event.target.value === 'custom') customInput.focus();
    });

    update();
  });
})();
