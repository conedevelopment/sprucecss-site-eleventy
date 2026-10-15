(() => {
  document.querySelectorAll('[data-image-compare]').forEach((component) => {
    const range = component.querySelector('[data-image-compare-range]');
    const update = () => component.style.setProperty('--position', `${range.value}%`);

    range.addEventListener('input', update);
    update();
  });
})();
