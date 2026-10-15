(() => {
  document.querySelectorAll('[data-returns-form]').forEach((form) => {
    const items = [...form.querySelectorAll('[data-returns-item]')];
    const summary = form.querySelector('[data-returns-summary]');

    const selected = () => items.filter((item) => item.querySelector('[type="checkbox"]').checked);

    const update = () => {
      const chosen = selected();
      const bonus = Number(form.querySelector('[name="refund"]:checked').dataset.bonus);
      const total = chosen.reduce((sum, item) => sum + Number(item.dataset.price), 0) * (1 + bonus / 100);

      items.forEach((item) => {
        const select = item.querySelector('select');

        // A selected item needs a reason; the select is only shown (and required) then.
        select.required = item.querySelector('[type="checkbox"]').checked;
      });

      summary.innerHTML = chosen.length
        ? `${chosen.length} ${chosen.length === 1 ? 'item' : 'items'}, estimated refund: <strong>$${total.toFixed(2)}</strong>`
        : 'Select the items to return.';
    };

    form.addEventListener('change', update);

    form.addEventListener('submit', (event) => {
      if (selected().length === 0) {
        event.preventDefault();
        summary.textContent = 'Select at least one item to return.';
        items[0].querySelector('[type="checkbox"]').focus();
      }
    });

    update();
  });
})();
