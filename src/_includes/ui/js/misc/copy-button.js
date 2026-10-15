(() => {
  document.querySelectorAll('[data-copy-target], [data-copy-text]').forEach((button) => {
    const label = button.querySelector('.copy-button__label') ?? button;
    const status = button.closest('.copy-field')?.querySelector('[data-copy-status]');
    const original = label.textContent;

    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      const text = button.dataset.copyText ?? target?.value ?? target?.textContent ?? '';

      try {
        await navigator.clipboard.writeText(text);
        label.textContent = 'Copied!';
        button.classList.add('is-copied');
        if (status) status.textContent = 'Copied to clipboard.';

        setTimeout(() => {
          label.textContent = original;
          button.classList.remove('is-copied');
        }, 2000);
      } catch (error) {
        target?.select?.();
        if (status) status.textContent = 'Copy failed. The text is selected; press Ctrl+C to copy it.';
      }
    });
  });
})();
