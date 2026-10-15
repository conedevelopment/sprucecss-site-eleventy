(() => {
  document.querySelectorAll('[data-kanban]').forEach((board) => {
    const columns = [...board.querySelectorAll('[data-kanban-column]')];
    const live = board.querySelector('[data-kanban-live]');
    let dragged = null;
    let grabbed = null;
    let origin = null;

    const listOf = (column) => column.querySelector('[data-kanban-list]');
    const titleOf = (card) => card.querySelector('.kanban-board__card-title').textContent.trim();
    const columnName = (column) => document.getElementById(column.getAttribute('aria-labelledby')).textContent.trim();

    const updateCounts = () => {
      columns.forEach((column) => {
        column.querySelector('[data-kanban-count]').firstChild.nodeValue = listOf(column).children.length;
      });
    };

    const announce = (card, prefix = '') => {
      const column = card.closest('[data-kanban-column]');
      const cards = [...listOf(column).children];

      live.textContent = `${prefix}“${titleOf(card)}” is in ${columnName(column)}, position ${cards.indexOf(card) + 1} of ${cards.length}.`;
      updateCounts();
      board.dispatchEvent(new CustomEvent('kanban:move', { detail: { card, column } }));
    };

    // Enhance: the move buttons and dragging only work with JavaScript.
    board.querySelector('.kanban-board__hint').hidden = false;
    board.querySelectorAll('[data-kanban-card]').forEach((card) => {
      card.draggable = true;
      card.querySelector('[data-kanban-handle]').hidden = false;
    });

    // Pointer: native drag and drop.
    board.addEventListener('dragstart', (event) => {
      dragged = event.target.closest('[data-kanban-card]');

      if (!dragged) {
        return;
      }

      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', titleOf(dragged));
      requestAnimationFrame(() => dragged.classList.add('kanban-board__card--dragging'));
    });

    board.addEventListener('dragover', (event) => {
      const list = event.target.closest('[data-kanban-list]');

      if (!dragged || !list) {
        return;
      }

      event.preventDefault();
      // Insert before the first card whose middle is below the pointer.
      const next = [...list.children].find((card) => {
        const box = card.getBoundingClientRect();
        return card !== dragged && event.clientY < box.top + box.height / 2;
      });

      if (next !== dragged.nextElementSibling || dragged.parentElement !== list) {
        list.insertBefore(dragged, next || null);
      }
    });

    board.addEventListener('drop', (event) => event.preventDefault());

    board.addEventListener('dragend', () => {
      if (!dragged) {
        return;
      }

      dragged.classList.remove('kanban-board__card--dragging');
      announce(dragged);
      dragged = null;
    });

    // Keyboard: press the move button, use the arrow keys, Enter (or the button again) drops, Escape cancels.
    const drop = (cancel = false) => {
      const handle = grabbed.querySelector('[data-kanban-handle]');

      if (cancel) {
        origin.list.insertBefore(grabbed, origin.next);
        handle.focus();
      }

      grabbed.classList.remove('kanban-board__card--grabbed');
      handle.setAttribute('aria-pressed', 'false');
      announce(grabbed, cancel ? 'Move cancelled. ' : 'Dropped. ');
      grabbed = null;
    };

    board.addEventListener('click', (event) => {
      const handle = event.target.closest('[data-kanban-handle]');

      if (!handle) {
        return;
      }

      if (grabbed) {
        drop();
        return;
      }

      grabbed = handle.closest('[data-kanban-card]');
      origin = { list: grabbed.parentElement, next: grabbed.nextElementSibling };
      grabbed.classList.add('kanban-board__card--grabbed');
      handle.setAttribute('aria-pressed', 'true');
      live.textContent = `Grabbed “${titleOf(grabbed)}”. Use the arrow keys to move, Enter to drop, Escape to cancel.`;
    });

    board.addEventListener('keydown', (event) => {
      if (!grabbed || !event.target.closest('[data-kanban-handle]')) {
        return;
      }

      const list = grabbed.parentElement;
      const column = grabbed.closest('[data-kanban-column]');
      const isRtl = getComputedStyle(board).direction === 'rtl';
      const step = { ArrowLeft: isRtl ? 1 : -1, ArrowRight: isRtl ? -1 : 1 }[event.key];

      if (event.key === 'Escape') {
        drop(true);
      } else if (event.key === 'Enter') {
        // The click event of the button drops the card.
        return;
      } else if (event.key === 'ArrowUp' && grabbed.previousElementSibling) {
        list.insertBefore(grabbed, grabbed.previousElementSibling);
      } else if (event.key === 'ArrowDown' && grabbed.nextElementSibling) {
        list.insertBefore(grabbed.nextElementSibling, grabbed);
      } else if (step) {
        const target = columns[columns.indexOf(column) + step];

        if (!target) {
          return;
        }

        // Keep the position in the new column when it is possible.
        const index = [...list.children].indexOf(grabbed);
        const targetList = listOf(target);

        targetList.insertBefore(grabbed, targetList.children[index] || null);
      } else {
        return;
      }

      event.preventDefault();

      if (grabbed) {
        // Moving an element in the DOM can drop the focus.
        grabbed.querySelector('[data-kanban-handle]').focus();
        grabbed.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        announce(grabbed);
      }
    });

    // Leaving the card with Tab drops it where it is.
    board.addEventListener('focusout', (event) => {
      if (grabbed && !grabbed.contains(event.relatedTarget) && event.relatedTarget) {
        drop();
      }
    });
  });
})();
