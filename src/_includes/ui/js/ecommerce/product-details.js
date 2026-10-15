(() => {
  document.querySelectorAll('[data-product-details]').forEach((form) => {
    const variants = JSON.parse(form.dataset.variants || '{}');
    const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { style: 'currency', currency: form.dataset.currency || 'USD', maximumFractionDigits: 0 });
    const price = form.querySelector('[data-product-price]');
    const stock = form.querySelector('[data-product-stock]');
    const quantity = form.querySelector('[data-product-quantity]');
    const add = form.querySelector('[data-product-add]');
    const wishlist = form.querySelector('[data-product-wishlist]');
    const live = form.querySelector('[data-product-live]');

    const update = () => {
      // Show the selected value next to every option legend.
      form.querySelectorAll('.product-details__option').forEach((option) => {
        const checked = option.querySelector('input:checked');

        if (checked) {
          option.querySelector('[data-option-label]').textContent = checked.closest('label').textContent.trim();
        }
      });

      const variant = variants[form.elements.size.value];

      if (!variant) {
        return;
      }

      const low = variant.stock > 0 && variant.stock <= 5;

      price.textContent = format.format(variant.price);
      stock.textContent = variant.stock === 0 ? 'Sold out' : low ? `Only ${variant.stock} left in stock` : 'In stock, ready to ship';
      stock.classList.toggle('product-details__stock--low', low);
      stock.classList.toggle('product-details__stock--out', variant.stock === 0);
      quantity.max = variant.stock;
      quantity.value = Math.min(Number(quantity.value), Math.max(variant.stock, 1));
      add.disabled = variant.stock === 0;
      add.textContent = `Add to cart · ${format.format(variant.price * Number(quantity.value))}`;
    };

    form.addEventListener('change', update);
    form.addEventListener('input', update);

    form.addEventListener('submit', (event) => {
      // Add to the cart with your own request, then tell the mini cart (see the `cart:add` event).
      event.preventDefault();
      form.dispatchEvent(new CustomEvent('cart:add', { bubbles: true, detail: { data: new FormData(form) } }));
      live.textContent = `${quantity.value} × ${form.querySelector('.product-details__title').textContent} added to your cart.`;
    });

    wishlist.hidden = false;
    wishlist.addEventListener('click', () => {
      const pressed = wishlist.getAttribute('aria-pressed') !== 'true';

      wishlist.setAttribute('aria-pressed', String(pressed));
      live.textContent = pressed ? 'Saved to your wishlist.' : 'Removed from your wishlist.';
    });

    update();
  });
})();
