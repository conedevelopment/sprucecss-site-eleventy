/* global Chart */
(() => {
  // Chart.js must be loaded before this script: https://www.chartjs.org/docs/latest/getting-started/installation.html
  if (typeof Chart === 'undefined') {
    return;
  }

  const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });

  // Turn any CSS color (custom properties, color-mix(), oklch()) into rgba(), which Chart.js can parse.
  const toRgba = (value, alpha = 1) => {
    probe.clearRect(0, 0, 1, 1);
    probe.fillStyle = 'transparent';
    probe.fillStyle = value;
    probe.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = probe.getImageData(0, 0, 1, 1).data;

    return `rgba(${r}, ${g}, ${b}, ${Math.round((a / 255) * alpha * 100) / 100})`;
  };

  // Read the data from the table: the row headers are the labels, the column headers are the series.
  const readTable = (table) => {
    const series = [...table.querySelectorAll('thead th')].slice(1).map((th) => th.textContent.trim());
    const rows = [...table.querySelectorAll('tbody tr')];

    return {
      labels: rows.map((row) => row.querySelector('th').textContent.trim()),
      datasets: series.map((label, index) => ({
        label,
        data: rows.map((row) => Number(row.querySelectorAll('td')[index].textContent.replace(/[^\d.-]/g, '')))
      }))
    };
  };

  // Collect the colors from the card itself, so the chart follows the theme mode and the design style of its context.
  const readTheme = (card) => {
    const style = getComputedStyle(card);
    const swatches = [...card.querySelectorAll('.chart-card__swatch')].map((swatch) => getComputedStyle(swatch).backgroundColor);

    return {
      series: swatches.length ? swatches : [style.getPropertyValue('--spruce-base-color-primary')],
      text: getComputedStyle(card.querySelector('.chart-card__title')).color,
      grid: style.borderBlockStartColor,
      surface: style.backgroundColor,
      heading: getComputedStyle(card.querySelector('.chart-card__value')).color,
      font: style.fontFamily
    };
  };

  const applyTheme = (chart, card) => {
    const theme = readTheme(card);
    const isLine = chart.config.type === 'line';

    chart.data.datasets.forEach((dataset, index) => {
      const color = theme.series[index % theme.series.length];

      dataset.borderColor = toRgba(color);
      dataset.backgroundColor = isLine ? toRgba(color, index === 0 ? 0.12 : 0) : toRgba(color);
      dataset.pointBackgroundColor = toRgba(color);
      dataset.borderDash = isLine && index > 0 ? [6, 4] : [];
    });

    const { scales, plugins } = chart.options;

    [scales.x, scales.y].forEach((scale) => {
      scale.ticks.color = toRgba(theme.text);
      scale.ticks.font = { family: theme.font };
      scale.grid.color = toRgba(theme.grid);
      scale.border.color = toRgba(theme.grid);
    });

    Object.assign(plugins.tooltip, {
      backgroundColor: toRgba(theme.surface),
      borderColor: toRgba(theme.grid),
      titleColor: toRgba(theme.heading),
      bodyColor: toRgba(theme.text),
      titleFont: { family: theme.font },
      bodyFont: { family: theme.font }
    });

    chart.update('none');
  };

  const charts = [];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('canvas[data-chart]').forEach((canvas) => {
    const table = document.getElementById(canvas.dataset.chartTable);
    const card = canvas.closest('.chart-card');
    const prefix = table.dataset.chartPrefix || '';
    const type = canvas.dataset.chart;
    const format = new Intl.NumberFormat(document.documentElement.lang || 'en', { notation: 'compact' });

    const chart = new Chart(canvas, {
      type,
      data: readTable(table),
      options: {
        animation: reducedMotion ? false : { duration: 600 },
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        elements: {
          line: { borderWidth: 2, fill: true, tension: 0.35 },
          point: { radius: 0, hoverRadius: 4 },
          bar: { borderRadius: 4, borderSkipped: 'start' }
        },
        datasets: {
          bar: { categoryPercentage: 0.7, barPercentage: 0.9 }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            borderWidth: 1,
            padding: 10,
            usePointStyle: true,
            callbacks: {
              label: (context) => `${context.dataset.label}: ${prefix}${context.parsed.y.toLocaleString(document.documentElement.lang || 'en')}`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, border: {}, ticks: {} },
          y: {
            beginAtZero: true,
            grid: {},
            border: { display: false },
            ticks: { maxTicksLimit: 5, callback: (value) => `${prefix}${format.format(value)}` }
          }
        }
      }
    });

    applyTheme(chart, card);
    canvas.dataset.chartReady = '';
    // The chart replaces the table visually; keep the table in a closed disclosure.
    table.closest('details')?.removeAttribute('open');
    charts.push({ chart, card });
  });

  // Re-read the colors when the theme mode or the design style changes (after the color transitions end).
  let timer = null;
  const refresh = () => {
    clearTimeout(timer);
    timer = setTimeout(() => charts.forEach(({ chart, card }) => applyTheme(chart, card)), 300);
  };

  new MutationObserver(refresh).observe(document.documentElement, {
    attributes: true,
    subtree: true,
    attributeFilter: ['class', 'data-theme-mode', 'data-spruce-style']
  });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', refresh);
})();
