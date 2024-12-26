(() => {
  const counters = document.querySelectorAll('[data-action="countup"]');
  const duration = 3500;

  const countUp = (element, target) => {
    let current = 0;
    let startTime = null;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easing = 1 - (1 - progress / duration) ** 3;
      current = Math.min(target, target * easing);

      element.textContent = Math.floor(current);

      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const observerInit = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.getAttribute('data-target'));
        countUp(counter, target);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observerInit.observe(counter));
})();
