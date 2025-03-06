(() => {
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const preferredTheme = localStorage.getItem('preferred-theme-demo');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? systemMode : theme);
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (localStorage.getItem('preferred-theme-demo') === 'system' || localStorage.getItem('preferred-theme-demo') === null) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

  setTheme(preferredTheme || systemMode);
})();
