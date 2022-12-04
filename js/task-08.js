const formElement = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  const inputData = { email: email.value, password: password.value };
  console.log(inputData);
  formElement.reset();
};

formElement.addEventListener('submit', onFormSubmit);
