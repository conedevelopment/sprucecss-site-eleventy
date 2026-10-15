(() => {
  const palette = document.querySelector('[data-command-palette]');

  if (!palette) {
    return;
  }

  const input = palette.querySelector('[data-command-input]');
  const options = [...palette.querySelectorAll('[data-command]')];
  const status = palette.querySelector('[data-command-status]');
  const empty = palette.querySelector('[data-command-empty]');
  let visible = options;
  let active = -1;

  const highlight = (index) => {
    options.forEach((option) => option.setAttribute('aria-selected', 'false'));
    active = visible.length ? (index + visible.length) % visible.length : -1;

    if (active > -1) {
      visible[active].setAttribute('aria-selected', 'true');
      visible[active].scrollIntoView({ block: 'nearest' });
      input.setAttribute('aria-activedescendant', visible[active].id);
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  };

  const filter = () => {
    const query = input.value.trim().toLowerCase();

    options.forEach((option) => {
      option.hidden = !option.textContent.toLowerCase().includes(query);
    });

    palette.querySelectorAll('.command-palette__list').forEach((list) => {
      const isEmpty = !list.querySelector('[data-command]:not([hidden])');
      list.hidden = isEmpty;
      list.previousElementSibling.hidden = isEmpty;
    });

    visible = options.filter((option) => !option.hidden);
    empty.hidden = visible.length > 0;
    status.textContent = `${visible.length} ${visible.length === 1 ? 'result' : 'results'}`;
    highlight(0);
  };

  const run = (option) => {
    palette.dispatchEvent(new CustomEvent('command', { detail: option.firstChild.textContent.trim() }));
    palette.close();
  };

  const open = () => {
    input.value = '';
    filter();
    palette.showModal();
    input.focus();
  };

  document.querySelectorAll('[data-command-open]').forEach((button) => button.addEventListener('click', open));

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      palette.open ? palette.close() : open();
    }
  });

  input.addEventListener('input', filter);

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); highlight(active + 1); }
    if (event.key === 'ArrowUp') { event.preventDefault(); highlight(active - 1); }
    if (event.key === 'Home') { event.preventDefault(); highlight(0); }
    if (event.key === 'End') { event.preventDefault(); highlight(visible.length - 1); }
    if (event.key === 'Enter' && visible[active]) { event.preventDefault(); run(visible[active]); }
  });

  options.forEach((option) => {
    option.addEventListener('click', () => run(option));
    option.addEventListener('pointermove', () => highlight(visible.indexOf(option)));
  });

  palette.addEventListener('click', (event) => {
    if (event.target === palette) palette.close();
  });
})();
