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

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkFields([username, email, password, passwordRe]);
  //   if (!username.value) {
  //     displayError(username, 'Username is required');
  //   } else {
  //     displaySuccess(username);
  //   }

  //   if (!email.value) {
  //     displayError(email, 'Email is required');
  //   } else if (!validateEmail(email.value)) {
  //     displayError(email, 'Invalid email');
  //   } else {
  //     displaySuccess(email);
  //   }

  //   if (!password.value) {
  //     displayError(password, 'Password is required');
  //   } else {
  //     displaySuccess(password);
  //   }

  //   if (!passwordRe.value && passwordRe !== password) {
  //     displayError(passwordRe, "Passwords didn't match");
  //   } else {
  //     displaySuccess(passwordRe);
  //   }
});
