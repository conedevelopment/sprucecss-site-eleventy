<p class="lead">A one-button theme switcher that cycles through the system, light and dark modes, showing the icon of the current mode and saving the choice.</p>

## Anatomy

- **`.theme-switcher`** with `data-theme-switcher` holds three buttons; only the one of the current mode (`data-theme-mode` on the switcher) is visible.
- Each button's `data-action` is the mode it switches to: system → light → dark → system.

## Accessibility

- Each button's `aria-label` says what it does ("Switch to dark mode"), not what's active, so the action is clear. After a click, the focus moves to the newly visible button, which announces the next action.
- The icons are decorative (`aria-hidden="true"`).
- If the three-state cycle is confusing for your audience, use the [Theme Switcher Select](/ui/misc/theme-switcher-select/), which lists the options.

## Technical Details

- Use it more than once on a page (in the header and the footer): every `[data-theme-switcher]` stays in sync.
- It sets `data-theme-mode` on the `html` element, the default dark mode selector of Spruce (see the `dark-mode` settings), and stores the choice in `localStorage` (`preferred-theme`). In "system" mode, it follows the operating system live.
- The `no-transition` class turns off the transitions for a frame, so the colors don't animate while switching.

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
