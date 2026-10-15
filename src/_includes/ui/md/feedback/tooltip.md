<p class="lead">A small text label that describes a control on hover and on keyboard focus.</p>

## Technical Details

- The trigger points to the tooltip with `aria-describedby`; the tooltip has `role="tooltip"`. Icon-only buttons still need their own accessible name (a hidden text or `aria-label`).
- It opens on hover **and** on focus (`:focus-within`), so keyboard users get it too.
- The <kbd>Esc</kbd> key dismisses it without moving the focus (WCAG 1.4.13 Content on Hover or Focus); the script adds `.is-dismissed` until the pointer or focus leaves.
- The tooltip itself is hoverable-safe: it never covers the trigger and doesn't capture pointer events.
- Use `.tooltip--bottom` to place it below the trigger. Only put short, non-interactive text in a tooltip.
