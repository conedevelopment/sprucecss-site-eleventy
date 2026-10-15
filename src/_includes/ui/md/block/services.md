<p class="lead">A freelancer's or studio's services as a clear, numbered price list: what each service is, what you get, how long it takes and where the price starts.</p>

## Technical Details

- The services are an ordered list; the big numbers are decorative (`aria-hidden`), the list itself carries the order.
- Every service has an `h3`, a deliverables list labelled "Deliverables" and a description list for the duration and the starting price.
- On wide screens a service is one row with four columns; on narrow screens the details move under the title.
- The block has `id="services"`, so the navigation can link to it.
- Override the content with `servicesBlock`.
