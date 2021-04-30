'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const nav = document.querySelector('.nav');

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

// Blurring navigation links upon hovering
const blurLink = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

// Passing arguments to the event handler
nav.addEventListener('mouseover', blurLink.bind(0.4));
nav.addEventListener('mouseout', blurLink.bind(1));

// Sticky navigation
// Scroll event is not efficient as it fires a lot of events as you scroll and should be avoided.
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky navigation using Intersection Observer API

// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// // The callback function in the above line will get called each time that the observed element(or the target element, here section1) is intersecting the root element at the threshold defined in the options below

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const stickyNav = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing elements on scroll
// First hiding all HTML sections with the class section--hidden
// Now, on scroll, unhide these sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '206px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.5)';
slider.style.overflow = 'scale(0.5)';

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
