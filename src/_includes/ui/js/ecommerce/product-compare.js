(() => {
  document.querySelectorAll('[data-product-compare]').forEach((compare) => {
    const table = compare.querySelector('table');
    const toggle = compare.querySelector('[data-compare-differences]');
    const checkbox = toggle.querySelector('input');
    const live = compare.querySelector('[data-compare-live]');

    // A row is "the same" when every product has the same value.
    const markRows = () => {
      table.querySelectorAll('[data-compare-row]').forEach((row) => {
        const values = [...row.querySelectorAll('td')].map((cell) => cell.textContent.trim());
        row.toggleAttribute('data-same', new Set(values).size <= 1);
      });
    };

    const filterRows = () => {
      table.querySelectorAll('[data-compare-row]').forEach((row) => {
        row.hidden = checkbox.checked && row.hasAttribute('data-same');
      });
    };

    toggle.hidden = false;
    checkbox.addEventListener('change', () => {
      filterRows();
      const hidden = table.querySelectorAll('[data-compare-row][hidden]').length;
      live.textContent = checkbox.checked ? `${hidden} identical ${hidden === 1 ? 'row' : 'rows'} hidden.` : 'All rows shown.';
    });

    table.querySelectorAll('[data-compare-remove]').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => {
        const header = button.closest('th');
        const index = header.cellIndex;
        const name = header.querySelector('.product-compare__name').textContent;
        const columns = table.querySelectorAll('[data-compare-column]').length;

        if (columns <= 2) {
          live.textContent = 'Keep at least two products to compare.';
          return;
        }

        table.querySelectorAll('tr').forEach((row) => row.cells[index].remove());
        table.querySelector('caption').textContent = `Comparison of ${columns - 1} backpacks; the products are in the columns`;
        markRows();
        filterRows();
        live.textContent = `${name} removed from the comparison.`;
        table.querySelector('[data-compare-remove]').focus();
      });
    });

    markRows();
  });
})();
