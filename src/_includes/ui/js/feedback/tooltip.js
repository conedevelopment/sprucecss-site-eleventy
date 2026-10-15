(() => {
  document.querySelectorAll('.tooltip').forEach((tooltip) => {
    const reset = () => tooltip.classList.remove('is-dismissed');

    tooltip.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        tooltip.classList.add('is-dismissed');
      }
    });

    tooltip.addEventListener('mouseleave', reset);
    tooltip.addEventListener('focusout', reset);
  });
})();
