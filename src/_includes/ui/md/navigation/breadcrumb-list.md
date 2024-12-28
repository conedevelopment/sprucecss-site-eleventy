<p class="lead">The breadcrumb is a standard navigation element that helps the user identify their site location.</p>

## Technical Details

- It is an ordered list `<ol>` element.
- It uses `aria-current="page"` to mark the current position.

## Dependencies

As you see, it uses custom color values from the `$colors` map.

<Notification type="info">For this component there are some extra variables at the <a href="/ui/getting-started/config/">config page</a> like you see it below.</Notification>

```scss
$colors: (
  'breadcrumb': (
    'separator': hsl(0deg 0% 80%),
  ),
),
```

## Resources

- [Breadcrumb Example](https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html)
