---
title: "Mixins"
description: "You can do more with less code with the mixins in Spruce CSS micro-framework."
order: 16
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/sass/mixins.md"
---

## a11y-card-link

Create better card component linking by only using the title’s link (and not the whole block). [Please visit this article about cards](https://inclusive-components.design/cards/) by Heydon Pickering for more information about the technique.

| Name                            | Default Value  | Description                                                                      |
| ------------------------------- | -------------- | -------------------------------------------------------------------------------- |
| `$link`                         |                | The selector of the link element.                                                |
| `$at-root`                      | `false`        | Whether output the link as a child of the parent component or at the root level. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L82)

### Example(s)

```scss
.card {
  @include a11y-card-link('.card__link', true);
  border: 1px solid color('border');
  border-radius: config('border-radius-lg', $display);
  padding: spacer('m');

  &__link {
    color: color('heading');
    font-size: font-size('h3');
    font-weight: 700;
    text-decoration: none;
  }
}
```

## breakpoint

With the `breakpoint` mixin, you can create a `min-width` based (mobile-first) breakpoint on a predefined breakpoint from the `$breakpoints` map.

The predefined breakpoints are the following:

```scss
$breakpoints: (
  'xs': 32em,
  'sm': 48em,
  'md': 64em,
  'lg': 80em,
  'xl': 90em,
  'xxl': 110em,
);
```

### Argument(s)

| Name              | Default Value | Description                                                                                   |
|-------------------|---------------|-----------------------------------------------------------------------------------------------|
| `$breakpoint`     |               | The name of the key from the `$breakpoints` map.                                              |
| `$logic`          | `false`       | Any custom logic next to the `min-width` value connected with the “and” logical operator.     |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_breakpoint.scss)

### Example(s)

```scss
.footer {
  display: block;
  align-items: center;

  @include breakpoint('md') { // @media (min-width: 64em)
    display: flex;
    justify-content: space-between;
  }
}
```

## btn-variant

Using the `btn-variant` mixin, you can create a new button variant. First, you must declare the colors of the new button (background, foreground is required) in the `$colors` map at the very first `@use` of

### Argument(s)

| Name              | Default Value        | Description                                                |
|-------------------|----------------------|------------------------------------------------------------|
| `$type`           | `'primary'`            | The name/prefix of the related colors under the `btn` map. |
| `$focus`          | `true`               | Set it `true` if you want to display a focus outline ring. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_button.scss#L32)

### Example(s)

Declare the colors of the button. The mixin will search for the keys under the btn object.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'custom-background': hsl(0deg 0% 95%),
      'custom-foreground': hsl(0deg 0% 10%),
    ),
  ),
);
```

In many cases, declaring just the background and foreground color is enough. Spruce will generate the rest (hover states). But if you want to control more or use dark mode (where you want to overwrite the color values), you can be more specific.

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'btn': (
      'primary-background': hsl(261deg 52% 59%),
      'primary-background-hover': hsl(261deg 52% 49%),
      'primary-foreground': hsl(0deg 0% 100%),
      'primary-foreground-hover': hsl(0deg 0% 100%),
      'primary-focus-ring': hsl(261deg 52% 59% / 0.25),
    ),
  ),
);
```

```scss
.btn--custom {
  @include btn-variant('custom');
}
```

```html
<a href="https://conedevelopment.com" class="btn btn--custom btn--lg">Go to Cone</a>
```

## btn-variant-outline

Using the `btn-variant-outline` mixin, you can create a new outlined button variant. First, you must declare the colors of the new button (background, foreground is required) in the `$colors` map at the very first `@use` of

### Argument(s)

| Name              | Default Value        | Description                                                |
|-------------------|----------------------|------------------------------------------------------------|
| `$type`           | `'primary'`            | The name/prefix of the related colors under the `btn` map. |
| `$focus`          | `true`               | Set it `true` if you want to display a focus outline ring. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_button.scss#L63)

### Example(s)

```scss
.btn--outline-primary { @include btn-variant-outline('primary'); }
.btn--outline-secondary { @include btn-variant-outline('secondary'); }
```

## clear-btn

Clear the default browser button styles.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L64)


### Example(s)

```scss
.remove-button-styles {
  @include clear-btn;
}
```

## clear-list

Remove the `list-style`, `margin`, and `padding` stylings from the element.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L75)

### Example(s)

```scss
ul {
  @include clear-list;
}
```

## field-disabled

The `field-disabled()` is a small internal helper mixin to set up the disabled state on form fields. We call it on the `.form-control` and `.form-check` classes.

