<p class="lead">A vertical timeline for a company history, a roadmap or release milestones.</p>

## Technical Details

- An ordered list of milestones; the line and the markers are decorative.
- On small screens the line runs along the start edge; from the `md` breakpoint the cards alternate on both sides. Everything uses logical properties (`inset-inline-start`, `text-align: end`), so it mirrors in RTL.
- For a dated changelog with tags, see the [Changelog](/ui/list/changelog/) component.
- Override the content with `timelineBlock`.
