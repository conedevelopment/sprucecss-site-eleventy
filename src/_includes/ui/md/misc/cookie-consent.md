<p class="lead">A minimal cookie consent banner with equal "Accept" and "Decline" choices, a category cookie that tells your code whether it may load analytics, and an opt-out button for your privacy page.</p>

## How It Works

The script differentiates two types of action at the consent banner:

- accept all types of cookies,
- decline them.

We place a session cookie when you decline them and ask for permission (again) next time.

If you accept them, we place the category cookie(s). In this case, `demo-gdpr-analytics`. We use this cookie to identify if we should load analytics-related cookies (like Google Analytics). You can set up any category.

To load your tracking codes, use the following snippet:

```js
if (
  Cookie.isset('demo-gdpr-analytics')
  && Cookie.get('demo-gdpr-analytics') === 'accepted'
) {
  console.log('ANALYTICS');
}
```

## Technical Details

- As you see in the example, we also included an opt-out button; this is just a button to turn on or off any cookie type. You usually want to place it on your privacy policy page.
- We handle everything from JS because, in some cases, the back-end cache can kill the cookies.
- We reload the page after an opt-in or opt-out action because this is the simplest way to load (or turn off) the related scripts.
- The banner is inserted at the start of the `body` as a labelled region ("Cookie consent"), so it's the first thing keyboard and screen reader users reach. It doesn't steal the focus on load: moving the focus without a user action is disorienting.
- "Accept" and "Decline" are both one click away and equally visible; hiding the decline option behind a settings page isn't allowed under the GDPR.
- The banner uses the surface, border and shadow tokens, so it follows the dark mode and every style. It slides in with `translate`, instantly with reduced motion.

## Dependencies

- [Qkie](https://github.com/conedevelopment/qkie), our tiny cookie helper. Change the import path in the script to where you keep it.
