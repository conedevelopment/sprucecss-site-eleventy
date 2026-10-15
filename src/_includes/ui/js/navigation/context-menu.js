(() => {
  const status = document.querySelector('[data-menu-status]');
  const isRtl = (element) => getComputedStyle(element).direction === 'rtl';
  const itemsOf = (menu) => [...menu.querySelectorAll(':scope > li > [role^="menuitem"], :scope > li > ul > li > [role^="menuitem"]')];

  // Keep the menu inside the viewport: open upward or toward the other side when there is no room.
  const place = (menu) => {
    menu.classList.remove('context-menu--block-start', 'context-menu--flip');
    const rect = menu.getBoundingClientRect();

    if (menu.classList.contains('context-menu--submenu')) {
      if (rect.right > window.innerWidth || rect.left < 0) menu.classList.add('context-menu--flip');
    } else if (!menu.classList.contains('context-menu--fixed') && rect.bottom > window.innerHeight && rect.top > rect.height) {
      menu.classList.add('context-menu--block-start');
    }
  };

  const closeMenu = (menu, { restoreFocus = false } = {}) => {
    if (!menu || menu.hidden) return;

    menu.querySelectorAll('[data-menu-list]').forEach((submenu) => closeMenu(submenu));
    menu.hidden = true;

    const trigger = document.querySelector(`[aria-controls="${menu.id}"]`);
    trigger?.setAttribute('aria-expanded', 'false');

    if (restoreFocus) (trigger ?? menu.closest('[data-context-area]'))?.focus();
  };

  const openMenu = (menu, focus = 'first') => {
    menu.hidden = false;
    document.querySelector(`[aria-controls="${menu.id}"]`)?.setAttribute('aria-expanded', 'true');
    place(menu);

    const items = itemsOf(menu).filter((item) => item.getAttribute('aria-disabled') !== 'true');
    (focus === 'last' ? items[items.length - 1] : items[0])?.focus();
  };

  const activate = (item) => {
    if (item.getAttribute('aria-disabled') === 'true') return;

    const role = item.getAttribute('role');
    const label = item.querySelector('.context-menu__text').textContent;

    if (item.hasAttribute('aria-haspopup')) {
      openMenu(document.getElementById(item.getAttribute('aria-controls')));
      return;
    }

    if (role === 'menuitemcheckbox') {
      const checked = item.getAttribute('aria-checked') !== 'true';
      item.setAttribute('aria-checked', String(checked));
      status.textContent = `${label} ${checked ? 'on' : 'off'}`;
      return; // Checkable items keep the menu open.
    }

    if (role === 'menuitemradio') {
      item.closest('[role="group"]').querySelectorAll('[role="menuitemradio"]').forEach((other) => other.setAttribute('aria-checked', String(other === item)));
      status.textContent = `${label} selected`;
      return;
    }

    status.textContent = `${label} chosen`;
    item.dispatchEvent(new CustomEvent('menuselect', { bubbles: true, detail: label }));
    closeMenu(item.closest('[data-menu]').querySelector(':scope > [data-menu-list]'), { restoreFocus: true });
  };

  document.querySelectorAll('[data-menu]').forEach((root) => {
    const menu = root.querySelector(':scope > [data-menu-list]');
    const trigger = root.querySelector(':scope > [data-menu-trigger]');

    // Menu button: click, Enter/Space, ArrowDown (first item), ArrowUp (last item).
    trigger?.addEventListener('click', () => (menu.hidden ? openMenu(menu) : closeMenu(menu)));
    trigger?.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openMenu(menu, event.key === 'ArrowUp' ? 'last' : 'first');
      }
    });

    // Context area: right-click at the pointer, Shift+F10 or the Menu key at the element.
    if (root.hasAttribute('data-context-area')) {
      const openAt = (x, y) => {
        menu.classList.add('context-menu--fixed');
        menu.style.setProperty('--menu-block', `${y}px`);
        menu.style.setProperty('--menu-inline', `${isRtl(root) ? window.innerWidth - x : x}px`);
        openMenu(menu);

        const rect = menu.getBoundingClientRect();
        if (rect.bottom > window.innerHeight) menu.style.setProperty('--menu-block', `${Math.max(8, y - rect.height)}px`);
        if (rect.right > window.innerWidth || rect.left < 0) menu.style.setProperty('--menu-inline', `${Math.max(8, (isRtl(root) ? window.innerWidth - x : x) - rect.width)}px`);
      };

      root.addEventListener('contextmenu', (event) => {
        if (menu.contains(event.target)) return;
        event.preventDefault();
        openAt(event.clientX, event.clientY);
      });

      root.addEventListener('keydown', (event) => {
        if (event.target === root && ((event.shiftKey && event.key === 'F10') || event.key === 'ContextMenu')) {
          event.preventDefault();
          const rect = root.getBoundingClientRect();
          openAt(isRtl(root) ? rect.right - 16 : rect.left + 16, rect.top + 16);
        }
      });
    }

    root.addEventListener('click', (event) => {
      const item = event.target.closest('[role^="menuitem"]');
      if (item && root.contains(item)) activate(item);
    });

    // Keyboard support inside the menus (the WAI-ARIA menu pattern).
    root.addEventListener('keydown', (event) => {
      const item = event.target.closest('[role^="menuitem"]');
      if (!item) return;

      const currentMenu = item.closest('[data-menu-list]');
      const items = itemsOf(currentMenu);
      const index = items.indexOf(item);
      const forward = isRtl(root) ? 'ArrowLeft' : 'ArrowRight';
      const backward = isRtl(root) ? 'ArrowRight' : 'ArrowLeft';
      const isSubmenu = currentMenu.classList.contains('context-menu--submenu');

      switch (event.key) {
        case 'ArrowDown': items[(index + 1) % items.length].focus(); break;
        case 'ArrowUp': items[(index - 1 + items.length) % items.length].focus(); break;
        case 'Home': items[0].focus(); break;
        case 'End': items[items.length - 1].focus(); break;
        case 'Enter':
        case ' ': activate(item); break;
        case forward:
          if (item.hasAttribute('aria-haspopup')) openMenu(document.getElementById(item.getAttribute('aria-controls')));
          break;
        case backward:
          if (isSubmenu) { closeMenu(currentMenu); document.querySelector(`[aria-controls="${currentMenu.id}"]`).focus(); }
          break;
        case 'Escape':
          if (isSubmenu) { closeMenu(currentMenu); document.querySelector(`[aria-controls="${currentMenu.id}"]`).focus(); } else { closeMenu(menu, { restoreFocus: true }); }
          break;
        case 'Tab': closeMenu(menu); return;
        default: {
          // Typeahead: jump to the next item starting with the typed character.
          if (event.key.length !== 1 || !/\S/.test(event.key)) return;
          const next = [...items.slice(index + 1), ...items.slice(0, index)].find((other) => other.textContent.trim().toLowerCase().startsWith(event.key.toLowerCase()));
          next?.focus();
        }
      }

      event.preventDefault();
    });

    // Submenus also open on hover.
    root.querySelectorAll('[data-submenu-trigger]').forEach((submenuTrigger) => {
      const wrapper = submenuTrigger.parentElement;
      const submenu = document.getElementById(submenuTrigger.getAttribute('aria-controls'));
      wrapper.addEventListener('pointerenter', () => { submenu.hidden = false; submenuTrigger.setAttribute('aria-expanded', 'true'); place(submenu); });
      wrapper.addEventListener('pointerleave', () => closeMenu(submenu));
    });
  });

  // A click outside closes every open menu.
  document.addEventListener('pointerdown', (event) => {
    document.querySelectorAll('[data-menu] > [data-menu-list]:not([hidden])').forEach((menu) => {
      if (!menu.closest('[data-menu]').contains(event.target) || (menu.classList.contains('context-menu--fixed') && !menu.contains(event.target))) closeMenu(menu);
    });
  });

  // A menu opened at the pointer doesn't follow the page, so scrolling closes it.
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.context-menu--fixed:not([hidden])').forEach((menu) => closeMenu(menu));
  }, { capture: true, passive: true });
})();
