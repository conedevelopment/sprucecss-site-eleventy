---
title: "Settings"
description: "By changing the settings parameters, you can customize a generic part of the behavior of Spruce CSS."
order: 11
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/customization/settings.md"
---

<p class="lead">In Spruce CSS, the settings are global options controlled through a Sass map.</p>

You can access any setting with the [setting() helper function](/docs/sass/functions#setting). Below, you can see the `$settings` map (object) with its default values.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/config/_setting.scss)

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'color-fallback': false,
    'css-custom-properties': false,
    'html-smooth-scrolling': true,
    'hyphens': true,
    'optimal-responsive-font-size': '2vw + 1rem',
    'optimal-spacer-size': '5vw',
    'prefix': 'spruce',
    'print': false,
    'scaler': 15,
    'utilities': (
      'display': true,
      'typography': true,
    ),
  ),
);
```

## color-fallback

Setting the `color-fallback` key to true, you can turn the color fallback when using `color()` function.

```scss
// Without fallback
body {
  // color: color(text);
  color: var(--spruce-base-color-text);
}

// With fallback
body {
  // color: color(text);
  color: var(--spruce-base-color-text, #474d52);
}
```

Turn on the color fallback:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'color-fallback': true,
  ),
);
```

## css-custom-properties

By default, Spruce doesn't generate unnecessary CSS variables only for the colors. Turning this option to `true`, you will get more CSS custom properties (for example, for buttons and inputs) that you can control directly without compiling.

{% notification %}If you want to see this in action, debug any button on this site.{% endnotification %}

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
);
```

## html-smooth-scrolling

Turn off the smooth scrolling (`scroll-behavior: smooth;`) on the html element. You maybe need this because you work with a SPA, and it interferes with its transitions.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'html-smooth-scrolling': false,
  ),
);
```

## hyphens

By default Spruce uses a simple hyphenation setup [which you can find here](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_typography.scss#L13).


Turn off the hyphenation:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'hyphens': false,
  ),
);
```

## optimal-responsive-font-size

Optimal responsive font size used at `font-size()` and `responsive-font-size()` function which is used in a `clamp()` function as the middle value.

Using the mentioned functions, you can modify this value per call too. A global fallback is a much-needed thing here, but we need to fine-tune it uniquely in some cases (like bigger sizes).

Modify the optimal font-size value:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'optimal-responsive-font-size': '5vw + 1',
  ),
);
```
{% notification %}We added a simple formula: one value with a relative viewport unit (vw) to make it responsive and one value with a root-relative unit (to set up a minimum value, it never will be smaller than 1rem). You can specify any numerical value, but use quotations if you use an operation.{% endnotification %}

### References
- [font-size()](/docs/sass/functions/#font-size)
- [responsive-font-size()](/docs/sass/functions/#responsive-font-size)
- [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp())


## optimal-spacer-size

Optimal spacer size used at `spacer-clamp()` function which is used in a `clamp()` function as the middle value.

Using the mentioned function, you can modify this value per call too. A global fallback is a much-needed thing here, but we need to fine-tune it uniquely in some cases (like bigger or smaller sizes).

Modify the optimal spacer size value:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'optimal-spacer-size': '5vw',
  ),
);
```

### References
- [spacer-clamp()](/docs/sass/functions/#spacer-clamp)

## prefix

Spruce CSS uses this prefix for generating the custom properties.

Modify the prefix value:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'prefix': 'my-custom-prefix',
  ),
);
```

Generated CSS custom properties:

```css
:root {
  --spruce-alert-color-danger: #db2929;
  --spruce-alert-color-info: #00a1d6;
  --spruce-alert-color-success: #00a854;
  --spruce-alert-color-warning: #f2ca26;
}
```

You can also set `null` value to remove them.

[View Source on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_root.scss)

## print

Spruce comes with a small set of print styles. To turn them on, set the `print` value to `true`.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'print': true,
  ),
);
```

## scaler

A global setting for the `scaler` value used by the [font size functions](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_font-size.scss).

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'scaler': 15,
  ),
);
```

## utilities

We use just a few classical utility classes. We don’t plan to add too much in the future, but it can change. If we create more, it sure will always be opt-in.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'utilities': (
      'display': true,
      'typography': true,
    ),
  ),
);
```

You can find the [complete list of utilities on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_utilities.scss).
