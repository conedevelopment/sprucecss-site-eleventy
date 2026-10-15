(() => {
  const toInches = (cm) => (cm / 2.54).toFixed(1).replace(/\.0$/, '');

  document.querySelectorAll('[data-size-guide-open]').forEach((opener) => {
    const dialog = document.getElementById(opener.dataset.sizeGuideOpen);

    if (!dialog) {
      return;
    }

    const caption = dialog.querySelector('[data-size-guide-caption]');

    // Without JavaScript, the opener is a link to the size guide page.
    opener.setAttribute('role', 'button');
    opener.setAttribute('aria-haspopup', 'dialog');

    const open = (event) => {
      event.preventDefault();
      dialog.showModal();
    };

    opener.addEventListener('click', open);
    opener.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        open(event);
      }
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('[data-size-guide-close]')) {
        dialog.close();
      }
    });

    // The table stores the centimeters; inches are calculated from them.
    dialog.addEventListener('change', (event) => {
      if (!event.target.matches('[data-size-guide-unit]')) {
        return;
      }

      const inches = event.target.value === 'in';

      dialog.querySelectorAll('[data-cm]').forEach((cell) => {
        const [from, to] = cell.dataset.cm.split('-').map(Number);
        cell.textContent = inches ? `${toInches(from)}–${toInches(to)}` : `${from}–${to}`;
      });

      caption.textContent = inches ? 'inches' : 'centimeters';
    });
  });
})();
