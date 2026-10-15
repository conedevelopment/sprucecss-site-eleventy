<p class="lead">A portfolio's selected work: one large row per project with the image, the client and the year, the story in one sentence, the role and the result in one number.</p>

## Technical Details

- It combines the [Badge](/ui/misc/badge/) for the roles; load its stylesheet too.
- The projects are an ordered list of `article`s labelled by their titles. The whole row is clickable with the `a11y-card-link()` mixin, but only the title is a link; the "Read the case study" line is decorative (`aria-hidden`), so the link isn't repeated.
- On wide screens every second project has the image on the other side (`order`, no duplicated markup), and keyboard focus outlines the image too.
- The arrow mirrors and moves the other way in RTL; the hover motion runs only when the user doesn't prefer reduced motion.
- The block has `id="work"`, so the hero can link to it.
- Override the content with `projectsBlock`.
