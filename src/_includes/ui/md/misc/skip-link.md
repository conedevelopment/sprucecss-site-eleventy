<p class="lead">A "Skip to content" link that appears on keyboard focus and lets people jump over the header and navigation to the main content.</p>

## Usage

```html
<body>
    <a class="btn btn--primary skip-link" href="#content">Skip to content</a>
    <header>…</header>
    <main id="content" tabindex="-1">…</main>
</body>
```

## Accessibility

- It has to be the first focusable element in the `body`, so it's the first <kbd>Tab</kbd> stop.
- The target needs an `id`; `tabindex="-1"` on the `main` element makes sure the focus (not only the scroll position) moves there in every browser, so the next <kbd>Tab</kbd> continues from the content.
- Don't hide it with `display: none` or `visibility: hidden`: it couldn't get focus. It's moved off-screen and slides in on `:focus`.
- More than one is fine for complex pages ("Skip to search", "Skip to results"), but keep it short. It meets [WCAG 2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html).

## Technical Details

- It's a regular Spruce button, positioned with logical properties (`inset-inline-start`), so it appears in the top-left corner (top-right in RTL).
- It slides in with `translate`, with no animation for reduced motion, and sits above everything (the top of the z-index scale).
- With a sticky header, add `scroll-padding-block-start` to the `html` element, so the target isn't covered.

## Resources

- [How to Create a “Skip to Content” Link](https://css-tricks.com/how-to-create-a-skip-to-content-link/)
