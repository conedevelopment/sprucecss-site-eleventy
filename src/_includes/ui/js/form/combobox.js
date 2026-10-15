document.querySelectorAll('[data-combobox]').forEach((combobox) => {
  const input = combobox.querySelector('[role="combobox"]');
  const listbox = combobox.querySelector('[role="listbox"]');
  const options = [...listbox.querySelectorAll('[role="option"]')];
  const selectedList = combobox.querySelector('[data-combobox-selected]');
  const empty = combobox.querySelector('[data-combobox-empty]');
  const reset = combobox.querySelector('[data-combobox-reset]');
  const status = combobox.querySelector('[data-combobox-status]');
  const label = (option) => option.textContent.trim();
  const visible = () => options.filter((option) => !option.hidden);
  let active = null;

  const setActive = (option) => {
    options.forEach((item) => item.classList.toggle('is-active', item === option));
    active = option;

    if (option) {
      input.setAttribute('aria-activedescendant', option.id);
      option.scrollIntoView({ block: 'nearest' });
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  };

  const open = () => {
    const results = visible().length;

    listbox.hidden = results === 0;
    empty.hidden = results > 0;
    input.setAttribute('aria-expanded', String(results > 0));
  };

  const close = () => {
    listbox.hidden = true;
    empty.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    setActive(null);
  };

  // Render the chips and the hidden inputs from the selected options.
  const render = () => {
    const selected = options.filter((option) => option.getAttribute('aria-selected') === 'true');

    selectedList.replaceChildren(...selected.map((option) => {
      const item = document.createElement('li');

      item.className = 'combobox-item';
      item.innerHTML = '<span></span><button class="combobox-item__remove" type="button"><span class="sr-only"></span><svg aria-hidden="true" fill="none" focusable="false" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"/></svg></button><input type="hidden">';
      item.querySelector('span').textContent = label(option);
      item.querySelector('.sr-only').textContent = `Remove ${label(option)}`;
      item.querySelector('input').name = combobox.dataset.name;
      item.querySelector('input').value = option.dataset.value;
      item.querySelector('button').addEventListener('click', () => {
        toggle(option);
        input.focus();
      });

      return item;
    }));

    reset.hidden = selected.length === 0;
  };

  const toggle = (option) => {
    const selected = option.getAttribute('aria-selected') !== 'true';

    option.setAttribute('aria-selected', String(selected));
    status.textContent = `${label(option)} ${selected ? 'selected' : 'removed'}.`;
    render();
    combobox.dispatchEvent(new CustomEvent('combobox:change', {
      bubbles: true,
      detail: options.filter((item) => item.getAttribute('aria-selected') === 'true').map((item) => item.dataset.value)
    }));
  };

  const filter = () => {
    const query = input.value.trim().toLowerCase();

    options.forEach((option) => { option.hidden = !label(option).toLowerCase().includes(query); });
    setActive(null);
    open();

    const results = visible().length;
    status.textContent = query ? `${results} ${results === 1 ? 'result' : 'results'} available.` : '';
  };

  const move = (step) => {
    const items = visible();

    if (listbox.hidden) open();
    if (!items.length) return;

    const index = items.indexOf(active);
    setActive(items[index === -1 ? (step > 0 ? 0 : items.length - 1) : (index + step + items.length) % items.length]);
  };

  input.addEventListener('input', filter);
  input.addEventListener('click', () => (listbox.hidden ? open() : close()));

  input.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (event.altKey) { open(); } else { move(1); }
        break;
      case 'ArrowUp':
        event.preventDefault();
        move(-1);
        break;
      case 'Enter':
        if (active) {
          event.preventDefault();
          toggle(active);
        }
        break;
      case 'Escape':
        if (!listbox.hidden || !empty.hidden) {
          close();
        } else if (input.value) {
          input.value = '';
          filter();
          close();
        }
        break;
      case 'Backspace': {
        // An empty input: remove the last selected item.
        const last = options.filter((option) => option.getAttribute('aria-selected') === 'true').pop();
        if (!input.value && last) toggle(last);
        break;
      }
      case 'Tab':
        close();
        break;
    }
  });

  options.forEach((option) => {
    // Keep the focus in the input while clicking an option.
    option.addEventListener('mousedown', (event) => event.preventDefault());
    option.addEventListener('click', () => {
      toggle(option);
      setActive(option);
    });
  });

  reset.addEventListener('click', () => {
    options.forEach((option) => option.setAttribute('aria-selected', 'false'));
    render();
    status.textContent = 'All colors removed.';
    input.focus();
  });

  document.addEventListener('click', (event) => {
    if (!combobox.contains(event.target)) close();
  });

  render();
});
