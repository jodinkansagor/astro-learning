import signs from './data/sign-data.js';
import { renderSigns, renderPlanet } from './src/render.js';
import planets from './data/planet-data.js';
import { getSign, getPlanet, lookForPlanet, saveStory } from './src/utils.js';
import { allTheSignsAndPlanets } from './data/results-data.js';
 

const signList = document.getElementById('signs');
const planetList = document.getElementById('planets');
const button = document.getElementById('button');

let thereIsAMatch = [];

signs.forEach(sign => {
    const signListElement = renderSigns(sign);
    signList.appendChild(signListElement);
});

planets.forEach(planet => {
    const planetListElement = renderPlanet(planet);
    planetList.appendChild(planetListElement);
});


button.addEventListener('click', () => {
    const signIdFromLocalStorage = getSign();
    const planetIdFromLocalStorage = getPlanet();
    thereIsAMatch = lookForPlanet(signIdFromLocalStorage, planetIdFromLocalStorage, allTheSignsAndPlanets);
    saveStory(thereIsAMatch);
    window.location = './results';
});


