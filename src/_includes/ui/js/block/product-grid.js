(() => {
  document.querySelectorAll('[data-product-grid]').forEach((block) => {
    const buttons = [...block.querySelectorAll('[data-filter]')];
    const items = [...block.querySelectorAll('[data-category]')];
    const status = block.querySelector('[data-product-grid-status]');

    // The wishlist hearts are toggle buttons.
    block.querySelectorAll('[data-wishlist]').forEach((button) => {
      button.addEventListener('click', () => {
        button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
      });
    });

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        let visible = 0;

        buttons.forEach((other) => {
          const isActive = other === button;

          other.setAttribute('aria-pressed', String(isActive));
          other.classList.toggle('btn--primary', isActive);
          other.classList.toggle('btn--soft-primary', !isActive);
        });

        items.forEach((item) => {
          const isMatch = filter === 'all' || item.dataset.category === filter;

          item.hidden = !isMatch;
          visible += isMatch ? 1 : 0;
        });

        status.textContent = `${visible} ${visible === 1 ? 'product' : 'products'} shown.`;
      });
    });
  });
})();
