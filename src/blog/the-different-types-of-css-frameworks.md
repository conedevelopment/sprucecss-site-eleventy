---
title: "The Different Types of CSS Frameworks"
date: "2022-07-08"
featuredImage: "./src/img/blog/the-different-types-of-css-frameworks.png"
alt: "Categorizing CSS frameworks are sometimes more straightforward, sometimes more complex. Usually, we can put them in a group based on their philosophies."
tags: ["css"]
---

<p class="lead">Categorizing CSS frameworks are sometimes more straightforward, sometimes more complex. Usually, we can put them in a group based on their philosophies.</p>

And why should you know the type of the library you are using? Well, you shouldn’t necessarily. Knowing the type of any framework can be helpful because you will know what to expect based on your needs. Other than this, it isn’t that relevant because what matters that how it can solve your problems (not technically how).

So why do I care? When I started with Spruce CSS, I went through several CSS frameworks to learn. You would be amazed to know how many of them exist and how they are similar in the concept but different in the core. For me, categorizing Spruce is not easy, so I was curious about the options because it is a big help to communicate it clearly.

<Notification type="info">Most of these libraries can overlap into multiple categories; there isn’t any fine line. A module-based system can give you utilities, and a utility-based can give you components.</Notification>

## Component-based CSS Frameworks

Naming this group is tricky. In my opinion, this is the original CSS framework; this is what Bootstrap is.

- Bootstrap is a complete and extensive system that gives you a robust base and **out-of-the-box components**.
- It has almost everything that you need to build any project. Easy to start and hard to master (as usual).
- You can use it with Sass and decide which module you want to use. For example, I only use the grid and the utilities when developing with it.

You can put [Bulma](https://bulma.io/) and [Spruce CSS](https://sprucecss.com/docs/getting-started/introduction) into this group too.

<Notification type="info">We can call these kinds of frameworks the traditional ones because these were the first ones.</Notification>

## Utility-based CSS Frameworks

You know about utility classes in CSS. These classes only do one thing (or a small subset of things). For example: if you want to set a background color to an element (or multiple elements), you make a utility class:

```css
.bg-red {
  background-color: red;
}
```

Then you use this helper multiple times when and where you need it:

```html
<div class='my-component bg-red'>
  ...
</div>

<p class='bg-red'>Hello from a paragraph!</p>
```

You don’t style a semantically named custom component (like .my-component); you make tiny helpers and add them to the HTML elements.

These frameworks aren’t that new, but they started to gain popularity with [Tailwind CSS](https://tailwindcss.com/), its biggest cultivator. It is a different kind of philosophy that has its pros and cons.

[Tachyons](https://tachyons.io/) is another example of a utility-based CSS framework.

## CSS Frameworks Without Classes

The class-free CSS frameworks are pretty popular ones. These tools come without classes and style the native elements (with element and/or attribute selectors). You drop the file into your project, and it instantly looks better. It is like an extended reset.

One excellent example of this type of solution is [Pico.css](https://picocss.com/). The main goal of it is simpleness. You don’t need tooling, and it has a moderate learning curve.

To get the idea better, see the [compiled CSS on GitHub](https://github.com/picocss/pico/blob/master/css/pico.css). For another example, see [Water.css](https://watercss.kognise.dev/).

## More Categories

As I said, these categories can overlap, and we can make many more. For example, we can group them based on technology, like if it is using Sass, Less, or PostCSS. We can collect special libraries that aim to solve just some minor problems, like the grid.

**For me, these three category covers the most influential groups.**
