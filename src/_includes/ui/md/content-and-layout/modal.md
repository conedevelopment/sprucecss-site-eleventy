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
  'modal': (
    'background': hsl(210deg 60% 98% / 90%),
  ),
),
```
