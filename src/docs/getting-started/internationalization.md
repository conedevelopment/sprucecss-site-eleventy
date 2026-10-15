---
title: "Internationalization"
description: "With core internationalization support through modern CSS and its logical properties, you can handle RTL layouts more easily with Spruce CSS."
order: 7
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/getting-started/internationalization.md"
---

<p class="lead">Internationalization (i18n) means preparing the code and design to handle different languages and writing modes.</p>

Thanks to the logical properties and values, we can do more for i18n just with CSS.

The simplest example is the right-to-left (RTL) writing mode used by Arabic and Hebrew languages, among others. When you write RTL, you should mirror your site: your logo in the header moves to the right side, and your layout and text alignment similarly change place.

For more information, check out this excellent introductory video from [Moriel Schottlender](https://twitter.com/mooeypoo) hosted by [Jason Lengstorf](https://jason.energy):

[![Right-to Left (RTL) Support for Websites (with Moriel Schottlender) — Learn With Jason](https://img.youtube.com/vi/OHF2h1_fBCM/hqdefault.jpg)](https://www.youtube.com/watch?v=OHF2h1_fBCM)

## Logical Properties and Values

CSS Logical Properties and Values is a newer CSS module to control the layout logically. Instead of physical left or right (top and bottom) values, we have logical left or right, depending on the writing mode.

Spruce uses logical properties and values everywhere: in the elements, the layout mixins, the [style presets](/docs/customization/styles/) and the [Spruce UI](/ui/getting-started/introduction/) components. Interactive components (like tabs, carousels and drawers) also mirror their keyboard and motion behavior in RTL.

The [support is excellent](https://caniuse.com/css-logical-props) in every modern browser. Test your layouts with `dir="rtl"`: the [preview of every component](/ui/getting-started/introduction/) has an RTL toggle.

**For more information, please visit the following pages:**

- [Basic concepts of Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts)
- [CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
