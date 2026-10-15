(() => {
  const rules = {
    length: (value) => value.length >= 12,
    case: (value) => /[a-z]/.test(value) && /[A-Z]/.test(value),
    number: (value) => /\d/.test(value),
    symbol: (value) => /[^A-Za-z0-9]/.test(value)
  };
  const labels = ['too weak', 'weak', 'fair', 'good', 'strong'];

  document.querySelectorAll('[data-password-field]').forEach((field) => {
    const input = field.querySelector('input');
    const toggle = field.querySelector('[data-password-toggle]');
    const meter = field.querySelector('[data-password-meter]');
    const strength = field.querySelector('[data-password-strength]');

    toggle.addEventListener('click', () => {
      const isVisible = toggle.getAttribute('aria-pressed') === 'true';

      input.type = isVisible ? 'password' : 'text';
      toggle.setAttribute('aria-pressed', String(!isVisible));
      toggle.querySelector('.sr-only').textContent = isVisible ? 'Show password' : 'Hide password';
    });

    input.addEventListener('input', () => {
      let score = 0;

      Object.entries(rules).forEach(([name, test]) => {
        const isValid = test(input.value);

        field.querySelector(`[data-rule="${name}"]`)?.classList.toggle('is-valid', isValid);
        score += isValid ? 1 : 0;
      });

      meter.value = score;
      strength.textContent = input.value.length ? `Strength: ${labels[score]}` : 'Strength: too short';
    });
  });
})();
