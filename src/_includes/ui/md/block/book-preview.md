<p class="lead">A look inside a book: the cover, the key details, a form to get a free sample chapter, and the table of contents with the free chapter marked.</p>

## Technical Details

- It combines the [Book Cover](/ui/misc/book-cover/) and the [Badge](/ui/misc/badge/); load their stylesheets too.
- The chapters are an ordered list; the big chapter numbers are decorative and every title starts with a hidden "Chapter 3:", so the number is read once.
- The free chapter is marked with a text badge ("Free sample") and a light success tint; the tint alone wouldn't tell anything to screen reader users. The gradient mirrors in RTL.
- The sample form is a lead magnet: an email field with a hidden label, labelled by its title. On wide screens the cover and the form stay in view (`position: sticky`) while the chapters scroll.
- The block has `id="book-preview"`, so the hero and the offer can link to it.
- Override the content with `bookPreviewBlock`.
- The form has a required GDPR consent checkbox, unchecked by default (consent must be an active choice), with a link to the privacy policy. Keep the wording specific: what the person signs up for and how to unsubscribe. Store the consent with a timestamp on the server.
