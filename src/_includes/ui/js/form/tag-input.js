(() => {
  document.querySelectorAll('[data-tag-input]').forEach((component) => {
    const list = component.querySelector('.tag-input__list');
    const field = component.querySelector('.tag-input__field');
    const status = component.querySelector('[data-tag-status]');
    const hidden = component.querySelector('[data-tag-value]');

    const values = () => [...list.querySelectorAll('.tag-input__tag span')].map((tag) => tag.textContent);
    const sync = () => { hidden.value = values().join(','); };

    const remove = (tag) => {
      const name = tag.querySelector('span').textContent;

      tag.remove();
      sync();
      status.textContent = `${name} removed.`;
      field.focus();
    };

    const add = (value) => {
      const name = value.trim();

      if (!name || values().some((item) => item.toLowerCase() === name.toLowerCase())) {
        return;
      }

      const tag = document.createElement('li');
      const label = document.createElement('span');
      const button = document.createElement('button');

      tag.className = 'tag-input__tag';
      label.textContent = name;
      button.className = 'tag-input__remove';
      button.type = 'button';
      button.textContent = '×';
      button.setAttribute('aria-label', `Remove ${name}`);
      tag.append(label, button);
      list.append(tag);
      sync();
      status.textContent = `${name} added.`;
    };

    component.querySelector('.tag-input__box').addEventListener('click', (event) => {
      const removeButton = event.target.closest('.tag-input__remove');

      if (removeButton) {
        remove(removeButton.closest('.tag-input__tag'));
      } else {
        field.focus();
      }
    });

    field.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ',') {
        event.preventDefault();
        add(field.value);
        field.value = '';
      } else if (event.key === 'Backspace' && !field.value) {
        const last = list.querySelector('.tag-input__tag:last-child');

        if (last) {
          remove(last);
        }
      }
    });
  });
})();
