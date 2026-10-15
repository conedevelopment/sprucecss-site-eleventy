<p class="lead">The post card component is a generic UI element we can use in many cases, but it is the most common in post (blog, news) listings.</p>

There isn’t much work with the card component because the requirements mainly depend on the context. Nonetheless, it would be best if you watched for the following:

- If the image only illustrates the title, leave its `alt` empty: the title right next to it already names the post. Write an [alt text](https://adamlaki.com/bite-sized-accessibility/4-write-better-alt-text/) when the image carries information of its own.
- If you list them, use a `ul` with `li` items (like the [Post List](/ui/list/post/)), so the number of posts is announced.
- If you have a publication date, use the <code><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time">time</a></code> element.

## Variations

- **default**: the default view is a vertically stacked layout.
- **--horizontal**: You can make the card horizontally stacked using the `.post-card--horizontal` modifier.

## Technical Details

- It uses the [a11y-card-link](/docs/sass/mixins/#a11y-card-link) mixin to stretch the title link over the whole card. The tag and author links get `position: relative` and a `z-index`, so they stay clickable above it.
- The title turns to the primary color on hover and when the link has focus.
- There is an `aspect-ratio` for the thumbnail to control the dimensions better.

## Dependencies

- [Post Author](/ui/content-and-layout/post-author/)

## Resources

- [A detailed post about the card component](https://inclusive-components.design/cards/)
