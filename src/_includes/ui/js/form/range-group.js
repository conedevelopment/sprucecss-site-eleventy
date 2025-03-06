(() => {
  const initializeRangeGroup = (rangeGroup) => {
    const decrement = rangeGroup.querySelector('[data-action="decrement"]');
    const increment = rangeGroup.querySelector('[data-action="increment"]');
    const label = rangeGroup.querySelector('.form-label__value');
    const suffix = label.getAttribute('data-suffix') || '';
    const control = rangeGroup.querySelector('.range-group__control');
    const step = parseInt(control.getAttribute('step'), 10) || 1;
    const min = parseInt(control.getAttribute('min'), 10) || 0;
    const max = parseInt(control.getAttribute('max'), 10) || 100;

    const checkDisabledState = (value) => {
      decrement.disabled = min === value;
      increment.disabled = max === value;
    };

    const updateValues = (value) => {
      control.value = value;
      label.textContent = `${value} ${suffix}`;
      checkDisabledState(value);
    };

    control.addEventListener('input', (e) => {
      updateValues(parseInt(e.target.value, 10));
    });

    decrement.addEventListener('click', () => {
      if (control.value > min) {
        updateValues(parseInt(control.value, 10) - step);
      }
    });

    increment.addEventListener('click', () => {
      if (control.value < max) {
        updateValues(parseInt(control.value, 10) + step);
      }
    });

    updateValues(parseInt(control.value, 10));
  };

  const rangeGroups = document.querySelectorAll('.range-group');

  if (rangeGroups.length) {
    rangeGroups.forEach(initializeRangeGroup);
  }
})();
