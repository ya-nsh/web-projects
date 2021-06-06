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

// let map, mapEvent;

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
  }

  _getPosition() {
    // Using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert('Unable to find your location');
      }
    );
  }

  _loadMap(position) {
    // console.log(position); -> retuns a geolocationposition object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    let coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Adding the event listener of leaflet library.
    this.#map.on('click', function (mapE) {
      this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus(); //immediately selects the distance input field
    });
  }

  _showForm() {}

  _toggleElevationField() {}

  _newWorkout(e) {
    e.preventDefault();

    // Clearing the input fields upon submitting
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)

      .bindPopup(
        L.popup({
          maxWidth: 100,
          minWidth: 10,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();

form.addEventListener('submit', function (e) {});

inputType.addEventListener('change', function (e) {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
