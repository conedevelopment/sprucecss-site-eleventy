<p class="lead">A single-value autocomplete: a text input with a filtered suggestion list.</p>

## Technical Details

- It follows the WAI-ARIA combobox pattern with list autocomplete: the input has `role="combobox"`, controls a `listbox`, and the highlighted option is referenced with `aria-activedescendant`, so the focus never leaves the input.
- <kbd>↓</kbd>/<kbd>↑</kbd> open the list and move through it, <kbd>Enter</kbd> selects, <kbd>Esc</kbd> closes (a second <kbd>Esc</kbd> clears the input), and a click outside closes it. The matching part of each suggestion is highlighted with `mark`.
- A polite live region announces the number of suggestions.
- Need multiple values? Use the [Combobox](/ui/form/combobox/) or the [Tag Input](/ui/form/tag-input/). For a short list, a native `select` (or `input` with a `datalist`) is simpler.
