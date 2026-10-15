<p class="lead">A featured video with a poster image and highlights below.</p>

## Technical Details

- The embed loads only after the click (a "facade"), so the page doesn't load a heavy third-party player upfront. The player replaces the poster in place and receives the focus.
- The play button has a visible label with the duration; its focus ring is drawn around the icon.
- The default embed uses `youtube-nocookie.com`; any embeddable URL works through the `embed` value.
- Override the content with `videoBlock`.
