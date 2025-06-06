---
title: "How to Configure Spruce CSS in Your Project"
date: "2022-10-07"
featuredImage: "./src/img/blog/how-to-01.png"
alt: ""
tags: ["how-to"]
---

<p class="lead">Including Spruce CSS in your project is an easy job. First, you must install it (the best with npm) and set up the <a href="https://sprucecss.com/blog/the-simplest-sass-compile-setup">Sass compile</a>. Second, you need a quick config setting and are good to go.</p>

A config setting is needed to set your custom values and generate Spruce’s styles.

We can utilize Sass’s newer [index file feature](https://sass-lang.com/documentation/at-rules/use#index-files).

Create a **config** folder inside your **scss** folder. We need an **_index.scss**, a **_config.scss**, and a **_styles.scss** file in this folder. Inside the **_index.scss** file, we forward the others to our main entry point (that we compile into a single CSS file) **main.scss**, which is in the root of the `scss` folder.

```scss
.
└── scss/
    ├── config/
    │   ├── _index.scss
    │   ├── _config.scss
    │   └── _styles.scss
    └── main.scss
```

## _index.scss

In this file, we just forward all of the config files.

```scss
@forward 'config';
@forward 'styles';
```

## _config.scss

Inside the** _config.scss** file, we set our Spruce CSS customizations as you see under the [settings](/docs/customization/settings) and [variables](/docs/sass/variables).

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'card': (
      'background': hsl(0deg 0% 100%),
      'border': hsl(220deg 32% 87%),
    ),
  ),
);
```

## _styles.scss

Inside the **_styles.scss** file, we set the [generators](/docs/elements/generators). Usually, this means the `generate-styles`, but we can do it any way we want using the separate functions.

If you want to configure the generated content you can do it through the <code><a href="/docs/sass/variables/#generators">$generators</a></code> map where you can opt-out from each section separately.

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-styles;
```

## main.scss

For the complete picture, we include the main file here, where the first step is loading the config.

```scss
@forward 'config';
// @forward 'components';
```

## The Advantages of This Structure
- You separated every config-related code inside one folder, which is always nice.
- You can easily extend this structure in the future if you need another theme, like a dark one.
- You can load the config in multiple files, which are usually handy (or just the **_config.scss**).
