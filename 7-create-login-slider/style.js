const email = document.querySelector('.email');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

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
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    displaySuccess(input);
  } else {
    displayError(input, 'Invalid Email');
  }
}

// validateEmail(email);
console.log(email);
