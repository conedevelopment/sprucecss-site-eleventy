---
title: 'Cookie Conset'
order: 34
previewURL: 'https://ui.sprucecss.com/html/misc/cookie-consent-preview.html'
previewHeight: '20rem'
---

<p class="lead">This component is one of the most basic implementations of the cookie consent banner.</p>

## How It Works

The script differentiates two types of action at the consent banner:

- accept all types of cookies,
- decline them.

We place a session cookie when you decline them and ask for permission (again) next time.

If you accept them, we place the category cookie(s). In this case, `spruce-demo-cookie-law-analytics`. We use this cookie to identify if we should load analytics-related cookies (like Google Analytics). You can set up any category.

To load your tracking codes, use the following snippet:

```scss
if (
  Cookie.isset('spruce-demo-cookie-law-analytics')
  && Cookie.get('spruce-demo-cookie-law-analytics') === 'accepted'
) {
  console.log('ANALYTICS');
}
```

## Technical Details

- As you see in the example, we also included an opt-out button; this is just a button to turn on or off any cookie type. You usually want to place it on your privacy policy page.
- We handle everything from JS because, in some cases, the back-end cache can kill the cookies.
- We reload the page after an opt-in or opt-out action because this is the simplest way to load (or turn off) the related scripts.
- We insert the consent banner right after the opening body and set a focus on it.

## Dependencies

We store the settings in cookies using the following code:

```js
/**
 * Set a cookie value for the given key.
 *
 * @param  {string}  key
 * @param  {string} value
 * @param  {number|null}  expires
 * @param  {string}  path
 * @param  {object}  options
 * @return {void}
 */
export function setCookie(key, value, expires = null, path = '/', options = {}) {
  const defaults = {
    [key]: value,
    expires,
    path,
    SameSite: 'Lax',
    Secure: true,
  };

  const pairs = { ...defaults, ...options };

  pairs.expires = pairs.expires ? new Date(Date.now() + 86400 * 1000 * pairs.expires)
    .toUTCString() : null;

  document.cookie = Object.entries(pairs)
    .reduce((stack, entry) => stack.concat(entry.join('=')), [])
    .join('; ');
}

/**
 * Get the cookie with the given key.
 *
 * @param  {string}  key
 * @return {mixed}
 */
export function getCookie(key) {
  const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));

  return (cookie && cookie[2]) ? cookie[2] : null;
}

/**
 * Determine if the given cookie exists.
 *
 * @param  {string}  key
 * @return {bool}
 */
export function issetCookie(key) {
  return document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`)) !== null;
}

/**
 * Remove the given cookie.
 *
 * @param  {string}  key
 * @return {void}
 */
export function removeCookie(key) {
  setCookie(key, null, new Date(null));
}
```
