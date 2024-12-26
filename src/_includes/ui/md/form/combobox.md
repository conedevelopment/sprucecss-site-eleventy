---
title: 'Combobox'
order: 25
previewURL: 'https://ui.sprucecss.com/html/form/combobox-preview.html'
previewHeight: '30rem'
---

<p class="lead">A fully functional combobox for multi-selecting items.</p>

## Technical Details

- Right now, this is the best version of a combobox we can come up with. It's not perfect, but it's pretty good and accessible.
- You can fully operate it with the keyboard.

## Dependencies

- [Alpine.js](https://alpinejs.dev/) - Some or all of the components require Alpine.js for functionality.
- [Alpine.js Focus Plugin](https://alpinejs.dev/plugins/focus) - You should also consider adding the focus plugin for better focus management.

<Notification type="info">For this component there are some extra variables at the <a href="/ui/getting-started/config/">config page</a> like you see it below.</Notification>

```scss
$colors: (
  'combobox': (
    'item-background': hsl(262deg 71% 98%),
    'item-foreground': hsl(262deg 71% 49%),
  ),
),
```
