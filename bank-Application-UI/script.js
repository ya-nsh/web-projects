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

//Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); //to not jump into the section temporarily
//     console.log('LINK');
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// The above is not efficient as the exact same function is attached to 3 elements.

// Event delegation
// Add event listener to common parent element
// Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM Traversing

const h1 = document.querySelector('h1');
// Going downwards: child

// console.log(h1.querySelectorAll('.highlight')); //only children of h1 with hightlight class get selected. It can go as deep as necessary.
// If there were other highlight class elements in the page, they would not get selected as they are not the children of h1 element.

// To get only the DIRECT child nodes:
// console.log(h1.childNodes); //this gives us every single node which is unnecessary.

// To only get the direct child elements
// console.log(h1.children); //returns a HTMLCollection which is a live collection so, its updated.

// console.log(h1.firstElementChild.style.color);
// We can even set them
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'blue';

// Going upwards: parents

// For direct parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// console.log(h1.closest('.header'));

// console.log(h1.closest('h1')); // <h1>...</h1>

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // For nodes:
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.backgroundColor = 'black';
//     el.style.transform = 'scale(0.5)'; //making them 50% smaller
//   }
// });

// Tabbed Content
const tabs = document.querySelectorAll('.operations__tab');
console.log(tabs);
const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

// The below is a bad practice as if there are say, 200 buttons, this function will be repeated 200 times.
// tabs.forEach(t => {
//   t.addEventListener('click', () => console.log('object'));
// });

//  Use event delegation instead
tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Ignore areas where clicks are NULL
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
