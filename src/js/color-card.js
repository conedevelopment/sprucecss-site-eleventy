(() => {
  const cards = document.querySelectorAll('.color-card');

  if (!cards.length) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const context = canvas.getContext('2d', { willReadFrequently: true });

  /**
   * Paint the colors on top of each other and return the relative luminance of the result.
   */
  const luminance = (...colors) => {
    context.clearRect(0, 0, 1, 1);
    colors.forEach((color) => {
      context.fillStyle = color;
      context.fillRect(0, 0, 1, 1);
    });

    const [r, g, b] = [...context.getImageData(0, 0, 1, 1).data].slice(0, 3).map((value) => {
      const channel = value / 255;
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const backgroundOf = (element) => {
    for (let node = element; node; node = node.parentElement) {
      const color = getComputedStyle(node).backgroundColor;

      if (color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)') {
        return color;
      }
    }

    return '#fff';
  };

  // Border the swatches that barely stand out from the page (like the white and the light grays).
  const update = () => {
    cards.forEach((card) => {
      const background = backgroundOf(card.parentElement);
      const swatch = getComputedStyle(card.querySelector('.color-card__color')).backgroundColor;
      const [lighter, darker] = [luminance('#fff', background), luminance('#fff', background, swatch)].sort((a, b) => b - a);

      card.classList.toggle('color-card--bordered', (lighter + 0.05) / (darker + 0.05) < 1.15);
    });
  };

  update();
  new MutationObserver(() => requestAnimationFrame(update)).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme-mode', 'data-spruce-style', 'class']
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => requestAnimationFrame(update));
})();
