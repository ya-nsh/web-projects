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

// ---------------------------------------------------------

const header = document.querySelector('.header');
// .insertAdjacentHTML -> creating HTML elements. Prefer this the most.

// Creating and inserting a DOM element.
const message = document.createElement('div'); //returns a DOM element
message.classList.add('cookie-message');

message.innerHTML = `Cookies are useful for analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);

// header.prepend(message.cloneNode(true));

// header.after(message); //inserts message after header i.e as a sibling

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove();

  message.parentElement.removeChild(message);
});

// =============================================================

// Styles

// Styles set directly here in the DOM are set as inline styles.
message.style.backgroundColor = 'black';
message.style.width = '110%';

// To get all styles associated with an element, use getComputedStyle
