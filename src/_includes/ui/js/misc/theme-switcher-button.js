(() => {
  const switchers = document.querySelectorAll('[data-theme-switcher]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const stored = () => {
    try { return localStorage.getItem('preferred-theme') ?? 'system'; } catch { return 'system'; }
  };

  const apply = (theme, focusIn = null) => {
    document.documentElement.classList.add('no-transition');
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? (media.matches ? 'dark' : 'light') : theme);

    // Keep every switcher on the page (header, footer) in sync.
    switchers.forEach((switcher) => switcher.setAttribute('data-theme-mode', theme));
    focusIn?.querySelector(`.theme-switcher__${theme}-mode`).focus();

    requestAnimationFrame(() => document.documentElement.classList.remove('no-transition'));
  };

  switchers.forEach((switcher) => {
    switcher.addEventListener('click', (event) => {
      const button = event.target.closest('[data-action]');

      if (!button) return;

      try { localStorage.setItem('preferred-theme', button.dataset.action); } catch {}
      apply(button.dataset.action, switcher);
    });
  });

  // Follow the operating system while "system" is selected.
  media.addEventListener('change', () => {
    if (stored() === 'system') apply('system');
  });

  apply(stored());
})();
