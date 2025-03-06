<p class="lead">A generic - animated - modal component wrapper to display content over anything.</p>

## Technical Details

- It is built on Alpine.js because making a proper modal is not that easy without heavy JS.
- It is animated using `x-transition`.

## Dependencies

- [Alpine.js](https://alpinejs.dev/) - Some or all of the components require Alpine.js for functionality.
- [Alpine.js Focus Plugin](https://alpinejs.dev/plugins/focus) - You should also consider adding the focus plugin for better focus management.
- [Auth Form](/ui/form/auth/) - The content preview inside of the modal.

## Colors

```scss
$colors: (
  'btn': (
    'dark-background': hsl(205deg 100% 2%),
    'dark-background-hover': hsl(205deg 100% 5%),
    'dark-foreground': hsl(0deg 0% 100%),
    'dark-outline-border': hsl(260deg 4% 70%),
    'dark-outline-foreground': hsl(205deg 100% 2%),
    'dark-outline-foreground-hover': hsl(0deg 0% 100%),
    'dark-outline-background-hover': hsl(205deg 100% 2%),
    'dark-outline-focus-ring': hsl(205deg 100% 2%),
  ),
  'modal': (
    'background': hsl(210deg 60% 98% / 90%),
  ),
),
```
