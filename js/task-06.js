const inputElement = document.querySelector('#validation-input');
const onInputValidation = event => {
  if (event.currentTarget.value.length < inputElement.dataset.length) {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
    return;
  }
  inputElement.classList.add('valid');
  inputElement.classList.remove('invalid');
};

inputElement.addEventListener('blur', onInputValidation);
