(() => {
  document.querySelectorAll('[data-notification-center]').forEach((center) => {
    const count = center.querySelector('[data-notification-count]');
    const filter = center.querySelector('[data-notification-filter]');
    const empty = center.querySelector('[data-notification-empty]');
    const status = center.querySelector('[data-notification-status]');
    const items = [...center.querySelectorAll('[data-notification]')];
    let show = 'all';

    const unread = () => items.filter((item) => item.classList.contains('notification-center__item--unread'));

    const update = () => {
      const total = unread().length;

      count.hidden = total === 0;
      count.firstChild.textContent = total;
      items.forEach((item) => {
        item.hidden = show === 'unread' && !item.classList.contains('notification-center__item--unread');
      });
      empty.hidden = items.some((item) => !item.hidden);
    };

    const markRead = (item) => {
      item.classList.remove('notification-center__item--unread');
      item.querySelector('[data-notification-read]')?.remove();
    };

    // The filter needs JavaScript, so it's hidden without it.
    filter.hidden = false;
    filter.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');

      if (!button) return;

      show = button.dataset.filter;
      filter.querySelectorAll('[data-filter]').forEach((other) => {
        const isActive = other === button;

        other.setAttribute('aria-pressed', String(isActive));
        other.classList.toggle('btn--soft-primary', isActive);
        other.classList.toggle('btn--ghost-primary', !isActive);
      });
      update();
    });

    center.addEventListener('click', (event) => {
      const button = event.target.closest('[data-notification-read]');

      if (!button) return;

      const item = button.closest('[data-notification]');
      const next = item.nextElementSibling?.querySelector('a, button');

      markRead(item);
      update();
      status.textContent = `Marked as read. ${unread().length} unread.`;
      // The button is gone; keep the focus nearby.
      (next || center.querySelector('[data-notification-read-all]')).focus();
    });

    center.querySelector('[data-notification-read-all]').addEventListener('click', () => {
      unread().forEach(markRead);
      update();
      status.textContent = 'All notifications marked as read.';
    });

    update();
  });
})();
