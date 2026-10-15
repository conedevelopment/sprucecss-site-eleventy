<p class="lead">A threaded comment list with avatars, timestamps, nested replies, actions and a reply form.</p>

## Technical Details

- Comments are an ordered list (the order matters); replies are a nested list inside their parent comment.
- Every comment is an `article` labelled with its author, and the time is a machine-readable `<time datetime>`.
- The Like button is a toggle (`aria-pressed`); the nested replies are indented with a logical `border-inline-start`, so it mirrors in RTL.
