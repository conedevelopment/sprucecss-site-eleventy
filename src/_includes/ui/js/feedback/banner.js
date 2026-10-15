(() => {
  document.querySelectorAll('[data-banner]').forEach((banner) => {
    const key = `banner-dismissed-${banner.dataset.banner}`;

    try {
      if (localStorage.getItem(key)) {
        banner.remove();
        return;
      }
    } catch (error) {
      // Storage can be unavailable (private mode); the banner just stays visible.
    }

    banner.querySelector('[data-banner-dismiss]')?.addEventListener('click', () => {
      try {
        localStorage.setItem(key, 'true');
      } catch (error) {}

      banner.remove();
      document.querySelector('main, #content')?.focus({ preventScroll: true });
    });
  });
})();
