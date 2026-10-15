<p class="lead">The front page of a help center: a search field with popular searches, the topics with their article counts, the frequently asked questions and a way to contact support.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), [Info Cards](/ui/card/info/) for the topics, [Accordion Cards](/ui/card/accordion/) for the questions and a [Callout](/ui/feedback/callout/) for the contact box. Load the accordion script too.
- The search is a `GET` form with `role="search"`, so it's a search landmark and works without JavaScript; connect it to the [Autocomplete](/ui/form/autocomplete/) or the [Command Palette](/ui/navigation/command-palette/) for instant results.
- Each topic link reads its article count and is described by the topic title ("24 articles, API and webhooks").
- The questions are `h4`s under the "Frequently asked questions" `h3`, so the heading outline stays correct inside the block.
- Override the content with `helpCenterBlock`.
