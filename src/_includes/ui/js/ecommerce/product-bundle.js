(() => {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five'];

  document.querySelectorAll('[data-product-bundle]').forEach((bundle) => {
    const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: 'USD' });
    const discount = Number(bundle.dataset.discount || 0);
    const items = [...bundle.querySelectorAll('[data-bundle-item]')];
    const total = bundle.querySelector('[data-bundle-total]');
    const full = bundle.querySelector('[data-bundle-full]');
    const note = bundle.querySelector('[data-bundle-note]');
    const submit = bundle.querySelector('[data-bundle-submit]');
    const live = bundle.querySelector('[data-bundle-live]');

    const update = (announce = true) => {
      const selected = items.filter((item) => item.checked || item.hasAttribute('data-fixed'));
      const sum = selected.reduce((value, item) => value + Number(item.dataset.price), 0);
      // The discount only applies to the complete bundle.
      const complete = selected.length === items.length;
      const price = complete ? sum * (1 - discount) : sum;
      const count = words[selected.length] || selected.length;

      items.forEach((item) => {
        bundle.querySelector(`[data-bundle-media="${item.dataset.bundleItem}"]`).classList.toggle('product-bundle__media--off', !item.checked && !item.hasAttribute('data-fixed'));
      });

      total.textContent = format.format(price);
      full.hidden = !complete;
      full.lastChild.textContent = ` ${format.format(sum)}`;
      note.hidden = !complete;
      submit.textContent = selected.length === 1 ? 'Add to cart' : complete ? `Add all ${count} to cart` : `Add ${count} to cart`;

      if (announce) {
        live.textContent = `Total: ${format.format(price)}${complete ? `, ${discount * 100}% bundle discount included` : ''}.`;
      }
    };

    bundle.addEventListener('change', update);
    update(false);
  });
})();
