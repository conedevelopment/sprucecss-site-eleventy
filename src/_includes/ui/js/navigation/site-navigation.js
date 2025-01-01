(() => {
  const navigation = document.querySelector('.site-navigation');
  const button = navigation.querySelector('[data-action="navigation-toggle"]');
  const menu = navigation.querySelector('.navigation-menu');
  const mq = window.matchMedia('(max-width: 64em)');

  if (!menu || typeof button === 'undefined') return;

  function widthChange(query) {
    button.setAttribute('aria-expanded', !query.matches);
  }

  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
    } else {
      button.setAttribute('aria-expanded', 'true');
      menu.querySelector('a').focus();
    }
  });

  mq.addListener(widthChange);
  widthChange(mq);
})();
