<p class="lead">The post card component is a generic UI element we can use in many cases, but it is the most common in post (blog, news) listings.</p>

There isn’t much work with the card component because the requirements mainly depend on the context. Nonetheless, it would be best if you watched for the following:

- if you use an image, you must set a [proper](https://adamlaki.com/bite-sized-accessibility/4-write-better-alt-text/) `alt` value.
- If you list them, using a list with `<ul>` and `<li>` is a good idea.
- If you have a publication date, use the <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time">time</a></code> element.

## Variations

- **default**: the default view is a vertically stacked layout.
- **--horizontal**: You can make the card horizontally stacked using the `.post-card--horizontal` modifier.

## Technical Details

- It uses the <code><a href="https://sprucecss.com/docs/sass/mixins#a11y-card-link">a11y-card-link</a></code> mixin to stretch the link above the whole card (this makes the links under it unusable).
- There is an `aspect-ratio` for the thumbnail to control the dimensions better.

## Dependencies

- [Post Author](/ui/content-and-layout/post-author)

## Resources

- [A detailed post about the card component](https://inclusive-components.design/cards/)
