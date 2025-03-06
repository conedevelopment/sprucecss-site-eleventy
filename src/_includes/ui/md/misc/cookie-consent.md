<p class="lead">This component is one of the most basic implementations of the cookie consent banner.</p>

## How It Works

The script differentiates two types of action at the consent banner:

- accept all types of cookies,
- decline them.

We place a session cookie when you decline them and ask for permission (again) next time.

If you accept them, we place the category cookie(s). In this case, `demo-gdpr-analytics`. We use this cookie to identify if we should load analytics-related cookies (like Google Analytics). You can set up any category.

To load your tracking codes, use the following snippet:

```scss
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
- We insert the consent banner right after the opening body and set a focus on it.

## Dependencies

- [For handling the cookies we use Qkie](https://github.com/conedevelopment/qkie).
