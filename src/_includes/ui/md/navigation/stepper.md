<p class="lead">A progress indicator for multi-step flows like sign-up or checkout.</p>

## Technical Details

- It is a `nav` with an ordered list; the current step has `aria-current="step"`, and completed/current steps have hidden "Completed:"/"Current:" prefixes, because color and numbers alone don't convey the state.
- Vertical on small screens, horizontal from the `md` breakpoint, with connector lines drawn by `::after` using logical properties (RTL ready).
- Make completed steps links if users can go back to them.
