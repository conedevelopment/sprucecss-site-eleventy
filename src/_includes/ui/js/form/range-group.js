document.querySelectorAll('[data-range-group]').forEach((group) => {
  const control = group.querySelector('input[type="range"]');
  const output = group.querySelector('output');
  const buttons = group.querySelectorAll('[data-step]');
  const min = Number(control.min || 0);
  const max = Number(control.max || 100);
  const plural = new Intl.PluralRules(document.documentElement.lang || 'en');

  const update = () => {
    const value = Number(control.value);
    const unit = plural.select(value) === 'one' ? group.dataset.unitOne : group.dataset.unitMany;
    const text = `${value} ${unit}`;

    // The visible output is for sighted users; aria-valuetext gives the same text to screen readers.
    output.textContent = text;
    control.setAttribute('aria-valuetext', text);
    buttons.forEach((button) => {
      button.disabled = Number(button.dataset.step) < 0 ? value <= min : value >= max;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      Number(button.dataset.step) < 0 ? control.stepDown() : control.stepUp();
      update();
      control.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  control.addEventListener('input', update);
  update();
});
