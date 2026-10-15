<p class="lead">A theme switcher built on a native select: it lists the system, light and dark modes, shows the icon of the current one and saves the choice.</p>

## Anatomy

- **`.theme-switcher`** with `data-theme-switcher-select` wraps an icon (`__icon`) and the select (`__select`).
- The icon of the current mode is shown based on the switcher's `data-theme-mode` attribute.

## Accessibility

- A native `select` is the most robust control here: every option is named, the current one is announced, and it works the same with a keyboard, a screen reader and on touch screens.
- The select has a (visually hidden) `label` ("Color mode"); the icon is decorative.

## Technical Details

- The script listens to `change` (not `input`), sets `data-theme-mode` on the `html` element and stores the choice in `localStorage` (`preferred-theme`). Several switchers on one page stay in sync, and "System" follows the operating system live.
- The icon is positioned with `inset-inline-start`, so it moves to the right side in RTL along with the padding of the select.

## Theme Detection

The switcher only changes the mode. To avoid a flash of the wrong colors, set the mode before the page renders with an inline script in the `head`:

```html
<script>
  (() => {
    const preferred = localStorage.getItem('preferred-theme') ?? 'system';
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme-mode', preferred === 'system' ? system : preferred);
  })();
</script>
```

With Spruce's `dark-mode` settings, `prefers-color-scheme: true` can follow the system without JavaScript; the switcher then stores an explicit choice. See [Themes and Dark Mode](/docs/customization/themes/).
