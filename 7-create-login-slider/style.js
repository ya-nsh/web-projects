const emailRegister = document.getElementById('email-box-register');
const emailLogin = document.getElementById('email-box-login');
const username = document.getElementById('name');
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

const displaySuccess = (input) => {
  input.classList.add('success');
};

function validateEmail(input) {
  const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@sitpune.edu([\.])in$/g;

  if (re.test(input.value.trim())) {
    displaySuccess(input);
  }
}

const checkFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.id == 'password' && input.value.trim()) {
      if (input.value.length >= 7) {
        displaySuccess(input);
      } else {
        alert('Password length must be greater than 6 characters');
        // return;
      }
    }
    if (input.value.trim() && !(input.id == 'password')) {
      displaySuccess(input);
    }
  });
};

const removeSuccess = () => {
  const fields = [emailRegister, emailLogin, username, password, gender];
  fields.forEach((field) => field.classList.remove('success'));
};

const validateLoginEmail = (input) => {
  const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@sitpune.edu([\.])in$/g;

  if (re.test(input.value.trim()) || input.value == 'admin@admin.com') {
    displaySuccess(input);
  }
};

container.addEventListener('submit', (e) => {
  e.preventDefault();
  removeSuccess();
  validateEmail(emailRegister);
  validateLoginEmail(emailLogin);

  checkFields([username, password, gender]);
});

username.blur();
