<p class="lead">A task board with columns and cards that you can move with drag and drop or entirely with the keyboard. Dependency-free: the native HTML drag and drop API and a few lines of JavaScript.</p>

## Anatomy

- **`.kanban-board__column`**: a `section` labelled by its title, with a `__count` badge and the `__list` of cards.
- **`.kanban-board__card`**: the `__tag`, the move button (`__handle`), the linked `__card-title` and the `__meta` (number, due date, assignee).
- **`[data-kanban-live]`**: a visually hidden live region for the announcements.

## Accessibility and Usability

- **Keyboard:** every card has a move button (`aria-pressed`). Press it to pick the card up, move it with the arrow keys (up and down within the column, left and right between columns), then press `Enter` to drop it or `Escape` to put it back. Tabbing away drops the card where it is.
- Every move is announced: "“Export orders to CSV” is in In progress, position 2 of 3."
- The usage hint is connected to the move buttons with `aria-describedby`.
- The left and right arrows follow the reading direction in right-to-left languages.
- The columns are `section`s labelled by their titles, and the card count has hidden text ("3 cards").

## Technical Details

- **Progressive enhancement:** without JavaScript, the board is a readable list of columns and linked cards. The script adds `draggable`, reveals the move buttons and the hint.
- After every move, the board dispatches a `kanban:move` event with the card and the column in `detail`. Listen to it to save the new order:

```js
document.querySelector('[data-kanban]').addEventListener('kanban:move', (event) => {
  const { card, column } = event.detail;
  // fetch('/api/tasks/…', { method: 'PATCH', body: … })
});
```

- On narrow screens, the columns scroll horizontally with scroll snapping.
- The HTML drag and drop API doesn't work with touch in every mobile browser; the move button works everywhere.