### Argument(s)

| Name                   | Description                                 |
|------------------------|---------------------------------------------|
| `$background`          | The color value of the background.          |
| `$border`              | The color value of the border.              |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_form.scss#L16)

### Example(s)

```scss
.form-control:[disabled],
.form-control:[disabled='true'] {
  @include field-disabled(
    color('background-disabled', 'form'),
    color('border-disabled', 'form')
  );
}
```

## field-icon

The `field-icon()` mixin is a getter function for form input backgrounds. Spruce CSS uses custom images (used as [inline SVG](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/form/_icon.scss#L10)) for various inputs (checkbox, radio, select, success, error states).

This mixin first replaces the given color value as a fill value on the SVG image then escapes it.

It is helpful for dark mode because we can’t pass a CSS variable to an inline SVG, so we have to overwrite it.

### Argument(s)

| Name                    | Description                                 |
|-------------------------|---------------------------------------------|
| `$icon`                 | The name of the icon variable.              |
| `$color`                | The color value of the fill.                |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_form.scss#L26)

### Example(s)

```scss
select {
  select.form-control:not([multiple]):not([size]) {
    @include field-icon(
      config('select', $form-icon, false),
      color('select-foreground', 'form')
    );
  }
}

```

## focus-ring

The `focus-ring()` is a small internal helper mixin to set up the focus state of the form fields, buttons (or anything). We call it on the `.form-control`, `.form-check`, `.form-switch`, `.form-range`, and button variants. For these calls, it works with global, related variables.

### Argument(s)

| Name               | Default Value            | Description                                                   |
|--------------------|--------------------------|---------------------------------------------------------------|
| `$type`            | `'box-shadow'`             | The type of the focus ring: `outline` or `box-shadow`.        |
| `$border-color`    | `null`                   | The color value of the border. It is needed mostly on inputs. |
| `$ring-color`      |                          | The color of the focus ring.                                  |
| `$box-shadow-type` |                          | Where should it place the box-shadow: `outside` or `inside`.  |
| `$ring-size`      |                          | The width of the focus ring.                                  |
| `$ring-offset`     |                          | The offset of the focus ring if the type is `outline`.        |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_form.scss#L6)

### Example(s)

```scss
.form-control:focus {
  @include focus-ring(
    $type: config('focus-ring-type', $form-control, false),
    $border-color: color('border-focus', 'form'),
    $ring-color: color('ring-focus', 'form'),
    $box-shadow-type: config('focus-ring-box-shadow-type', $form-control, false),
    $ring-size: config('focus-ring-size', $form-control, false),
    $ring-offset: config('focus-ring-offset', $form-control, false)
  );
}
```

## font-face

The `font-face` mixin is a helper to generate a `@font-face` declaration. This is a minimal and modern font-face declaration, so it only supports the `.woff2` format (under the `$src` argument).

### Argument(s)

| Name             | Default Value | Description                                                                                                                          |
|------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `$font-family`   | `null`        | The name of the font family.                                                                                                         |
| `$src`           | `null`        | The URL path to the font file.                                                                                                       |
| `$font-weight`   | `400`         | The weight of the font.                                                                                                              |
| `$font-style`    | `normal`      | The style of the font.                                                                                                               |
| `$font-display`  | `swap`        | The <code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display">font-display</a></code> property value. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_font-face.scss#L3)

### Example(s)

```scss
@include font-face(
  'Montserrat',
  '../fonts/montserrat-v25-latin-ext_latin-regular.woff2'
);

@include font-face(
  'Montserrat',
  '../fonts/montserrat-v25-latin-ext_latin-700.woff2',
  '700'
);
```

## form-check

The `form-check()` mixin is a helper to create custom checkboxes. It accepts three selectors and generates radio and checkbox styles.

{% notification %}There are scenarios (unfortunately) where it is easier to modify the CSS code than the HTML markup. In our case, we usually style the checkboxes and radios in the <a href="https://hu.wordpress.org/plugins/contact-form-7/">Custom Form 7</a> plugin.{% endnotification %}

### Argument(s)

| Name                         | Default Value            | Description                                    |
|------------------------------|--------------------------|------------------------------------------------|
| `$parent`                    |                          | The selector of the parent element.            |
| `$input`                     |                          | The selector of the input element.             |
| `$label`                     |                          | The selector of the label element.             |
| `$has-sizes`                 | `false`                  | Turn on the sizes variants (`*--sm`, `*--lg`). |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_form.scss#L34)

### Example(s)

```scss
@include form-check('.form-check', '.form-check__control', '.form-check__label', true);
```

## form-group-stacked

Using the `form-group-stacked` mixin, you can create a stacked form group with a breakpoint. Under the breaking point the layout will be stack vertically.

### Argument(s)

| Name                         | Default Value            | Description                |
|------------------------------|--------------------------|----------------------------|
| `$breakpoint`                | `'sm'`                   | The breakpoint.            |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_form.scss#L63)

```scss
.form-group--stacked\:md {
  @include form-group-stacked('md');
}
```

## layout-center

With the help of the `layout-center` mixin, you can center any element.  It is most useful for the generic container element for the main layouts.

### Argument(s)

| Name                   | Default Value                              | Description                                                                                                                        |
|------------------------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `$gap`                 | `'m'`                                      | The padding value on either side of the element. The value comes from the `$spacers` map, use any declared key name for shorthand. |
| `$max-inline-size`     | `config('container-inline-size', $layout)` | Set the max-inline-size (max-width) value of the element.                                                                          |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_layout.scss#L6)

### Example(s)

```scss
.hero {
  &__container {
    @include layout-center(
      spacer-clamp('m', 'l')
    );
  }
}
```

## layout-flex

Using the `layout-flex` mixin, you can create intrinsic flexbox grids with explicit column width.

### Argument(s)

| Name                  | Default Value          | Description                                                                                                              |
|-----------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `$gap`                | `'m'`                  | The gutter value between the elements. The value comes from the `$spacers` map, use any declared key name for shorthand. |
| `$inline-size`        | `--inline-size`        | The optimal width of the columns.                                                                                        |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_layout.scss#L100)

### Example(s)

```scss
.form-row--mixed {
  --inline-size: 10rem;

  @include layout-flex;
}
```

For the `$gap` you can also use a shorthand like in the <code><a href="/docs/sass/functions/#spacer">spacer()</a></code> function for setting separate value for the block and inline gap.

```scss
.form-row--mixed {
  --inline-size: 10rem;

  @include layout-flex('m:l');
}
```

## layout-grid

With the help of the `layout-grid` mixin you can create auto-fit grid layouts where you can determine the columns' min-width.

### Argument(s)

| Name           | Default Value          | Description                                                                                                              |
|----------------|------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `$gap`         | `'m'`                    | The gutter value between the elements. The value comes from the `$spacers` map, use any declared key name for shorthand. |
| `$minimum`     | `12.5rem`              | The minimum value of the child elements where it automatically breaks.                                                   |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_layout.scss#L64)

### Example(s)

```scss
.docs-cards {
  &__inner {
    @include layout-grid('l', 20rem);
  }
}
```

For the `$gap` you can also use a shorthand like in the <code><a href="/docs/sass/functions/#spacer">spacer()</a></code> function for setting separate value for the block and inline gap.

```scss
.docs-cards {
  &__inner {
    @include layout-grid('m:l', 20rem);
  }
}
```

## layout-sidebar

Using the `layout-sidebar` mixin, you can create a two-column sidebar layout declaring the sidebar width explicitly.

### Argument(s)

| Name                 | Default Value          | Description                                                                                                              |
|----------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `$gap`               | `'m'`                  | The gutter value between the elements. The value comes from the `$spacers` map, use any declared key name for shorthand. |
| `$inline-size`       | `18.75rem`             | The width of the sidebar element.                                                                                        |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_layout.scss#L79)

### Example(s)

```scss
.docs-template {
  @include layout-sidebar('l', 22rem);
}
```

For the `$gap` you can also use a shorthand like in the <code><a href="/docs/sass/functions/#spacer">spacer()</a></code> function for setting separate value for the block and inline gap.

```scss
.docs-template {
  @include layout-sidebar('m:l', 22rem);
}
```

## layout-stack

Using the help of the `layout-stack` mixin, you can classical stack layout where the elements are stacked under each other.

### Argument(s)

| Name           | Default Value            | Description                                                                                                              |
|----------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `$gap`         | `'m'`                    | The margin value between the elements. The value comes from the `$spacers` map, use any declared key name for shorthand. |
| `$inline-size` | `false`                  | Whether it has explicit width (inline-size).                                                                             |
| `$align`       | `none`                   | Set explicit align to the elements(`none`, `left`, `right`).                                                             |
| `$important`   | `false`                  | Add !important on descendant elements to `margin-block-start`.                                                           |
| `$split`       | `0`                      | Split the elements vertically from the nth element.                                                                      |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_layout.scss#L16)

### Example(s)

```scss
ul {
  @include layout-stack('xs');
}
```

## scrollbar

Create natively styled custom scrollbars.

### Argument(s)

| Name                            | Default Value                                     | Description                                       |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `$thumb-background-color`       | `color(thumb-background, scrollbar)`              | The color of the scrollbar handle.                |
| `$thumb-background-color-hover` | `color(thumb-background-hover, scrollbar)`        | The color of the scrollbar handle on hover state. |
| `$track-background-color`       | `color(track-background, scrollbar)`              | The background color of the scrollbar.            |
| `$size`                         | `0.5rem`                                          | The width or height of the scrollbar.             |
| `$border-radius`                | `config('border-radius-sm', $display)`                               | The border-radius of the scrollbar and handle.    |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L36)

### Example(s)

```scss
code {
  @include scrollbar(
    $thumb-background-color: color('primary')
  );
  background-color: transparent;
  border-radius: 0;
  display: block;
  overflow-x: auto;
  padding: spacer('xs') 0;
}
```

## selection

Using the `selection` mixin, you can simplify the `::selection` declarations.  Pick a background color value from the `base` subsection by name and let it calculate the contrast color for the foreground automatically.

### Argument(s)

| Name          | Default Value          | Description                                                                                                               |
|---------------|------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `$background` | `'primary'`              | The background color code or the name of the color from the `base` subsection from `$colors` map.                         |
| `$foreground` | `null`                 | The foreground color code. It will get a contrasting pair (black or white) if left empty, based on the background value.  |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_selection.scss)

