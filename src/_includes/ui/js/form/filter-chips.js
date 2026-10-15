(() => {
  document.querySelectorAll('[data-filter-chips]').forEach((component) => {
    const chips = [...component.querySelectorAll('[aria-pressed]')];
    const clear = component.querySelector('[data-filter-chips-clear]');
    const status = component.querySelector('[data-filter-chips-status]');

    const update = () => {
      const selected = chips.filter((chip) => chip.getAttribute('aria-pressed') === 'true').map((chip) => chip.textContent.trim());

      clear.hidden = selected.length === 0;
      status.textContent = selected.length ? `Filters: ${selected.join(', ')}` : 'No filters selected';
      component.dispatchEvent(new CustomEvent('filterchange', { detail: selected }));
    };

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chip.setAttribute('aria-pressed', String(chip.getAttribute('aria-pressed') !== 'true'));
        update();
      });
    });

    clear.addEventListener('click', () => {
      chips.forEach((chip) => chip.setAttribute('aria-pressed', 'false'));
      update();
      chips[0].focus();
    });

    clear.hidden = !chips.some((chip) => chip.getAttribute('aria-pressed') === 'true');
  });
})();
