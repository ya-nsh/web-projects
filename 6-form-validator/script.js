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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!username.value) {
    displayError(username, 'Username is required');
  } else {
    displaySuccess(username);
  }
});
