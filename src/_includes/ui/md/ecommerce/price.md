<p class="lead">Price display patterns for shops and pricing pages: regular, sale, starting price, unit price, subscription, tax note, large and member prices.</p>

## Anatomy

- **`.price`**: the wrapper (`--sale`, `--member`, `--lg`).
- **`.price__amount`**: the price in a `data` element; `__prefix` ("From") and `__suffix` ("/month") go around it.
- **`.price__compare`**: the original price in an `s` element; `__badge` for the discount or a label; `__unit` for the unit price or a note on its own line; `__cents` for raised decimals.
- **`.price-demo`** only lays out the examples.

## Accessibility and Usability

- A strikethrough is not announced by most screen readers, so a sale price has hidden "Sale price:" and "Regular price:" labels; otherwise "$189 $229" is ambiguous.
- The slash in "/month" is hidden and replaced with a hidden "per", because "slash month" sounds odd. In the unit price, the slash is an `abbr` with the "per" title.
- The discount is text ("−17%"), and the sale color only reinforces it.
- Use the `lang` attribute when the price format belongs to another language than the page (`89,00 €` in German).

## Technical Details

- The `data` element's `value` holds the machine-readable amount (`89.00`) next to the formatted text, which is handy for scripts, sorting and structured data.
- Format the prices on the server or with `Intl.NumberFormat` (`new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })`); don't build the currency format by hand, the symbol position and the separators depend on the locale.
- In the EU, show the lowest price of the last 30 days next to a discount (the Omnibus directive); the `__unit` line fits it.
- `font-variant-numeric: tabular-nums` keeps the digits aligned in lists and tables.
