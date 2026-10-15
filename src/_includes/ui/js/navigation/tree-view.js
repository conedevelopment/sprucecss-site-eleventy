(() => {
  document.querySelectorAll('[data-tree]').forEach((tree) => {
    const visibleItems = () => [...tree.querySelectorAll('[role="treeitem"]')].filter((item) => !item.parentElement.closest('[aria-expanded="false"]'));
    const label = (item) => item.querySelector('.tree-view__label').textContent.trim().toLowerCase();

    const focus = (item) => {
      tree.querySelectorAll('[role="treeitem"]').forEach((other) => { other.tabIndex = -1; });
      item.tabIndex = 0;
      item.focus();
    };

    const select = (item) => {
      tree.querySelectorAll('[aria-selected]').forEach((other) => other.removeAttribute('aria-selected'));
      item.setAttribute('aria-selected', 'true');
    };

    const toggle = (item, force) => {
      if (item.hasAttribute('aria-expanded')) {
        item.setAttribute('aria-expanded', String(force ?? item.getAttribute('aria-expanded') !== 'true'));
      }
    };

    tree.addEventListener('click', (event) => {
      const item = event.target.closest('[role="treeitem"]');

      if (item && event.target.closest('.tree-view__label')) {
        event.stopPropagation();
        focus(item);
        item.hasAttribute('aria-expanded') ? toggle(item) : select(item);
      }
    });

    tree.addEventListener('keydown', (event) => {
      const item = event.target.closest('[role="treeitem"]');
      const items = visibleItems();
      const index = items.indexOf(item);
      const isRtl = getComputedStyle(tree).direction === 'rtl';
      const open = isRtl ? 'ArrowLeft' : 'ArrowRight';
      const closeKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
      const isExpanded = item.getAttribute('aria-expanded') === 'true';

      if (event.key === 'ArrowDown' && items[index + 1]) focus(items[index + 1]);
      else if (event.key === 'ArrowUp' && items[index - 1]) focus(items[index - 1]);
      else if (event.key === 'Home') focus(items[0]);
      else if (event.key === 'End') focus(items[items.length - 1]);
      else if (event.key === open && item.hasAttribute('aria-expanded')) isExpanded ? focus(item.querySelector('[role="treeitem"]')) : toggle(item, true);
      else if (event.key === closeKey) isExpanded ? toggle(item, false) : item.parentElement.closest('[role="treeitem"]') && focus(item.parentElement.closest('[role="treeitem"]'));
      else if (event.key === 'Enter' || event.key === ' ') item.hasAttribute('aria-expanded') ? toggle(item) : select(item);
      else if (event.key.length === 1 && /\S/.test(event.key)) {
        const next = [...items.slice(index + 1), ...items.slice(0, index)].find((other) => label(other).startsWith(event.key.toLowerCase()));
        if (next) focus(next);
      } else return;

      event.preventDefault();
    });
  });
})();
