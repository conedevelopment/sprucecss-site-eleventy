<p class="lead">An events block: the next big event featured with a live countdown and the ticket button, then the upcoming smaller events as cards.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), the [Countdown](/ui/misc/countdown/) (without its box, inside the featured event), [Event Cards](/ui/card/event/) and [Badges](/ui/misc/badge/). Load the countdown script too.
- The featured event is an `article` labeled by its title; the timer is labeled "Time until Spruce Summit 2026", is `aria-live="off"`, and the countdown script updates a hidden summary once a minute.
- The dates are `time` elements with machine-readable `datetime` values.
- The countdown runs to `featured.days` from now; set `data-countdown-end` to the real start time.
- Link "Add to calendar" to an `.ics` file generated on the server.
- Override the content with `eventsBlock`.
