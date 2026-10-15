(() => {
  document.querySelectorAll('[data-app-shell]').forEach((shell) => {
    const toggle = shell.querySelector('[data-app-shell-toggle]');
    const backdrop = shell.querySelector('[data-app-shell-close]');
    const sidebar = document.getElementById(toggle.getAttribute('aria-controls'));
    const desktop = window.matchMedia('(min-width: 64em)');

    const setOpen = (open) => {
      shell.classList.toggle('app-shell--open', open);
      toggle.setAttribute('aria-expanded', String(open));
      backdrop.hidden = !open;

      if (open) {
        sidebar.querySelector('a, button')?.focus();
      }
    };

    // The off-canvas behavior only starts with JavaScript; without it, the sidebar stays in the flow.
    shell.classList.add('app-shell--enhanced');

    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    backdrop.addEventListener('click', () => setOpen(false));

    shell.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && shell.classList.contains('app-shell--open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close the off-canvas sidebar when the viewport grows to the desktop layout.
    desktop.addEventListener('change', () => setOpen(false));
  });
})();
