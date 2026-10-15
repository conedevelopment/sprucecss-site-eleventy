<p class="lead">A video course at a glance: the key numbers, a module filter and a grid of lesson cards, with the free previews marked.</p>

## Technical Details

- It combines the [Lesson Cards](/ui/card/lesson/); load their stylesheet too.
- The module filter is a group of toggle buttons (`aria-pressed`), and a polite live region announces how many lessons are shown. Without JavaScript every lesson stays visible.
- The numbers are a description list shown value first (`row-reverse`), so they're read in a natural order ("lessons: 64").
- The block has `id="video-library"`, so the hero and the offer can link to it.
- Override the content with `videoLibraryBlock`; every lesson has a `module` value (for the filter) and a `moduleLabel` (for the card).
