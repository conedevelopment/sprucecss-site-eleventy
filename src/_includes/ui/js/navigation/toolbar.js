(() => {
  document.querySelectorAll('[data-toolbar]').forEach((toolbar) => {
    const buttons = [...toolbar.querySelectorAll('button')];
    let current = buttons.findIndex((button) => button.tabIndex === 0);

    const focus = (index) => {
      buttons[current].tabIndex = -1;
      current = (index + buttons.length) % buttons.length;
      buttons[current].tabIndex = 0;
      buttons[current].focus();
    };

    toolbar.addEventListener('keydown', (event) => {
      const isRtl = getComputedStyle(toolbar).direction === 'rtl';
      const next = isRtl ? 'ArrowLeft' : 'ArrowRight';
      const previous = isRtl ? 'ArrowRight' : 'ArrowLeft';

      if (event.key === next) { event.preventDefault(); focus(current + 1); }
      if (event.key === previous) { event.preventDefault(); focus(current - 1); }
      if (event.key === 'Home') { event.preventDefault(); focus(0); }
      if (event.key === 'End') { event.preventDefault(); focus(buttons.length - 1); }
    });

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        focus(index);

        if (!button.hasAttribute('aria-pressed')) {
          return;
        }

        const group = button.closest('[role="group"]');
        const isExclusive = group?.getAttribute('aria-label') === 'Alignment';

        if (isExclusive) {
          group.querySelectorAll('[aria-pressed]').forEach((other) => other.setAttribute('aria-pressed', String(other === button)));
        } else {
          button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
        }
      });
    });
  });
})();
