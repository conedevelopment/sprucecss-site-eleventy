(() => {
  document.querySelectorAll('[data-wishlist]').forEach((wishlist) => {
    const list = wishlist.querySelector('[data-wishlist-items]');
    const count = wishlist.querySelector('[data-wishlist-count]');
    const empty = wishlist.querySelector('[data-wishlist-empty]');
    const status = wishlist.querySelector('[data-wishlist-status]');
    const share = wishlist.querySelector('[data-wishlist-share]');

    const update = () => {
      const total = list.children.length;

      count.textContent = `(${total} ${total === 1 ? 'item' : 'items'})`;
      empty.hidden = total > 0;
      list.hidden = total === 0;
      share.hidden = total === 0;
    };

    // Remove an item and move the focus to the next item (or the empty state).
    const removeItem = (item, message) => {
      const next = item.nextElementSibling || item.previousElementSibling;

      item.remove();
      update();
      status.textContent = message;
      (next?.querySelector('a') || empty.querySelector('a')).focus();
    };

    list.addEventListener('click', (event) => {
      const item = event.target.closest('[data-wishlist-item]');

      if (!item) return;

      const name = item.querySelector('.wishlist__name').textContent.trim();
      const notify = event.target.closest('[data-wishlist-notify]');

      if (event.target.closest('[data-wishlist-move]')) {
        removeItem(item, `${name} moved to the cart.`);
      } else if (event.target.closest('[data-wishlist-remove]')) {
        removeItem(item, `${name} removed from the wishlist.`);
      } else if (notify) {
        const isOn = notify.getAttribute('aria-pressed') !== 'true';

        notify.setAttribute('aria-pressed', String(isOn));
        notify.firstChild.textContent = isOn ? 'We’ll email you' : 'Notify me';
        status.textContent = isOn ? `We’ll email you when ${name} is back in stock.` : `Back-in-stock email for ${name} turned off.`;
      }
    });

    share.addEventListener('click', async () => {
      const data = { title: 'My wishlist', url: window.location.href };

      if (navigator.share) {
        try {
          await navigator.share(data);
        } catch (error) {}
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(data.url);
        status.textContent = 'The wishlist link is copied to the clipboard.';
      }
    });

    update();
  });
})();
