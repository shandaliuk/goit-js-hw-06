const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const onPrintingOutput = event =>
  event.currentTarget.value === ''
    ? (outputElement.textContent = 'Anonymous')
    : (outputElement.textContent = event.currentTarget.value);

inputElement.addEventListener('input', onPrintingOutput);
