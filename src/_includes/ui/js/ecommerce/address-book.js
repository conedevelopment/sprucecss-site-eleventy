(() => {
  document.querySelectorAll('[data-address-book]').forEach((book) => {
    const list = book.querySelector('[data-address-book-list]');
    const status = book.querySelector('[data-address-book-status]');
    const defaultClass = 'address-book__item--default';

    const labelOf = (item) => item.querySelector('.address-book__label').textContent;

    list.addEventListener('click', (event) => {
      const item = event.target.closest('[data-address]');

      if (!item) return;

      if (event.target.closest('[data-address-default]')) {
        list.querySelector(`.${defaultClass}`)?.classList.remove(defaultClass);
        item.classList.add(defaultClass);
        // The default address goes first.
        list.prepend(item);
        status.textContent = `${labelOf(item)} is now your default address.`;
        item.querySelector('a').focus();
      }

      if (event.target.closest('[data-address-delete]')) {
        if (!window.confirm(`Delete the ${labelOf(item)} address?`)) return;

        const next = item.nextElementSibling;

        item.remove();
        status.textContent = `The ${labelOf(item)} address is deleted.`;
        next.querySelector('a').focus();
      }
    });
  });
})();
