<p class="lead">A profile (user) card with a cover, an avatar, a short bio, statistics and actions.</p>

## Technical Details

- The statistics are a description list (`dl`); `flex-direction: column-reverse` shows the number above its label while the DOM order stays "label, value" for screen readers.
- The Follow button is a toggle button (`aria-pressed`); the script flips its state and label.
- The cover gradient mixes the primary and secondary colors, so it follows every style.
