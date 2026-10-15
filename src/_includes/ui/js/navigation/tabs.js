(() => {
  document.querySelectorAll('[data-tabs]').forEach((component) => {
    const tabs = [...component.querySelectorAll('[role="tab"]')];

    const select = (tab, setFocus = true) => {
      tabs.forEach((item) => {
        const isSelected = item === tab;

        item.setAttribute('aria-selected', String(isSelected));
        item.tabIndex = isSelected ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !isSelected;
      });

      if (setFocus) {
        tab.focus();
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab, false));

      tab.addEventListener('keydown', (event) => {
        const isRtl = getComputedStyle(component).direction === 'rtl';
        const next = isRtl ? 'ArrowLeft' : 'ArrowRight';
        const previous = isRtl ? 'ArrowRight' : 'ArrowLeft';
        let target = null;

        if (event.key === next) target = tabs[(index + 1) % tabs.length];
        if (event.key === previous) target = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === 'Home') target = tabs[0];
        if (event.key === 'End') target = tabs[tabs.length - 1];

        if (target) {
          event.preventDefault();
          select(target);
        }
      });
    });
  });
})();
