<p class="lead">A dismissible announcement bar for the top of the page.</p>

## Technical Details

- It is a labelled region (`role="region"` with `aria-label`), so it is easy to find and skip.
- The dismissal is remembered in `localStorage` by the `data-banner` key; change the key for a new announcement to show it again.
- After the banner is removed, the focus moves to the main content, so keyboard users don't lose their place.
- The background uses `color-tint('primary', 90%)` in light mode and `color-alpha('primary', 0.15)` in dark mode (through the `dark-mode` mixin).
