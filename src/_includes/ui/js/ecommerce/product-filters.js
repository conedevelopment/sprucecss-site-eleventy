(() => {
  document.querySelectorAll('[data-product-filters]').forEach((form) => {
    const active = form.querySelector('[data-filter-active]');
    const submit = form.querySelector('[data-filter-submit]');
    const live = form.querySelector('[data-filter-live]');
    const price = form.querySelector('[data-price-range]');
    const rangeMin = price.querySelector('[data-range-min]');
    const rangeMax = price.querySelector('[data-range-max]');
    const inputMin = price.querySelector('[data-input-min]');
    const inputMax = price.querySelector('[data-input-max]');
    const limit = { min: Number(rangeMin.min), max: Number(rangeMin.max), step: Number(rangeMin.step) };
    const money = (value) => `$${value}`;
    let timer = null;

    // Keep min <= max and sync the sliders, the number fields and the filled track.
    const setPrice = (min, max) => {
      min = Math.max(limit.min, Math.min(Number(min), limit.max - limit.step));
      max = Math.min(limit.max, Math.max(Number(max), min + limit.step));

      rangeMin.value = inputMin.value = min;
      rangeMax.value = inputMax.value = max;
      price.style.setProperty('--from', `${((min - limit.min) / (limit.max - limit.min)) * 100}%`);
      price.style.setProperty('--to', `${((max - limit.min) / (limit.max - limit.min)) * 100}%`);
    };

    const filters = () => [...form.querySelectorAll('[data-filter-label]:checked')];

    // A rough estimate for the demo; ask your back-end for the real number.
    const estimate = () => {
      const checked = (name) => [...form.querySelectorAll(`[name="${name}"]:checked`)];
      const categories = checked('category');
      const base = categories.length
        ? categories.reduce((sum, input) => sum + Number(input.dataset.count), 0)
        : [...form.querySelectorAll('[name="category"]')].reduce((sum, input) => sum + Number(input.dataset.count), 0);
      const share = (name) => checked(name).length ? checked(name).length / form.querySelectorAll(`[name="${name}"]`).length : 1;
      const priceShare = (inputMax.value - inputMin.value) / (limit.max - limit.min);

      return Math.round(base * share('color') * share('size') * priceShare * (form.elements.in_stock.checked ? 0.8 : 1));
    };

    const chip = (label, onRemove) => {
      const item = document.createElement('li');
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'product-filters__chip';
      button.innerHTML = '<span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>';
      button.firstChild.textContent = label;
      button.setAttribute('aria-label', `Remove filter: ${label}`);
      button.addEventListener('click', () => {
        const index = [...active.children].indexOf(item);

        onRemove();
        update();
        // The chips are rendered again: focus the one that took this place, or the "Clear all" link.
        const target = active.children[Math.min(index, active.children.length - 1)];
        (target?.querySelector('button') || form.querySelector('[data-filter-clear]')).focus();
      });
      item.append(button);

      return item;
    };

    const update = () => {
      const chips = filters().map((input) => chip(input.dataset.filterLabel, () => { input.checked = false; }));

      if (Number(inputMin.value) > limit.min || Number(inputMax.value) < limit.max) {
        chips.push(chip(`${money(inputMin.value)} – ${money(inputMax.value)}`, () => setPrice(limit.min, limit.max)));
      }

      active.replaceChildren(...chips);
      active.hidden = chips.length === 0;

      const count = estimate();
      submit.textContent = `Show ${count} ${count === 1 ? 'result' : 'results'}`;

      clearTimeout(timer);
      timer = setTimeout(() => { live.textContent = `${count} products match the filters.`; }, 500);
    };

    // The sliders need JavaScript; the number fields work without it.
    price.querySelector('.product-filters__range').hidden = false;

    rangeMin.addEventListener('input', () => setPrice(rangeMin.value, Math.max(rangeMax.value, Number(rangeMin.value) + limit.step)));
    rangeMax.addEventListener('input', () => setPrice(Math.min(rangeMin.value, Number(rangeMax.value) - limit.step), rangeMax.value));
    [inputMin, inputMax].forEach((input) => input.addEventListener('change', () => setPrice(inputMin.value, inputMax.value)));

    form.addEventListener('input', update);
    form.addEventListener('change', update);

    form.querySelector('[data-filter-clear]').addEventListener('click', (event) => {
      event.preventDefault();
      filters().forEach((input) => { input.checked = false; });
      setPrice(limit.min, limit.max);
      update();
    });

    setPrice(inputMin.value, inputMax.value);
    update();
  });
})();
