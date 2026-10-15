<p class="lead">A typographic hero for a person: who you are, whether you're available, one big statement, and the proof in three numbers. No stock photo, the words do the work.</p>

## Technical Details

- The title is the only `h1`; the name and the role above it are a small text group with the portrait, which has an empty `alt` because the name is right next to it.
- The availability dot is decorative; the status text says the same.
- The highlighted words are an `em` with a brand color and a marker underline (a background gradient, so it wraps with the text).
- The numbers are a description list shown value first (`column-reverse`), so they're read in a natural order.
- The buttons jump to the work (`#work`) and the contact (`#contact`) sections.
- Override the content with `heroIntroBlock`.
