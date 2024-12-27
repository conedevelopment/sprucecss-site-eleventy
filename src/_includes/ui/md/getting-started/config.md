<p class="lead">You can find specific configs on this page needed to get the styling you see. It is mostly color and typography customizations.</p>

## _config.scss

```scss
@use 'sass:color';
@use 'dark-colors' as dark;

$color-primary: hsl(262deg 71% 49%);
$color-primary-lightest: hsl(262deg 71% 98%);
$color-danger: hsl(0deg 71% 51%);

@use 'sprucecss/scss/spruce' with (
  $colors: (
    'base': (
      'primary-lightest': $color-primary-lightest,
    ),
    'breadcrumb': (
      'separator': hsl(0deg 0% 80%),
    ),
    'btn': (
      'dark-background': hsl(205deg 100% 2%),
      'dark-background-hover': hsl(205deg 100% 5%),
      'dark-foreground': hsl(0deg 0% 100%),
      'dark-outline-border': hsl(260deg 4% 70%),
      'dark-outline-foreground': hsl(205deg 100% 2%),
      'dark-outline-foreground-hover': hsl(0deg 0% 100%),
      'dark-outline-background-hover': hsl(205deg 100% 2%),
      'dark-outline-focus-ring': hsl(205deg 100% 2%),
      'delete-background': color.adjust($color-danger, $lightness: 45%),
      'delete-background-hover': $color-danger,
      'delete-focus-ring': $color-danger,
      'delete-foreground': $color-danger,
      'delete-foreground-hover': hsl(0deg 0% 100%),
      'light-background': $color-primary-lightest,
      'light-background-hover': $color-primary,
      'light-focus-ring': $color-primary,
      'light-foreground': $color-primary,
      'light-foreground-hover': hsl(0deg 0% 100%),
      'pagination-background': hsl(263deg 40% 96%),
      'pagination-background-hover': $color-primary,
      'pagination-foreground': $color-primary,
      'pagination-foreground-hover': hsl(0deg 0% 100%),
      'pagination-focus-ring': $color-primary,
    ),
    'combobox': (
      'item-background': $color-primary-lightest,
      'item-foreground': $color-primary,
    ),
    'container': (
      'background': hsl(0deg 0% 95%),
    ),
    'invoice': (
      'background': hsl(234deg 100% 98%),
    ),
    'media': (
      'background': $color-primary-lightest,
      'dropzone-background': hsl(214deg 98% 49% / 75%),
      'dropzone-border': hsl(214deg 98% 40%),
      'icon': $color-primary,
    ),
    'modal': (
      'background': hsl(210deg 60% 98% / 90%),
    ),
    'navigation': (
      'icon-background': $color-primary-lightest,
      'icon-background-hover': $color-primary,
      'icon-foreground': $color-primary,
      'icon-foreground-hover': hsl(0deg 0% 100%),
    ),
    'tab': (
      'background': hsl(222deg 100% 98%),
    ),
    'search': (
      'icon': hsl(229deg 26% 48% / 25%),
    ),
  ),
  $dark-colors: dark.$colors,
);

```

## _dark-colors.scss

