---
title: "8 Helpful Sass Mixins and Functions"
date: "2023-06-29"
featuredImage: "./src/img/blog/8-helpful-sass-mixins-and-functions.png"
alt: "A geometric illustration pattern."
tags: ["scss"]
---

<p class="lead">Sass is a CSS preprocessor, like CSS on steroids, a small programming language. Whether it is helpful for your project or not, it is a powerful tool that can solve and simplify things.</p>

Why today's Sass is not the old Sass, [we wrote previously](/blog/about-modern-sass/). If you are interested in our thoughts, please check it out.

This post will show you what cool things we do with Sass in Spruce CSS. Using a function or a mixin is a good idea because:

- you can eliminate code repetition.
- Control your output, which is handy if you want to change something or give back code based on any state.

## The Difference Between Mixin and Function in Sass

In Sass, you can often interchange a mixin with a function because both are capable of the same.

The main difference is usually:

- the mixins give back a complete, full declaration of CSS block(s),
- while the functions only a simple value.

## Breakpoint Management

Handling media queries is often necessary, but remembering your breakpoints is inconvenient.

Using the mixin below, you can create simple media queries with additional logic based on previously determined breakpoints.

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

```scss
@use 'sass:map';
@use 'breakpoints' as *;

/// Return a media query for a breakpoint based on min-width.
/// @param {string} $breakpoint - The breakpoint name.
/// @param {string} $logic - The logic operator.
/// @return {string} - The media query.
/// @throws {error} - If the breakpoint doesn't exist.
@mixin breakpoint(
  $breakpoint,
  $logic: false
) {
  @if map.has-key($breakpoints, $breakpoint) {
    $breakpoint: map.get($breakpoints, $breakpoint);

    @if $logic {
      @media #{$logic} and (min-width: $breakpoint) {
        @content;
      }
    } @else {
      @media (min-width: $breakpoint) {
        @content;
      }
    }
  } @else {
    @error 'Invalid breakpoint: #{$breakpoint}.';
  }
}
```

## Declaring @font-face

Using the [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) at-rule, we can declare custom fonts in our projects; it is a handy tool.

I haven't used it for a long time because, using Google Fonts, you can "embed" any font just with a stylesheet. With the rise of related GDPR problems, self-hosting our fonts is a good idea.

