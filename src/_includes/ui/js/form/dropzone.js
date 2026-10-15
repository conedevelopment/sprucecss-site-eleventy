(() => {
  const formatSize = (bytes) => (bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`);

  document.querySelectorAll('[data-dropzone]').forEach((dropzone) => {
    const input = dropzone.querySelector('[data-dropzone-input]');
    const area = dropzone.querySelector('[data-dropzone-area]');
    const list = dropzone.querySelector('[data-dropzone-files]');
    const status = dropzone.querySelector('[data-dropzone-status]');

    const render = () => {
      list.replaceChildren(...[...input.files].map((file, index) => {
        const item = document.createElement('li');
        const name = document.createElement('span');
        const size = document.createElement('span');
        const remove = document.createElement('button');

        item.className = 'dropzone__file';
        name.className = 'dropzone__name';
        name.textContent = file.name;
        size.className = 'dropzone__size';
        size.textContent = formatSize(file.size);
        remove.className = 'btn btn--ghost-danger btn--sm';
        remove.type = 'button';
        remove.textContent = 'Remove';
        remove.setAttribute('aria-label', `Remove ${file.name}`);
        remove.addEventListener('click', () => {
          const transfer = new DataTransfer();
          [...input.files].forEach((other, otherIndex) => otherIndex !== index && transfer.items.add(other));
          input.files = transfer.files;
          status.textContent = `${file.name} removed.`;
          render();
          input.focus();
        });

        item.append(name, size, remove);
        return item;
      }));
    };

    input.addEventListener('change', () => {
      status.textContent = `${input.files.length} ${input.files.length === 1 ? 'file' : 'files'} selected.`;
      render();
    });

    ['dragenter', 'dragover'].forEach((type) => area.addEventListener(type, (event) => {
      event.preventDefault();
      area.classList.add('is-dragging');
    }));

    ['dragleave', 'drop'].forEach((type) => area.addEventListener(type, () => area.classList.remove('is-dragging')));

    area.addEventListener('drop', (event) => {
      event.preventDefault();
      const transfer = new DataTransfer();
      [...input.files, ...event.dataTransfer.files].forEach((file) => transfer.items.add(file));
      input.files = input.multiple ? transfer.files : event.dataTransfer.files;
      input.dispatchEvent(new Event('change'));
    });
  });
})();
