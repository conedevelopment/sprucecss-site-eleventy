<p class="lead">Office locations with photos, addresses, opening hours, phone numbers and directions.</p>

## Technical Details

- Addresses use the `address` element; phone numbers are `tel:` links.
- The directions link opens OpenStreetMap in a new tab and says so in its hidden text, together with the office name.
- The photos are decorative (empty `alt`), because the city name is right below.
- It combines the [Badge](/ui/misc/badge/) component for the office label.
- Override the content with `locationsBlock`.
