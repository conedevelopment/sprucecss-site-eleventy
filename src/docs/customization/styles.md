---
title: "Styles"
description: "Restyle the same markup with design style presets: minimal, brutalist, soft, glass, corporate, playful, editorial and terminal. Scope them to any element or create your own."
order: 15
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/customization/styles.md"
---

<p class="lead">A style is a named set of design tokens, colors and a few rules. Switch it, and the very same markup looks completely different: no class name changes, no new components.</p>

Spruce CSS v3 ships eight style presets. The example below shows each of them on the same markup, and every [component](/ui/getting-started/introduction/) preview has a style picker to try them.

<div class="style-demo-grid">
{%- for style in styles %}
<div class="style-demo" data-spruce-style="{{ style.name }}">
<p class="style-demo__name">{{ style.label }}</p>
<div class="style-demo__buttons"><button class="btn btn--primary btn--sm" type="button">Primary</button> <button class="btn btn--outline-primary btn--sm" type="button">Outline</button></div>
<div class="form-group">
  <label class="form-label" for="style-demo-{{ style.name }}">Email</label>
  <input class="form-control form-control--sm" id="style-demo-{{ style.name }}" type="email" placeholder="you@example.com">
</div>
<label class="form-switch"><input class="form-switch__control" type="checkbox" checked> <span class="form-label form-switch__label">Notifications</span></label>
</div>
{%- endfor %}
</div>

| Style | Description |
|---|---|
{% for style in styles %}| `{{ style.name }}` | {{ style.description }} |
{% endfor %}

## Turn On the Styles

Styles work through CSS custom properties, so you need the custom property mode. Then choose how you want to apply them.

### Runtime: the `data-spruce-style` Attribute

Turn on the `styles` generator, and every preset is generated under an attribute selector:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
  $generators: (
    'content': (
      'styles': true,
    ),
  ),
);
```

```html
<html lang="en" data-spruce-style="brutalist">
```

Let your users choose: change the attribute with JavaScript and store the choice. Apply it in the `<head>` before the first paint to avoid a flash:

```html
<script>
  const style = localStorage.getItem('preferred-style');
  if (style) document.documentElement.setAttribute('data-spruce-style', style);
</script>
```

```js
document.querySelector('#style-select').addEventListener('change', (event) => {
  const style = event.target.value;

  if (style) {
    document.documentElement.setAttribute('data-spruce-style', style);
    localStorage.setItem('preferred-style', style);
  } else {
    document.documentElement.removeAttribute('data-spruce-style');
    localStorage.removeItem('preferred-style');
  }
});
```

### Compile Time: a Default Style

If your project uses one style only, set it as the default. It is generated directly on `:root`, without the attribute (the generator can stay off):

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': (
      'default': 'editorial',
    ),
  ),
);
```

### Only Some Presets

Every preset adds CSS. Use the `include` list to generate only the ones you offer:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': (
      'include': ('minimal', 'glass'),
    ),
  ),
  $generators: (
    'content': ('styles': true),
  ),
);
```

### Fonts

Some presets ship their own fonts from the `font` folder of the npm package (all under the SIL Open Font License): Brutalist uses Archivo and Archivo Black, with tuned vertical metrics so uppercase labels sit in the middle of buttons, and Editorial uses Fraunces (regular and italic) for its headings. The `@font-face` rules are generated only for the presets you generate, and their URLs start with the `font-path` setting (default: `'../font/'`, relative to the `css` folder). Copy the files next to your CSS and point the setting at them, or set it to `null` to load the fonts yourself:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': (
      'font-path': '/assets/fonts/',
    ),
  ),
);
```

{% notification %}Prefer plain CSS? The <code>spruce.complete.css</code> (and <code>.min.css</code>) bundle in the npm package has every style, the dark mode and the opt-in utilities turned on.{% endnotification %}

## Scoped Styles

The attribute works on any element, not just `<html>`. Use it for previews, themed sections or a single widget:

```html
<section data-spruce-style="terminal">
    <h2>Command line</h2>
    <button class="btn btn--primary">Run</button>
</section>
```

- The tokens (custom properties) cascade, so the **nearest** style wins.
- The preset rules (like the brutalist button shadow) stop at the boundary of a nested scope that uses a different style.
- The scope element gets the style's background, text color, font family and line height.

## Dark Mode

Every preset has a dark palette (`dark-colors`) that applies together with the [dark mode](/docs/customization/themes/). The light colors are merged with the dark overrides, so a style keeps its identity in both modes. A preset without dark colors (like `terminal`) looks the same in both.

## Create Your Own Style

