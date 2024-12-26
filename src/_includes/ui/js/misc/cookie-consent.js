import {
  setCookie, getCookie, issetCookie, removeCookie,
} from '../cookie.js';

(() => {
  const prefix = 'spruce-demo';
  const btns = document.querySelectorAll('button[data-action="cookie"]');

  if (
    !issetCookie(`${prefix}-cookie-law-analytics`)
    && !issetCookie(`${prefix}-cookie-law-denied`)
  ) {
    const cookieNotification = `<div class="cookie-consent" tabindex="-1">
        <div class="cookie-consent__caption">This site use cookies. For more information please visit our <a href="#">privacy policy</a> page.</div>
        <div class="cookie-consent__btns">
          <button class="btn btn--primary" data-action="cookie-accept">Accept</button>
          <button class="btn btn--primary" data-action="cookie-decline">Decline</button>
        </div>
      </div>`;

    document.body.insertAdjacentHTML('afterbegin', cookieNotification);
    document.querySelector('.cookie-consent').focus();
  }

  document.addEventListener('click', (e) => {
    if (
      e.target
      && e.target.getAttribute('data-action') === 'cookie-accept'
    ) {
      setCookie(`${prefix}-cookie-law-analytics`, 'accepted', 365);
      window.location.reload();
    }

    if (
      e.target
      && e.target.getAttribute('data-action') === 'cookie-decline'
    ) {
      setCookie(`${prefix}-cookie-law-denied`, 'true');
      window.location.reload();
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
