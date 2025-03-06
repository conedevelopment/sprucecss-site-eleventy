document.addEventListener('alpine:init', () => {
  window.Alpine.data('combobox', () => ({
    items: [{
      id: 'red',
      label: 'Red',
      selected: false,
    },
    {
      id: 'orange',
      label: 'Orange',
      selected: false,
    },
    {
      id: 'yellow',
      label: 'Yellow',
      selected: false,
    },
    {
      id: 'green',
      label: 'Green',
      selected: false,
    },
    {
      id: 'blue',
      label: 'Blue',
      selected: false,
    },
    {
      id: 'purple',
      label: 'Purple',
      selected: false,
    },
    {
      id: 'hot-pink',
      label: 'Hot pink',
      selected: false,
    },
    {
      id: 'light-pink',
      label: 'Light pink',
      selected: false,
    },
    {
      id: 'white',
      label: 'White',
      selected: false,
    },
    {
      id: 'black',
      label: 'Black',
      selected: false,
    },
    {
      id: 'brown',
      label: 'Brown',
      selected: false,
    },
    ],
    open: false,
    search: '',
    highlightedItemIndex: null,
    selectedItems() {
      return this.items.filter((item) => item.selected);
    },
    unselectItemById(id) {
      this.items.find((item) => item.id === id).selected = false;
    },
    filteredItems() {
      return this.items.filter((item) => item.label.toLowerCase().includes(this.search.toLowerCase()));
    },
    toggle() {
      if (this.open) {
        return this.close();
      }

      this.$refs.input.focus();
      this.open = true;
      this.highlightedItemIndex = null;
    },
    close(focusAfter) {
      if (!this.open) return;

      this.open = false;
      this.search = '';
      this.highlightedItemIndex = null;

      focusAfter && focusAfter.focus();
    },
    highlightNextItem() {
      this.open = true;

      if (this.highlightedItemIndex === null) {
        this.highlightedItemIndex = 0;
        return;
      }

      this.highlightedItemIndex++;

      if (this.highlightedItemIndex >= this.filteredItems().length) {
        this.highlightedItemIndex = 0;
      }

      this.$refs.listbox.children[this.highlightedItemIndex + 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    },
    highlightPreviousItem() {
      this.open = true;
      this.highlightedItemIndex--;

      if (this.highlightedItemIndex < 0) {
        this.highlightedItemIndex = this.filteredItems().length - 1;
      }

      this.$refs.listbox.children[this.highlightedItemIndex + 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    },
    highlightedItemId() {
      const highlightedItem = this.filteredItems()[this.highlightedItemIndex];
      return highlightedItem ? this.$id('list-item', highlightedItem.id) : null;
    },
    toggleFromKeyboard() {
      if (this.highlightedItemIndex === null) {
        return;
      }

      this.filteredItems()[this.highlightedItemIndex].selected = !this.filteredItems()[this.highlightedItemIndex].selected;
    },
    deselectAllItems() {
      this.items.forEach((item) => item.selected = false);
    },
  }));
});
