<p class="lead">A release history: every version with its date, a "Latest" badge and the changes grouped by type, following the <a href="https://keepachangelog.com/">Keep a Changelog</a> conventions.</p>

## Anatomy

- **`.l-changelog`** is an ordered list with `reversed`, so the newest release comes first and the numbering stays meaningful.
- **`.l-changelog__item`** is one release: a `time` element (`__date`) and the body (`__title`, `__list`, `__link`).
- **`.l-changelog__latest`** marks the current version.
- **`.l-changelog__tag`** labels each change: `--added`, `--changed`, `--deprecated`, `--removed`, `--fixed` and `--security`.

## Accessibility

- The tags are real text ("Added", "Fixed") in front of the change, not only colors, so they're read out and work in high contrast mode.
- Every release is a heading, so screen reader users can jump between versions, and the list item is labelled by it.
- The `time` element has a machine-readable `datetime`.

## Technical Details

- From the `md` breakpoint, the date sits in its own column and sticks to the top while you scroll a long release.
- The tag colors use the alert colors (`success`, `info`, `warning`, `danger`) and `color-alpha()`, so they follow the dark mode.
- The tags have the same minimum width, so the change texts line up.
