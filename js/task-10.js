function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesWrapperElement = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputElement = document.querySelector('#controls input');

let pixelSize = 30;

const createBoxes = amount => {
  let boxesMarkup = '';
  for (let i = 0; i < amount; i += 1) {
    boxesMarkup += `<div style="background-color: ${getRandomHexColor()}; width:${pixelSize}px; height: ${pixelSize}px"></div>`;
    pixelSize += 10;
  }
  boxesWrapperElement.insertAdjacentHTML('beforeend', boxesMarkup);
};

const destroyBoxes = () => {
  boxesWrapperElement.innerHTML = '';
  pixelSize = 30;
};

createButton.addEventListener('click', () => createBoxes(inputElement.value));
destroyButton.addEventListener('click', destroyBoxes);
