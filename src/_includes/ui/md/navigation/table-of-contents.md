<p class="lead">An "On this page" navigation that highlights the section you are reading (scroll spy).</p>

## Technical Details

- A labelled `nav` with an ordered, nested list of in-page links. Without JavaScript, it is a working list of anchor links.
- An `IntersectionObserver` marks the link of the current section with `aria-current="true"`; no scroll listeners.
- The active indicator is a `border-inline-start`, so it sits on the right in RTL.
- In the demo the article scrolls inside a box; on a real page, observe the document and make the navigation `position: sticky`. The [Spruce CSS documentation](/docs/getting-started/introduction/) uses the same pattern.
