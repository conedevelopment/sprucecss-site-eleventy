<p class="lead">The components use Spruce CSS v3 with the custom property mode turned on. This page shows the configuration they expect, so you can reproduce the previews in your project.</p>

## Base Configuration

Turn on the custom property mode: the components (and the design styles) rely on the CSS custom properties that Spruce generates. The dark mode and the style presets are optional.

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
  ),
  $generators: (
    'content': (
      'dark-mode': true, // optional
      'styles': true,    // optional, enables data-spruce-style
    ),
  ),
);
```

## Tokens the Components Use

Most components only use the default Spruce tokens, so they follow the dark mode and every [design style](/docs/customization/styles/) automatically:

- Colors: `color('surface')`, `color('surface-muted')`, `color('border')`, `color('border-strong')`, `color('heading')`, `color('text')`, `color('muted')`, `color('primary')` and the `alert` colors.
- Shape and depth: `radius('sm' | 'md' | 'lg' | 'pill')`, `shadow('sm' | 'md' | 'lg' | 'xl')`, `config('border-width-base', $display)`.
- Runtime color mixing: `color-alpha()` and `color-tint()`.
- Layers: `z-index('toast')`, `z-index('tooltip')`, `z-index('fixed')`.

## Extra Colors

Some of the older components use their own color groups. Add them to your `$colors` map when you copy them; you can find the exact keys in each component's description (for example, the [Combobox](/ui/form/combobox/) uses the `combobox` group).

```scss
@use 'sprucecss/scss/spruce' with (
  $colors: (
    'combobox': (
      'item-background': hsl(262deg 71% 98%),
      'item-foreground': hsl(262deg 71% 49%),
    ),
  ),
);
```

## Folder Structure

A simple structure for the copied components:

```text
scss/
├─ config/
│  └─ _config.scss      // the @use … with (…) configuration
├─ component/
│  ├─ _index.scss       // @forward every component
│  ├─ _pricing-card.scss
│  └─ _toast.scss
└─ main.scss            // @forward 'config'; @forward 'component'; + generate-styles
```

## JavaScript

Every new component's script is dependency-free vanilla JavaScript wrapped in an IIFE. Load it with `defer` (or bundle it); the scripts look for their `data-*` hooks, so they are safe to include on every page.
