---
title: "Functions"
description: "The functions are an essential part of the Spruce CSS framework. You can get values, set up your fluid typography, and more."
order: 17
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/sass/functions.md"
---

## color

Get color value by key and type name from the `$colors` map. The `$colors` map is nested, so you can access the color values by multiple levels, separated into groups.

**The function returns a CSS custom property** with a fallback color, but you can also access just the color value setting the `$only-color` value to `true`.

{% notification %}The <code>color</code> function also handles <code>null</code> values, which means in Sass that your declaration block won’t render if the value you access is null.{% endnotification %}

### Argument(s)

| Name              | Default Value | Description                                                       |
|-------------------|---------------|-------------------------------------------------------------------|
| `$key`            |               | The name of the color.                                            |
| `$type`           | `'base'`        | The group of the color.                                         |
| `$only-color`     | `false`       | Whether to get just the color value or the CSS custom property.   |
| `$map`            | `$colors`     | The name of the map from which the function will get the values.  |


[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_color.scss#L6)

### Example(s)

```scss
a {
  color: color('primary');
}

.has-error {
  color: color('danger', 'alert');
}
```
## color-value

Get only the color value by key and type name from the `$colors` map.

### Argument(s)

| Name              | Default Value | Description                                                       |
|-------------------|---------------|-------------------------------------------------------------------|
| `$key`            |               | The name of the color.                                            |
| `$type`           | `'base'`        | The group of the color.                                         |
| `$map`            | `$colors`     | The name of the map from which the function will get the values.  |


[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_color.scss#L38)

### Example(s)

```scss
a {
  color: color-value('primary');
}

.has-error {
  color: color-value('danger', 'alert');
}
```

## color-contrast

Get a contrast color (black or white) based on the given one. Spruce use this function internally at [selection](/docs/sass/mixins#selection) mixin.

### Argument(s)

| Name              | Description          |
|-------------------|----------------------|
| `$color`          | Any color value.     |


[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_color.scss#L29)

### Example(s)

```scss
a {
  color: color-contrast('blue'); // return white (hsl(0 0% 100%))
}
```

## config

Using the `config()` function, you can get any key value from any map. It is a wrapper function for `map.get`.

If you use the CSS custom property mode, you should always use this function because this will return you the proper custom property.

### Argument(s)

| Name               | Default Value     | Description                                         |
|--------------------|-------------------|-----------------------------------------------------|
| `$key`             |                   | The name of the key.                                |
| `$map`             |                   | The name of the map.                                |
| `$custom-property` | `true`            | Whether if you want CSS custom property or not.     |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_config.scss#L29)

### Example(s)

```scss
.element {
  border-radius: config('border-radius-lg', $display);
  block-size: 3rem;
  inline-size: 3rem;
}
```

## font-size

Get a value from the `$font-sizes` map by key name. By default, the function gives back a fluid font size using `clamp()`, which amount you can control using the `$scaler` value.

### Argument(s)

| Name            | Default Value                          | Description                                                                  |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| `$key`          |                                        | The name of the font-size (defaults: h1, h2, h3, h4, h5, h6).                |
| `$fluid`        | `true`                                 | Whether you want fluid declaration or not.                                   |
| `$scaler`       | `15`                                   | How much smaller font size do you want for the smaller screen in percentage. |
| `$optimal-size` | `2vw + 1rem` from the `$settings` map. | The optimal font-size value if `$fluid` is set to `true`.                    |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_font-size.scss#L6)

### Example(s)

```scss
.title {
  font-size: font-size('h2');
}

.serial-number {
  color: color('primary');
  font-size: font-size('h3', 30);
}
```

## get-css-variable

Add the prefix value to a CSS custom properties. To set any CSS variable with prefix use the <code><a href="/docs/sass/mixins#set-css-variable">set-css-variable</a></code> function.


#### Argument(s)

| Name       | Description                                        |
|------------|----------------------------------------------------|
| `$var`     | The name of the variable without the prefix value. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_css-variable.scss#L6)

#### Example(s)

```scss
.container {
  @include layout-center(
    get-css-variable(--container-gap)
  );
}
```

## responsive-font-size

It is hard to get generic font sizes that we can use throughout a whole project. Usually, we need unique ones. For this, we can set fluid declaration, similar to the `font-size()` function.

### Argument(s)

| Name            | Default Value                          | Description                                                                  |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| `$size`         |                                        | The size of the font with a preferred unit.                                   |
| `$scaler`       | `15`                                   | How much smaller font size do you want for the smaller screen in percentage. |
| `$optimal-size` | `2vw + 1rem` from the `$settings` map. | The optimal font-size value if `$fluid` is set to `true`.                    |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_font-size.scss#L34)

### Example(s)

```scss
.testimonial-title {
  font-size: responsive-font-size(4rem, 30);
}
```

## setting

Get a value by key name from the `$settings` map.

### Argument(s)

| Name          | Description              |
|---------------|--------------------------|
| `$key`        | The name of the setting. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_setting.scss#L5)

### Example(s)

```scss
@if setting('hyphens') {
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    hyphens: auto;
    overflow-wrap: break-word;
  }
}
```

## spacer

Get one or two (separated with a colon) values by key name from the `$spacers` map.

### Argument(s)

| Name          | Description                                                                          |
|---------------|--------------------------------------------------------------------------------------|
| `$key`        | The name of the spacer or shorthand for two values separated with a colon ('m:l').   |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_spacer.scss#L5)

### Example(s)

```scss
.prism-code {
  padding: spacer('xs') spacer('m');
}

.prism-code {
  padding: spacer('xs:m');
}
```

The shorthand syntax is useful when you want a separate value for block and inline. It only supports two value.

## spacer-clamp

Create a `clamp()` declaration with values from the `$spacers` map or from any generic value. The goal of this helper function is to create fluid spacers more easily.

### Argument(s)

| Name              | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| `$min`            | The name of the spacer.                                                   |
| `$max`            | The name of the spacer.                                                   |
| `$optimal`        | The optimal value which is fallback to the `optimal-spacer-size` setting. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_spacer.scss#L13)

### Example(s)

```scss
.block {
  padding: spacer-clamp('m', 'l');
}

.block {
  padding: spacer-clamp('xs', 's', '2vw');
}

.block {
  padding: spacer-clamp(2rem, 'l');
}
```

## str-replace

Replace any specified value in a string.

### Argument(s)

| Name            | Default Value  | Description           |
| --------------- | -------------- | ----------------------|
| `$string`       |                | Initial string.       |
| `$search`       |                | Substring to replace. |
| `$replace`      | `''`           | New value.            |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_utilities.scss#L9)

### Example(s)

```scss
// Get custom icon background for input and select fields
@mixin field-icon(
  $icon,
  $color
) {
  background-image: url('#{svg-escape(str-replace($icon, "#COLOR#", $color))}');
}
```

## svg-escape

Escape the special characters in SVG when used as a `data:image`. The characters are declared under the <code><a href="https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_index.scss#L14">$escaping-characters</a></code> map.

### Argument(s)

| Name            | Description                    |
| --------------- | -------------------------------|
| `$svg`          | The `<svg>` element to escape. |

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_utilities.scss#L20)

### Example(s)

```scss
// Get custom icon background for input and select fields
@mixin field-icon(
  $icon,
  $color
) {
  background-image: url('#{svg-escape(str-replace($icon, "#COLOR#", $color))}');
}
```
