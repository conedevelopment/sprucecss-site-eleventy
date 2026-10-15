<p class="lead">A compact language switcher for headers and footers: a disclosure button with a list of links to the translated pages, each in its own language.</p>

## Anatomy

- **`.lang-switcher`** is a `nav` named "Language".
- **`.lang-switcher__control`** is the button that shows the current language code and toggles the list (`aria-expanded`, `aria-controls`).
- **`.lang-switcher__panel`** is the list of links (`.lang-switcher__link`); the current one has `aria-current="true"` and a check mark.
- **`.lang-switcher--upward`** opens the list above the button and aligns it to the end, for footers.

## Accessibility

- It's a [disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) of plain links, not an ARIA menu: the links are announced and followed as links, and <kbd>Tab</kbd> works as usual. The focus isn't trapped.
- Every language name is written in its own language (Deutsch, Français, العربية), with `lang` for the right pronunciation and `hreflang` for the target page. People looking for their language don't have to read the current one to find it.
- The button has a visually hidden label ("English, change language"); the code (`en`) alone is not a good name.
- <kbd>↓</kbd> / <kbd>↑</kbd> open the list and move between the languages, <kbd>Esc</kbd> closes it and returns the focus to the button. It also closes when the focus or a click moves outside.

## Technical Details

- Vanilla JavaScript, no dependencies. Without JavaScript, the list stays hidden, so render the links somewhere else as well (like the footer) if the switcher is the only way to change the language.
- The colors, the radius and the shadow come from the tokens; every position uses logical properties, so the list mirrors in RTL.
- Link to the translation of the current page, not to the home page of the other language, whenever you can.
