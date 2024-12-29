(() => {
  const sidebar = document.querySelector('.l-documentation__sidebar');
  const activeItem = sidebar.querySelector('[aria-current="page"]');

  if (!sidebar) {
    return;
  }

  console.log(sidebar.scrollTop, activeItem.offsetTop);

  if (activeItem && activeItem.offsetTop > 200) {
    sidebar.scrollTop = activeItem.offsetTop;
  }
})();

