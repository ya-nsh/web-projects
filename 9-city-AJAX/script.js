const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const values = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => values.push(...data));

const findWord = (word, city) => {
  return city.filter((place) => {
    const calcRegex = new RegExp(word, 'gi');
    return place.city.match(calcRegex) || place.state.match(calcRegex);
  });
};

function displayWord() {
  const matchArray = findWord(this.value, values);
  const html = matchArray
    .map((place) => {
      return `
      <li>  
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
    </li>
   `;
    })
    .join('');
  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayWord);
searchInput.addEventListener('keydown', displayWord);
