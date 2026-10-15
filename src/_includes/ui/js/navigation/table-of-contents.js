(() => {
  document.querySelectorAll('[data-toc]').forEach((toc) => {
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const sections = links.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
    const scrollRoot = sections[0]?.closest('[tabindex="0"]') ?? null;

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
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length) {
        setCurrent(visible[0].target.id);
      }
    }, { root: scrollRoot, rootMargin: '0px 0px -60% 0px' });

    sections.forEach((section) => observer.observe(section));
    setCurrent(sections[0]?.id);
  });
})();
