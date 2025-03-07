import Cookie from './qkie.js';

(() => {
  const cookie = new Cookie('sprucecss-gdpr-');
  const btns = document.querySelectorAll('button[data-sprucecss-action="cookie"]');
  let caption = '';
  let consentModal = null;
  let redirect = false;

  if (
    !cookie.isset('analytics') &&
    !cookie.isset('denied')
  ) {
    caption = `<div class="sprucecss-cookie-consent-helper"><div class="sprucecss-cookie-consent sprucecss-cookie-consent--slidein" tabindex="-1">
        <div class="sprucecss-cookie-consent__caption">This site use cookies. For more information please visit our <a href="/privacy-policy/">privacy policy</a> page.</div>
        <div class="sprucecss-cookie-consent__btns">
        <button class="btn btn--sm btn--decline" data-action="cookie-decline">Decline</button>
          <button class="btn btn--sm btn--primary" data-action="cookie-accept">Accept</button>
        </div>
      </div></div>`;

    document.body.insertAdjacentHTML('afterbegin', caption);
    consentModal = document.querySelector('.sprucecss-cookie-consent');
    consentModal.focus();
  }

  function animationEndCallback () {
    consentModal.removeEventListener('animationend', animationEndCallback);

    if (redirect) {
      window.location.reload();
    }
  }

  document.addEventListener('click', (e) => {
    if (
      e.target &&
      e.target.getAttribute('data-action') === 'cookie-accept'
    ) {
      cookie.set('analytics', 'accepted', 365);

      redirect = true;
      consentModal.classList.add('sprucecss-cookie-consent--slideout');
      consentModal.addEventListener('animationend', animationEndCallback);
    }

    if (
      e.target &&
      e.target.getAttribute('data-action') === 'cookie-decline'
    ) {
      cookie.set('denied', 'true');

      redirect = false;
      consentModal.classList.add('sprucecss-cookie-consent--slideout');
      consentModal.addEventListener('animationend', animationEndCallback);
    }
  });

  btns.forEach((btn) => {
    if (
      cookie.isset(`${btn.getAttribute('data-type')}`) &&
      cookie.get(`${btn.getAttribute('data-type')}`) === 'accepted'
    ) {
      btn.innerHTML = `${btn.getAttribute('data-on-text')} ${btn.innerHTML}`;
    } else {
      btn.innerHTML = `${btn.getAttribute('data-off-text')} ${btn.innerHTML}`;
    }

    btn.addEventListener('click', () => {
      if (
        cookie.isset(`${btn.getAttribute('data-type')}`) &&
        cookie.get(`${btn.getAttribute('data-type')}`) === 'accepted'
      ) {
        cookie.remove(`${btn.getAttribute('data-type')}`);
      } else {
        cookie.set(`${btn.getAttribute('data-type')}`, 'accepted', 365);
      }
      window.location.reload();
    });
  });
})();
