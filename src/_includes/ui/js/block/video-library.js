(() => {
  document.querySelectorAll('[data-video-library]').forEach((block) => {
    const buttons = [...block.querySelectorAll('[data-filter]')];
    const items = [...block.querySelectorAll('[data-module]')];
    const status = block.querySelector('[data-video-library-status]');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        let visible = 0;

        buttons.forEach((other) => {
          const isActive = other === button;

          other.setAttribute('aria-pressed', String(isActive));
          other.classList.toggle('btn--primary', isActive);
          other.classList.toggle('btn--soft-primary', !isActive);
        });

        items.forEach((item) => {
          const isMatch = filter === 'all' || item.dataset.module === filter;

          item.hidden = !isMatch;
          visible += isMatch ? 1 : 0;
        });

        status.textContent = `${visible} ${visible === 1 ? 'lesson' : 'lessons'} shown.`;
      });
    });
  });
})();
