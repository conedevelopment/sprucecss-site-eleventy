(() => {
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const links = [...gallery.querySelectorAll('[data-gallery-item]')];
    const dialog = gallery.querySelector('[data-gallery-dialog]');
    const image = dialog.querySelector('[data-gallery-image]');
    const caption = dialog.querySelector('[data-gallery-caption]');
    const counter = dialog.querySelector('[data-gallery-counter]');
    let current = 0;

    const show = (index) => {
      current = (index + links.length) % links.length;
      const link = links[current];
      const thumbnail = link.querySelector('img');

      image.src = link.href;
      image.alt = thumbnail.alt;
      caption.textContent = link.dataset.caption || '';
      caption.hidden = !link.dataset.caption;
      counter.textContent = `${current + 1} of ${links.length}`;
    };

    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        show(index);
        dialog.showModal();
      });
    });

    dialog.querySelector('[data-gallery-prev]').addEventListener('click', () => show(current - 1));
    dialog.querySelector('[data-gallery-next]').addEventListener('click', () => show(current + 1));
    dialog.querySelector('[data-gallery-close]').addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('keydown', (event) => {
      const isRtl = getComputedStyle(gallery).direction === 'rtl';

      if (event.key === 'ArrowRight') show(current + (isRtl ? -1 : 1));
      if (event.key === 'ArrowLeft') show(current + (isRtl ? 1 : -1));
    });
  });
})();
