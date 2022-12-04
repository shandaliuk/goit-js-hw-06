function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');

const onChangeColor = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
};

buttonElement.addEventListener('click', onChangeColor);
