<p class="lead">The long-form part of a case study or a report: chapters with text, lists, a pull quote and figures, next to a chapter list that follows the reader.</p>

## Technical Details

- The block has a visually hidden `h2`; every chapter is an `article` with an `h3` and an `id`, so the chapter list (a `nav` with an ordered list) links to them and they can be shared.
- On wide screens the chapter list is sticky. The script marks the chapter in the reading area with `aria-current="true"` (an `IntersectionObserver`, no scroll listener); without JavaScript the links still work.
- The chapter numbers are decorative (`aria-hidden`); the order of the list carries them.
- The text column is limited to about 44rem for a comfortable line length; the chapters use the lead font size.
- Pull quotes are a `figure` with a `blockquote` and a `figcaption` for the source; figures always have a caption.
- Override the content with `storyBlock`: every chapter takes `paragraphs`, and optionally a `list`, a `quote` and a `figure`.
