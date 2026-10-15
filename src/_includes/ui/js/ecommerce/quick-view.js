(() => {
  document.querySelectorAll('[data-quick-view-open]').forEach((opener) => {
    const dialog = document.getElementById(opener.dataset.quickViewOpen);

    if (!dialog) {
      return;
    }

    const form = dialog.querySelector('[data-quick-view-form]');
    const status = dialog.querySelector('[data-quick-view-status]');

    // Without JavaScript, the opener is a link to the product page.
    opener.setAttribute('role', 'button');
    opener.setAttribute('aria-haspopup', 'dialog');

    const open = (event) => {
      event.preventDefault();
      status.textContent = '';
      dialog.showModal();
    };

    opener.addEventListener('click', open);
    opener.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        open(event);
      }
    });

    dialog.addEventListener('click', (event) => {
      // A click on the backdrop targets the dialog itself.
      if (event.target === dialog || event.target.closest('[data-quick-view-close]')) {
        dialog.close();
      }
    });

    // The native dialog returns the focus to the opener when it closes.
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.dispatchEvent(new CustomEvent('cart:add', { bubbles: true, detail: { data: new FormData(form) } }));
      status.innerHTML = '';
      status.append(`${form.elements.quantity.value} × ${dialog.querySelector('.quick-view__title').textContent} added to your cart. `);

      const link = document.createElement('a');
      link.href = '#';
      link.textContent = 'View cart';
      status.append(link);
    });
  });
})();
