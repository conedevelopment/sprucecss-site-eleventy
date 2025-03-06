/* global getComputedStyle */

(() => {
  const header = document.querySelector('.sprucecss-site-header');
  const navigation = header.querySelector('.sprucecss-site-navigation');
  const button = header.querySelector('[data-action="navigation-toggle"]');
  const menu = header.querySelector('.navigation-menu');
  const mq = window.matchMedia('(max-width: 80em)');

  if (!menu || typeof button === 'undefined') return;

  function widthChange (query) {
    button.setAttribute('aria-expanded', !query.matches);
  }

  button.addEventListener('click', () => {
    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
      header.classList.remove('site-header--open');
    } else {
      header.classList.add('site-header--open');
      navigation.style.setProperty('--inset-block-start', getComputedStyle(header).getPropertyValue('--block-size'));
      button.setAttribute('aria-expanded', 'true');
      menu.querySelector('a').focus();
    }
  });

  mq.addListener(widthChange);
  widthChange(mq);
})();
