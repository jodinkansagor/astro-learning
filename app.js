import zodiacSigns from './data/sign-data.js';
import { renderSigns, renderPlanet } from './src/render.js';
import planets from './data/planet-data.js';
import { getSign, getPlanet, lookForPlanet } from './src/utils.js';
import allTheSignsAndPlanets from './data/results-data.js';
 

const signList = document.getElementById('signs');
const planetList = document.getElementById('planets');
const button = document.getElementById('button');
const restart = document.getElementById('restart');
const section = document.getElementById('results');
const buttons = document.getElementById('buttons');

let thereIsAMatch;

zodiacSigns.forEach(sign => {
    const signListElement = renderSigns(sign);
    signList.appendChild(signListElement);
});

planets.forEach(planet => {
    const planetListElement = renderPlanet(planet);
    planetList.appendChild(planetListElement);
});


const signIdFromLocalStorage = getSign();
const planetIdFromLocalStorage = getPlanet();

thereIsAMatch = lookForPlanet(signIdFromLocalStorage, planetIdFromLocalStorage, allTheSignsAndPlanets);
console.log(signIdFromLocalStorage, planetIdFromLocalStorage);



button.addEventListener('click', () => {

    section.classList.remove('hidden');
    const h2 = document.createElement('h2');
    h2.textContent = thereIsAMatch;
    section.appendChild(h2);
    buttons.classList.add('hidden');
    console.log(thereIsAMatch);
});

restart.addEventListener('click', () => {
    let thereIsAMatch = '';
    section.classList.add('hidden');
    buttons.classList.remove('hidden');
    console.log(thereIsAMatch);
});
