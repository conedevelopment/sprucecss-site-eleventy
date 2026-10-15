document.querySelectorAll('[data-invoice-print]').forEach((button) => {
  // The print dialog also offers "Save as PDF"; the print styles size the invoice to A4.
  button.addEventListener('click', () => window.print());
});