```scss
@use 'sass:color';

$dark-color-black: hsl(206deg 100% 7%);
$dark-color-danger: hsl(0deg 71% 51%);
$dark-color-gray: hsl(0deg 0% 97%);
$dark-color-gray-dark: hsl(0deg 0% 100% / 8%);
$dark-color-primary: hsl(261deg 54% 70%);
$dark-color-secondary: hsl(227deg 92% 55%);
$dark-color-success: hsl(150deg 100% 33%);
$dark-color-white: hsl(0deg 0% 95%);

$colors: (
  'base': (
    'background': $dark-color-black,
    'blockquote-border': $dark-color-primary,
    'border': $dark-color-gray-dark,
    'code-background': hsl(207deg 64% 18%),
    'code-foreground': $dark-color-white,
    'heading': $dark-color-white,
    'link': $dark-color-primary,
    'link-hover': color.scale($dark-color-primary, $lightness: 20%),
    'mark-background': hsl(50deg 100% 80%),
    'mark-foreground': $dark-color-black,
    'marker': $dark-color-primary,
    'primary': $dark-color-primary,
    'secondary': $dark-color-secondary,
    'strong': $dark-color-white,
    'text': $dark-color-gray,
  ),
  'breadcrumb': (
    'arrow': hsl(0deg 0% 100% / 0.1),
  ),
  'btn': (
    'dark-background': hsl(0deg 0% 100%),
    'dark-background-hover': hsl(0deg 0% 95%),
    'dark-foreground': hsl(205deg 100% 5%),
    'dark-outline-border': hsl(0 0% 100% / 15%),
    'dark-outline-foreground': hsl(0deg 0% 100%),
    'dark-outline-foreground-hover': hsl(205deg 100% 2%),
    'dark-outline-background-hover': hsl(0deg 0% 100%),
    'dark-outline-focus-ring': hsl(0deg 0% 100%),
    'pagination-background': hsl(207deg 97% 12%),
    'pagination-background-hover': hsl(261deg 52% 59%),
    'pagination-focus-ring': hsl(261deg 52% 59%),
    'pagination-foreground': hsl(0deg 0% 100%),
    'pagination-foreground-hover': hsl(0deg 0% 100%),
    'primary-background-hover': hsl(261deg 52% 65%),
    'primary-background': hsl(261deg 52% 59%),
    'primary-foreground': $dark-color-white,
    'primary-shadow': color.adjust($dark-color-primary, $lightness: -25%),
    'secondary-background': $dark-color-secondary,
    'secondary-background-hover': color.adjust($dark-color-secondary, $lightness: 5%),
    'secondary-foreground': $dark-color-white,
    'secondary-shadow': color.adjust($dark-color-secondary, $lightness: -20%),
  ),
  'container': (
    'background': hsl(207deg 92% 12%),
  ),
  'form': (
    'background': color.scale($dark-color-black, $lightness: 5%),
    'background-disabled': $dark-color-black,
    'border': $dark-color-gray-dark,
    'border-disabled': $dark-color-gray-dark,
    'border-focus': $dark-color-primary,
    'check-background': $dark-color-primary,
    'check-focus-ring': $dark-color-primary,
    'check-foreground': $dark-color-black,
    'invalid': $dark-color-danger,
    'invalid-focus-ring': color.adjust($dark-color-danger, $alpha: -0.75),
    'label': $dark-color-white,
    'legend': $dark-color-white,
    'placeholder': hsl(0deg 0% 60%),
    'range-thumb-background': $dark-color-primary,
    'range-thumb-focus-ring': $dark-color-primary,
    'range-track-background': $dark-color-gray-dark,
    'ring-focus': color.adjust($dark-color-primary, $alpha: -0.75),
    'select-foreground': hsl(0deg 0% 100%),
    'text': $dark-color-gray,
    'valid': $dark-color-success,
    'valid-focus-ring': color.adjust($dark-color-success, $alpha: -0.75),
  ),
  'invoice': (
    'background': hsl(234deg 49% 6%),
  ),
  'modal': (
    'background': hsl(206deg 100% 3% / 90%),
  ),
  'navigation': (
    'icon-background': hsl(206deg 100% 12%),
    'icon-background-hover': $dark-color-primary,
    'icon-foreground': $dark-color-primary,
    'icon-foreground-hover': hsl(206deg 100% 12%),
  ),
  'tab': (
    'background': hsl(240deg 3% 7% / 90%),
  ),
  'search': (
    'icon': hsl(0deg 0% 100% / 25%),
  ),
  'selection': (
    'background': $dark-color-primary,
    'foreground': $dark-color-white,
  ),
  'scrollbar': (
    'thumb-background': hsl(0deg 0% 100% / 15%),
    'thumb-background-hover':	hsl(0deg 0% 100% / 25%),
    'track-background':	hsl(0deg 0% 100% / 5%),
  ),
  'table': (
    'border': $dark-color-gray-dark,
    'caption': $dark-color-gray,
    'heading': $dark-color-white,
    'hover': hsl(0deg 0% 100% / 5%),
    'text': $dark-color-gray,
    'stripe': hsl(0deg 0% 100% / 2.5%),
  ),
);
```

## _dark-mode.scss

```scss
@use 'sprucecss/scss/spruce' as *;

@include generate-color-variables(
  $dark-colors,
  ':root[data-theme-mode="dark"]'
);

[data-theme-mode='dark'] {
  color-scheme: dark;

  select.form-control:not([multiple]):not([size]) {
    @include field-icon(
      config('select', $form-icon, false),
      color('select-foreground', 'form', true, $dark-colors)
    );
  }
}
```
