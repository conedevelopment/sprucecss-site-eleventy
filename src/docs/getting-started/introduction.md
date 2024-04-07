---
title: "Introduction"
description: "Read more about our goals and intentions with Spruce CSS framework. Why we built it, and why is it a good choice for you too?"
order: 1
github: "https://github.com/conedevelopment/sprucecss-site/blob/main/src/docs/getting-started/introduction.mdx"
---

<p class= "lead">Spruce is a Sass-based minimalistic CSS framework to get the foundation right for any web-based project.</p>

By minimalism, we mean it contains only the bare minimum needed for a complex system. Besides the form elements, there aren’t any classical components in it.

The generated CSS is relatively tiny (~7kb gzipped), somewhere around [+1500 lines of code](https://github.com/conedevelopment/sprucecss/blob/main/css/spruce.css) (it uses [normalize.css](https://necolas.github.io/normalize.css/), which takes up +200 lines of code).

{% notification %}Although it seems small, it isn’t. Spruce CSS uses Sass with many <a href="/docs/sass/variables/">variables</a>, <a href="/docs/sass/mixins/">mixins</a>, and <a href="/docs/sass/functions/">functions</a> to ease the work and use its code on demand.{% endnotification %}

## Our Goals with Spruce CSS

- Make it better with each release.
- Keep it small, with just the necessities for any project.
- Keep it modern. Defining modern is challenging in a constantly changing environment, but the essence here is to **follow the new things in CSS**; this is a number one priority because it helps us learn and utilize the new stuff.
- **Include just a few components.** For UI, we have a separate project named [Spruce UI](/ui/getting-started/introduction), where you can find drop-in components.
- Follow semantic and accessibility best practices when possible; this doesn’t mean much in the core library but will be under the UI.
- We don’t want to compete or be compared with other CSS frameworks. We think almost all of them are great - we learn(t) a lot from them. Besides, they have weaknesses and strengths too, like Spruce CSS.
- Although it has some design opinions, it is not something to help you design (User Interfaces). The goal is to give you the correct patterns and a small system to help you create manageable projects in the long run; the UI is your job.
- **Spruce CSS is just a tool. It can help you, and it will, but alone it can’t make your code better.** As with any framework or tool, your knowledge is what truly matters.

## Who is Spruce For?

Choosing a CSS library is a challenging task. Let us help you with why you should select Spruce:

- Spruce is a good choice if you prefer writing CSS instead of HTML. It uses just a few classic utility classes.
- It is a relatively small (~7kb gzipped) framework with a smaller learning curve. The codebase is small but can add more to any project with the available mixins and functions.
- It is that bunch of code you keep manually carrying from project to project.
- You like Sass. We think it is great, but you must know what you are doing. Although it uses Sass, it generates custom CSS properties where needed.
- It is themeable. You can create different themes using CSS custom properties like a dark one.

## Why Make Another CSS Framework?

As you may know, there are many CSS frameworks (hundreds of them, and many are not maintained today). Everybody can choose one that suits their work style or project requirements. So why make another one? It is certainly not because we can do it better but because **we want to do it our way**. We want to be in control and make decisions.

We are sure everybody uses a CSS system; it can be a complete framework or a set of custom utilities. Everyone uses some subset for new projects, as we do. But managing it is something that will be a burden over time. So why not outsource it, make it better, create a package, and document it well?

## We Left the Grid Out

We made a controversial decision with Spruce to leave a classical grid system out. Because of the late CSS layout model developments like Flexbox and Grid, we think it can be eliminated; this doesn’t mean that we won’t show you how to make layouts with ease, but we try to make it the modern way.
