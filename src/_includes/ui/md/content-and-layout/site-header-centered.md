<p class="lead">A site header with the logo in the center and the navigation in a centered row below it: a classic layout for magazines, blogs and editorial sites.</p>

## Anatomy

- **`.site-header-centered__top`**: a three-column grid with the search link, the `__logo` (mark and name) and the `__actions` (a subscribe button from the `sm` breakpoint).
- **`.site-header-centered__navigation`**: the [Site Navigation](/ui/navigation/site-navigation/), centered; on small screens, a menu button under the logo opens it as a panel.
- A [Skip Link](/ui/misc/skip-link/) comes before the header.

## Accessibility

- The logo link's name is the visible site name; the mark is decorative (`alt=""`), so the name isn't read twice.
- The search icon link has hidden text ("Search").
- The current section is marked with `aria-current="page"` (on the section's landing page; use `aria-current="true"` for the section of an article).

## Technical Details

- Set the site name and the button text with a `siteHeaderCentered` object (`name`, `action`).
- The side columns are `minmax(0, 1fr)`, so they're always equal and the logo stays in the exact center, whatever the actions contain.
- The navigation links are small uppercase labels with letter spacing; the header itself is `position: relative`, so the mobile panel opens right below it.
- Load the [Site Navigation](/ui/navigation/site-navigation/) styles and script.
- "Design" and "Engineering" have dropdowns with their topics; the dropdown links are regular text, not uppercase labels.
