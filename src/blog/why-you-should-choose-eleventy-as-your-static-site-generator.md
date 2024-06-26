---
title: "Why You Should Choose Eleventy as Your Static Site Generator"
date: "2023-08-26"
featuredImage: "./src/img/blog/why-you-should-choose-eleventy-as-your-static-site-generator.png"
alt: ""
description: "Eleventy is an excellent static site generator; it is small, fast, and written in JS."
tags: ["eleventy"]
---

<p class="lead">Choosing a static site generator is challenging because there are <a href="https://jamstack.org/generators/">so many of them</a>. Eleventy is an excellent choice; it is small, fast, and written in JS.</p>

As with any similar article, this one is biased towards [11ty](https://www.11ty.dev/). For context, I previously used Hugo and Gatsby for similar purposes, which is where my basis of comparison comes from.

Static site generators always solve the same problem: sustainably generating and managing a complete website. Making a static website without any 3rd-party generator is quite the thrill. You don't have include, layout extend, or variables in plain HTML. Managing it in the long run is dirty.

Making a static site is something that can be useful for any developer. There are way too many sites out there that shouldn't be WordPress.

Using your choice of tool, you can make the managing experience similar to any modern application.

**But from that many choices, why should you choose 11ty?**

## Simple

If you have any routine with similar tools, it will be effortless to start with it. Initializing a new instance is like a charm. Updating from v1 to v2 is like a breeze.

In 11ty, all your stuff (almost) lives under the `src` folder (usually, but you can set up any structure you wish): your layout files, content, CSS, JS, and helpers.

For templating, you have various options: Nunjucks (my choice), HTML, Markdown, WebC, JavaScript, Liquid, Handlebars, Mustache, EJS, Haml, Pug, or custom. So basically, any JS templating language.

You don't need a JS framework to run it, which means no client-side JS (by default, you can use any of them if you wish) when generating your site.

Working in it is just simply elegant. For some reason, I always compare it to Laravel.

## Fast

The performance - _how fast is something_ - is a generic selling point on the internet. Gatsby was sold as fast. To this day, I don't know what it meant.

When we talk about static generators by fast, we mean they can compile the pages quickly. By alone, this means little, but still, 11ty is pretty fast. You can compare it to any similar tool without any problem. Of course, it doesn't have any heavy dependency (like Gatsby) but still can solve every need of yours.

It is so good to see the under 60s deploy time on Netlify.

## Small

A middle-sized Gatsby project has a +500 MB node folder. The same in Eleventy has +100 MB. One of the points in the v2 release note was how much smaller the node_modules folder is because of the fewer dependencies, which is the coolest thing. We all want more straightforward and more manageable tools. Here is one (honestly).

## Extendable

It has many first-party plugins like syntax highlighting or image utility.

You can create and use **classical filter utilities** like so:

```html
<time datetime="{{ date | w3Date }}">{{ date | date(lang) }}</time>
```

```js
// filters/date.js
const moment = require('moment');

module.exports = (value, locale) => {
  moment.locale(locale);
  const dateObject = moment(value);
  return dateObject.format('LL');
};
```

Or **create shortcodes** for managing more complex tasks from your template:

{% raw %}
```html
{% image 'your-image.png', 'Your alt text' %}
```
{% endraw %}

```js
// .eleventy.js
config.addShortcode('image', async function(src, alt, sizes) {
  let metadata = await Image(src, {
    formats: ['webp', 'jpeg'],
    outputDir: './dist/img/',
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  return Image.generateHTML(metadata, imageAttributes);
});
```

The last example is also a good one. In any project, the images will cause one of the biggest headaches. We can use the first-party `Image` plugin to resize or convert our images quickly.

{% notification %}
In Eleventy, your config file is named **.eleventy.js** and lives at the project root.
{% endnotification %}

## Data

The [data (cascade)](https://www.11ty.dev/docs/data-cascade/) management is just clever and thoughtful.

You can:
- source data from markdown files or global data files,
- use different formats for them,
- use computed front-matter data.

Managing content with Eleventy is so easy. We can create and use collections. If you have a blog, you create a folder (named posts), drop your markdown files into it, and source theme (make a collection).

```js
// .eleventy.js
config.addCollection('blog', collection => {
  return [...collection.getFilteredByGlob('./src/hu/posts/*.md')];
});
```

A collection is helpful because you can list and paginate them. Making a paginated display is way too easy. This is an example markdown page for a blog listing page:

```markdown
---
title: "Blog"
layout: "layout/posts.html"
pagination:
  data: "collections.blog"
  size: 24
  reverse: true
  alias: "posts"
paginationCaptionNext: "Next"
paginationCaptionPrev: "Previous"
permalink: "/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
---
```

Managing static content with markdown makes our job simple. We can use extended front-matter data and HTML elements in our body copy.

We don't need a collection for a page; we create a markdown file somewhere in our project and are good to go.

We can also source our data from [external sources](https://egghead.io/lessons/11ty-generate-eleventy-11ty-pages-from-external-data).

## Where to start?

- The official documentation is a good starting point.
- I used ["Learn Eleventy From Scratch"](https://learneleventyfromscratch.com/) tutorial to learn 11ty. It can be outdated but still relevant.
- The ["A Deep Dive Into Eleventy Static Site Generator"](https://www.smashingmagazine.com/2021/03/eleventy-static-site-generator/) tutorial is well-written and focuses on the core functionality.
- A good way to learn is to browse a real-life project. [Here you can find](https://github.com/conedevelopment/cone-site) our latest one.


