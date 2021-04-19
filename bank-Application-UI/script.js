'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(item => item.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `Cookies are useful for analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.parentElement.removeChild(message);
});

// ===============================================================

// Styles

// Styles set directly here in the DOM are set as inline styles.
message.style.backgroundColor = 'black';
message.style.width = '110%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src); //returns the absolute URL. to get relative URL, use getAttribute
// console.log(logo.className); //to get class.
// // They can also be set like -
// logo.alt = 'Minimalist logo';
// console.log(logo.alt);

// logo.setAttribute('company', 'Bank'); //creates a new attribute of company with a value fo Bank

// console.log(logo.dataset.versionNumber);

//Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Older way
btnScrollTo.addEventListener('click', e => {
  // getting coordinates of the element to scroll to.
  const s1coodinates = section1.getBoundingClientRect();
  console.log(s1coodinates);

  console.log('Current scroll (X, Y)', window.pageXOffset, window.pageYOffset);
});
