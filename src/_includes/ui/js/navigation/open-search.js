(() => {
  const buttons = document.querySelectorAll('[data-search-trigger]');
  const isMac = /Mac|iPhone|iPad/.test(navigator.userAgentData?.platform ?? navigator.platform);

  // Show the shortcut of the current platform.
  if (isMac) {
    document.querySelectorAll('[data-search-trigger-shortcut]').forEach((shortcut) => { shortcut.textContent = '⌘ K'; });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Replace this with your search dialog (like the Command Palette component).
      document.dispatchEvent(new CustomEvent('search:open'));
      const status = document.querySelector('[data-search-trigger-status]');
      if (status) status.textContent = 'The search would open now.';
    });
  });

  // Bind the shortcut only to a trigger that opts in with data-shortcut (one per page).
  const shortcutButton = document.querySelector('[data-search-trigger][data-shortcut]');

  if (shortcutButton) {
    document.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 'k' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        shortcutButton.click();
      }
    });
  }
})();
