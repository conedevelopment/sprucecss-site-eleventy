<p class="lead">The theme switcher is a customized <strong>select</strong> element with a small script to control your theme modes.</p>

## Technical Details

- The script switches the `data-theme-mode` attribute on the `html` (and theme switcher) element to identify the selected theme.
- You have to set up an [additional color theme](https://sprucecss.com/docs/customization/themes).

## Theme Detection

The JS code above only handles the switch and its states. You also have to detect a default or chosen theme. For this, you can use `matchMedia` with `prefers-color-scheme: dark;`. You **MUST** embed this script inline in your header as early ahead as possible.

```javascript
(() => {
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const preferredTheme = localStorage.getItem('preferred-theme');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? systemMode : theme);
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (localStorage.getItem('preferred-theme') === 'system' || localStorage.getItem('preferred-theme') === null) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

  setTheme(preferredTheme || systemMode);
})();
```

## Resources

- Icons: [1](https://fonts.google.com/icons?selected=Material%20Icons%3Adark_mode%3A), [2](https://fonts.google.com/icons?selected=Material%20Icons%3Alight_mode%3A), [3](https://fonts.google.com/icons?selected=Material%20Icons%3Alaptop%3A)
