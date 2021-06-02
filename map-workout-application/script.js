'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputCadence = document.querySelector('.form__input--cadence');
const inputDuration = document.querySelector('.form__input--duration');
const inputDistance = document.querySelector('.form__input--distance');
const inputElevation = document.querySelector('.form__input--elevation');

// Using the Geolocation API
navigator.geolocation.getCurrentPosition(
  function (position) {
    // console.log(position); -> retuns a geolocationposition object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    const map = L.map('map').setView(coords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    // Adding the event listener of leaflet library.
    map.on();
  },

  function () {
    alert('Unable to find your location');
  }
);
