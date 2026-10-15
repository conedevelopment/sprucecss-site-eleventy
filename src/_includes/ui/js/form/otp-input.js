(() => {
  document.querySelectorAll('[data-otp]').forEach((group) => {
    const inputs = [...group.querySelectorAll('input')];

    const fill = (value, start = 0) => {
      [...value.replace(/\D/g, '')].slice(0, inputs.length - start).forEach((digit, index) => {
        inputs[start + index].value = digit;
      });

      const next = inputs.find((input) => !input.value) ?? inputs[inputs.length - 1];
      next.focus();
    };

    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value.length > 1) {
          fill(input.value, index);
          return;
        }

        input.value = input.value.replace(/\D/g, '');

        if (input.value && inputs[index + 1]) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && !input.value && inputs[index - 1]) {
          inputs[index - 1].focus();
        } else if (event.key === 'ArrowLeft' && inputs[index - 1]) {
          inputs[index - 1].focus();
        } else if (event.key === 'ArrowRight' && inputs[index + 1]) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('paste', (event) => {
        event.preventDefault();
        fill(event.clipboardData.getData('text'), index);
      });

      input.addEventListener('focus', () => input.select());
    });
  });
})();
