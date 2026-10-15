(() => {
  const root = document.documentElement;
  const styleSelect = document.querySelector('[data-page-preview-style]');
  const themeSelect = document.querySelector('[data-page-preview-theme]');

  if (!styleSelect || !themeSelect) {
    return;
  }

  styleSelect.value = root.getAttribute('data-spruce-style') ?? '';
  themeSelect.value = root.getAttribute('data-theme-mode') === 'dark' ? 'dark' : 'light';

  // Keep the chosen style in the URL, so the link can be shared.
  styleSelect.addEventListener('change', () => {
    const url = new URL(window.location.href);

    if (styleSelect.value) {
      root.setAttribute('data-spruce-style', styleSelect.value);
    } else {
      root.removeAttribute('data-spruce-style');
    }

    url.searchParams.set('style', styleSelect.value);
    window.history.replaceState(null, '', url);
  });

  themeSelect.addEventListener('change', () => {
    root.setAttribute('data-theme-mode', themeSelect.value);
  });
})();
