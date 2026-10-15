(() => {
  const status = document.querySelector('[data-file-group-status]');

  document.querySelectorAll('[data-file-group]').forEach((group) => {
    const input = group.querySelector('[data-file-group-input]');
    const preview = group.querySelector('[data-file-group-preview]');
    const name = group.querySelector('[data-file-group-name]');
    const remove = group.querySelector('[data-file-group-remove]');
    const emptyText = 'Upload a product image';
    let url = null;

    input.addEventListener('change', () => {
      const [file] = input.files;

      if (!file) return;

      // A local object URL shows the image right away, without uploading it.
      if (url) URL.revokeObjectURL(url);
      url = URL.createObjectURL(file);
      preview.style.backgroundImage = `url('${url}')`;
      name.textContent = file.name;
      status.textContent = `${file.name} selected.`;
      remove.focus();
    });

    remove.addEventListener('click', () => {
      if (url) URL.revokeObjectURL(url);
      url = null;
      input.value = '';
      preview.style.removeProperty('background-image');
      name.textContent = emptyText;
      status.textContent = 'Image removed.';
      // The input appears again; move the focus there.
      requestAnimationFrame(() => input.focus());
    });
  });
})();
