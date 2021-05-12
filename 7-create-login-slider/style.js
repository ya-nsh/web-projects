const emailRegister = document.getElementById('email-box-register');
const emailLogin = document.getElementById('email-box-login');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// const displayError = (input, message) => {

//   inputformcontrol.classList.add('error');
//   smallMessage.textContent = message;
// };

const displaySuccess = (input) => {
  // inputformcontrol.classList.remove('error');
  input.classList.add('success');
};

function validateEmail(input) {
  // const re =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@sitpune.edu([\.])in/g;

  if (re.test(input.value.trim())) {
    displaySuccess(input);
  }
  //  else {
  //   displayError(input, 'Invalid Email');
  // }
}

// validateEmail(email);

container.addEventListener('submit', (e) => {
  e.preventDefault();
  emailRegister.classList.remove('success');
  validateEmail(emailRegister);

  // if (emailRegister.classList.contains('success')) {
  //   emailRegister.classList.remove('success');
  // } else {
  //   validateEmail(emailRegister);
  // }

  // checkFields([username, email, password, passwordRe]);
  // checkLength(username, 4, 10);
  // checkLength(password, 6, 10);
  // checkPasswords(password, passwordRe);
});
