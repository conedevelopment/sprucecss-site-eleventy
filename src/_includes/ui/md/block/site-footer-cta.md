<p class="lead">A site footer that ends the page with a call-to-action band, then four link columns, the brand, the legal links and a language picker.</p>

## Anatomy

- **`.site-footer-cta__band`**: a section on the brand background with the `__heading`, a short text and the `__buttons` (`__primary` and `__secondary`, inverted for the colored background).
- **`.site-footer-cta__columns`**: a `nav` with four link `__column`s (two per row on small screens).
- **`.site-footer-cta__bottom`**: the `__logo`, the `__copyright` with the legal links and the `__language` select.

## Accessibility

- The band is a `section` labeled by its heading, so it's a named region.
- The band keeps its contrast in every style: the text uses the primary button's foreground color on the primary button's background, and the text selection uses the secondary button colors, so it's visible on the brand background.
- Every link list is labeled by its column title; the column titles are `h2`s.
- The language select has a hidden label, the icon is decorative, and every option has its `lang` attribute, so screen readers pronounce the language names correctly.

## Technical Details

- The band overrides the `--base-color-heading` and `--base-color-text` custom properties, so the heading and the text inside it follow the colored background.
- The language form submits with `GET` (`?lang=de`); submit it on change with a line of JavaScript, or link to the translated pages instead (see [Lang Switcher](/ui/misc/lang-switcher/)).
