<p class="lead">An onboarding checklist that guides new users through the setup: a progress bar and expandable steps with a call to action each.</p>

## Anatomy

- **`.setup-checklist__header`**: the title, the progress text and an optional dismiss button.
- **`.setup-checklist__progress`**: a native `progress` element labelled by the progress text.
- **`.setup-checklist__step`**: a `details` element; the `summary` holds the check `__marker`, the `__step-title` and the hidden `__state`. Completed steps have the `data-done` attribute.

## Accessibility and Usability

- The steps are an ordered list of native `details` elements: they open with the keyboard and screen readers announce them as expandable, without any ARIA.
- The `name` attribute on the `details` elements makes them an **exclusive accordion** (only one is open at a time) in modern browsers; older browsers just allow several open steps.
- The completion state is hidden text in the summary ("Add your first product, Completed"); the check mark and the strikethrough are visual only.
- Marking a step as done announces the new progress and moves the focus to the next open step.

## Technical Details

- Without JavaScript, the list, the progress and the links work; the script reveals the "Mark as done" and dismiss buttons.
- In a real app, mark the steps done on the server when the task is finished (when a product exists, `data-done` is printed). The manual toggle is for steps you can't detect.
- The dismiss button hides the card and dispatches a `setup:dismiss` event; save the choice so the card stays hidden.
