<p class="lead">A key–value list for profiles, settings summaries or order details.</p>

## Technical Details

- A real description list (`dl`) with `dt`/`dd` pairs grouped in `div`s (allowed by the HTML standard), so screen readers announce the terms and values together.
- It uses the new `container-query()` mixin: the label and value sit side by side when the component (not the viewport) is wider than 32rem, so it adapts in any column.
- The edit link has a hidden text with the section name.
- It combines the [Badge](/ui/misc/badge/) component.
