---
title: 'Lang Switcher'
order: 35
previewURL: 'https://ui.sprucecss.com/html/misc/lang-siwtcher.html'
previewHeight: '13rem'
---

<p class="lead">A plain dropdown language switcher.</p>

## Technical Details

- You can open the dropdown upward by using the `.lang-switcher--upward` modifier. It's a good option to display the lang switcher at the bottom of your footer.
- It uses Alpine.js to manage the interaction and states.
- The language switcher is designed with accessibility in mind. It can be closed using the `esc` key, providing a familiar interaction for users. Additionally, it traps the cursor, ensuring that users stay within the switcher until they make a selection.
- You should set the `hreflang` and `aria-label` properly.
