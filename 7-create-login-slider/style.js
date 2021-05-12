const emailRegister = document.getElementById('email-box-register');
const emailLogin = document.getElementById('email-box-login');
const name = document.getElementById('name');
const password = document.getElementById('password');
const gender = document.getElementById('gender');

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
  const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@sitpune.edu([\.])in$/g;

  if (re.test(input.value.trim())) {
    displaySuccess(input);
  }
  //  else {
  //   displayError(input, 'Invalid Email');
  // }
}

const checkFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (!input.value.trim()) {
      displayError(input, `${getFieldName(input)} is required`);
    } else {
      displaySuccess(input);
    }
  });
};

container.addEventListener('submit', (e) => {
  e.preventDefault();
  emailRegister.classList.remove('success');
  validateEmail(emailRegister);
  checkFields([username, email, password, passwordRe]);

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
