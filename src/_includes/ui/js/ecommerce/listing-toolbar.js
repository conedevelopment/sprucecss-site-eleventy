(() => {
  const storageKey = 'listing-view';

  document.querySelectorAll('[data-listing-toolbar]').forEach((toolbar) => {
    const sort = toolbar.querySelector('[data-listing-sort]');
    const results = toolbar.querySelector('[data-listing-results]');
    const view = toolbar.querySelector('[data-listing-view]');
    const live = toolbar.querySelector('[data-listing-live]');

    const comparators = {
      featured: (a, b) => a.dataset.order - b.dataset.order,
      newest: (a, b) => b.dataset.date.localeCompare(a.dataset.date),
      'price-asc': (a, b) => a.dataset.price - b.dataset.price,
      'price-desc': (a, b) => b.dataset.price - a.dataset.price,
      rating: (a, b) => b.dataset.rating - a.dataset.rating
    };

    const setView = (value) => {
      results.classList.toggle('listing-toolbar__results--list', value === 'list');
      view.querySelectorAll('[data-view]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.view === value));
      });

      try {
        localStorage.setItem(storageKey, value);
      } catch (error) {}
    };

    // Sort on change; without JavaScript, the "Apply" button submits the form and the server sorts.
    toolbar.querySelector('[data-listing-submit]').hidden = true;
    sort.addEventListener('change', () => {
      results.append(...[...results.children].sort(comparators[sort.value]));
      live.textContent = `Sorted by ${sort.selectedOptions[0].text}.`;
    });

    view.hidden = false;
    view.addEventListener('click', (event) => {
      const button = event.target.closest('[data-view]');

      if (button) {
        setView(button.dataset.view);
      }
    });

    try {
      setView(localStorage.getItem(storageKey) || 'grid');
    } catch (error) {
      setView('grid');
    }
  });
})();
