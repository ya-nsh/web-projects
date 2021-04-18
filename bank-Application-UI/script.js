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

// To get all styles associated with an element, use getComputedStyle. It contains all properties with all of the values
// console.log(getComputedStyle(message)) //huge content

console.log(getComputedStyle(message).color); //returns a string
console.log(getComputedStyle(message).height);
// Increasing its height
// Note that to get float value from a string, use parseFloat
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
