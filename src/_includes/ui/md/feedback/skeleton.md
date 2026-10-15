<p class="lead">Placeholder shapes that show the layout of the content while it loads.</p>

## Technical Details

- The container has `aria-busy="true"` and a visually hidden "Loading content…" text; the shapes are `aria-hidden`. Remove `aria-busy` when the content arrives.
- The base and shine colors are translucent mixes of the heading color (`color-alpha()`), so they work on any background, in dark mode and in every style.
- The shimmer animation runs only without the reduced motion preference; otherwise the shapes are static.
- Shapes: `--avatar`, `--title`, `--text`, `--short`, `--media`; size anything else with `block-size` and `inline-size`.
