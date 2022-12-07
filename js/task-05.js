const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const onPrintingOutput = event =>
  (outputElement.textContent =
    event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value);

inputElement.addEventListener('input', onPrintingOutput);
