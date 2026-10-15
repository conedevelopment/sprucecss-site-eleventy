---
title: "Inclusivity and Accessibility"
description: "Create more inclusive and accessible solutions using our micro-framework and its components."
order: 6
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/getting-started/accessibility.md"
---

<p class="lead">Inclusivity and accessibility (A11Y) are some of the main concerns of Spruce CSS. We aim to help you develop more accessible web-based projects through our code and documentation, where we will try to show you small, related tips and guidance where necessary.</p>

Building something more inclusive is a long process. We learn on the way, too, so this always will be a work in progress.

{% notification %}We do our best to test our code with <a href="https://www.nvaccess.org/download/">NVDA</a> and VoiceOver. Testing is an area where help is much appreciated. <a href="https://github.com/conedevelopment/sprucecss/issues">Please open an issue</a> if you have any input related to this topic. Thank you!{% endnotification %}

## WCAG 2.2

Our primary reference is the [Web Content Accessibility Guidelines 2.2](https://www.w3.org/WAI/WCAG22/quickref/) level AA. As a CSS framework, Spruce can’t tackle too much of this reference, but it is more critical at [Spruce UI](/ui/getting-started/introduction), where you can grab standalone components.

## Integrated Inclusivity

We take care of the following:

- The base colors and combinations aim to meet the color contrast guidelines, in every style preset and in dark mode.
- We respect the user settings through `prefers-reduced-motion` and `prefers-color-scheme` (see the `reduced-motion` and `dark-mode` [settings](/docs/customization/settings/)).
- Focus states are always visible: buttons, inputs, checks, switches, ranges and `summary` elements get a focus ring on `:focus-visible`.
- We prefer native, accessible elements: `details`, `dialog`, `progress` and `meter` are styled out of the box.
- Helpers for common patterns: `.sr-only`, `.sr-only-focusable` (skip links), `visually-hidden-focusable`, `motion-safe` and `motion-reduce` mixins.
- We care about semantics and present the code examples meaningfully.

## Checklist for Your Components

- Use `<button>` for actions and `<a>` for navigation.
- Give every form control a visible label (`.form-label`) and connect the descriptions with `aria-describedby`.
- Don’t rely on color alone: add text or an icon to statuses and validation messages.
- Keep animations optional with the `motion-safe` mixin.
- Test with the keyboard and a screen reader.
