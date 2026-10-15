(() => {
  document.querySelectorAll('[data-pricing-block]').forEach((block) => {
    const status = block.querySelector('[data-pricing-status]');

    block.querySelectorAll('input[name="pricing-billing"]').forEach((input) => {
      input.addEventListener('change', () => {
        const isYearly = input.value === 'yearly';

        block.querySelectorAll('.pricing-card__amount').forEach((amount) => {
          amount.textContent = `$${isYearly ? amount.dataset.yearly : amount.dataset.monthly}`;
          amount.nextElementSibling.textContent = isYearly ? '/ month, billed yearly' : '/ month';
        });

        status.textContent = isYearly ? 'Showing yearly prices.' : 'Showing monthly prices.';
      });
    });
  });
})();
