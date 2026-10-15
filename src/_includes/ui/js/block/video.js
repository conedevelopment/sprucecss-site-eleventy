(() => {
  document.querySelectorAll('[data-video-play]').forEach((button) => {
    button.addEventListener('click', () => {
      const player = button.parentElement;
      const iframe = document.createElement('iframe');

      iframe.src = button.dataset.embed;
      iframe.title = button.textContent.trim();
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;

      player.replaceChildren(iframe);
      iframe.focus();
    });
  });
})();
