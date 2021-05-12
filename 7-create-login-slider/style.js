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
    if (input.id == 'password' && input.value.trim()) {
      if (input.value.length >= 7) {
        displaySuccess(input);
      } else {
        alert('Password length must be greater than 6 characters');
        return;
      }
    }
    if (input.value.trim()) {
      displaySuccess(input);
    }
  });
};

const removeSuccess = () => {
  emailRegister.classList.remove('success');
  emailLogin.classList.remove('success');
  username.classList.remove('success');
  password.classList.remove('success');
  gender.classList.remove('success');
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
  // validateLoginEmail(emailLogin);
  checkFields([username, password, gender]);

  // if (emailRegister.classList.contains('success')) {
  //   emailRegister.classList.remove('success');
  // } else {
  //   validateEmail(emailRegister);
  // }
});
