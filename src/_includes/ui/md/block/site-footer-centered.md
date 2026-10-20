<p class="lead">A compact, centered site footer: the logo, one row of links, the social profiles and the copyright line. A good fit for portfolios, agencies and small sites.</p>

## Anatomy

- **`.site-footer-centered__inner`**: a centered column with the `__logo`, a `nav` with the `__links`, the `__social` links and the `__copyright` (with the legal links).

## Accessibility

- The links are in a `nav` labeled "Footer", so it's distinct from the main navigation.
- The social links are round icon buttons with hidden text ("Instagram") in a labeled group, at least 2.75rem (44px) in size.
- The logo link's name is the visible brand name; the mark is decorative.

## Technical Details

- Every row wraps and stays centered on small screens.
- The social links come from a shared include (`social-links.html`); swap the profiles there.
