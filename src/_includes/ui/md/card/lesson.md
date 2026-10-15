<p class="lead">A card for a video lesson: a 16:9 thumbnail with the duration, the module, the title and whether it's a free preview or part of the paid course.</p>

## Technical Details

- The whole card is clickable with the `a11y-card-link()` mixin, but only the title is a link, so screen readers hear the lesson title once.
- The play icon (free preview) and the lock icon (paid lesson) are decorative; the text under the title says the same ("Free preview", "Included in the video course"), so the meaning doesn't depend on the icon or the color.
- The duration has a hidden "Duration:" label and tabular numbers; a shade at the bottom of the image keeps it readable on any thumbnail.
- The cards sit in a `layout-grid()` list; override them with `lessons` (`[{ title, module, duration, image, free }]`).
