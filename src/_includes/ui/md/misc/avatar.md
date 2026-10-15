<p class="lead">User avatars with sizes, initials fallback, status indicators and an overlapping group.</p>

## Technical Details

- Images have the person's name as `alt` (or use an empty `alt` when the name is right next to the avatar). Initials use `role="img"` with an `aria-label`.
- The status dot has hidden text; color alone doesn't communicate the status.
- Sizes are set with the `--avatar-size` custom property (`--sm`, `--lg` modifiers); the initials scale with it.
- The group overlaps with a negative `margin-inline-start` and a ring in the background color, so it works in dark mode and RTL.
