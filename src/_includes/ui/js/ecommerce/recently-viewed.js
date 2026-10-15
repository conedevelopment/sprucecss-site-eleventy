(() => {
  document.querySelectorAll('[data-recently-viewed]').forEach((section) => {
    const track = section.querySelector('[data-recently-viewed-track]');
    const controls = section.querySelector('[data-recently-viewed-controls]');
    const [back, forward] = controls.querySelectorAll('[data-direction]');

    // Disable the arrow at the start or the end of the track (scrollLeft is negative in RTL).
    const update = () => {
      const position = Math.abs(track.scrollLeft);
      const max = track.scrollWidth - track.clientWidth;

      controls.hidden = max <= 1;
      back.disabled = position <= 1;
      forward.disabled = position >= max - 1;
    };

    controls.addEventListener('click', (event) => {
      const button = event.target.closest('[data-direction]');

      if (!button) return;

      const isRtl = getComputedStyle(track).direction === 'rtl';

      // Scroll by most of the visible width, so one item stays as an anchor.
      track.scrollBy({ left: track.clientWidth * 0.8 * button.dataset.direction * (isRtl ? -1 : 1) });
    });

    section.querySelector('[data-recently-viewed-clear]').addEventListener('click', (event) => {
      const cleared = section.querySelector('[data-recently-viewed-cleared]');

      // In a real shop, also clear the stored history.
      track.remove();
      controls.remove();
      event.currentTarget.remove();
      cleared.hidden = false;
      cleared.focus();
    });

    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
  });
})();
