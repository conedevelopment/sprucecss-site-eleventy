(() => {
  // Check document page load
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      document.body.classList.remove('hidden');
    }
  };

  // Change assets based on theme.
  function changeAssets(theme) {
    if (!theme) return;
    const themeAssets = document.querySelectorAll('img[data-theme-mode]');

    themeAssets.forEach((el) => {
      el.src = el.getAttribute(`data-${theme}-asset`);
    });
  }

  // Prevent default behavior on all links.
  document.addEventListener('click', (e) => {
    if (!e.target.matches('a') && !e.target.closest('a')) return;

    e.preventDefault();
  });

  // Watch changes on HTML element.
  const htmlElement = document.querySelector('html');
  changeAssets(htmlElement.getAttribute('data-theme-mode') || null);

  const observer = new MutationObserver(() => {
    changeAssets(htmlElement.getAttribute('data-theme-mode') || null);
  });

  observer.observe(htmlElement, { attributes: true });

  // Catch message from parent window.
  function receiveMessage(e) {
    if (e.origin !== 'https://sprucecss.com' && e.origin !== 'http://localhost:8000') {
      return;
    }

    if (document.querySelector('body > .theme-switcher')) {
      return;
    }

    if (e.data.type === 'dark') {
      htmlElement.setAttribute('data-theme-mode', 'dark');
    }

    if (e.data.type === 'light' || e.data.type === 'system') {
      htmlElement.removeAttribute('data-theme-mode');
    }
  }
  window.addEventListener('message', receiveMessage);

  // Get URL params.
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('theme-mode') === 'dark') {
    htmlElement.setAttribute('data-theme-mode', 'dark');
    changeAssets('dark');
  }

  if (urlParams.get('dir')) {
    htmlElement.setAttribute('dir', urlParams.get('dir'));
  }
})();
