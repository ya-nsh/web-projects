const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const passwordRe = document.querySelector('#password2');
const email = document.querySelector('#email');

const displayError = (input, message) => {
  const inputformcontrol = input.parentElement;
  const smallMessage = inputformcontrol.querySelector('small');
  inputformcontrol.classList.add('error');
  smallMessage.textContent = message;
};

const displaySuccess = (input) => {
  const inputformcontrol = input.parentElement;

  inputformcontrol.classList.remove('error');
  inputformcontrol.classList.add('success');
};

function validateEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    displaySuccess(input);
  } else {
    displayError(input, 'Invalid Email');
  }

  //   return re.test(String(email).toLowerCase());
}

const getFieldName = (input) => {
  const modified = input.id.slice(0, 1).toUpperCase() + input.id.slice(1);
  return modified;
};

const checkFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (!input.value.trim()) {
      displayError(input, `${getFieldName(input)} is required`);
    } else {
      displaySuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min || input.value.length > max) {
    displayError(
      input,
      `${getFieldName(input)} must be  between ${min} and ${max} digits.`
    );
  }
};

const checkPasswords = (input1, input2) => {
  if (input1.value !== input2.value) {
    displayError(input2, "The passwords don't match");
  } else {
    displaySuccess(input1);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkFields([username, email, password, passwordRe]);
  checkLength(username, 4, 10);
  checkLength(password, 6, 10);
  validateEmail(email);
  checkPasswords(password, passwordRe);
});