Add a new entry to the `$styles` map. You can also overwrite any part of a built-in preset, because your map is deep-merged into the presets.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: ('css-custom-properties': true),
  $generators: ('content': ('styles': true)),
  $styles: (
    'sunset': (
      'label': 'Sunset',
      'description': 'Warm colors, rounded cards and serif headings.',
      'tokens': (
        'radius-sm': 0.5rem,
        'radius-lg': 1.25rem,
        'font-family-heading': #{Georgia, serif},
        'btn-padding': 0.8em 1.4em,
        'shadow-md': 0 8px 24px hsl(20deg 80% 40% / 18%),
      ),
      'colors': (
        'base': (
          'background': hsl(30deg 100% 98%),
          'primary': hsl(20deg 90% 50%),
        ),
        'btn': (
          'primary-background': hsl(20deg 90% 50%),
          'primary-background-hover': hsl(20deg 90% 44%),
        ),
      ),
      'dark-colors': (
        'base': (
          'background': hsl(20deg 20% 8%),
        ),
      ),
      'rules': (
        '.btn': ('text-transform': uppercase),
      ),
    ),
  ),
);
```

| Key | Description |
|---|---|
| `label`, `description` | Metadata for your docs and tools (not output). |
| `tokens` | Custom property values set on the scope. Use a [shorthand](#shorthands) or any custom property name without the prefix. |
| `colors` | A map with the same structure as [`$colors`](/docs/sass/colors/). Only existing keys have an effect; you get a warning otherwise. |
| `dark-colors` | Merged over `colors` in dark mode. |
| `rules` | `selector => declarations` for what a token can't express. `&` is the scope element itself. |
| `dark-rules` | The same, in dark mode only. |
| `font-faces` | A list of `@font-face` descriptor maps. `src` is a `.woff2` file name under the `font-path` setting; every other key is output as a descriptor (like `ascent-override`). |

### Shorthands

| Shorthand | Sets |
|---|---|
| `radius-sm` | `border-radius-sm`, `border-radius` (inline code and mark), `pre-border-radius`, `btn-border-radius`, `form-control-border-radius`, `form-control-sm-border-radius`, `form-check-border-radius`, `details-border-radius` |
| `radius-md` | `border-radius-md` |
| `radius-lg` | `border-radius-lg`, `dialog-border-radius` |
| `border-width` | `border-width-base`, `btn-border-width`, `form-control-border-width`, `form-check-border-width`, `form-switch-border-width`, `details-border-width`, `dialog-border-width`, `table-border-width`, `divider-border-width` |

Extend the list with the `$style-shorthands` map.

### Style Hooks

In custom property mode, every component value is exposed as a **hook**: a namespaced custom property you can set on any ancestor.

```css
/* The generated button reads its padding from the hook, with the default as the fallback. */
.btn {
  --spruce-padding: var(--spruce-btn-padding, 0.75em 1em);
  padding: var(--spruce-padding);
}
```

So a style (or you, in plain CSS) can change one component without touching the others:

```css
.marketing-section {
  --spruce-btn-padding: 1em 2em;
  --spruce-form-control-border-radius: 0;
}
```

The hook names follow the `--{prefix}-{component}-{key}` pattern. The components are: `btn`, `btn-sm`, `btn-lg`, `form-control`, `form-control-sm`, `form-control-lg`, `form-control-color`, `form-check`, `form-check-sm`, `form-check-lg`, `form-switch`, `form-switch-sm`, `form-switch-lg`, `form-range`, `form-range-sm`, `form-range-lg`, `form-group`, `form-group-check`, `form-group-row`, `form-description`, `form-fieldset`, `table`, `table-sm`, `details`, `dialog`, `progress` and `divider`. The keys are the keys of the related Sass map (like `padding` in `$btn`).

{% notification %}Only keys with a non-<code>null</code> default are hooks, because Spruce doesn't output a declaration for <code>null</code> values. Use <code>rules</code> for those (like <code>text-transform</code> or <code>letter-spacing</code>). Turn the hooks off with the <code>style-hooks</code> setting if you don't need them.{% endnotification %}

## Make Your Components Style-Aware

Use the shared tokens in your own components and they follow every style and the dark mode:

```scss
@use 'sprucecss/scss/spruce' as *;

.card {
  background-color: color('surface');
  border: config('border-width-base', $display) solid color('border');
  border-radius: radius('lg');
  box-shadow: shadow('sm');
  padding: spacer-clamp('m', 'l');
}
```

Your project can also add its own color groups to the presets, like this site does for its hero and footer:

```scss
@use 'sprucecss/scss/spruce' with (
  $styles: (
    'brutalist': (
      'colors': ('footer': ('background': hsl(0deg 0% 0%))),
    ),
  ),
);
```

## AI Skills

Every preset has an [AI skill](/docs/ai/skills/) that describes its visual language, so coding assistants can design new screens in the same style.
