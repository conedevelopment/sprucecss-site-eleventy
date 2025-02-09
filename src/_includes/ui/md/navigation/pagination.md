<p class="lead">A simple button-like pagination section to display navigation for the post listings.</p>

## Variations

- **--sm**: smaller display version.

## Technical Details

- We style and mark the current page with `aria-current='page'`.
- We use `<nav>` element to mark the navigation.
- We use the `generate-btn` and `btn-variant` mixin to create a similar appearance to the standard button.
- You should add the colors to your config file.

## Dark Colors

```scss
@use 'sprucecss/scss/spruce' with (
  $dark-colors: (
    'btn': (
      'pagination-background': hsl(207deg 97% 12%),
      'pagination-background-hover': hsl(261deg 52% 59%),
      'pagination-foreground': hsl(0deg 0% 100%),
      'pagination-foreground-hover': hsl(0deg 0% 100%),
      'pagination-focus-ring': hsl(261deg 52% 59%),
    ),
  ),
);
```

## Resources

- [generate-btn](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_button.scss)
- [btn-variant](/docs/sass/mixins/#btn-variant)
- [clear-list](/docs/sass/mixins/#clear-list)
- [aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)
