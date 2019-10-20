import zodiacSigns from './data/sign-data.js';
import { renderSigns, renderPlanet } from './src/render.js';
import planets from './data/planet-data.js';
import { getSign, getPlanet, findById, lookForPlanet } from './src/utils.js';
 
// let sign = {};
// let planet = {};

const signList = document.getElementById('signs');
const planetList = document.getElementById('planets');

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


console.log(signObject, 'sign object');
console.log(planetObject, 'planet object');
console.log(signObject.planets);
console.log(signObject.planets.sun);
const thereIsAMatch = lookForPlanet(planetObject, signObject);
console.log(thereIsAMatch);