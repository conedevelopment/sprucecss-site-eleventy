(() => {
  document.querySelectorAll('[data-product-gallery]').forEach((gallery) => {
    const image = gallery.querySelector('[data-gallery-image]');
    const thumbs = [...gallery.querySelectorAll('[data-gallery-thumb]')];
    const counter = gallery.querySelector('[data-gallery-counter]');
    const live = gallery.querySelector('[data-gallery-live]');
    const zoom = gallery.querySelector('[data-gallery-zoom]');
    let current = thumbs.findIndex((thumb) => thumb.hasAttribute('aria-current'));

    const show = (index, announce = true) => {
      current = (index + thumbs.length) % thumbs.length;
      const thumb = thumbs[current];

      thumbs.forEach((item) => item.removeAttribute('aria-current'));
      thumb.setAttribute('aria-current', 'true');
      image.src = thumb.href;
      image.alt = thumb.dataset.alt;
      counter.textContent = `${current + 1} / ${thumbs.length}`;

      if (announce) {
        live.textContent = `Image ${current + 1} of ${thumbs.length}: ${thumb.dataset.alt}`;
      }
    };

    // Without JavaScript, the thumbnails are links to the large images.
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', (event) => {
        event.preventDefault();
        show(index);
      });
    });

    gallery.querySelectorAll('[data-gallery-step]').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => show(current + Number(button.dataset.galleryStep)));
    });

    gallery.addEventListener('keydown', (event) => {
      if (!event.target.closest('[data-gallery-thumb], [data-gallery-step]')) {
        return;
      }

      const isRtl = getComputedStyle(gallery).direction === 'rtl';
      const step = { ArrowLeft: isRtl ? 1 : -1, ArrowRight: isRtl ? -1 : 1 }[event.key];

      if (step && event.target.closest('[data-gallery-thumb]')) {
        event.preventDefault();
        show(current + step);
        thumbs[current].focus();
      }
    });

    // Hover zoom follows the pointer (only for a mouse or a trackpad; see the CSS).
    zoom.addEventListener('pointermove', (event) => {
      const box = zoom.getBoundingClientRect();

      zoom.style.setProperty('--zoom-x', `${((event.clientX - box.left) / box.width) * 100}%`);
      zoom.style.setProperty('--zoom-y', `${((event.clientY - box.top) / box.height) * 100}%`);
    });

    counter.hidden = false;
    show(current < 0 ? 0 : current, false);
  });
})();
