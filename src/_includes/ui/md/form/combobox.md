<p class="lead">A searchable multi-select: type to filter a list, pick as many options as needed, and manage the choices as removable chips.</p>

## Anatomy

- **`.combobox`** wraps everything; `data-name` sets the name of the generated hidden inputs (like `colors[]`).
- **`.combobox__selected`** is the list of chips (`.combobox-item`), each with a remove button and a hidden input for the form.
- **`.combobox__control`** is the text input with `role="combobox"`; **`.combobox__chevron`** is its decorative icon.
- **`.combobox__listbox`** is the `role="listbox"` with `aria-multiselectable="true"`; the options (`.combobox__option`) are in the HTML, with `data-value`, an optional swatch or icon and a check mark.
- **`.combobox__empty`**, **`.combobox__reset`** ("Clear all") and a live region complete it.

## Keyboard

It follows the [WAI-ARIA Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) pattern with a list popup. The focus stays in the input; the highlighted option is set with `aria-activedescendant`.

| Key | Action |
|---|---|
| Typing | Filters the options and opens the list. |
| <kbd>↓</kbd> / <kbd>↑</kbd> | Opens the list and moves the highlight (wraps around). <kbd>Alt</kbd> + <kbd>↓</kbd> only opens it. |
| <kbd>Enter</kbd> | Selects or deselects the highlighted option; the list stays open for more. |
| <kbd>Backspace</kbd> | In an empty input, removes the last selected option. |
| <kbd>Esc</kbd> | Closes the list; pressed again, clears the search text. |
| <kbd>Tab</kbd> | Closes the list and moves on. |

## Accessibility

- A polite live region announces the number of results while typing, and every selection or removal ("Blue selected.").
- The chips' remove buttons have a visually hidden label ("Remove Blue") and return the focus to the input.
- The selected options keep `aria-selected="true"` and a check mark, so the state isn't communicated by color only.

## Technical Details

- Vanilla JavaScript, no dependencies; the options come from the markup, so you can render them on the server.
- The hidden inputs are submitted with the form like a `select multiple`. A `combobox:change` event (with the selected values) fires on every change.
- The chevron is an element positioned with `inset-inline-end`, so it flips in RTL and follows the color mode (a background image can't).
- The colors come from the tokens; the old `combobox` color group is no longer needed.
- For a single choice, use the [Autocomplete](/ui/form/autocomplete/) component.