### Example(s)

```scss
.footer {
  // @include selection(hsl(262deg 71% 49%));
  @include selection('secondary');
}
```

## set-css-variable

Declare CSS custom properties through Spruce CSS to add the prefix. To get any CSS variable with prefix use the <code><a href="/docs/sass/functions#get-css-variable">get-css-variable</a></code> function.

### Argument(s)

| Name        | Description                              |
|-------------|------------------------------------------|
| `$vars`     | A Sass map of key, value pairs.          |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_css-variable.scss#L6)

### Example(s)

```scss
:root {
  @include set-css-variable((
    --container-gap: spacer-clamp('m', 'l')
  ));
}
```


## short-ring

A shorthand function to get the default focus ring styles for `input` and `button` elements.

### Argument(s)

| Name                   | Default Value  | Description                                                                                       |
|------------------------|----------------|---------------------------------------------------------------------------------------------------|
| `$type`                | `'input'`      | The type of the focus ring. It can be `input` or `button`.                                        |
| `$btn-type`            | `'primary'`    | The color - or button type - of the button (if the `$type` is `button`) to match the ring color.  |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L134)

### Example(s)

```scss
.search-form {
  &:focus-visible input[type='search'] {
    @include short-ring('input');
  }
}

.accordion-card {
  &:focus-visible svg {
    @include short-ring('button', 'secondary');
  }
}
```

