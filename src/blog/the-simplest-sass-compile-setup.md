---
title: "The Simplest Sass Compile Setup"
date: "2021-09-03"
featuredImage: "./src/img/blog/the-simplest-sass-compile-setup.png"
alt: "Abstract geometric illustration."
tags: ["sass"]
---

<p class="lead">Sass is an excellent tool to make CSS more dynamic, but it is still a burden for many of us because of the compiling settings. Let's see how we can set up a minimal but well-functioning configuration.</p>

I think the easiest way to compile Sass is through npm scripts. Using npm scripts, we can run any shell command - *preconfigured, installed* - with a simple line. Sass comes with a [command-line interface](https://sass-lang.com/documentation/cli/dart-sass) (CLI), which we can configure widely; this is the one we will run through npm scripts.

The current version of Sass is 1.42.1 and wrote on Dart. We have two deprecated packages named LibSass and Node Sass. In this tutorial, we - *and you should* - use Dart Sass which is the default setting on install when we run the `npm install sass` command.

## 1. Install Node.js on Your System

To use npm (to install Sass), we first have to install Node.js, which we can easily do. [Go to the official site](https://nodejs.org/en/download/) and download the related installer (based on the operating system) or use your command line package managers like [Homebrew](https://brew.sh/) or [Chocolatey](https://chocolatey.org/).

## 2. Initialize NPM

After the installation, we can access the npm command to init new projects and manage dependencies. The initialization means creating the `package.json` file where we store our configuration.

**Open your terminal, navigate to the project root and run:**

```command
npm init
```

Answer the asked questions (which you can modify later) or/and press enters. **After the initialization, our** `package.json` **file will look something like this:**

```json
{
  "name": "sass-compile",
  "version": "1.0.0",
  "description": "A simple sass compile config.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "Adam",
  "license": "ISC"
}
```

## 3. Install Sass

To install Sass, we have to run the following npm command:

```command
npm install sass --save-dev
```

The `–save-dev` flag means that Sass is a development dependency (as you will see in your `package.json`, it is under the `devDependencies` object).

Now we have the Sass functionality with access to the previously mentioned CLI with its commands.

## 4. Set The Compile Commands

We can add any new script under the scripts object. Just remove the default one (named test) and add the following:

```json
"scripts": {
  "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
  "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
}
```

As you see, we set up two scripts to compile Sass:

- **Dev:** which is for development purposes. It isn’t compressed, has a source map and a watcher (to run until we stop it and watch for changes).
- **Prod:** which is making our production code. It is compressed, doesn’t have a source map, and runs only once.

{% notification %}
**What is a source map?** A particular file that allows the browser to map back from the processed, concatenated files to the original ones. It is helpful because we can see the original file names when we debug the CSS in the developer tools.
{% endnotification %}

**Our project’s folder structure (should) look like this:**

```structure
sass-compile/
├── assets/
│   ├── css/
│   │   └── main.css
│   └── scss/
│       ├── assets/
│       │   ├── _footer.scss
│       │   └── _header.scss
│       └── main.scss
├── node-modules/
└── package.json
```

We compile our Sass files from the `scss` to the `css` folder. **We don’t have to specify file names explicitly (necessarily);** the script will watch for all translatable files (the ones which don’t have a `_` prefix).

For more information about the flags (the text in the command which stats with —), please visit the [official CLI page](https://sass-lang.com/documentation/cli).

{% notification %}
As you see, the npm scripts work like an alias (right now we only use the Sass CLI). You can run any of the commands directly in your terminal (in any order or parallel), but this example doesn’t show the full potential. Please note that this article is only about about the Sass compile. Based on the different needs, it can be a little bit complicated and more structured.
{% endnotification %}

## 5. Run The Scripts

After the previous steps, all we need is to run our scripts based on all needs. **If you develop, then use:**

```command
npm run sass-dev
```

**If you want to make a minified file, use:**

```command
npm run sass-prod
```
