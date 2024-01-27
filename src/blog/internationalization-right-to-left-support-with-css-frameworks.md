---
title: "Internationalization (right-to-left support) with CSS Frameworks"
date: "2023-02-05"
featuredImage: "./src/img/blog/internationalization-right-to-left-support-with-css-frameworks.png"
alt: "Abstract geometric vector illustration"
tags: ["sass"]
---

<p class="lead">Internationalization (i18n from this point) is quite an exciting and complicated process for web-based projects.</p>

For once, you need to translate all of your text which alone can be challenging depending on your used technology. Usually, when you are done with the string translation, you are done with the translation. But what if the chosen language has another direction, like right-to-left (RTL)?

In this case, you also have to alter the layout, which can be tricky, but lucky us, modern CSS has some solutions for us.

## CSS Frameworks

A CSS framework is a tool that makes writing code a bit easier by helping us write more uniform solutions.

Using and implementing the solutions mentioned below, we can make a library that solves a part of the i18n (e.g., RTL direction) with almost the same amount of code we wrote for our regular direction (LTR). All we (the ones who write the framework) have to do is to use the new logical properties and values.

## Logical Properties and Values

The logical properties and values give us control over our layout with logical directions. You can switch almost any classical physical property and value to logical ones that will follow the writing mode of your document.

Although this article is mainly about LTR and RTL, you can not just control your layout horizontally but vertically if you wish so.

You can set your writing mode with the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir" class="code-link"><code>dir</code></a> attribute or the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode" class="code-link"><code>writing-mode</code></a> CSS property.

[The support for the logical properties can be mixed](https://caniuse.com/?search=logical%20properties), but with a prefixer, you can easily support the newer browsers.

Let's see some simple example of how this change our code.

### Text Alignment

If you want to align any text right in a physical way, you will do the following:

```css
p {
  text-align: right;
}
```

With logical values (here, we only have new values), you don’t specify actual direction based on what you see but logical ones based on the context (writing mode) using the `end` value.

```css
p {
  text-align: end;
}
```

### *-block, *-inline

The writing direction is based on two axes: vertical (inline) and horizontal (block). I think the horizontal one is the more popular one (hence we use them in this post because I know more about it).

Knowing this, we got a lot of new handy shorthand that is also useful with or without we care about i18n.

For example, in controlling the horizontal or inline margin, we can use the: `margin-inline`, `margin-inline-end`, and `margin-inline-start` new properties.

Once for centering a block element was this:

```css
div {
  margin-left: auto;
  margin-right: auto;
}
```

Now it is this:

```css
div {
  margin-inline: auto;
}
```

In this case, this is a shorthand but also a logical layout.

### Inset

For controlling the positioning, we got the `inset-*` properties instead of the physical ones: `top`, `right`, `bottom`, and `left`.

If you wanted to position something absolutely to cover its container, you did the following:

```css
div {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
```

Now you can do this:

```css
div {
  inset: 0;
  position: absolute;
}

/* or */

div {
  inset-block: 0;
  inset-inline: 0;
  position: absolute;
}
```

At this point, I am sure you get the idea behind the logical concept. It needs a different kind of thinking but is relatively easy to switch. [For the complete list, please visit MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties).

## The Layout Modes

The Flex and Grid layout methods support RTL quite well out of the box. These two new layout modes are really for creating complete structures that were quite impossible before them.

These two layout modes will handle the direction switching by mirroring your structure (on the right axis). Which was an additional CSS code to address, now is a default.

The values that we use for our flex or grid properties are and were logical ones. Before `start` and `end` for the `justify-content` property, we used `flex-start` and `flex-end`. These values mean the same but are unified (we can use them now in many cases).

<Notification type="info">To see all of this in action, check out this <a href="https://ui.sprucecss.com/html/page/post-preview.html?dir=rtl">complex example from Spruce UI</a>. You can remove the <code>dir</code> attribute from the URL to see the RTL version.</Notification>

## I18n With CSS Summary

You can write your code in the new logical way with the same (or sometimes) fewer lines. This technique is not always necessary but can be helpful in a CSS framework.

You can’t solve everything (at least right now) with just the logical properties and values, but you can easily cover the layout in 90%.

The learning curve is not that steep, and it is a cool area to know about.
