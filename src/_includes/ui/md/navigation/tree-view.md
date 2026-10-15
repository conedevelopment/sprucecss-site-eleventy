<p class="lead">A hierarchical tree for file browsers, nested navigation or category pickers.</p>

## Technical Details

- It implements the WAI-ARIA Tree View pattern: `tree`, `treeitem` and `group` roles, `aria-expanded` on parent items, `aria-selected` on the chosen item and a roving `tabindex` (one tab stop).
- Keyboard: <kbd>↓</kbd>/<kbd>↑</kbd> move between visible items, <kbd>→</kbd> opens a folder or moves into it, <kbd>←</kbd> closes it or moves to the parent (both mirrored in RTL), <kbd>Home</kbd>/<kbd>End</kbd> jump, <kbd>Enter</kbd>/<kbd>Space</kbd> select, and typing a letter jumps to the next matching item.
- The indentation guides use `border-inline-start`, so the tree mirrors in RTL.
- For simple, link-based navigation, the [Sidebar Navigation](/ui/navigation/sidebar-navigation/) with `details` is lighter.
