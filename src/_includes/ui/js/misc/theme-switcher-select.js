(() => {
  const switchers = document.querySelectorAll('[data-theme-switcher-select]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const stored = () => {
    try { return localStorage.getItem('preferred-theme') ?? 'system'; } catch { return 'system'; }
  };

  const apply = (theme) => {
    document.documentElement.classList.add('no-transition');
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? (media.matches ? 'dark' : 'light') : theme);

    switchers.forEach((switcher) => {
      switcher.setAttribute('data-theme-mode', theme);
      switcher.querySelector('select').value = theme;
    });

    requestAnimationFrame(() => document.documentElement.classList.remove('no-transition'));
  };

  switchers.forEach((switcher) => {
    switcher.querySelector('select').addEventListener('change', (event) => {
      try { localStorage.setItem('preferred-theme', event.target.value); } catch {}
      apply(event.target.value);
    });
  });

  media.addEventListener('change', () => {
    if (stored() === 'system') apply('system');
  });

  apply(stored());
})();
