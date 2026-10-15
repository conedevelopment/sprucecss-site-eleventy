<p class="lead">The author byline of a post: avatar, name linked to the author page and, optionally, the date and reading time.</p>

## Anatomy

- **`.post-author`** with the avatar (`__avatar`) and the name (`__name`); **`.post-author__caption`** stacks the name and the meta line (`__meta`).
- **`.post-author--sm`** is a compact, one-line version for cards and lists.

## Accessibility

- The avatar has an empty `alt`, because the name is right next to it; describing the photo would only repeat it.
- Only the name is a link (with `rel="author"`), so the link text is the name, not "by Adam Laki" or an image.
- The separator dot is hidden from screen readers.

## Technical Details

- Change the size with the `--avatar-size` custom property; the image keeps its ratio with `object-fit: cover`.
- Set the `width` and `height` attributes on the image to reserve its space, and use `loading="lazy"` outside the first screen.
