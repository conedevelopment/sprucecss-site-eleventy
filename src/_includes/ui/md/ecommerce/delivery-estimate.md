<p class="lead">A delivery box for the product page: an "order within" cut-off countdown, a ZIP code check and the estimated delivery date of each shipping option.</p>

## Anatomy

- **`.delivery-estimate__cutoff`**: the time left to ship today, shown until the daily cut-off hour (`data-cutoff`, 16 here) on weekdays.
- **`.delivery-estimate__form`**: the ZIP code field with an `__error`.
- **`.delivery-estimate__options`**: the shipping options with their estimated dates, in a polite live region.

## Accessibility and Usability

- The results are announced after the check, because they appear in a live region.
- The ZIP field opens the numeric keyboard (`inputmode="numeric"`), autofills (`autocomplete="postal-code"`) and explains the format in the error; the error is linked with `aria-describedby`, and the field gets `aria-invalid`.
- The dates are written out with the weekday ("Thursday, Oct 8"), which is easier to plan with than "in 3 days".
- The countdown is a static text that updates once a minute, not a live region: announcing every minute would be noise.

## Technical Details

- The script adds business days (skipping weekends) to today, or to the next business day after the cut-off. Use your carrier's API for real estimates, holidays included.
- The dates use `Intl.DateTimeFormat` with the page language.
- Without JavaScript, the form submits the ZIP code (`GET`), and the server can render the estimates.
