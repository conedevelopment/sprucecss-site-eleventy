(() => {
  document.querySelectorAll('[data-api-keys]').forEach((section) => {
    const status = section.querySelector('[data-api-keys-status]');

    section.querySelectorAll('[data-api-key]').forEach((row) => {
      const key = row.dataset.apiKey;
      const name = row.querySelector('.api-keys__name').textContent;
      const value = row.querySelector('[data-api-key-value]');
      const masked = value.textContent;
      const reveal = row.querySelector('[data-api-key-reveal]');
      const copy = row.querySelector('[data-api-key-copy]');

      // Reveal and copy need JavaScript, so the buttons are hidden without it.
      reveal.hidden = false;
      copy.hidden = !('clipboard' in navigator);

      reveal.addEventListener('click', () => {
        const isShown = reveal.getAttribute('aria-pressed') !== 'true';

        reveal.setAttribute('aria-pressed', String(isShown));
        value.textContent = isShown ? key : masked;
      });

      copy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(key);
          status.textContent = `The ${name} key is copied to the clipboard.`;
        } catch (error) {
          status.textContent = 'Copying failed. Show the key and copy it manually.';
        }
      });

      row.querySelector('[data-api-key-revoke]').addEventListener('click', (event) => {
        // A real app confirms this in a dialog and calls the API.
        if (!window.confirm(`Revoke the ${name} key? Apps using it will stop working.`)) return;

        row.setAttribute('data-revoked', '');
        row.querySelector('.badge').className = 'badge badge--danger';
        row.querySelector('.badge').textContent = 'Revoked';
        value.textContent = masked;
        reveal.remove();
        copy.remove();
        event.currentTarget.replaceWith(document.createTextNode(''));
        status.textContent = `The ${name} key is revoked.`;
        section.querySelector('h2').setAttribute('tabindex', '-1');
        section.querySelector('h2').focus();
      });
    });
  });
})();
