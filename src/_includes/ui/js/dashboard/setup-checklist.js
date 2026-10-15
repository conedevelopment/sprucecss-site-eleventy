(() => {
  document.querySelectorAll('[data-setup-checklist]').forEach((checklist) => {
    const steps = [...checklist.querySelectorAll('[data-setup-step]')];
    const progress = checklist.querySelector('[data-setup-progress]');
    const text = checklist.querySelector('[data-setup-text]');
    const live = checklist.querySelector('[data-setup-live]');
    const dismiss = checklist.querySelector('[data-setup-dismiss]');

    const update = () => {
      const done = steps.filter((step) => step.hasAttribute('data-done')).length;
      const message = done === steps.length ? 'All steps completed. Your store is ready!' : `${done} of ${steps.length} steps completed`;

      progress.value = done;
      progress.textContent = `${done} of ${steps.length}`;
      text.textContent = message;
      checklist.classList.toggle('setup-checklist--complete', done === steps.length);

      return message;
    };

    steps.forEach((step, index) => {
      const toggle = step.querySelector('[data-setup-toggle]');
      toggle.hidden = false;

      toggle.addEventListener('click', () => {
        const done = step.toggleAttribute('data-done');

        step.querySelector('[data-setup-state]').textContent = done ? 'Completed' : 'Not completed';
        toggle.textContent = done ? 'Mark as not done' : 'Mark as done';
        live.textContent = `${step.querySelector('.setup-checklist__step-title').textContent} ${done ? 'completed' : 'marked as not done'}. ${update()}`;

        // Open the next step that is not done yet.
        const next = steps.slice(index + 1).concat(steps.slice(0, index)).find((other) => !other.hasAttribute('data-done'));

        if (done && next) {
          next.querySelector('details').open = true;
          next.querySelector('summary').focus();
        }
      });
    });

    dismiss.hidden = false;
    dismiss.addEventListener('click', () => {
      checklist.hidden = true;
      checklist.dispatchEvent(new CustomEvent('setup:dismiss', { bubbles: true }));
    });

    update();
  });
})();
