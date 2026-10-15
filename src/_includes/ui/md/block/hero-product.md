<p class="lead">A sales hero for a digital product: the offer, the price on the buy button, the rating and the formats, next to the product itself, a book cover on top of a video thumbnail.</p>

## Technical Details

- It combines the [Book Cover](/ui/misc/book-cover/); load its stylesheet too.
- The buy button shows the price, so there's no surprise on the pricing section; it jumps to `#pricing`. The second button jumps to the free chapter (`#book-preview`), and the video thumbnail to the video library (`#video-library`).
- The stars are decorative; the rating is in the text with a hidden "out of 5".
- The video and the book overlap in one grid area, without absolute positioning: the book sits on the bottom start corner and mirrors in RTL.
- The video thumbnail is the hero image, so it loads with `fetchpriority="high"`, not lazily.
- Override the content with `heroProductBlock`; the cover takes the `book` object (see the book cover's data).
