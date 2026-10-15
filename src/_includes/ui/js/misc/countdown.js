(() => {
  document.querySelectorAll('[data-countdown]').forEach((countdown) => {
    const end = countdown.dataset.countdownEnd
      ? new Date(countdown.dataset.countdownEnd).getTime()
      : Date.now() + Number(countdown.dataset.countdownDays || 0) * 864e5;
    const units = Object.fromEntries([...countdown.querySelectorAll('[data-unit]')].map((element) => [element.dataset.unit, element]));
    const text = countdown.querySelector('[data-countdown-text]');
    let lastMinute = null;

    const tick = () => {
      const remaining = Math.max(0, end - Date.now());
      const values = {
        days: Math.floor(remaining / 864e5),
        hours: Math.floor(remaining / 36e5) % 24,
        minutes: Math.floor(remaining / 6e4) % 60,
        seconds: Math.floor(remaining / 1e3) % 60
      };

      Object.entries(values).forEach(([unit, value]) => {
        units[unit].textContent = String(value).padStart(2, '0');
      });

      if (values.minutes !== lastMinute) {
        lastMinute = values.minutes;
        text.textContent = `${values.days} days, ${values.hours} hours and ${values.minutes} minutes left.`;
      }

      if (remaining === 0) {
        clearInterval(timer);
        countdown.dispatchEvent(new CustomEvent('countdownend'));
      }
    };

    const timer = setInterval(tick, 1000);
    tick();
  });
})();
