---
title: "Build a Theme Switcher"
description: "A flash-free light, dark and system theme switcher with localStorage, system preference detection and theme-specific images."
order: 35
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/guides/build-a-theme-switcher.md"
---

<p class="lead">Creating a dark theme is the easy part. Switching between themes, remembering the choice and following the system preference needs a little JavaScript.</p>

The approach has three states (`system`, `light`, `dark`) but the `<html>` element only ever gets `light` or `dark` in its `data-theme-mode` attribute. Spruce's [dark mode](/docs/customization/themes/) reads that attribute.

## 1. Detect the Theme Before the First Paint

Put this small script in the `<head>` (not deferred), so the page never flashes in the wrong theme:

```html
<script>
  (() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const getPreferred = () => localStorage.getItem('preferred-theme') ?? 'system';
    const apply = (theme) => {
      const resolved = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;
      document.documentElement.setAttribute('data-theme-mode', resolved);
    };

    apply(getPreferred());

    // Follow the system in real time while the user is in system mode.
    media.addEventListener('change', () => {
      if (getPreferred() === 'system') apply('system');
    });
  })();
</script>
```

## 2. The Switcher

A native `select` is the most accessible control for three options:

```html
<label class="form-label" for="theme-switcher">Theme</label>
<select class="form-control form-control--sm" id="theme-switcher">
  <option value="system">System</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>
```

```js
(() => {
  const switcher = document.getElementById('theme-switcher');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  switcher.value = localStorage.getItem('preferred-theme') ?? 'system';

  switcher.addEventListener('change', () => {
    const theme = switcher.value;
    const resolved = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;

    localStorage.setItem('preferred-theme', theme);
    document.documentElement.setAttribute('data-theme-mode', resolved);
  });
})();
```

Spruce UI has ready-made versions: the [theme switcher button](/ui/misc/theme-switcher-button/) and the [theme switcher select](/ui/misc/theme-switcher-select/).

## 3. Theme Specific Images

For images that differ by theme (like a logo), store both sources and swap them when the attribute changes:

```html
<img src="logo-dark.svg" alt="Spruce CSS" data-light-src="logo-dark.svg" data-dark-src="logo-light.svg">
```

```js
(() => {
  const root = document.documentElement;
  const update = () => {
    const theme = root.getAttribute('data-theme-mode') ?? 'light';
    document.querySelectorAll('img[data-light-src]').forEach((image) => {
      image.src = image.dataset[`${theme}Src`];
    });
  };

  update();
  new MutationObserver(update).observe(root, { attributes: true, attributeFilter: ['data-theme-mode'] });
})();
```

For logos, an inline SVG that uses `currentColor` or Spruce's color custom properties avoids the swap entirely.

## 4. Add a Design Style Switcher

The same pattern works for the [design styles](/docs/customization/styles/): store the choice and set the `data-spruce-style` attribute in the `<head>` script. This site's header does exactly that.

## Storage and Privacy

`localStorage` stays on the device and never travels to the server, which suits static sites. If you render on the server, a cookie lets you print the right attribute in the HTML. Either way, the stored preference is purely functional; check your local regulations about whether it needs consent.
