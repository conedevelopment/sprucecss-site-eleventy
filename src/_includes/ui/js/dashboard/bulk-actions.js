(() => {
  document.querySelectorAll('[data-bulk-actions]').forEach((form) => {
    const all = form.querySelector('[data-bulk-all]');
    const items = [...form.querySelectorAll('[data-bulk-item]')];
    const bar = form.querySelector('[data-bulk-bar]');
    const count = form.querySelector('[data-bulk-count]');
    const clear = form.querySelector('[data-bulk-clear]');
    const live = form.querySelector('[data-bulk-live]');
    const actions = [...bar.querySelectorAll('button[type="submit"]')];
    let last = null;

    const update = (announce = true) => {
      const selected = items.filter((item) => item.checked).length;
      const text = selected ? `${selected} of ${items.length} selected` : 'No orders selected';

      all.checked = selected === items.length;
      all.indeterminate = selected > 0 && selected < items.length;
      count.textContent = selected ? text : '';
      bar.classList.toggle('bulk-actions__bar--active', selected > 0);
      actions.forEach((button) => { button.hidden = !selected; });
      clear.hidden = !selected;

      if (announce) {
        live.textContent = text;
      }
    };

    // The select-all checkbox needs JavaScript, so it is revealed here.
    all.hidden = false;

    all.addEventListener('change', () => {
      items.forEach((item) => { item.checked = all.checked; });
      update();
    });

    // Shift + click selects the range from the last clicked checkbox.
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        if (event.shiftKey && last) {
          const [start, end] = [items.indexOf(last), items.indexOf(item)].sort((a, b) => a - b);
          items.slice(start, end + 1).forEach((other) => { other.checked = item.checked; });
        }

        last = item;
        update();
      });
    });

    clear.addEventListener('click', () => {
      items.forEach((item) => { item.checked = false; });
      update();
      all.focus();
    });

    update(false);
  });
})();
