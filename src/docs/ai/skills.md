---
title: "AI Skills"
description: "Agent skills for AI coding assistants: teach Claude Code (and other tools) to write idiomatic Spruce CSS and to design in every Spruce style."
order: 40
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/ai/skills.md"
---

<p class="lead">AI coding assistants write better code when they know your tools. Spruce CSS ships agent skills: short, focused instruction files that teach an assistant the framework's conventions and the visual language of every design style.</p>

## What's Included

The skills live in the npm package, in the `skills` folder, so they always match the version you have installed.

| Skill | What it teaches |
|---|---|
| `sprucecss` | Setup, configuration, the getters (`color()`, `spacer()`, `radius()`, `shadow()`…), the layout mixins, the markup of every element, the coding conventions and a component pattern. |
| `sprucecss-library` | How to use the ready-made [Spruce UI](/ui/getting-started/introduction/) components, blocks and pages with only the npm package installed: find the item in [library.json](/library.json), fetch its Markdown endpoint, copy the code with its dependencies in order and change only the content. |
| `sprucecss-styles` | How to apply, scope and create style presets: tokens, shorthands, hooks, colors and rules. |
| `sprucecss-spacing` | Where the space between elements comes from: a flex column with a gap for sections (like every `__inner`), `layout-stack()` for text, no margin resets on the children, and inline elements wrapped in a block. |
| `sprucecss-list-layout` | Lists whose items sit side by side (tags, links, logos, card grids): the base list is a vertical stack, so the list clears the owl margins on its `li` elements (`margin-block: 0`) and sets their `padding-block` to 0, and the `gap` spaces them. |
| `sprucecss-blocks` | How to build blocks (`.name-block > .container > .name-block__inner`), components and pages: data-driven content, tokens, logical properties, accessibility and vanilla JavaScript rules. |
| `sprucecss-block-rhythm` | The rhythm between the blocks of a page: blocks on the same background share one wrapper, and a block that follows a block on the same background drops its top padding, so the gap is never doubled. |
{% for style in styles %}| `styles/{{ style.name }}` | {{ style.description }} |
{% endfor %}

Each style skill describes the mood, typography, color, shape, how the components look, and a do/don't list, like a short design brief. Ask your assistant for "a pricing page in the editorial style", and it knows what that means.

## Install for Claude Code

Copy the skills into your project's `.claude/skills` folder (or `~/.claude/skills` to use them in every project):

```terminal
mkdir -p .claude/skills
cp -r node_modules/sprucecss/skills/sprucecss node_modules/sprucecss/skills/sprucecss-library node_modules/sprucecss/skills/sprucecss-styles node_modules/sprucecss/skills/sprucecss-spacing node_modules/sprucecss/skills/sprucecss-list-layout node_modules/sprucecss/skills/sprucecss-blocks node_modules/sprucecss/skills/sprucecss-block-rhythm .claude/skills/
cp -r node_modules/sprucecss/skills/styles/editorial .claude/skills/sprucecss-style-editorial
```

Claude Code loads a skill automatically when your request matches its description (for example, when you edit a file that uses Spruce CSS or ask for a brutalist landing page). You can also call it by name.

## Other Assistants

The skills are plain Markdown with a small front matter, so any assistant can use them:

- **Cursor:** save the content as a rule in `.cursor/rules/`.
- **GitHub Copilot:** add it to `.github/copilot-instructions.md`.
- **Codex, Gemini CLI and other agents:** reference or paste it in `AGENTS.md`.

## Example Prompts

- "Create a settings page with Spruce CSS: a sidebar navigation, a form with switches and a danger zone."
- "Build a new Spruce block for a newsletter sign-up with a benefits list."
- "Turn this hero section into the glass style and make sure it works in dark mode."
- "Create a new Spruce style preset called `sunset` with warm colors and serif headings."
- "Refactor this component to use the Spruce tokens instead of hardcoded values."

## Writing Your Own Skill

Building a design system on top of Spruce? Write a skill for it, too. A good skill:

- starts with a front matter that has a `name` and a `description` saying **when** to use it;
- lists the rules the assistant must follow (tokens over hardcoded values, BEM naming, logical properties, accessibility);
- shows the markup and a typical component;
- stays short: link to the documentation for the details.

Look at the [Spruce skills on GitHub](https://github.com/conedevelopment/sprucecss/tree/main/skills) for a starting point.

## LLMs.txt

This site also publishes an [llms.txt](/llms.txt) file: a machine-readable index of the documentation for tools that read the web.
