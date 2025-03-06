import Cookie from './qkie.js';

const cookie = new Cookie('sprucecss-');

if (cookie.get('spruce-cookie-law-analytics') === 'accepted') {
  function gtag() { // eslint-disable-line
    window.dataLayer.push(arguments); // eslint-disable-line
  }

  const spruceGtagId = 'UA-91043380-5';
  const spruceGtagScript = document.createElement('script');

  spruceGtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${spruceGtagId}`;
  spruceGtagScript.async = true;
  document.head.append(spruceGtagScript);

  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', spruceGtagId, {
    cookie_domain: window.location.hostname,
    cookie_flags: 'SameSite=None;Secure'
  });
}
