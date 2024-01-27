---
title: "4 Areas Where Modern CSS Solves a Lot"
date: "2023-04-15"
featuredImage: "./src/img/blog/4-areas-where-modern-css-solves-a-lot.png"
alt: "A geometric illustration pattern."
tags: ["css"]
---

<p class="lead">With modern CSS, we got some great tools that we can utilize to solve legacy problems or handle them better.</p>

The evolution of CSS has been quite fascinating in the last few years. There are no more prefixes; the vendors open the new features simultaneously (unfortunately, there are fewer engines, but that is another story), so this list is not quite complete.

Now have the `:has` selector, which is basically a parent selector. We can check if an element has a specific child. A powerful thing that gives CSS much more deserved power to control some states.

## RTL, Internationalization, Different Writing Modes

Designing for multi-directional content can be a pain. If you have to support both LTR and RTL, you had to do more work in the past.

With the new sets of [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties), no more are left/right or top/bottom; we can declare a direction relatively.

Using logical values helps us to make a layout RTL from LTR easier.

```scss
blockquote {
  @include layout-stack('xs');
  border-inline-start: 0.5rem solid color('blockquote-border');
  margin-inline-start: 0;
  padding-inline-start: spacer('m');
}
```

In this example, if we switch the layout to RTL by adding the `dir="rtl"` to the HTML element, it will be displayed just right. We used `border-inline-start`, `margin-inline-start`, and `padding-inline-start` to control the spacing. If we change the direction because of the `*-start` properties, all of this changes to the right side of the viewport.

## Dark Theme Mode

The dark mode is a newer and beneficial trend. Making a dark version of your application or website is not just on CSS, but still, one of the central areas will be the colors.

Using CSS custom properties, we can easily switch colors with simple declarations without recompiling anything.

```scss
:root {
  --spruce-x-11ty-selection-color-foreground: hsl(0deg 0% 100%);
  --spruce-x-11ty-selection-color-background: hsl(262deg 71% 49%);
}
```

```scss
:root[data-theme-mode=dark] {
  --spruce-x-11ty-selection-color-background: hsl(261deg 54% 70%);
  --spruce-x-11ty-selection-color-foreground: hsl(0deg 0% 95%);
}
```

## Control the Layout With Flexbox and CSS Grid

Using Flexbox and CSS Grid is another level of layout making. These tools were made for composing a wide range of designs.

They support i18n out of the box with their own logical properties. They help us to make layouts that we could only do with hacks. No more negative margin on the parent row elements; now we have a simple gap value to control the gutters.

We can make [intrinsic](https://moderncss.dev/contextual-spacing-for-intrinsic-web-design/) layouts and center elements more efficiently.

## Fluid Typography

Changing your font sizes based on breakpoints is one way to solve the responsive typography, but there are more elegant ways.

You can control and make more fluid typography using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"><code>clamp()</code></a> function and the `vw` responsive unit.

```scss
.lead {
  font-size: clamp(1.15rem, 2vw, 1.35rem);
}
```

Using Sass - or another CSS preprocessor - you can also make a [utility helper](https://github.com/conedevelopment/sprucecss/blob/main/scss/function/_font-size.scss#L44) to generate responsive font sizes as we do with Spruce CSS.
