(() => {
  document.querySelectorAll('[data-member-list]').forEach((component) => {
    const form = component.querySelector('[data-member-invite]');
    const list = component.querySelector('[data-member-items]');
    const template = component.querySelector('[data-member-template]');
    const count = component.querySelector('[data-member-count]');
    const live = component.querySelector('[data-member-live]');
    let uid = 0;

    const updateCount = () => { count.textContent = list.children.length; };

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = form.elements.email.value.trim();
      const role = form.elements.role.value;
      const item = template.content.firstElementChild.cloneNode(true);
      const select = item.querySelector('[data-member-role]');
      const id = `member-role-new-${++uid}`;

      item.querySelector('[data-member-email]').textContent = email;
      item.querySelector('[data-member-role-label]').textContent = `Role of ${email}`;
      item.querySelector('[data-member-role-label]').htmlFor = id;
      item.querySelector('[data-member-remove-label]').textContent = ` the invitation of ${email}`;
      select.id = id;
      select.value = role;
      list.append(item);

      updateCount();
      live.textContent = `Invitation sent to ${email} as ${select.selectedOptions[0].text}.`;
      component.dispatchEvent(new CustomEvent('member:invite', { detail: { email, role } }));
      form.reset();
      form.elements.email.focus();
    });

    list.addEventListener('click', (event) => {
      const button = event.target.closest('[data-member-remove]');

      if (!button) {
        return;
      }

      const item = button.closest('[data-member]');
      const name = item.querySelector('.member-list__name').firstChild.textContent.trim();
      // Keep the focus in the list: move it to the next (or previous) row, or to the invite field.
      const next = item.nextElementSibling || item.previousElementSibling;

      item.remove();
      updateCount();
      live.textContent = `${name} removed.`;
      component.dispatchEvent(new CustomEvent('member:remove', { detail: { name } }));
      (next?.querySelector('select:not([disabled]), button') || form.elements.email).focus();
    });
  });
})();
