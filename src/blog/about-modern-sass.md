---
title: "About Modern Sass"
date: "2022-12-03"
featuredImage: "./src/img/blog/about-modern-sass.png"
alt: "A geometric illustration pattern with squares and square-based pyramids."
tags: ["sass"]
---

<p class="lead">Should we use Sass in 2022/2023? Is it still relevant and helpful? Good questions. It is still a proper tool, but it has changed over the years.</p>

[Sass](https://sass-lang.com/) (Syntactically Awesome Style Sheets) was first released back in 2006. It is a mature project on a scale of web development. There are a lot of things that lose their importance in a fraction of this time.

So, do we need Sass today? Of course, as with everything, it depends on your needs. In my opinion, this is not the right question to ask; what is more meaningful is what is Sass today?

As my main preprocessor, I work with Sass daily. I also made a CSS framework where a preprocessor is amazingly useful, so lately, I have used it on a more intermediate level.

## Sass Is Not That Fancy Nowadays

If you search for any related problem or solution, you will see many old articles about this tool. For me, it was an interesting recognition.

A vast amount of the information is outdated. At first, this is sad, but if you go deeper, you will see that we don’t need most of that information. There are many mixins and functions now in the core (like the deep get). All you need for Sass is the [official documentation](https://sass-lang.com/documentation/) that can seem small, but it is more than enough (and well-written).

In the end, Sass (for us, the end users) is not a complicated tool; it is an extension for writing CSS in a more manageable way.

In some cases, Sass is less relevant today because CSS has evolved on a grand scale. We don’t need a (12-column) grid system; we have Flex and CSS Grid. We also have variables (a different kind of one), so why bother?

Also, the newer CSS-in-JS solutions solve the code-breaking, nesting, and more.

## The Old Days

To talk about modern Sass, first, we must speak a little about old Sass. Let’s see how we used it in the old days (4-6 years ago):

- One of its popular features of it was variables. Storing anything in a variable and reusing its value is present in a programming language, not a style sheet language. Of course, we use this feature today, but now we have CSS custom properties.
- Making a grid system with CSS wasn’t viable, so we reached out for mixins and functions to make some generators for them.
- We used a lot of mixin for hacks. I’m sure you know the [iframe hack](https://www.hacksoft.io/blog/responsive-iframes). Today we can use the new [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) property.
- We could separate our files by components and merge them at a build process with @import; this is useful today, but now we have @use and @forward.
- We made mathematical calculations. Don’t get me wrong, we still make calculations with Sass, but now we have [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

{% notification %}
Please note that we can still use the listed things (except [@import](https://sass-lang.com/documentation/at-rules/import), which is deprecated), but today we do not need them as much as we needed some years ago. Also, this is a personal list, nothing more.
{% endnotification %}

## The Modern Sass

Today Sass is an old companion with new tools. Developers [still use Sass](https://www.npmjs.com/package/sass), a lot of them. You may not use it directly, but one of the tools you use is built on it. I wrote a separate article about [why to use it](https://sprucecss.com/blog/why-use-sass).

In my opinion, our daily job is the best way to use Sass in a minimal setup. Use just the parts that make your job easier (file separation, nesting); you don’t have to utilize all of its capabilities.

For generic purposes, for a simple project (where you don’t have many dependencies), you will find the following useful:

- The nesting to write [BEM-based](https://css-tricks.com/using-sass-control-scope-bem-naming/) (or other methodology-based) components.
- Break your code into multiple files and [@forward or @use](https://sprucecss.com/blog/why-use-sass#use-and-forward) them.
- To create (or use third-party) mixins that can make the development faster. One new mixin I will need often is a font-face one; because of the GDPR, I can’t include them directly from Google.
- Write DRY code. Sass has three basic pillars: variables, functions, and mixins. With mixins, we can make reusable, configurable code blocks easily.
- You can add logic to your code; for example, you can determine contrast automatically.
- And last but not least: utilize CSS with it. Use CSS custom properties; they know more than a static variable. Combine them; each one is good in a different way.

Although knowing Sass is basic and straightforward, it still has a learning curve depending on your needs. Its language is close to CSS by intention, which is a good design feature.

I think Sass is the best investment if you plan to make a complete system, like a library or framework. If you use a CSS tool that needs it (like Bootstrap), you have to go with it. One more reason to learn it.

The modern Sass - _for me_ - means that we can use the new CSS features, but we can still get a lot of advantages from the preprocessor as we would get in a simple programming language.

## Way More Easier to Use It

One thing that developed is the build tools. Knowing your console is a generic skill for any developer, but it can be a barrier. You can easily include Sass into any tooling system, but my favorite is [Sass CLI](https://sass-lang.com/documentation/cli), which [we can use from npm scripts](https://sprucecss.com/blog/the-simplest-sass-compile-setup).
