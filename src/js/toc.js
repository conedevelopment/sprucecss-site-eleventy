(() => {
  const tocItems = document.querySelectorAll('.toc a');
  const scrollItems = [];

  if (!tocItems.length) {
    return;
  }

  tocItems.forEach((item) => {
    const targetId = item.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      scrollItems.push({
        offset: targetElement.getBoundingClientRect().top + document.documentElement.scrollTop - 70,
        element: item,
      });
    }
  });

  function updateActiveTocItem() {
    const scrollPosition = window.scrollY;

    const activeItem = scrollItems.reduce((closestItem, currentItem) => {
      if (scrollPosition >= currentItem.offset) {
        return currentItem;
      }
      return closestItem;
    }, scrollItems[0]);

    tocItems.forEach((item) => {
      item.classList.remove('active');
    });

    if (activeItem) {
      activeItem.element.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActiveTocItem);
  updateActiveTocItem();
})();
