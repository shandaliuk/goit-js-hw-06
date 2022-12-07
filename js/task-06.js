const inputElement = document.querySelector('#validation-input');
const onInputValidation = event => {
  if (event.currentTarget.value.length === Number(inputElement.dataset.length)) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
    return;
  }
  inputElement.classList.remove('valid');
  inputElement.classList.add('invalid');
};

inputElement.addEventListener('blur', onInputValidation);
