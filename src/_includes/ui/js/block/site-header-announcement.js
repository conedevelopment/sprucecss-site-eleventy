(() => {
  document.querySelectorAll('[data-announcement]').forEach((banner) => {
    const key = `announcement-${banner.dataset.announcement}`;
    const close = banner.querySelector('[data-announcement-close]');

    // A dismissed announcement stays hidden; a new one gets a new data-announcement id.
    try {
      if (localStorage.getItem(key) === 'dismissed') {
        banner.hidden = true;
        return;
      }
    } catch (error) {}

    close.hidden = false;
    close.addEventListener('click', () => {
      banner.hidden = true;

      try {
        localStorage.setItem(key, 'dismissed');
      } catch (error) {}

      // The button is gone; continue from the header.
      document.querySelector('.site-header-announcement__logo')?.focus();
    });
  });
})();
