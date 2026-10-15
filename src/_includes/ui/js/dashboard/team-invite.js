(() => {
  document.querySelectorAll('[data-team-invite]').forEach((section) => {
    const form = section.querySelector('[data-team-invite-form]');
    const email = form.elements.email;
    const role = form.elements.role;
    const error = section.querySelector('[data-team-invite-error]');
    const list = section.querySelector('[data-team-invite-list]');
    const empty = section.querySelector('[data-team-invite-empty]');
    const seats = section.querySelector('[data-team-invite-seats]');
    const status = section.querySelector('[data-team-invite-status]');
    const template = list.querySelector('[data-team-invite-item]').cloneNode(true);

    const addresses = () => [...list.querySelectorAll('.team-invite__address')].map((item) => item.textContent.toLowerCase());

    const update = () => {
      empty.hidden = list.children.length > 0;
    };

    const setError = (message) => {
      error.textContent = message;
      error.hidden = !message;
      email.setAttribute('aria-invalid', String(Boolean(message)));
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const value = email.value.trim();

      if (!email.checkValidity() || !value) {
        setError('Enter an email address, like name@company.com.');
      } else if (addresses().includes(value.toLowerCase())) {
        setError(`${value} already has a pending invitation.`);
      } else if (Number(seats.textContent) === 0) {
        setError('There are no free seats left. Add seats to your plan first.');
      } else {
        const item = template.cloneNode(true);

        item.querySelector('.team-invite__initial').textContent = value.charAt(0);
        item.querySelector('.team-invite__address').textContent = value;
        item.querySelector('.team-invite__meta').textContent = `${role.value} · Sent just now`;
        item.querySelector('[data-team-invite-resend] .sr-only').textContent = ` to ${value}`;
        item.querySelector('[data-team-invite-cancel] .sr-only').textContent = ` the invitation of ${value}`;
        list.prepend(item);
        seats.textContent = Number(seats.textContent) - 1;
        status.textContent = `Invitation sent to ${value}.`;
        setError('');
        form.reset();
        update();
      }

      if (!error.hidden) email.focus();
    });

    list.addEventListener('click', (event) => {
      const item = event.target.closest('[data-team-invite-item]');
      const address = item?.querySelector('.team-invite__address').textContent;

      if (event.target.closest('[data-team-invite-resend]')) {
        item.querySelector('.team-invite__meta').textContent = item.querySelector('.team-invite__meta').textContent.replace(/Sent .*/, 'Sent just now');
        status.textContent = `Invitation resent to ${address}.`;
      }

      if (event.target.closest('[data-team-invite-cancel]')) {
        item.remove();
        seats.textContent = Number(seats.textContent) + 1;
        status.textContent = `The invitation of ${address} is canceled.`;
        update();
        email.focus();
      }
    });

    update();
  });
})();
