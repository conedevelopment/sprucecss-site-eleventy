---
title: 'Skip Link'
order: 36
previewURL: 'https://ui.sprucecss.com/html/misc/skip-link-preview.html'
previewHeight: '20rem'
---

<p class="lead">A skip link is a practical way of navigating with the keyboard. Usually, one is always needed to jump through your site’s header navigation to the main content (using an anchor).</p>

In this example, we aren’t using any visual styling; we use the buttons of Spruce CSS.

<Notification type="info">Please, note that in this example, the click (and enter) is disabled, so you won’t see it working correctly.</Notification>

## Technical Details

- The skip link should be the first element inside your `<body>`.
- Set up an ID on the element (usually on the `<main>`) where you want to navigate to (skip to).
- You can use multiple skip links but don’t overdo it. A good example of it is the [Google search page](https://www.google.com/search?q=a11y&oq=a11y&aqs=chrome..69i57j0i512j46i512j0i512l7.834j0j15&sourceid=chrome&ie=UTF-8).
- As with anything accessibility-related, test [with your target browsers](https://css-tricks.com/how-to-create-a-skip-to-content-link/#comment-1755109).

## Resources

- [How to Create a “Skip to Content” Link](https://css-tricks.com/how-to-create-a-skip-to-content-link/)
- [Bypass Blocks: Understanding SC 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
