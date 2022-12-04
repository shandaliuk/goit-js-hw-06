const refs = {
  decrementButton: document.querySelector('button[data-action="decrement"]'),
  incrementButton: document.querySelector('button[data-action="increment"]'),
  valueElement: document.querySelector('#value'),
};
let counterValue = 0;
const onIncrementValue = () => {
  counterValue += 1;
  refs.valueElement.textContent = counterValue;
};
const onDecrementValue = () => {
  counterValue -= 1;
  refs.valueElement.textContent = counterValue;
};
refs.decrementButton.addEventListener('click', onDecrementValue);
refs.incrementButton.addEventListener('click', onIncrementValue);
