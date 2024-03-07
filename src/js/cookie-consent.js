import {
  setCookie, getCookie, issetCookie, removeCookie,
} from './cookie.js';

(() => {
  const prefix = 'spruce';
  const btns = document.querySelectorAll('button[data-action="cookie"]');
  let caption = '';
  let consentModal = null;
  let redirect = false;

  if (
    !issetCookie(`${prefix}-cookie-law-analytics`)
    && !issetCookie(`${prefix}-cookie-law-denied`)
  ) {
    caption = `<div class="cookie-consent-helper"><div class="cookie-consent cookie-consent--slidein" tabindex="-1">
        <div class="cookie-consent__caption">This site use cookies. For more information please visit our <a href="/privacy-policy/">privacy policy</a> page.</div>
        <div class="cookie-consent__btns">
        <button class="btn btn--sm btn--decline" data-action="cookie-decline">Decline</button>
          <button class="btn btn--sm btn--primary" data-action="cookie-accept">Accept</button>
        </div>
      </div></div>`;

    document.body.insertAdjacentHTML('afterbegin', caption);
    consentModal = document.querySelector('.cookie-consent');
    consentModal.focus();
  }

  function animationEndCallback() {
    consentModal.removeEventListener('animationend', animationEndCallback);

    if (redirect) {
      window.location.reload();
    }
  }

  document.addEventListener('click', (e) => {
    if (
      e.target
      && e.target.getAttribute('data-action') === 'cookie-accept'
    ) {
      setCookie(`${prefix}-cookie-law-analytics`, 'accepted', 365);

      redirect = true;
      consentModal.classList.add('cookie-consent--slideout');
      consentModal.addEventListener('animationend', animationEndCallback);
    }

    if (
      e.target
      && e.target.getAttribute('data-action') === 'cookie-decline'
    ) {
      setCookie(`${prefix}-cookie-law-denied`, 'true');

      redirect = false;
      consentModal.classList.add('cookie-consent--slideout');
      consentModal.addEventListener('animationend', animationEndCallback);
    }
  });

  btns.forEach((btn) => {
    if (
      issetCookie(`${prefix}-cookie-law-${btn.getAttribute('data-type')}`)
      && getCookie(`${prefix}-cookie-law-${btn.getAttribute('data-type')}`) === 'accepted'
    ) {
      btn.innerHTML = `${btn.getAttribute('data-on-text')} ${btn.innerHTML}`;
    } else {
      btn.innerHTML = `${btn.getAttribute('data-off-text')} ${btn.innerHTML}`;
    }

    btn.addEventListener('click', () => {
      if (
        issetCookie(`${prefix}-cookie-law-${btn.getAttribute('data-type')}`)
        && getCookie(`${prefix}-cookie-law-${btn.getAttribute('data-type')}`) === 'accepted'
      ) {
        removeCookie(`${prefix}-cookie-law-${btn.getAttribute('data-type')}`);
      } else {
        setCookie(`${prefix}-cookie-law-${btn.getAttribute('data-type')}`, 'accepted', 365);
      }
      window.location.reload();
    });
  });
})();
