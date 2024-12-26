---
title: 'Modal'
order: 13
previewURL: 'https://ui.sprucecss.com/html/content-and-layout/modal-preview.html'
previewHeight: '40rem'
---

<p class="lead">A generic - animated - modal component wrapper to display content over anything.</p>

## Technical Details

- It is built on Alpine.js because making a proper modal is not that easy without heavy JS.
- It is animated using `x-transition`.

## Dependencies

- [Alpine.js](https://alpinejs.dev/) - Some or all of the components require Alpine.js for functionality.
- [Alpine.js Focus Plugin](https://alpinejs.dev/plugins/focus) - You should also consider adding the focus plugin for better focus management.
- [Auth Form](/ui/form/auth/)

<Notification type="info">For this component there are some extra variables at the <a href="/ui/getting-started/config/">config page</a> like you see it below.</Notification>

```scss
$colors: (
  'media': (
    'background': hsl(262deg 71% 98%),
    'dropzone-background': hsl(214deg 98% 49% / 75%),
    'dropzone-border': hsl(214deg 98% 40%),
    'icon': hsl(262deg 71% 49%),
  ),
  'modal': (
    'background': hsl(210deg 60% 98% / 90%),
  ),
),
```
