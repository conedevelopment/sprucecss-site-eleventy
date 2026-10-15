document.querySelectorAll('[data-option-group]').forEach((group) => {
  const output = group.querySelector('[data-option-selected]');

  // Show the label of the checked option next to the legend.
  group.addEventListener('change', (event) => {
    output.textContent = event.target.dataset.label;
  });
});
