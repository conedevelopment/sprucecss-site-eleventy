(() => {
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  document.querySelectorAll('[data-data-table]').forEach((component) => {
    const tbody = component.querySelector('tbody');
    const rows = [...tbody.rows];
    const filter = component.querySelector('[data-table-filter]');
    const summary = component.querySelector('[data-table-summary]');
    const empty = component.querySelector('[data-table-empty]');

    component.querySelectorAll('[data-sort]').forEach((button) => {
      button.addEventListener('click', () => {
        const header = button.closest('th');
        const column = Number(button.dataset.sort);
        const isDate = button.dataset.type === 'date';
        const direction = header.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
        const modifier = direction === 'ascending' ? 1 : -1;

        component.querySelectorAll('th[aria-sort]').forEach((th) => th.setAttribute('aria-sort', 'none'));
        header.setAttribute('aria-sort', direction);

        rows
          .sort((a, b) => {
            const first = a.cells[column].textContent.trim();
            const second = b.cells[column].textContent.trim();

            return (isDate ? new Date(first) - new Date(second) : collator.compare(first, second)) * modifier;
          })
          .forEach((row) => tbody.append(row));
      });
    });

    filter?.addEventListener('input', () => {
      const query = filter.value.trim().toLowerCase();
      let visible = 0;

      rows.forEach((row) => {
        const isMatch = row.textContent.toLowerCase().includes(query);

        row.hidden = !isMatch;
        visible += isMatch ? 1 : 0;
      });

      summary.textContent = `${visible} ${visible === 1 ? 'person' : 'people'}`;
      empty.hidden = visible > 0;
    });
  });
})();
