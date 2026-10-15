(() => {
  document.querySelectorAll('[data-settings-panel]').forEach((form) => {
    const footer = form.querySelector('[data-settings-footer]');
    const status = form.querySelector('[data-settings-status]');
    const buttons = [...footer.querySelectorAll('button')];
    const serialize = () => new URLSearchParams(new FormData(form)).toString();
    let saved = serialize();
    let dirty = false;

    const update = () => {
      dirty = serialize() !== saved;
      footer.classList.toggle('settings-panel__footer--dirty', dirty);
      buttons.forEach((button) => { button.disabled = !dirty; });

      if (dirty) {
        status.textContent = 'You have unsaved changes';
      } else if (status.textContent === 'You have unsaved changes') {
        status.textContent = '';
      }
    };

    form.addEventListener('input', update);
    form.addEventListener('change', update);
    // The reset event fires before the fields are reset.
    form.addEventListener('reset', () => setTimeout(update));

    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        return;
      }

      // Save with your own request in a listener of this event, then the new state becomes the baseline.
      event.preventDefault();
      form.dispatchEvent(new CustomEvent('settings:save', { detail: { data: new FormData(form) } }));
      saved = serialize();
      update();
      status.textContent = 'Your changes have been saved';
    });

    // Warn before leaving the page with unsaved changes.
    window.addEventListener('beforeunload', (event) => {
      if (dirty) {
        event.preventDefault();
      }
    });

    update();
  });
})();