## text-ellipsis

Crop text and display an ellipsis with multiline support where possible.

### Argument(s)

| Name                   | Default Value | Description                              |
|------------------------|---------------|------------------------------------------|
| `$number-of-lines`     | `1`           | Multiline text cropping where supported. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L18)

### Example(s)

```scss
.crop-text {
  @include text-ellipsis(2);
  inline-size: 20rem;
}
```

{% notification %}Be careful when using the <code>text-ellipsis</code> mixin with flex displays because it will break.{% endnotification %}

## transition

This mixin aims to query the [transition variables](/docs/sass/variables#transition-and-animation) easier. Usually, you only need the global values (e.g., for anything with a custom hover animation), but you can also overwrite the three basic arguments.

### Argument(s)

| Name              | Default Value       | Description                                                                                       |
|-------------------|---------------------|---------------------------------------------------------------------------------------------------|
| `$duration`       | `config('duration', $transition)`  | The default duration value is `0.15s`.                                             |
| `$property`       | `all`               | Set the `transition-property` to `all`. For multiple value use quotes like `'transition, color'`. |
| `$timing-function`| `config('timing-function', $transition)` | The default timing-function value is `ease-in-out`.                          |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_transition.scss#L3)

### Example(s)

```scss
.custom-link {
  @include transition;

  &:hover {
    background-color: pink;
  }
}
```

## visually-hidden

Hide something from the screen but keep it visible for assistive technology.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L5)

### Example(s)

```scss
.sr-only {
  @include visually-hidden;
}
```

## word-wrap

Break long strings of text.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/mixin/_utilities.scss#L105)

### Example(s)

```scss
.break-long-url {
  @include word-wrap;
}

```
