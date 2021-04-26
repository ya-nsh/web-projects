'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');

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
// document.querySelectorAll('.nav__link').forEach(ele => {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(this);

//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  const id = e.target.getAttribute('href');
  if (e.target.classList.contains('nav__link')) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

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

// Tabbed Component using event delegation.

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked.closest('button'));

  // Guard Clause
  if (!clicked) return;

  // Removing active class on all tabs and tabsContent first
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Adding active class on the selected tab
  clicked.classList.add('operations__tab--active');

  // Activating content area of the active class
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

  // if (e.target.classList.contains('btn')) {
  //   console.log(e.target);
  // }
});
