<p class="lead">The opening of a case study: a way back to the work, the client and the year, the headline, a one-paragraph summary with the result, the services, the project facts and a large cover image.</p>

## Technical Details

- It combines the [Badge](/ui/misc/badge/) for the services; load its stylesheet too.
- The title is the only `h1`; the eyebrow, the summary and the services are a stacked text group next to the facts.
- The facts (client, industry, timeline, team) are a description list; the services are a list labelled "Services".
- The cover is a `figure` with a caption that says what the image shows. It's the hero image, so it loads with `fetchpriority="high"`.
- The back arrow mirrors in RTL.
- Override the content with `heroCaseBlock`.
