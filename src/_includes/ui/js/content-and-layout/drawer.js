(() => {
  document.querySelectorAll('[data-drawer-open]').forEach((opener) => {
    const drawer = document.getElementById(opener.dataset.drawerOpen);

    if (!drawer) {
      return;
    }

    // Where the pointer went down: a drag that starts in the panel (a range input, a text selection)
    // and ends on the backdrop is not a backdrop click.
    let pressedOnBackdrop = false;

    opener.addEventListener('click', (event) => {
      // A link opener (like a cart link) goes to its page without JavaScript; here it opens the drawer.
      event.preventDefault();

      if (!drawer.open) {
        drawer.showModal();
      }
    });

    drawer.addEventListener('pointerdown', (event) => {
      pressedOnBackdrop = event.target === drawer;
    });

    drawer.addEventListener('click', (event) => {
      // A click on the backdrop targets the dialog itself.
      const backdropClick = event.target === drawer && pressedOnBackdrop;

      if (backdropClick || event.target.closest('[data-drawer-close]')) {
        drawer.close();
      }

      pressedOnBackdrop = false;
    });
  });
})();
