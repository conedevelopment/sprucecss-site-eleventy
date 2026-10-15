<p class="lead">A small floating panel anchored to a button, built on the native Popover API: no JavaScript needed to open, close or dismiss it.</p>

## Technical Details

- `popovertarget` connects the button and the panel; the browser handles toggling, light dismiss (click outside, <kbd>Esc</kbd>) and the top layer, and sets `aria-expanded` on the button.
- The panel is positioned under its button with CSS anchor positioning (`position-area: block-end`, flipping when there is no room). Browsers without anchor positioning show it centered.
- Unlike a [dialog](/docs/elements/details-and-dialog/#dialog), a popover doesn't trap the focus or make the page inert; use it for small, non-blocking content like share options or quick settings.
- The copy button works with the script of the [Copy Button](/ui/misc/copy-button/) component.
