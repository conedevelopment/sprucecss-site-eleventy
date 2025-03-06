<p class="lead">Display product features (or any information) with this two-column-based information block.</p>

## Variations

- **--start**: order the image on the left side.
- **--end**: order the image on the right side.

## Technical Details

- It uses `order` to display the images first on mobile regardless of the variation.
- For the thumbnail, you can use `aspect-ratio` to customize its dimension.

## Colors

```scss
$colors: (
  'feature': (
    'subtitle-background': hsl(259deg 53% 98%),
    'subtitle-border': hsl(259deg 53% 93%),
  ),
),
```