{% notification %}
If you want to download any Google Font, you can use the [google webfonts helper](https://gwfh.mranftl.com/fonts) website where you can get the newest font variants.
{% endnotification %}

```scss
@use 'sass:string';

/// Generate font-face declaration.
/// @param {string} $font-family - The font family name.
/// @param {string} $src - The font source.
/// @param {number} $font-weight - The font weight.
/// @param {string} $font-style - The font style.
/// @param {string} $font-display - The font display.
/// @return {string} - The generated font-face declaration.
/// @throws {error} - If the font format is not .woff2.
@mixin font-face(
  $font-family: null,
  $src: null,
  $font-weight: 400,
  $font-style: normal,
  $font-display: swap
) {
  @if not string.index($src, '.woff2') {
    @error 'It seems that your font format is not .woff2, please use a that format.';
  }

  @font-face {
    font-display: $font-display;
    font-family: $font-family;
    font-style: $font-style;
    font-weight: $font-weight;
    src: url('#{$src}') format('woff2');
  }
}

```

## Visually Hidden

The visually hidden helps present content only for the screen reader. Often you want to make a utility class (e.g., .sr-only) for this purpose, but it still is useful as a mixin.

```scss
/// Hide something from the screen but keep it visible for assistive technology.
/// @return {mixin} - The visually hidden mixin.
@mixin visually-hidden {
  block-size: 1px !important;
  border: 0 !important;
  clip: rect(0, 0, 0, 0) !important;
  inline-size: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
}
```

## Text Ellipsis

The text-ellipsis mixin shows why a mixin can be a good choice. Cropping our text in CSS is complicated. Making a helper for it helps us tackle the problem easier.

```scss
/// Crop text and display an ellipsis with multiline.
/// @param {number} $number-of-lines - The number of lines.
/// @return {mixin} - The text ellipsis mixin.
@mixin text-ellipsis(
  $number-of-lines: 1
) {
  overflow: hidden;
  text-overflow: ellipsis;

  @if $number-of-lines == 1 {
    white-space: nowrap;
  } @else {
    white-space: inherit;

    @supports (-webkit-line-clamp: $number-of-lines) {
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: $number-of-lines;
    }
  }
}
```

## Custom Scrollbar

Making a custom scrollbar is possible only with CSS in the WebKit browsers, but we need some pseudo-selectors. Handling something like this with a mixin is really a good choice.

```scss
/// Custom scrollbar.
/// @param {string} $thumb-background-color - The background color of the thumb.
/// @param {string} $thumb-background-color-hover - The background color of the thumb when hovered.
/// @param {string} $track-background-color - The background color of the track.
/// @param {string} $size - The size of the scrollbar.
/// @param {string} $border-radius - The border radius of the scrollbar.
/// @return {mixin} - The scrollbar mixin.
@mixin scrollbar(
  $thumb-background-color: hsl(0deg 0% 0% / 15%),
  $thumb-background-color-hover: hsl(0deg 0% 0% / 25%),
  $track-background-color: hsl(0deg 0% 0% / 5%),
  $size: 0.5rem,
  $border-radius: 0.25rem
) {
  &::-webkit-scrollbar {
    block-size: $size;
    inline-size: $size;
  }

  &::-webkit-scrollbar-thumb {
    background: $thumb-background-color;
    border-radius: $border-radius;

    &:hover {
      background: $thumb-background-color-hover;
    }
  }

  &::-webkit-scrollbar-track {
    background: $track-background-color;
    border-radius: $border-radius;
  }
}
```

## Accessible Card Link

How do you make a card's whole surface clickable? Although this is a simple question, the answer can be complex. We can wrap the entire card, but what if it contains a lengthy description? Probably this isn't a viable solution for our screen reader users.

A better solution can be to link the card's title and add an overlay to it through a pseudo-element to cover all of the card's surface.

```scss
/// More accessible card linking.
/// @param {string} $link - The link element's selector.
/// @param {boolean} $at-root - Whether to use @at-root.
/// @return {mixin} - The a11y card link mixin.
@mixin a11y-card-link(
  $link,
  $at-root: false
) {
  position: relative;

  @if $at-root == true {
    @at-root {
      #{$link}::before {
        content: '';
        inset: 0;
        position: absolute;
      }
    }
  } @else {
    #{$link}::before {
      content: '';
      inset: 0;
      position: absolute;
    }
  }
}
```

## Get Contrast Color

Determining a contrast color sometimes is needed. Spruce CSS has a helper function to get a foreground for a `::selection` background color.

```scss
/// Get a white or black contrast color for any color (on WCAG standards).
/// Thanks for David Halford for this function: https://codepen.io/davidhalford/pen/ALrbEP
/// @param {color} $color - The color to get the contrast color.
/// @return {color} - The contrast color.
@function color-contrast($color) {
  $color-brightness: math.round((color.red($color) * 299) + (color.green($color) * 587) + math.div(color.blue($color) * 114, 1000));
  $light-color: math.round((color.red(#fff) * 299) + (color.green(#fff) * 587) + math.div(color.blue(#fff) * 114, 1000));

  @if abs($color-brightness) < math.div($light-color, 2) {
    @return hsl(0 0% 100%);
  } @else {
    @return hsl(0 100% 0%);
  }
}
```

## Responsive Font Size

Instead of a breakpoint, we can use the `clamp()` function to make a fluid font size based on the viewport width.

```scss
/// Generate responsive font-size value using clamp().
/// @param {number} $size - The font size.
/// @param {number} $scaler - The scaler value (15 = 15% smaller).
/// @param {number} $optimal-size - The optimal font size.
/// @return {string} - The responsive font-size value.
@function responsive-font-size(
  $size,
  $scaler: 15,
  $optimal-size: map.get($settings, 'optimal-responsive-font-size')
) {
  @if $scaler < 0 or $scaler > 100 {
    @error 'The $scaler value must be between 0 and 100.';
  }

  @return clamp(#{$size * math.div(100 - $scaler, 100)}, #{$optimal-size}, #{$size});
}
```
