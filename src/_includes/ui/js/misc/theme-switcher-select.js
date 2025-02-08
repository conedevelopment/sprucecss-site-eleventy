(() => {
  const themeSwitcher = document.querySelector('#theme-switcher');
  const preferredTheme = localStorage.getItem('preferred-theme') || 'system';

  if (!themeSwitcher) {
    return;
  }

  function updateTheme(theme) {
    const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    document.documentElement.classList.add('no-transition');

    localStorage.setItem('preferred-theme', theme);
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? systemMode : theme);

    themeSwitcher.setAttribute('data-theme-mode', theme);
    themeSwitcher.querySelector(`option[value="${theme}"]`).selected = true;

    document.documentElement.classList.remove('no-transition');
  }

  themeSwitcher.addEventListener('input', (e) => {
    const selectedTheme = e.target.value;
    updateTheme(selectedTheme);
  });

  updateTheme(preferredTheme);
})();
