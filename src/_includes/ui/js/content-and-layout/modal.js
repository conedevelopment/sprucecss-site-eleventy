(() => {
  document.querySelectorAll('[data-modal-open]').forEach((opener) => {
    const modal = document.getElementById(opener.dataset.modalOpen);

    if (!modal) return;

    // showModal() traps the focus, makes the page inert and closes on Escape.
    opener.addEventListener('click', () => modal.showModal());

    modal.addEventListener('click', (event) => {
      // A click on the backdrop targets the dialog itself.
      if (event.target === modal || event.target.closest('[data-modal-close]')) {
        modal.close('cancel');
      }
    });

    // The native dialog returns the focus to the opener on close; returnValue tells how it was closed.
    modal.addEventListener('close', () => {
      if (modal.returnValue === 'send') {
        modal.querySelector('[data-modal-form]').reset();
        modal.dispatchEvent(new CustomEvent('modal:submit', { bubbles: true }));
      }
    });
  });
})();
