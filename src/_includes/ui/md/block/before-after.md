<p class="lead">Show the difference your product makes: a draggable before/after comparison next to the features that make it happen.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), the [Image Compare](/ui/content-and-layout/image-compare/) and a list of icon features (the shared block icons). Load the Image Compare script too.
- The comparison is a native range input under the images, so it works with the mouse, touch and the arrow keys, and both images have their own `alt` text ("before" and "after").
- The comparison takes three fifths of the width from the `lg` breakpoint, because it's the proof; below `lg`, it comes after the text.
- Override the heading, the features and the button with `beforeAfterBlock`; set the images in the Image Compare markup.
