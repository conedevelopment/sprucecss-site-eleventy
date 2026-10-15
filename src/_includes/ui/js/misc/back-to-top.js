(() => {
  const button = document.querySelector('[data-back-to-top]');

  if (!button) {
    return;
  }

  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position: absolute; inset-block-start: 0; block-size: 100vh; inline-size: 1px; pointer-events: none;';
  document.body.prepend(sentinel);

  new IntersectionObserver(([entry]) => {
    button.classList.toggle('is-visible', !entry.isIntersecting);
  }).observe(sentinel);

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });

    const target = document.querySelector('h1, main') ?? document.body;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
})();
