(() => {
  // Dismissible alerts: move the focus to a sensible place before the alert disappears.
  document.addEventListener('click', (event) => {
    const close = event.target.closest('[data-alert-close]');

    if (!close) return;

    const alert = close.closest('[data-alert]');
    const next = alert.nextElementSibling?.querySelector('a, button') ?? alert.parentElement.querySelector('[data-alert-demo]');

    alert.remove();
    next?.focus();
  });

  // Insert a message into the live region, so screen readers announce it.
  const region = document.querySelector('[data-alert-region]');

  document.querySelector('[data-alert-demo]')?.addEventListener('click', () => {
    region.innerHTML = '<div class="alert alert--success"><p class="alert__text">Your changes have been saved.</p></div>';
  });
})();
