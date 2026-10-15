<p class="lead">Social proof cards with a quote, the author's photo, name and role.</p>

## Technical Details

- The semantic pattern is `figure > blockquote + figcaption`, which ties the quote to its author.
- The quote icon is decorative (`aria-hidden="true"`), and the avatars have an empty `alt` because the name is right next to them.
- The card overrides the default `blockquote` border and padding, so you can drop it into any content area.
