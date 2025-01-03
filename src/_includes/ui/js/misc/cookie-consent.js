import Cookie from '../../../../js/qkie.js';

(() => {
  const cookie = new Cookie('demo-gdpr-');
  const btns = document.querySelectorAll('button[data-action="cookie"]');
  let caption = '';
  let consentModal = null;
  let redirect = false;

  if (
    !cookie.isset(`analytics`) &&
    !cookie.isset(`denied`)
  ) {
    caption = `<div class="cookie-consent-helper"><div class="cookie-consent cookie-consent--slidein" tabindex="-1">
        <div class="cookie-consent__caption">This is a preview of the cookie consent component. Read more in the <a href="#">privacy policy</a> page.</div>
        <div class="cookie-consent__btns">
        <button class="btn btn--sm btn--decline" data-action="cookie-decline">Decline</button>
          <button class="btn btn--sm btn--primary" data-action="cookie-accept">Accept</button>
        </div>
      </div></div>`;

    document.body.insertAdjacentHTML('afterbegin', caption);
    consentModal = document.querySelector('.cookie-consent');
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
      cookie.set(`analytics`, 'accepted', 365);

      redirect = true;
      consentModal.classList.add('cookie-consent--slideout');
      consentModal.addEventListener('animationend', animationEndCallback);
    }

    if (
      e.target &&
      e.target.getAttribute('data-action') === 'cookie-decline'
    ) {
      cookie.set(`denied`, 'true');

      redirect = false;
      consentModal.classList.add('cookie-consent--slideout');
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
