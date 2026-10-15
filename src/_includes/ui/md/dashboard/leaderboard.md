<p class="lead">A ranked list of people (or products, teams) by one metric, with the rank change and a bar against the leader's result.</p>

## Anatomy

- **`.leaderboard__list`** is an ordered list: the rank comes from the order.
- Every **`__item`** has a `__rank` badge (the top three are highlighted with `--top`), an [Avatar](/ui/misc/avatar/), the `__person` (name and team), the `__result` (value and rank `__change`) and a `__bar`.

## Accessibility and Usability

- The visible rank number is decorative (`aria-hidden`), because the ordered list already announces "1 of 5"; without that, the rank would be read twice.
- The rank change arrows are characters with hidden text ("2 places up"), and the colors only repeat what the words say.
- Long names are truncated with an ellipsis, so the results stay aligned.

## Technical Details

- The bar width is the `--value` custom property: the result as a share of the leader's, in percent.
- The result column aligns the numbers with `font-variant-numeric: tabular-nums`.
