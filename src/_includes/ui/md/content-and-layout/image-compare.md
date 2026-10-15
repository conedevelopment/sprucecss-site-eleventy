<p class="lead">A before/after image comparison slider.</p>

## Technical Details

- The control is a native, invisible `input type="range"` stretched over the images: drag, click, touch and the keyboard (arrow keys, <kbd>Home</kbd>/<kbd>End</kbd>, <kbd>Page Up</kbd>/<kbd>Page Down</kbd>) all work, and screen readers announce the value. Its focus ring is drawn around the images.
- The only JavaScript sets one custom property (`--position`); the "after" image is cut with `clip-path` and the handle follows with `inset-inline-start`, both mirrored in RTL.
- Both images have their own `alt`, describing the difference.
- Override the images, the labels and the caption with `imageCompare` (`{ before, beforeAlt, after, afterAlt, beforeLabel, afterLabel, caption }`).
