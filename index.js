const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.innerHTML = `
      <h1>Hotovo</h1>
      <p>Objednávka odeslána ke zpracování.</p>
   `;
});
