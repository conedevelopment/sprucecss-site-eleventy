(() => {
  document.querySelectorAll('.notification-list').forEach((list) => {
    list.querySelector('[data-mark-read]')?.addEventListener('click', () => {
      list.querySelectorAll('.notification-list__item--unread').forEach((item) => {
        item.classList.remove('notification-list__item--unread');
        item.querySelector('.sr-only')?.remove();
      });

      list.querySelector('.notification-list__count')?.remove();
    });
  });
})();
