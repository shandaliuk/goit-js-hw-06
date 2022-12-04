const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

const onRangeChange = event => (textElement.style.fontSize = `${event.currentTarget.value}px`);

inputElement.addEventListener('input', onRangeChange);

// В залежності від задачі можна зробити через подію "change", але тоді зміна буде не плавна.
// inputElement.addEventListener('change', onRangeChange);
