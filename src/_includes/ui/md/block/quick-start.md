<p class="lead">A getting-started block for developer products: numbered steps with copyable commands, a tip and the next places to go.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), the [Copy Button](/ui/misc/copy-button/) fields, a [Callout](/ui/feedback/callout/) and link cards. Load the Copy Button script too.
- The steps are an ordered list; the visible numbers are decorative, and every title starts with a hidden "Step 1:", so the step is clear when navigating by headings.
- The commands are read-only inputs (easy to select by hand too) with a copy button; each button has hidden context ("Copy install command"), and the result is announced in a polite live region.
- Override the content with `quickStartBlock`.
