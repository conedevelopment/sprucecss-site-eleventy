(() => {
  const counters = document.querySelectorAll('[data-count-to]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!counters.length || reduceMotion) {
    return;
  }

  const format = (value, decimals) => value.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const target = Number(element.dataset.countTo);
      const decimals = (element.dataset.countTo.split('.')[1] || '').length;
      const start = performance.now();
      const duration = 1200;

      const tick = (now) => {
        const progress = Math.min(Math.max((now - start) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        element.textContent = format(target * eased, decimals);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
})();
