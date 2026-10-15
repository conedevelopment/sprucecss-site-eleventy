<p class="lead">A search trigger that looks like a field: it opens your search dialog on click or with the <kbd>Ctrl</kbd> + <kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on macOS) shortcut, and shows the shortcut as a hint.</p>

## Anatomy

- **`.search-trigger`** is a `button` that opens the search. It looks like an input, because that's what people look for, but it isn't one: typing starts in the dialog.
- **`.search-trigger__icon`**, **`.search-trigger__caption`** ("Search") and **`.search-trigger__shortcut`** (a `kbd` with the hint).

## Accessibility

- The accessible name is "Search"; the shortcut hint is hidden from screen readers (`aria-hidden="true"`). When you bind the shortcut, expose it with `aria-keyshortcuts="Control+K Meta+K"`:

```html
<button class="search-trigger" type="button" aria-keyshortcuts="Control+K Meta+K" data-search-trigger data-shortcut>…</button>
```

- Earlier versions used a "Ctrl K" button as the trigger, which gave it a confusing name. Now the whole control is one button with a clear name.
- The shortcut uses <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd>, a common convention that doesn't collide with typing.

## Technical Details

- The block class is `.search-trigger` (it was `.open-search`, which is also used by many site headers).

- Vanilla JavaScript. The script swaps the hint to "⌘ K" on Apple devices and dispatches a `search:open` event on the `document` on click.
- Add `data-shortcut` to the trigger to bind the keyboard shortcut (only one per page). The demo leaves it out, because this site's own search already uses <kbd>Ctrl</kbd> + <kbd>K</kbd>. Connect it to your dialog, like the [Command Palette](/ui/navigation/command-palette/).
- The control uses the form tokens (background, border, radius and focus ring), so it matches the inputs in every style.
