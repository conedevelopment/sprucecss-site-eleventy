<p class="lead">The top of an admin page: breadcrumb, title with status badges, meta information, the primary actions and the section tabs.</p>

## Anatomy

- **`.page-header__breadcrumb`**: an ordered list of links; the current page is a `span` with `aria-current="page"`.
- **`.page-header__main`**: the heading group (`__title-row` with `__status` badges and `__meta`) and the `__actions`. The actions wrap under the title on narrow screens.
- **`.page-header__tabs`**: the sub-navigation of the record. These are links to separate pages, not ARIA tabs; use the [Tabs](/ui/navigation/tabs/) component when the panels are on the same page.

## Accessibility and Usability

- Both navigations have a distinct `aria-label` ("Breadcrumb", "Order sections"), so screen reader users can tell the landmarks apart.
- The status badges are plain text ("Paid", "Unfulfilled"); the color only reinforces them.
- Keep one primary button; the less important actions use the outline variant. Move rarely used actions into a [Context Menu](/ui/navigation/context-menu/).

## Technical Details

- The breadcrumb separator is generated with CSS (`li + li::before`), so it is not read out.
- The tab list scrolls horizontally when it doesn't fit; the active tab's border overlaps the header's bottom border.
- The status colors use the alert tokens (`color-alpha('success', 0.15, 'alert')`), so they follow the dark mode and every style.
