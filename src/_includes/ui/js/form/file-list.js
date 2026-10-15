document.querySelectorAll('[data-file-list]').forEach((fileList) => {
  const list = fileList.querySelector('ul');
  const status = fileList.querySelector('[data-file-list-status]');
  const nameOf = (item) => item.querySelector('.file-list-item__name').textContent.trim();

  // The first item can't move up, the last can't move down.
  const update = () => {
    const items = [...list.children];

    items.forEach((item, index) => {
      item.querySelector('[data-file-list-move="-1"]').disabled = index === 0;
      item.querySelector('[data-file-list-move="1"]').disabled = index === items.length - 1;
    });
  };

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    const item = button?.closest('li');

    if (!item) return;

    if (button.hasAttribute('data-file-list-remove')) {
      const next = item.nextElementSibling ?? item.previousElementSibling;

      item.remove();
      status.textContent = `${nameOf(item)} removed.`;
      next?.querySelector('[data-file-list-remove]').focus();
    } else if (button.dataset.fileListMove) {
      const up = button.dataset.fileListMove === '-1';

      up ? item.previousElementSibling.before(item) : item.nextElementSibling.after(item);
      update();

      // Keep the focus on the same button; if it got disabled at the edge, use the other one.
      (button.disabled ? item.querySelector(`[data-file-list-move="${up ? 1 : -1}"]`) : button).focus();
      status.textContent = `${nameOf(item)} moved to position ${[...list.children].indexOf(item) + 1} of ${list.children.length}.`;
    }

    update();
  });

  update();
});
