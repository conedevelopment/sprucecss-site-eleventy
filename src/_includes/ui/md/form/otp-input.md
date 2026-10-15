<p class="lead">A one-time code input split into six boxes, with auto-advance, backspace navigation and paste support.</p>

## Technical Details

- The boxes are grouped in a `fieldset` with a `legend`, and each has an "Digit N of 6" label.
- The first box has `autocomplete="one-time-code"`, so mobile keyboards can offer the code from an SMS; pasting a full code fills every box.
- Typing moves the focus forward, <kbd>Backspace</kbd> on an empty box moves it back, and the arrow keys move between boxes.
- `inputmode="numeric"` shows the number keyboard on touch devices.
