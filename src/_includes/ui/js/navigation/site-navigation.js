document.querySelectorAll('[data-site-navigation]').forEach((navigation) => {
  const button = navigation.querySelector('.site-navigation__btn');
  const menu = document.getElementById(button.getAttribute('aria-controls'));
  const toggles = [...navigation.querySelectorAll('.site-navigation__toggle')];
  const desktop = window.matchMedia('(min-width: 64em)'); // The md breakpoint.

  const isOpen = (control) => control.getAttribute('aria-expanded') === 'true';

  // One submenu is open at a time.
  const closeSubmenus = (except) => toggles.forEach((toggle) => {
    if (toggle !== except) toggle.setAttribute('aria-expanded', 'false');
  });

  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));

    if (!open) closeSubmenus();
  };

  // The CSS collapses the menu and the submenus only when the script runs.
  navigation.setAttribute('data-enhanced', '');

  button.addEventListener('click', () => setOpen(!isOpen(button)));

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      closeSubmenus(toggle);
      toggle.setAttribute('aria-expanded', String(!isOpen(toggle)));
    });
  });

  // Esc closes the open submenu first, then the panel.
  navigation.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    const toggle = toggles.find(isOpen);

    if (toggle) {
      closeSubmenus();
      toggle.focus();
    } else if (isOpen(button)) {
      setOpen(false);
      button.focus();
    }
  });

  // Close the panel after choosing a link (useful for same-page links) and when the focus leaves it.
  menu.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;

    closeSubmenus();

    if (!desktop.matches) setOpen(false);
  });

  // A submenu closes when the focus moves out of its item (the clicks outside are handled below).
  navigation.addEventListener('focusout', (event) => {
    toggles.forEach((toggle) => {
      if (event.relatedTarget && !toggle.parentElement.contains(event.relatedTarget)) toggle.setAttribute('aria-expanded', 'false');
    });

    if (!desktop.matches && !navigation.contains(event.relatedTarget)) setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) closeSubmenus();
  });

  desktop.addEventListener('change', () => setOpen(false));
});
