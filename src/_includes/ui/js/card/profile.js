(() => {
  document.querySelectorAll('[data-follow-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const isFollowing = button.getAttribute('aria-pressed') === 'true';

      button.setAttribute('aria-pressed', String(!isFollowing));
      button.textContent = isFollowing ? 'Follow' : 'Following';
      button.classList.toggle('btn--primary', isFollowing);
      button.classList.toggle('btn--soft-primary', !isFollowing);
    });
  });
})();
