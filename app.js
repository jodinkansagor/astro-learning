import zodiacSigns from './data/sign-data.js';
import { renderSigns, renderPlanet } from './src/render.js';
import planets from './data/planet-data.js';
import { getSign, getPlanet, findById, lookForPlanet } from './src/utils.js';
 
// let sign = {};
// let planet = {};

const signList = document.getElementById('signs');
const planetList = document.getElementById('planets');
const resultsDisplay = document.getElementById('results');
const button = document.getElementById('button');


for (let i = 0; i < zodiacSigns.length; i++) {
    const sign = zodiacSigns[i];
    const signListElement = renderSigns(sign);
    signList.appendChild(signListElement);
}

for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    const planetListElement = renderPlanet(planet);
    planetList.appendChild(planetListElement);
}

const signString = getSign();
const planetString = getPlanet();

const signObject = findById(zodiacSigns, signString);
const planetObject = findById(planets, planetString);
const thereIsAMatch = lookForPlanet(planetObject, signObject);

button.addEventListener('click', () => {
    alert(thereIsAMatch);
});


// const h2 = document.createElement('h2');
// h2.className = 'hidden';
// h2.textContent = thereIsAMatch;
// resultsDisplay.appendChild(h2);
// h2.classList.remove('hidden');


// console.log(thereIsAMatch);


console.log(signObject, 'sign object');
console.log(planetObject, 'planet object');
console.log(signObject.planets, 'signobject.planets');
console.log(thereIsAMatch);