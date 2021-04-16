'use strict';

const account1 = {
  owner: 'John S',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z'
  ],
  currency: 'EUR',
  locale: 'pt-PT'
};

const account2 = {
  owner: 'Jamie Dennis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z'
  ],
  currency: 'USD',
  locale: 'en-US'
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const dateFormat = (date, locale) => {
  const daysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const final = daysPassed(new Date(), date);
  console.log(final);

  if (final === 0) {
    return 'Today';
  }
  if (final === 1) {
    return 'Yesterday';
  }
  if (final <= 0) {
    return `${daysPassed} days ago`;
  }

  return new Intl.DateTimeFormat(locale).format(date);
};

const currencyFormat = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
};

const displayMovements = (acc, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, index) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[index]);
    const displayDate = dateFormat(date, acc.locale);

    const formattedMov = currencyFormat(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((item) => item[0])
      .join('');
  });
};

createUsernames(accounts);

const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = currencyFormat(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = (acc) => {
  const incomes = acc.movements
    .filter((value) => value > 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumIn.textContent = currencyFormat(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter((value) => value < 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumOut.textContent = currencyFormat(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  );

  // Assume interest is at a rate of 1.2%
  const interest = acc.movements
    .filter((value) => value > 0)
    .map((item) => (item * acc.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, val) => acc + val);

  labelSumInterest.textContent = currencyFormat(
    interest,
    acc.locale,
    acc.currency
  );
};

const updateUI = (currentAccount) => {
  displayMovements(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const initLogOutTimer = () => {
  const tick = () => {
    const min = `${Math.floor(sessionTime / 60)}`.padStart(2, 0);
    const sec = `${sessionTime % 60}`.padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (sessionTime == 0) {
      clearInterval(sessionTimer);

      labelWelcome.textContent = 'Log in to get started';

      containerApp.style.opacity = 0;
    }
    sessionTime--;
  };

  let sessionTime = 180;

  tick();
  const sessionTimer = setInterval(tick, 1000);

  return sessionTimer;
};

let currentAccount, timer;

// // TESTING LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// //

const now = new Date();
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth() + 1}`.padStart(2, '0');
const year = now.getFullYear();

const hour = now.getHours();
const min = `${now.getMinutes()}`.padStart(2, '0');

labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      // month: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();

    // const hour = now.getHours();
    // const min = `${now.getMinutes()}`.padStart(2, '0');

    updateUI(currentAccount);

    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    if (timer) {
      clearInterval(timer);
    }
    timer = initLogOutTimer();
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (item) => item.username === inputTransferTo.value
  );

  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc?.username !== currentAccount.username &&
    receiverAcc &&
    amount <= currentAccount.balance
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    currentAccount.movementsDates.push(new Date());
    receiverAcc.movementsDates.push(new Date());

    updateUI(currentAccount);

    clearInterval(timer);
    timer = initLogOutTimer();
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some((mov) => mov >= loanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmount);
      currentAccount.movementsDates.push(new Date());
      updateUI(currentAccount);
      clearInterval(timer);
      timer = initLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex((ele) => ele.username === currentAccount.username),
      1
    );
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

const fullBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, val) => acc + val);

let sortChecker = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sortChecker);
  sortChecker = !sortChecker;
});
