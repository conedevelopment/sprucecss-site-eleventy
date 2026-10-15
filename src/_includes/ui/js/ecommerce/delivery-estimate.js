(() => {
  const format = new Intl.DateTimeFormat(document.documentElement.lang || 'en', { weekday: 'long', month: 'short', day: 'numeric' });

  // Add business days (skipping the weekend) to a date.
  const addBusinessDays = (date, days) => {
    const result = new Date(date);
    let added = 0;

    while (added < days) {
      result.setDate(result.getDate() + 1);
      if (result.getDay() !== 0 && result.getDay() !== 6) added += 1;
    }

    return result;
  };

  document.querySelectorAll('[data-delivery-estimate]').forEach((section) => {
    const form = section.querySelector('[data-delivery-form]');
    const zip = form.elements.zip;
    const error = section.querySelector('[data-delivery-error]');
    const results = section.querySelector('[data-delivery-results]');
    const cutoff = section.querySelector('[data-delivery-cutoff]');
    const cutoffHour = Number(section.dataset.cutoff);

    // "Order within …" until the daily cut-off hour; after it, the orders ship a day later.
    const updateCutoff = () => {
      const now = new Date();
      const end = new Date(now);

      end.setHours(cutoffHour, 0, 0, 0);

      const minutes = Math.round((end - now) / 60000);

      cutoff.hidden = minutes <= 0 || now.getDay() === 0 || now.getDay() === 6;
      cutoff.innerHTML = `Order within <strong>${Math.floor(minutes / 60)} h ${minutes % 60} min</strong> to ship today.`;

      return minutes > 0;
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isValid = /^[0-9]{5}$/.test(zip.value.trim());

      error.hidden = isValid;
      zip.setAttribute('aria-invalid', String(!isValid));

      if (!isValid) {
        results.hidden = true;
        zip.focus();
        return;
      }

      const start = updateCutoff() ? new Date() : addBusinessDays(new Date(), 1);

      results.querySelectorAll('[data-delivery-days]').forEach((cell) => {
        const days = Number(cell.dataset.deliveryDays);

        cell.textContent = days === 0 ? 'Ready in 2 hours' : format.format(addBusinessDays(start, days));
      });
      results.hidden = false;
    });

    updateCutoff();
    setInterval(updateCutoff, 60000);
  });
})();
