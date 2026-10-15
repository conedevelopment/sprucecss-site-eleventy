(() => {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel__track');
    const slides = [...carousel.querySelectorAll('.carousel__slide')];
    const dots = [...carousel.querySelectorAll('.carousel__dot')];
    let current = 0;

    const goTo = (index) => {
      const slide = slides[Math.max(0, Math.min(index, slides.length - 1))];
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft });
    };

    carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => goTo(current - 1));
    carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => goTo(current + 1));

    dots.forEach((dot, index) => {
      dot.addEventListener('click', (event) => {
        event.preventDefault();
        goTo(index);
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          current = slides.indexOf(entry.target);
          dots.forEach((dot, index) => dot.setAttribute('aria-current', String(index === current)));
        }
      });
    }, { root: track, threshold: 0.6 });

    slides.forEach((slide) => observer.observe(slide));
  });
})();
