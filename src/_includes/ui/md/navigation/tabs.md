<p class="lead">Accessible tabs following the WAI-ARIA Tabs pattern, with automatic activation and full keyboard support.</p>

## Technical Details

- Roles: `tablist`, `tab` (buttons) and `tabpanel`; each tab controls its panel (`aria-controls`) and each panel is labelled by its tab.
- Roving `tabindex`: only the selected tab is in the tab order. <kbd>←</kbd>/<kbd>→</kbd> move between tabs (mirrored in RTL), <kbd>Home</kbd>/<kbd>End</kbd> jump to the first/last.
- Panels are focusable (`tabindex="0"`) so keyboard users can reach content that has no interactive element.
- Hidden panels use the `hidden` attribute, so without JavaScript you can render all of them visible.
