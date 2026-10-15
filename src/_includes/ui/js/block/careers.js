(() => {
  document.querySelectorAll('[data-careers]').forEach((block) => {
    const filter = block.querySelector('[data-careers-filter]');
    const count = block.querySelector('[data-careers-count]');
    const jobs = [...block.querySelectorAll('[data-team]')];

    filter.addEventListener('change', () => {
      let visible = 0;

      jobs.forEach((job) => {
        const isMatch = !filter.value || job.dataset.team === filter.value;

        job.hidden = !isMatch;
        visible += isMatch ? 1 : 0;
      });

      count.textContent = `${visible} open ${visible === 1 ? 'position' : 'positions'}`;
    });
  });
})();
