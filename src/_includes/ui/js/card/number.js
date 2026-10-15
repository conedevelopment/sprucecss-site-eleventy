(() => {
  const counters = document.querySelectorAll('[data-countup]');
  const duration = 2000;
  const format = new Intl.NumberFormat(document.documentElement.lang || undefined);

  // With reduced motion, keep the final numbers that are already in the HTML.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const countUp = (element) => {
    const target = Number(element.dataset.countup);
    let start = null;

    const step = (timestamp) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      element.textContent = format.format(Math.round(target * eased));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => {
    counter.textContent = format.format(0);
    observer.observe(counter);
  });
})();
