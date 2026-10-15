<p class="lead">A detailed plan comparison table with a highlighted plan, icons for included features and a call to action per plan.</p>

## Technical Details

- A real data table: column headers for the plans, row headers for the features, a visually hidden caption, and `scope` attributes.
- The check and dash icons have hidden "Included"/"Not included" text, so the table reads well with a screen reader.
- It uses Spruce's `.table--sticky-header` and `.table-responsive`: the header stays visible while scrolling, and the table scrolls horizontally on small screens.
- Override the content with `comparisonBlock`; the `yes` and `no` values render the icons.
