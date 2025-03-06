(() => {
  const sidebar = document.querySelector('.l-documentation__sidebar');

  if (!sidebar) {
    return;
  }

  const activeItem = sidebar.querySelector('[aria-current="page"]');

  if (activeItem && activeItem.offsetTop > 200) {
    sidebar.scrollTop = activeItem.offsetTop;
  }
})();

