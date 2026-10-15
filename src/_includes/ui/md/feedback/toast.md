<p class="lead">Short, non-blocking notifications that appear in a corner and disappear by themselves.</p>

## Technical Details

- The toasts are rendered into a live region (`aria-live="polite"`), so screen readers announce them without moving the focus.
- A `<template>` holds the toast markup; `showToast(message, type)` clones it. It is exposed as `window.showToast` for your own code.
- Toasts stay for 5 seconds, but the timer pauses while the pointer is over the toast or the focus is inside it (WCAG 2.2.1 Timing Adjustable). The close button dismisses it immediately.
- Types: `success`, `danger`, `info`; add more with a `.toast--name { --toast-color: ...; }` rule.
- The region uses `z-index('toast')` from the new `$z-indexes` map.
