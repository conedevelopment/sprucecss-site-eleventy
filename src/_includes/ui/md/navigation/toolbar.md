<p class="lead">An accessible toolbar that groups controls (like a text editor's formatting buttons) into a single tab stop.</p>

## Technical Details

- It follows the WAI-ARIA Toolbar pattern: `role="toolbar"` with a label, groups with their own labels, and a roving `tabindex`, so the whole toolbar is one stop in the tab order.
- <kbd>←</kbd>/<kbd>→</kbd> move between the buttons (mirrored in RTL), <kbd>Home</kbd>/<kbd>End</kbd> jump to the first/last; the toolbar remembers the last focused button.
- Toggle buttons (bold, italic) use `aria-pressed`; the alignment buttons behave like a radio group: one of them is always pressed.
- The editor here is a demo; wire the buttons to your own editor.
