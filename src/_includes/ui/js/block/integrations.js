(() => {
  document.querySelectorAll('[data-integrations]').forEach((block) => {
    const search = block.querySelector('[data-integrations-search]');
    const count = block.querySelector('[data-integrations-count]');
    const empty = block.querySelector('[data-integrations-empty]');
    const items = [...block.querySelectorAll('[data-name]')];

    search.addEventListener('input', () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;

      items.forEach((item) => {
        const isMatch = item.dataset.name.includes(query);

        item.hidden = !isMatch;
        visible += isMatch ? 1 : 0;
      });

      count.textContent = `${visible} ${visible === 1 ? 'integration' : 'integrations'}`;
      empty.hidden = visible > 0;
    });
  });
})();
