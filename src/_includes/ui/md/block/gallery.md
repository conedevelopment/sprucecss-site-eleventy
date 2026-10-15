<p class="lead">A masonry-style image gallery with captions and an accessible lightbox.</p>

## Technical Details

- The grid uses CSS multi-columns (`columns: 3 16rem`), so images keep their own proportions.
- Every image is a link to the full-size version: without JavaScript, it simply opens the image.
- The lightbox is a native `dialog` opened with `showModal()`: focus trapping, <kbd>Esc</kbd> to close and focus return come from the browser. <kbd>←</kbd>/<kbd>→</kbd> (mirrored in RTL) and the buttons move between images, and a live region announces "3 of 6". A click on the backdrop closes it.
- Override the content with `galleryBlock` (`image` is the thumbnail, `full` the large version).
