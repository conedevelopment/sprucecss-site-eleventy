(() => {
  document.querySelectorAll('[data-activity-log]').forEach((log) => {
    const filter = log.querySelector('[data-activity-filter]');
    const items = [...log.querySelectorAll('[data-activity-type]')];
    const days = [...log.querySelectorAll('[data-activity-day]')];
    const empty = log.querySelector('[data-activity-empty]');
    const live = log.querySelector('[data-activity-live]');

    // The filter applies instantly, so the submit button (the no-JavaScript fallback) is not needed.
    log.querySelector('[data-activity-submit]').hidden = true;

    filter.addEventListener('change', () => {
      const type = filter.value;
      let visible = 0;

      items.forEach((item) => {
        item.hidden = type !== 'all' && item.dataset.activityType !== type;
        visible += item.hidden ? 0 : 1;
      });

      // Hide the days without a visible event.
      days.forEach((day) => {
        day.hidden = !day.querySelector('[data-activity-type]:not([hidden])');
      });

      empty.hidden = visible > 0;
      live.textContent = `${visible} ${visible === 1 ? 'event' : 'events'} shown.`;
    });
  });
})();
