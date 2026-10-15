<p class="lead">A statistics band with big animated numbers. The brand modifier turns it into a full-width colored block.</p>

## Technical Details

- The numbers are a description list: the label is the term, the value and the explanation are the descriptions. The visual order (value first) is set with CSS `order`, so the reading order stays meaningful.
- The script counts the numbers up when the block scrolls into view, only if the user doesn't prefer reduced motion. Without JavaScript, the final numbers are shown.
- `.stats-block--brand` uses the primary button colors as the background and redefines the text color tokens for its subtree, so the [Block Heading](/ui/content-and-layout/block-heading/) inside it adapts automatically.
