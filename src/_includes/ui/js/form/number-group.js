document.querySelectorAll('[data-number-group]').forEach((group) => {
  const input = group.querySelector('input');
  const buttons = group.querySelectorAll('[data-step]');
  const min = Number(input.min || -Infinity);
  const max = Number(input.max || Infinity);

  // Keep the value in range and disable the button that can't go further.
  const update = () => {
    const value = Math.min(max, Math.max(min, Number(input.value) || min));

    input.value = value;
    buttons.forEach((button) => {
      button.disabled = Number(button.dataset.step) < 0 ? value <= min : value >= max;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // stepUp/stepDown respect the step, min and max attributes.
      Number(button.dataset.step) < 0 ? input.stepDown() : input.stepUp();
      update();
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  input.addEventListener('change', update);
  update();
});
