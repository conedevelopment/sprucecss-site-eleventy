(() => {
  const storageKey = 'file-manager-view';

  document.querySelectorAll('[data-file-manager]').forEach((manager) => {
    const view = manager.querySelector('[data-file-manager-view]');
    const items = manager.querySelector('[data-file-manager-items]');

    const setView = (value) => {
      items.classList.toggle('file-manager__items--list', value === 'list');
      view.querySelectorAll('[data-view]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.view === value));
      });

      try {
        localStorage.setItem(storageKey, value);
      } catch (error) {}
    };

    // The view switch needs JavaScript, so it's hidden without it.
    view.hidden = false;
    view.addEventListener('click', (event) => {
      const button = event.target.closest('[data-view]');

      if (button) setView(button.dataset.view);
    });

    try {
      setView(localStorage.getItem(storageKey) || 'grid');
    } catch (error) {
      setView('grid');
    }
  });
})();
