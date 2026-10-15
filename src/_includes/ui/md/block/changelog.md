<p class="lead">A changelog page block: the releases on the left, and the ways to follow the updates (newsletter, RSS, GitHub) in a sticky sidebar.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), the [Changelog](/ui/list/changelog/) list and the [Newsletter](/ui/form/newsletter/) form, plus the GitHub mark from the shared brand icons.
- The sidebar is an `aside` labeled "Follow the updates", and it's sticky from the `lg` breakpoint, so the signup stays in view while scrolling through long release notes.
- Link the RSS feed in the `head` too (`<link rel="alternate" type="application/rss+xml">`), so feed readers find it.
- Override the heading and the feed URL with `changelogBlock`; the releases come from the Changelog component.
