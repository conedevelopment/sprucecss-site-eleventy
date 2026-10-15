(() => {
  const escape = (text) => text.replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);

  document.querySelectorAll('[data-autocomplete]').forEach((component) => {
    const input = component.querySelector('[data-autocomplete-input]');
    const listbox = component.querySelector('[data-autocomplete-listbox]');
    const status = component.querySelector('[data-autocomplete-status]');
    const options = [...listbox.querySelectorAll('[role="option"]')];
    const labels = options.map((option) => option.textContent);
    let visible = [];
    let active = -1;

    const close = () => {
      listbox.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      input.removeAttribute('aria-activedescendant');
      active = -1;
    };

    const highlight = (index) => {
      options.forEach((option) => option.setAttribute('aria-selected', 'false'));
      active = (index + visible.length) % visible.length;
      visible[active].setAttribute('aria-selected', 'true');
      visible[active].scrollIntoView({ block: 'nearest' });
      input.setAttribute('aria-activedescendant', visible[active].id);
    };

    const open = () => {
      const query = input.value.trim().toLowerCase();

      visible = [];
      options.forEach((option, index) => {
        const label = labels[index];
        const position = label.toLowerCase().indexOf(query);
        const isMatch = position > -1;

        option.hidden = !isMatch;
        option.setAttribute('aria-selected', 'false');

        if (isMatch) {
          option.innerHTML = query
            ? `${escape(label.slice(0, position))}<mark>${escape(label.slice(position, position + query.length))}</mark>${escape(label.slice(position + query.length))}`
            : escape(label);
          visible.push(option);
        }
      });

      active = -1;
      listbox.hidden = visible.length === 0;
      input.setAttribute('aria-expanded', String(visible.length > 0));
      status.textContent = `${visible.length} ${visible.length === 1 ? 'suggestion' : 'suggestions'}`;
    };

    const select = (option) => {
      input.value = option.textContent;
      close();
    };

    input.addEventListener('input', open);
    input.addEventListener('focus', () => input.value && open());

    input.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (listbox.hidden) open();
        if (visible.length) highlight(active + (event.key === 'ArrowDown' ? 1 : -1));
      } else if (event.key === 'Enter' && active > -1) {
        event.preventDefault();
        select(visible[active]);
      } else if (event.key === 'Escape') {
        if (listbox.hidden) input.value = '';
        close();
      }
    });

    options.forEach((option) => {
      option.addEventListener('mousedown', (event) => event.preventDefault());
      option.addEventListener('click', () => select(option));
    });

    document.addEventListener('click', (event) => {
      if (!component.contains(event.target)) close();
    });
  });
})();
