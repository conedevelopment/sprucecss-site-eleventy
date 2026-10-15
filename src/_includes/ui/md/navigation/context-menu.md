<p class="lead">An accessible menu for actions: a menu button (dropdown) and a right-click context menu, with groups, icons, keyboard shortcuts, checkable items, a radio group, a submenu, and disabled and destructive items.</p>

## Anatomy

- **`.btn-dropdown`** wraps a menu button and positions its menu.
- **`.context-menu`** is the menu (`role="menu"`); its modifiers set the placement: `--inline-start` (default), `--inline-end`, `--block-start` (opens upward), `--fixed` (at the pointer) and `--submenu`.
- **`.context-menu__item`** is a `button` with `role="menuitem"`, `menuitemcheckbox` or `menuitemradio`. Add an icon (`.context-menu__icon`), a label (`.context-menu__text`), a shortcut hint (`.context-menu__shortcut`) or a submenu chevron.
- **`.context-menu__label`**, **`.context-menu__separator`** and **`.context-menu__group`** organize the items. `.context-menu__item--danger` marks destructive actions.
- **`.context-menu-area`** is an element with its own right-click menu.

## Keyboard

It follows the [WAI-ARIA Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) and [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) patterns:

| Key | Action |
|---|---|
| <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>↓</kbd> | Open the menu and focus the first item (on the button). |
| <kbd>↑</kbd> | Open the menu and focus the last item (on the button). |
| <kbd>↓</kbd> / <kbd>↑</kbd> | Move to the next/previous item (wraps around). |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first/last item. |
| <kbd>→</kbd> / <kbd>←</kbd> | Open/close a submenu (mirrored in RTL). |
| A letter | Move to the next item starting with it (typeahead). |
| <kbd>Esc</kbd> | Close the (sub)menu and return the focus. |
| <kbd>Tab</kbd> | Close the menu and move on. |
| <kbd>Shift</kbd> + <kbd>F10</kbd>, Menu key | Open the context menu of a focused context area. |

## Technical Details

- Vanilla JavaScript, no dependencies. The script manages `aria-expanded` on the triggers, a roving focus (`tabindex="-1"` on the items) and `aria-checked` on the checkable items.
- Checkable and radio items keep the menu open; the other items close it, return the focus to the trigger and dispatch a bubbling `menuselect` event with the label, so you can react to the choice. A polite live region announces the result.
- Disabled items use `aria-disabled="true"` (they stay focusable and readable, but don't run).
- The menu flips upward when there isn't enough room below, and submenus flip to the other side near the viewport edge. A click outside closes every open menu.
- Every position uses logical properties (`inset-inline-start`, `inset-block-start`), so the menu mirrors in RTL.
- The colors come from the tokens (`surface`, `border`, `primary`, the `danger` alert color), so the menu follows the dark mode and every style; the old `context` color group is no longer needed.

## Usage

```js
document.addEventListener('menuselect', (event) => {
  console.log(`Selected: ${event.detail}`);
});
```
