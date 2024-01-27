---
title: "Writing Better CSS"
date: "2022-05-02"
featuredImage: "./src/img/blog/writing-better-css.png"
alt: "An illustration about a woman who working on her computer."
tags: ["css"]
---

<p class="lead">Writing better and more manageable CSS is something to strive for as a front-end developer. But what is better CSS? Well, it is a question that isn’t so easy to answer.</p>

I think in CSS, determining what’s good is usually opinionated. Of course, there are some absolute truths, but many things in code depends on the context. A lousy code can do a job well; still, we should go for the better. Every project and team has its own needs, so using a universal solution is rarely possible.

<Notification type="info">This article isn’t the solution for all of our problems with styles but only my personal experience.</Notification>

## What Can Qualifies as Better CSS?

- A codebase that is easier to maintain. CSS can be chaotic; it is good to use a framework (or any system) so you are always familiar with each of your projects. It is also good if this framework is well developed and regularly updated (so your code will be smaller and more modern).
- In my opinion - *in CSS context* - modern (newer) means better. You clearly can’t compare a 12-based floated grid system with [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). The last one can do things we hardly could imagine a few years back. Just with the <code>[gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)</code> (which you can also apply using flexbox) property, we do magic.
- Quality control is always necessary. Using [Stylelint](https://stylelint.io/), [Autoprefixer](https://autoprefixer.github.io/), or [PurgeCSS](https://purgecss.com/), you can set up and follow strict rules. It is helpful for only one person but superior for a team.
- A smaller size always wins. It depends on the project, but what is smaller is almost always better on the web. Today we have a bloated web; it is nice to try to make it smaller.
- Following any methodology like BEM, SMACSS, or CUBE CSS can solve the permissiveness of the stylesheets.

## Alphabetize Your CSS Properties

Writing your CSS properties in alphabetical order can sound a little strange. It was for me, then I gave it a try.

Declaring the properties based on the alphabet is convenient and straightforward. You don’t have to think about what group with what and in which order. You get a clear rule to follow, it simplifies things. For some reason, I always tried to group the properties somehow, and it was more work than it deserved.

In CSS, we can create different property grouping logics like typography, layout, etc. But what happens if we get a new property, like the `aspect-ratio`? Is it fit somewhere, or do we have to create a new group? Does it break any recent order? How do we track any other new property?

Using the ABC is nothing more than simplification. It is worth giving a try. With Stylelint, you can quickly check the order (or fix it). For this, we use the [Sass Guidelines config](https://www.npmjs.com/package/stylelint-config-sass-guidelines). [For the implementation, see](https://github.com/conedevelopment/sprucecss/blob/main/.stylelintrc.json).

<Notification type="info">More on this subject: <a href="https://blog.jim-nielsen.com/2022/ordering-css-delcarations/">Ordering CSS Declarations</a>, <a href="https://ericwbailey.design/writing/organize-your-css-declarations-alphabetically/">Organize your CSS declarations alphabetically</a>.</Notification>

### Alphabetized Properties Example

In which order would you write the following code block? Sure, in the end, it doesn’t matter, but this small example shows us that finding any logic besides alphabetization is hard.

```scss
img {
  block-size: auto;
  display: block;
  max-inline-size: 100%;
  user-select: none;
}
```

## Choose a Methodology and Stick With It

A methodology is a lifesaver because we have just a few rules in CSS, which can result in weak code in the long run. Code quality matters. Like our choice, BEM, a methodology can help you to think in components and write more maintainable code.

Using an extensive description, a system of rules when writing stylesheets isn’t the silver bullet but can help us hugely. For me, the most significant advantage of BEM is the possibility of thinking in components that in HTML/CSS are often not tangible concepts.

Some excellent CSS architecture solution:
- [BEM](http://smacss.com/)
- [SMACSS](http://smacss.com/)
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [CUBE CSS](https://cube.fyi/)

### A BEM component example

The following example is a part of the `.btn` styling from Spruce CSS. For the complete example, [check out the source code on GitHub](https://github.com/conedevelopment/sprucecss/blob/main/scss/form/_button.scss).

```scss
.btn {
  $this: &;

  align-items: center;
  border: 0;
  border-radius: $btn-border-radius;
  ...

  // States
  &:focus {
    outline-color: transparent;
    outline-style: solid;
  }

  &:disabled,
  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  // Icon button
  &--icon {
    padding: $btn-icon-padding;

    &#{$this}--sm {
      padding: $btn-icon-padding-sm;
    }

    &#{$this}--lg {
      padding: $btn-icon-padding-lg;
    }
  }

  // Sizes
  &--sm {
    font-size: $btn-font-size-sm;
    padding: $btn-padding-sm;
  }

  &--lg {
    padding: $btn-padding-lg;

    @include breakpoint(md) {
      font-size: $btn-font-size-lg;
    }
  }
}
```

## Process The Code

Quality control in CSS is a must. We can easily lint, prefix, and purge our code, so why not?

We should use the tools of the modern developer. I use Stylelint to lint my stylesheets with the Sass Guidelines and Autoprefixer to prefix some code (and [check browser support](https://github.com/browserslist/browserslist#best-practices)).

I usually write SCSS. I like Sass; it is programmatic CSS which can be handy. It is also a way of processing your code too. On a basic level, you can write fewer lines of code, separate them, and merge them as you wish. On a more intermediate level, you can make your small framework. Compiling Sass is easy with [sass-cli](https://sass-lang.com/documentation/cli/dart-sass); [I wrote a simple guide about it on Pine](https://pineco.de/the-simplest-sass-compile-setup/).

If your codebase is vast and you don’t control it from the start, you can use Purge CSS to remove the unnecessary lines. For example, if you use the complete bootstrap grid, you will rarely use all of the utility classes. You can make your CSS 30-50% lighter if you purge it before publishing.

## Go Modern

CSS is evolving fast lately 🥳. We don’t get prefixed properties; the vendors open the support almost simultaneously. If we get a new feature, we can practically use them. Of course, the collective support of the new feature isn’t that easy; always are some exceptions, but we rarely see new stuff with less than 80% on caniuse.com after a short time.

Use the new things like `aspect-ratio`, grid, and logical properties. They simplify your code and make new solutions possible like never before.

```scss
.aspect-ratio-16-9 {
  aspect-ratio: 16 / 9;
}

.aspect-ratio-1 {
  aspect-ratio: 1;
}
```

If you worry about backward compatibility, make your code progressively enhanced and use <code>[@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)</code>. Keep in mind that inclusion is still necessary with the new features. For a great article about browser support strategy check out [Michelle Barker’s article](https://css-irl.info/my-browser-support-strategy/).

If you need a recap about modern CSS, see [Writing Better CSS article](https://www.aleksandrhovhannisyan.com/blog/writing-better-css/) by Aleksandr Hovhannisyan.

## Flexbox and Grid Are a Must

The flexbox and grid are two fantastic and essential power tools. We can create layouts that were impossible just a few years ago with CSS.

This point is an addition to the previous one, but while the `aspect-ratio` is a minor new feature, these two are not (and not that new). Both of them are developed and improved regularly. The flexbox recently got the `gap` property, which is a game-changer.

These two can make any grid system obsolete (of course, based on the context, there are scenarios where they are still handy). They were created for layout, while the previous solutions were hacks.

<Notification type="info">An excellent exercise for your next project: try to eliminate the grid system. I used the BS grid, which was ~1500 lines of code with its utilities. I used its 4-5%, now - with flex and grid - I achieve the same result with ~200 lines of code.</Notification>
