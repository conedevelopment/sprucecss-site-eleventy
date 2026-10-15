<p class="lead">A keyboard-first command palette (like <kbd>Ctrl</kbd> + <kbd>K</kbd> in many apps) to search and run actions.</p>

## Technical Details

- It is a modal `dialog` with a combobox input and a grouped listbox (the WAI-ARIA combobox pattern): the focus stays in the input, and `aria-activedescendant` points to the highlighted option.
- <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>K</kbd> opens it from anywhere; <kbd>↑</kbd>/<kbd>↓</kbd> move, <kbd>Home</kbd>/<kbd>End</kbd> jump, <kbd>Enter</kbd> runs the command, <kbd>Esc</kbd> closes it, and the focus returns to the trigger.
- Typing filters the options (groups without results hide), and a polite live region announces the number of results.
- The trigger advertises the shortcut with `aria-keyshortcuts`.
- Replace the `data-command` items with your own actions: the script dispatches a `command` event on the dialog with the chosen option's text.
