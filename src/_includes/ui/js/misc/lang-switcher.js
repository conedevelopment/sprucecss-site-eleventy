document.querySelectorAll('[data-lang-switcher]').forEach((switcher) => {
  const control = switcher.querySelector('[aria-expanded]');
  const panel = document.getElementById(control.getAttribute('aria-controls'));
  const links = [...panel.querySelectorAll('a')];

  const toggle = (open, focusControl = false) => {
    control.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;

    if (!open && focusControl) control.focus();
  };

  control.addEventListener('click', () => toggle(panel.hidden));

  // ArrowDown opens the list and moves into it, the arrows move between the languages.
  switcher.addEventListener('keydown', (event) => {
    const index = links.indexOf(document.activeElement);

    if (event.key === 'Escape' && !panel.hidden) {
      toggle(false, true);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();

      if (panel.hidden) toggle(true);

      const step = event.key === 'ArrowDown' ? 1 : -1;
      const start = index === -1 ? (step === 1 ? -1 : 0) : index;

      links[(start + step + links.length) % links.length].focus();
    }
  });

  // Close it when the focus or a click leaves the switcher.
  switcher.addEventListener('focusout', (event) => {
    if (!switcher.contains(event.relatedTarget)) toggle(false);
  });

  document.addEventListener('click', (event) => {
    if (!switcher.contains(event.target)) toggle(false);
  });
});
