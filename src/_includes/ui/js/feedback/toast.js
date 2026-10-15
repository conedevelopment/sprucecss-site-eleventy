(() => {
  const list = document.querySelector('.toast-list');
  const template = document.getElementById('toast-template');

  if (!list || !template) {
    return;
  }

  const dismiss = (toast) => {
    toast.classList.add('is-leaving');
    setTimeout(() => toast.remove(), 200);
  };

  const showToast = (message, type = 'info', duration = 5000) => {
    const toast = template.content.firstElementChild.cloneNode(true);
    let timer = null;

    const start = () => { timer = setTimeout(() => dismiss(toast), duration); };
    const stop = () => clearTimeout(timer);

    toast.classList.add(`toast--${type}`);
    toast.querySelector('.toast__message').textContent = message;
    toast.querySelector('.toast__close').addEventListener('click', () => dismiss(toast));
    toast.addEventListener('mouseenter', stop);
    toast.addEventListener('mouseleave', start);
    toast.addEventListener('focusin', stop);
    toast.addEventListener('focusout', start);

    list.append(toast);
    start();

    return toast;
  };

  window.showToast = showToast;

  document.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => showToast(button.dataset.toast, button.dataset.toastType));
  });
})();
