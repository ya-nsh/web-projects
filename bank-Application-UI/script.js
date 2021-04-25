'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(el => el.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie Message
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML = `Cookies are useful for analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);

//Smooth Scrolling

// Say, smooth scroll to a section when clicked on a button
// Modern way
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
document.querySelectorAll(".nav-link").forEach(ele => {
  ele.addEventListener("click")
})

// Bubbling event handlers
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', e => {
//   e.preventDefault();
//   console.log('object of nav-link ', e.target , e.currentTarget);
// });

// document.querySelector('.nav__links').addEventListener('click', e => {
//   e.preventDefault();
//   console.log('object of nav-links ', e.target , e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', e => {
//   e.preventDefault();
//   console.log('object of nav ', e.target , e.currentTarget);
// });
