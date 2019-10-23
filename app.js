import zodiacSigns from './data/sign-data.js';
import { renderSigns, renderPlanet } from './src/render.js';
import planets from './data/planet-data.js';
import { getSign, getPlanet, lookForPlanet } from './src/utils.js';
import allTheSignsAndPlanets from './data/results-data.js';
 

const signList = document.getElementById('signs');
const planetList = document.getElementById('planets');
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

const signIdFromLocalStorage = getSign();
const planetIdFromLocalStorage = getPlanet();

const thereIsAMatch = lookForPlanet(signIdFromLocalStorage, planetIdFromLocalStorage, allTheSignsAndPlanets);



button.addEventListener('click', () => {
    const h2 = document.getElementById('results');
    h2.textContent = thereIsAMatch;
    h2.classList.remove('hidden');
});

