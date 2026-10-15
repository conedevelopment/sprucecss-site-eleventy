<p class="lead">A collapsible sidebar navigation for documentation or app sections, built on native <code>details</code> elements.</p>

## Technical Details

- The groups are `details`/`summary` elements, styled by Spruce's new `details` generator: they are keyboard accessible and need no JavaScript.
- The current page link has `aria-current="page"`; keep its group `open`.
- The lists have `role="list"` to keep their semantics with `list-style: none`.
- The sub-lists are indented with a logical `border-inline-start`, so the component mirrors in RTL.
