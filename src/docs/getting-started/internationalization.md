---
title: "Internationalization"
description: "With core internationalization support through modern CSS and its logical properties, you can handle RTL layouts more easily with Spruce CSS."
order: 6
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/getting-started/internationalization.mdx"
---

<p class="lead">Internationalization (i18n) means preparing the code and design to handle different languages and writing modes.</p>

Thanks for the logical properties and values; we can do more with i18n, just with CSS.

The simplest example is the right-to-left (RTL) writing mode used by Arabic and Hebrew languages, among others. When you write RTL, you should mirror your site: your logo in the header moves to the right side, and your layout and text alignment similarly change place.

For more information, check out this excellent introductory video from [Moriel Schottlender](https://twitter.com/mooeypoo) hosted by [Jason Lengstorf](https://jason.energy):

[![Right-to Left (RTL) Support for Websites (with Moriel Schottlender) — Learn With Jason](https://img.youtube.com/vi/OHF2h1_fBCM/hqdefault.jpg)](https://www.youtube.com/watch?v=OHF2h1_fBCM)

## Logical Properties and Values

CSS Logical Properties and Values is a newer CSS module to control the layout logically. Instead of physical left or right (top and bottom) values, we have logical left or right, depending on the writing mode.

Spruce uses these logical properties and values, but this is also a new feature for us.

It has relatively [good support](https://caniuse.com/css-logical-props), but we must still test our code well.

**For more information, please visit the following pages:**

- [Basic concepts of Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)
- [CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
