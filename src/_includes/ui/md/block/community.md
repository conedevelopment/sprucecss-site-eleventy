<p class="lead">A community block: the size of the community in numbers, the channels to join (Discord, GitHub), a row of member avatars and the top contributors.</p>

## Technical Details

- It combines the [Block Heading](/ui/content-and-layout/block-heading/), [Number Cards](/ui/card/number/) (with the count-up animation), the [Avatar](/ui/misc/avatar/) group, the shared brand icons and the [Leaderboard](/ui/dashboard/leaderboard/) for the top contributors. Load the Number Card script for the count-up.
- The numbers have their final value in a hidden text, so screen readers don't read the animation; the count-up is only visual.
- The avatar row is decorative (`aria-hidden`): it shows that there are people, and the sentence next to it says it.
- Each channel is one link with the brand icon, the name and a short description; the hover border uses the brand color.
- Override the content with `communityBlock`; the contributors are a Leaderboard object in `leaderboard`.
