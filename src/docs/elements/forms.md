---
title: "Forms"
description: "Spruce CSS comes with overall form support for styling the different native elements."
order: 22
github: "https://github.com/conedevelopment/sprucecss-site-eleventy/blob/main/src/docs/elements/forms.md"
---

<p class="lead">Spruce CSS comes with overall form support for styling the different native elements. Also, it has some form layout helpers.</p>

We differentiate the following groups for styling:
- the `form-control` class is used for input (not radio, checkbox, range, or file), textarea, select elements,
- the `form-check` is used for radio and checkbox,
- the `form-switch` is used for switch-styled checkboxes,
- the `form-range` is used for range typed input,
- the `form-file` is used for file typed input.

## Input

Use the `form-control` class on the input (that doesn’t have the type of radio, checkbox, or range) and `form-label` on the label elements to apply the formatting.

Wrap the label and the input into `form-group` elements to control the two’s margin.

You can set two additional sizes with `form-control--sm` and `form-control--lg` modifier class.

[Form-control related variables.](/docs/sass/variables#control)

{% preview %}
<div class="form-group">
    <label class="form-label" for="your-name">Name</label>
    <input class="form-control" id="your-name" name="your-name" type="text"/>
</div>
<div class="form-group">
    <label class="form-label" for="your-email">Email</label>
    <input class="form-control" id="your-email" name="your-email" type="email"/>
</div>
<div class="form-group">
    <label class="form-label" for="your-birthday">Birthday</label>
    <input class="form-control" id="your-birthday" name="your-birthday" type="date"/>
</div>
<div class="form-group">
    <label class="form-label" for="your-color">Your favorite color</label>
    <input class="form-control" id="your-color" name="your-color" type="color" value="#6524d6"/>
</div>
{% endpreview %}

```html
<div class="form-group">
    <label class="form-label" for="your-name">Name</label>
    <input class="form-control" id="your-name" name="your-name" type="text"/>
</div>
<div class="form-group">
    <label class="form-label" for="your-email">Email</label>
    <input class="form-control" id="your-email" name="your-email" type="email"/>
</div>
<div class="form-group">
    <label class="form-label" for="your-birthday">Birthday</label>
    <input class="form-control" id="your-birthday" name="your-birthday" type="date"/>
</div>
<div class="form-group">
    <label class="form-label" for="your-color">Your favorite color</label>
    <input class="form-control" id="your-color" name="your-color" type="color" value="#6524d6"/>
</div>
```

## File

Use the `form-file` class on an `input[type="file"]` to natively style the file input.

- You can size the input with `form-file--sm` and `form-file--lg`.
- The styling is the same as the `.btn`.
- The focus state differs from the button because we can’t set box-shadow (it will be cut down).

[Form-file related variables.](/docs/sass/variables#file)

{% preview %}
<fieldset>
    <legend>File Inputs</legend>
    <div class="form-group">
        <label class="form-label" for="avatar-lg">Avatar (Large)</label>
        <input class="form-file form-file--lg" type="file" id="avatar-lg" accept="image/png, image/jpeg"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="avatar">Avatar</label>
        <input class="form-file" type="file" id="avatar" accept="image/png, image/jpeg"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="files">Files</label>
        <input class="form-file form-file--sm" type="file" id="files" multiple="multiple" accept="image/png, image/jpeg"/>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>File Inputs</legend>
    <div class="form-group">
        <label class="form-label" for="avatar-lg">Avatar (Large)</label>
        <input class="form-file form-file--lg" type="file" id="avatar-lg" accept="image/png, image/jpeg"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="avatar">Avatar</label>
        <input class="form-file" type="file" id="avatar" accept="image/png, image/jpeg"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="files">Files</label>
        <input class="form-file form-file--sm" type="file" id="files" multiple="multiple" accept="image/png, image/jpeg"/>
    </div>
</fieldset>
```

## Range

Use the `form-range` class on an `input[type="range"]` to natively style the range input.

- You can size the input with `form-range--sm` and `form-range--lg`.

[Form-range related variables.](/docs/sass/variables#range)

{% preview %}
<fieldset>
    <legend>Range</legend>
    <div class="form-group">
        <label class="form-label" for="rating">Your Rating</label>
        <input class="form-range form-range--lg" type="range" id="rating" min="-10" max="10"/>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Range</legend>
    <div class="form-group">
        <label class="form-label" for="rating">Your Rating</label>
        <input class="form-range form-range--lg" type="range" id="rating" min="-10" max="10"/>
    </div>
</fieldset>
```

## Textarea

Use the `form-control` class on any textarea element to style it. To set the global height of it use the <code><a href="/docs/sass/variables#control">config('textarea-block-size', $form-control)</a></code> variable.

{% preview %}
<div class="form-group">
    <label class="form-label" for="your-message">Your Message</label>
    <textarea class="form-control" id="your-message" name="your-message" placeholder="Write your message..." rows="4"></textarea>
</div>
{% endpreview %}

```html
<div class="form-group">
    <label class="form-label" for="your-message">Your Message</label>
    <textarea class="form-control" id="your-message" name="your-message" placeholder="Write your message..." rows="4"></textarea>
</div>
```

## Select

Use the `form-control` class on any select element to style it. Use the `multiple` attributes for multiple option selection.

[Select related variables.](/docs/sass/variables#select)

{% preview %}
<div class="form-group">
    <label class="form-label" for="front-end-frameworks">Front-end Frameworks</label>
    <select class="form-control" id="front-end-frameworks">
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
        <option value="ember">Ember</option>
    </select>
</div>
<div class="form-group">
    <label class="form-label" for="front-end-frameworks-multiple">Front-end Frameworks (Multiple)</label>
    <select class="form-control" id="front-end-frameworks-multiple" multiple="multiple">
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
        <option value="ember">Ember</option>
    </select>
</div>
{% endpreview %}

```html
<div class="form-group">
    <label class="form-label" for="front-end-frameworks">Front-end Frameworks</label>
    <select class="form-control" id="front-end-frameworks">
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
        <option value="ember">Ember</option>
    </select>
</div>
<div class="form-group">
    <label class="form-label" for="front-end-frameworks-multiple">Front-end Frameworks (Multiple)</label>
    <select class="form-control" id="front-end-frameworks-multiple" multiple="multiple">
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
        <option value="ember">Ember</option>
    </select>
</div>
```

## Radio

For styling radio elements, use the `form-check` class on the label element and place the `input` (with the `form-check__control` class) and `span` (with the `form-check__label` class) inside it.

- Use the `form-group--vertical-check` modifier class to align the group vertically,
- and the `form-group--horizontal-check` to align horizontally.

You can set two additional sizes with `form-check--sm` and `form-check--lg` modifier class.

[Check related variables.](/docs/sass/variables#check)

{% preview %}
<fieldset>
    <legend>Radio (Vertical)</legend>
    <div class="form-group form-group--vertical-check">
        <label class="form-check">
            <input class="form-check__control" type="radio" value="react" name="radio-example-vertical"/>
            <span class="form-label form-check__label">React</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="vue" name="radio-example-vertical" disabled="disabled"/>
            <span class="form-label form-check__label">Vue</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="svelte" name="radio-example-vertical"/>
            <span class="form-label form-check__label">Svelte</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="ember" name="radio-example-vertical"/>
            <span class="form-label form-check__label">Ember</span>
        </label>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Radio (Vertical)</legend>
    <div class="form-group form-group--vertical-check">
        <label class="form-check">
            <input class="form-check__control" type="radio" value="react" name="radio-example-vertical"/>
            <span class="form-label form-check__label">React</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="vue" name="radio-example-vertical" disabled="disabled"/>
            <span class="form-label form-check__label">Vue</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="svelte" name="radio-example-vertical"/>
            <span class="form-label form-check__label">Svelte</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="ember" name="radio-example-vertical"/>
            <span class="form-label form-check__label">Ember</span>
        </label>
    </div>
</fieldset>
```

{% preview %}
<fieldset>
    <legend>Radio (Horizontal)</legend>
    <div class="form-group form-group--horizontal-check">
        <label class="form-check">
            <input class="form-check__control" type="radio" value="react" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">React</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="vue" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">Vue</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="svelte" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">Svelte</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="ember" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">Ember</span>
        </label>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Radio (Horizontal)</legend>
    <div class="form-group form-group--horizontal-check">
        <label class="form-check">
            <input class="form-check__control" type="radio" value="react" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">React</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="vue" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">Vue</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="svelte" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">Svelte</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="radio" value="ember" name="radio-example-horizontal"/>
            <span class="form-label form-check__label">Ember</span>
        </label>
    </div>
</fieldset>
```

## Checkbox

Use the `form-check` class on the label element for styling checkbox elements and place the input (with the `form-check__control` class) and span (with the `form-check__label` class) inside it.  You can also display an indeterminate state programmatically.

{% preview %}
<fieldset>
    <legend>Checkbox</legend>
    <div class="form-group form-group--vertical-check">
        <label class="form-check">
            <input class="form-check__control" type="checkbox" id="indeterminate" value="react" name="checkbox-example"/>
            <span class="form-label form-check__label">React</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="checkbox" value="vue" name="checkbox-example" disabled="disabled"/>
            <span class="form-label form-check__label">Vue</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="checkbox" value="svelte" name="checkbox-example"/>
            <span class="form-label form-check__label">Svelte</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="checkbox" value="ember" name="checkbox-example"/>
            <span class="form-label form-check__label">Ember</span>
        </label>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Which one of you like?</legend>
    <div class="form-group form-group--vertical-check">
        <label class="form-check">
            <input class="form-check__control" type="checkbox" value="own" name="property-ownership2"/>
            <span class="form-label form-check__label">Own</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="checkbox" value="rent" name="property-ownership2" disabled="disabled"/>
            <span class="form-label form-check__label">Rent</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" type="checkbox" value="misc" name="property-ownership2"/>
            <span class="form-label form-check__label">Misc</span>
        </label>
        <label class="form-check">
            <input class="form-check__control" id="indeterminate" type="checkbox" value="misc" name="property-ownership2"/>
            <span class="form-label form-check__label">Indeterminate</span>
        </label>
    </div>
</fieldset>
```
Using the`config('vertical-alignment', $form-control)` variable, you can control the checkbox and radio input's vertical alignment. Also, with the additional `.form-check--vertical-start` and `.form-check--vertical--center` you can do it individually.

{% preview %}
<fieldset>
    <legend>Checkbox Alignment</legend>
    <div class="form-group form-group--vertical-check">
        <label class="form-check form-check--vertical-center">
            <input class="form-check__control" type="checkbox" id="indeterminate" value="long-1" name="checkbox-long"/>
            <span class="form-label form-check__label">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sit amet sapien libero. Aenean tristique sed ligula nec tempor. In turpis nisi, rhoncus at urna sed, imperdiet imperdiet orci.</span>
        </label>
        <label class="form-check form-check--vertical-start">
            <input class="form-check__control" type="checkbox" value="long-2" name="checkbox-long"/>
            <span class="form-label form-check__label">Pellentesque lectus risus, ornare a gravida in, egestas euismod urna. Nullam rhoncus nisi sit amet quam accumsan, blandit tempor sem tristique. Mauris tempor quam sagittis tristique facilisis. Donec aliquet ac nisi eget facilisis.</span>
        </label>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Checkbox Alignment</legend>
    <div class="form-group form-group--vertical-check">
        <label class="form-check form-check--vertical-center">
            <input class="form-check__control" type="checkbox" id="indeterminate" value="long-1" name="checkbox-long"/>
            <span class="form-label form-check__label">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sit amet sapien libero. Aenean tristique sed ligula nec tempor. In turpis nisi, rhoncus at urna sed, imperdiet imperdiet orci.</span>
        </label>
        <label class="form-check form-check--vertical-start">
            <input class="form-check__control" type="checkbox" value="long-2" name="checkbox-long"/>
            <span class="form-label form-check__label">Pellentesque lectus risus, ornare a gravida in, egestas euismod urna. Nullam rhoncus nisi sit amet quam accumsan, blandit tempor sem tristique. Mauris tempor quam sagittis tristique facilisis. Donec aliquet ac nisi eget facilisis.</span>
        </label>
    </div>
</fieldset>
```

## Switch

The switch is a styled checkbox. Use the `form-switch` class to display it.

You can set two additional sizes with `form-switch--sm` and `form-switch--lg` modifier class.

[Switch related variables.](/docs/sass/variables#switch)

{% preview %}
<div class="form-group form-group--vertical-check">
    <label class="form-switch form-switch--sm">
        <span class="form-label form-switch__label">Enable notifications</span>
        <input class="form-switch__control" type="checkbox" value="true"/>
    </label>
    <label class="form-switch form-switch--vertical-start">
        <input class="form-switch__control" type="checkbox" value="true"/>
        <span class="form-label form-switch__label">Nulla egestas dui ac quam vulputate, in iaculis elit semper. Nullam vel dapibus nisl. Integer efficitur leo quis tincidunt fermentum. Aliquam erat volutpat. Duis condimentum maximus mi ut porta. In luctus ac sapien eget rutrum.</span>
    </label>
    <label class="form-switch">
        <input class="form-switch__control" type="checkbox" value="true"/>
        <span class="form-label form-switch__label">Enable notifications</span>
    </label>
    <label class="form-switch form-switch--lg form-switch--block">
        <span class="form-label form-switch__label">Enable notifications</span>
        <input class="form-switch__control" type="checkbox" value="true"/>
    </label>
    <label class="form-switch form-switch--lg form-switch--block">
        <input class="form-switch__control" type="checkbox" value="true" disabled="disabled"/>
        <span class="form-label form-switch__label">Enable notifications</span>
    </label>
</div>
{% endpreview %}

```html
<div class="form-group form-group--vertical-check">
    <label class="form-switch form-switch--sm">
        <span class="form-label form-switch__label">Enable notifications</span>
        <input class="form-switch__control" type="checkbox" value="true"/>
    </label>
    <label class="form-switch form-switch--vertical-start">
        <input class="form-switch__control" type="checkbox" value="true"/>
        <span class="form-label form-switch__label">Nulla egestas dui ac quam vulputate, in iaculis elit semper. Nullam vel dapibus nisl. Integer efficitur leo quis tincidunt fermentum. Aliquam erat volutpat. Duis condimentum maximus mi ut porta. In luctus ac sapien eget rutrum.</span>
    </label>
    <label class="form-switch">
        <input class="form-switch__control" type="checkbox" value="true"/>
        <span class="form-label form-switch__label">Enable notifications</span>
    </label>
    <label class="form-switch form-switch--lg form-switch--block">
        <span class="form-label form-switch__label">Enable notifications</span>
        <input class="form-switch__control" type="checkbox" value="true"/>
    </label>
    <label class="form-switch form-switch--lg form-switch--block">
        <input class="form-switch__control" type="checkbox" value="true" disabled="disabled"/>
        <span class="form-label form-switch__label">Enable notifications</span>
    </label>
</div>
```

## Fieldset

You can use `fieldset` and `legend` elements to group more fields and set a vertical margin between them.

{% preview %}
<fieldset>
    <legend>Your Name</legend>
    <div class="form-group">
        <label class="form-label" for="first-name">First Name</label>
        <input class="form-control" id="first-name" name="first-name" type="text"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="last-name">Last Name</label>
        <input class="form-control" id="last-name" name="last-name" type="text"/>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Your Name</legend>
    <div class="form-group">
        <label class="form-label" for="first-name">First Name</label>
        <input class="form-control" id="first-name" name="first-name" type="text"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="last-name">Last Name</label>
        <input class="form-control" id="last-name" name="last-name" type="text"/>
    </div>
</fieldset>
```

## Description

Use the `form-description` class to create a description text under an input element.

{% preview %}
<div class="form-group">
    <label class="form-label" for="first-name-2">First Name</label>
    <input class="form-control" id="first-name-2" name="first-name-2" type="text" aria-describedby="first-name-description"/>
    <span id="first-name-description" class="form-description">Just a help text for presentation purposes.</span>
</div>
{% endpreview %}

```html
<div class="form-group">
    <label class="form-label" for="first-name-2">First Name</label>
    <input class="form-control" id="first-name-2" name="first-name-2" type="text" aria-describedby="first-name-description"/>
    <span id="first-name-description" class="form-description">Just a help text for presentation purposes.</span>
</div>
```

## Validation

You can set valid and invalid states on `form-control` elements using the `form-control--valid` and `form-control--invalid` class modifiers.

Also, you can display separate messages using the `field-feedback` class and its modifiers:
- `field-feedback--valid` for valid state,
- `field-feedback--invalid` for invalid state.

{% preview %}
<fieldset>
    <legend>Address</legend>
    <div class="form-group">
        <label class="form-label" for="street-address-validation">Street Address</label>
        <input class="form-control form-control--valid" id="street-address-validation" name="street-address-validation" type="text" placeholder="Your street address..."/>
        <span class="field-feedback field-feedback--valid">Looks fine</span>
    </div>
    <div class="form-group">
        <label class="form-label" for="city-validation">City</label>
        <input class="form-control form-control--invalid" id="city-validation" name="city-validation" type="text"/>
        <span class="field-feedback field-feedback--invalid">Not that fine</span>
    </div>
</fieldset>
{% endpreview %}

## Disabled

Using the `disabled` attribute, you can create disabled state on inputs.

{% preview %}
<div class="form-group">
    <label class="form-label" for="your-name-disabled">Name</label>
    <input class="form-control" id="your-name-disabled" name="your-name-disabled" type="text" disabled/>
</div>
<div class="form-group">
    <label class="form-label" for="front-end-frameworks-disabled">Front-end Frameworks</label>
    <select class="form-control" id="front-end-frameworks-disabled" disabled>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
        <option value="ember">Ember</option>
    </select>
</div>
{% endpreview %}

## Form Group

Form-group is the generic container class for form elements. Besides the basic implementations, you can use the following:
- `form-group`: to group a label and an input element.
- `form-group--vertical-check`: to stack the radio, checkbox, and switches vertically.
- `form-group--horizontal-check`: to stack the radio, checkbox, and switches horizontally.
- `form-group--row`: to align the label to the left side of the group. This layout using `@container` so you also need a wrapper with the `form-group-container` class like in the example.
- `form-group--stacked`: to stack the inputs beside each other.

{% preview %}
<fieldset class="form-group-container">
    <legend>Form Group Row</legend>
    <div class="form-group--row">
        <label class="form-label" for="first-name-row">First Name</label>
        <input class="form-control" id="first-name-row" type="text"/>
        <span class="form-description">Just a help text for presentation purpose</span>
    </div>
    <div class="form-group--row">
        <label class="form-label" for="front-end-frameworks-row">Front-end Frameworks</label>
        <select class="form-control" id="front-end-frameworks-row">
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="svelte">Svelte</option>
            <option value="ember">Ember</option>
        </select>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset class="form-group-container">
    <legend>Form Group Row</legend>
    <div class="form-group--row">
        <label class="form-label" for="first-name-row">First Name</label>
        <input class="form-control" id="first-name-row" type="text"/>
        <span class="form-description">Just a help text for presentation purpose</span>
    </div>
    <div class="form-group--row">
        <label class="form-label" for="front-end-frameworks-row">Front-end Frameworks</label>
        <select class="form-control" id="front-end-frameworks-row">
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="svelte">Svelte</option>
            <option value="ember">Ember</option>
        </select>
    </div>
</fieldset>
```

{% preview %}
<fieldset>
    <legend>Form Group Stacked</legend>
    <div class="form-group--stacked">
        <input class="form-control" type="text" aria-label="First Name"/>
        <input class="form-control" type="text" aria-label="Last Name"/>
    </div>
    <div class="form-group--stacked">
        <input class="form-control" type="text" aria-label="First Name"/>
        <input class="form-control" type="text" aria-label="Last Name"/>
        <button class="btn btn--primary">Submit</button>
    </div>
</fieldset>
{% endpreview %}

```html
<fieldset>
    <legend>Form Group Stacked</legend>
    <div class="form-group--stacked">
        <input class="form-control" type="text" aria-label="First Name"/>
        <input class="form-control" type="text" aria-label="Last Name"/>
    </div>
    <div class="form-group--stacked">
        <input class="form-control" type="text" aria-label="First Name"/>
        <input class="form-control" type="text" aria-label="Last Name"/>
        <button class="btn btn--primary">Submit</button>
    </div>
</fieldset>
```

## Group Label

Add custom prefix or suffix "labels" to a form group (probably you want to use this with `.form-group--stacked`).

{% preview %}
<div class="form-group--row">
    <label class="form-label" for="product-price">Price</label>
    <div class="form-group--stacked">
        <div class="form-group-label">$</div>
        <input class="form-control" id="product-price" name="product-price" type="text"/>
        <div class="form-group-label">.00</div>
    </div>
</div>
{% endpreview %}

```html
<div class="form-group--row">
    <label class="form-label" for="product-price">Price</label>
    <div class="form-group--stacked">
        <div class="form-group-label">$</div>
        <input class="form-control" id="product-price" name="product-price" type="text">
        <div class="form-group-label">.00</div>
    </div>
</div>
```

## Row

You can create a row stack using `form-row--mixed` class. It uses flexbox and automatically sets the columns based on the `--inline-size` custom property.

{% preview %}
<div class="form-row--mixed">
    <div class="form-group" style="--inline-size: 30ch;">
        <label class="form-label" for="city">City</label>
        <input class="form-control" id="city" name="city" type="text"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="state">State</label>
        <input class="form-control" id="state" name="state" type="text"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="zip">Zip</label>
        <input class="form-control" id="zip" name="zip" type="text"/>
    </div>
</div>
{% endpreview %}

```html
<div class="form-row--mixed">
    <div class="form-group" style="--inline-size: 30ch">
        <label class="form-label" for="city">City</label>
        <input class="form-control" id="city" name="city" type="text"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="state">State</label>
        <input class="form-control" id="state" name="state" type="text"/>
    </div>
    <div class="form-group">
        <label class="form-label" for="zip">Zip</label>
        <input class="form-control" id="zip" name="zip" type="text"/>
    </div>
</div>
```
