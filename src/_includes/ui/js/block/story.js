(() => {
  document.querySelectorAll('[data-story]').forEach((block) => {
    const links = [...block.querySelectorAll('[data-story-link]')];
    const chapters = [...block.querySelectorAll('[data-story-chapter]')];

    if (!('IntersectionObserver' in window) || !links.length) {
      return;
    }

    // Mark the link of the chapter that is in the reading area (the upper part of the viewport).
    const setCurrent = (id) => {
      links.forEach((link) => {
        if (link.hash === `#${id}`) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrent(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    chapters.forEach((chapter) => observer.observe(chapter));
  });
})();
