<p class="lead">A modal dialog built on the native <code>dialog</code> element: it traps the focus, makes the rest of the page inert, closes with <kbd>Esc</kbd> and returns the focus to its opener, with a few lines of JavaScript.</p>

## Anatomy

- **A button with `data-modal-open="{id}"`** opens the modal.
- **`.modal`** is the `dialog` element, named by its title (`aria-labelledby`) and described by its subtitle (`aria-describedby`). `.modal--lg` makes it wider; any width works with `--inline-size`.
- **`.modal__form`** is a `form method="dialog"`: submitting it closes the dialog and sets its `returnValue` to the submit button's `value`.
- **`.modal__header`**, **`.modal__body`** and **`.modal__footer`** (with `--space-between`) structure the content. Every `[data-modal-close]` element closes it.

## Accessibility

- `showModal()` gives the hard parts for free: the focus moves into the dialog (to the `autofocus` field, or the first focusable element), the page behind becomes inert, and <kbd>Esc</kbd> closes it.
- When it closes, the browser returns the focus to the element that opened it.
- The close button has a visually hidden "Close" label; a click on the backdrop closes it too.
- Use a modal for focused tasks that block the page (confirmations, short forms). For long content or navigation, use the [Drawer](/ui/content-and-layout/drawer/) or a page.

## Technical Details

- No dependencies. The script only wires the openers, the backdrop click and the close buttons; the `close` event and `returnValue` tell you how it was closed (here, the form is reset and a `modal:submit` event fires).
- The open and close animations use `@starting-style` and `transition-behavior: allow-discrete`; browsers without them show the modal without the animation, and nothing animates with reduced motion.
- The page behind doesn't scroll while a modal is open (`html:has(.modal[open])`).
- The colors, the radius and the shadow come from the tokens; the old `modal` color group isn't needed any more.

## Usage

```js
const modal = document.getElementById('invite-modal');

modal.addEventListener('modal:submit', () => {
  // Send the form data to your back end.
});
```
