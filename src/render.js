import { saveSign, savePlanet } from '../src/utils.js';


export function renderSigns(sign) {
    
    const li = document.createElement('li');
    li.className = sign.element;
    li.title = sign.name;

    const radioLabel = document.createElement('label');
    li.appendChild(radioLabel);

    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'signs';
    radioButton.value = sign.id;


    radioButton.addEventListener('click', (event) => {
        
        localStorage.removeItem('sign');
        const chosenSign = event.target.value;
        const signChoice = saveSign(chosenSign);
        return signChoice;
    });

    radioLabel.appendChild(radioButton);

    const img = document.createElement('img');
    img.src = `https://jodinkansagor.github.io/astro-learning/assets/${sign.symbolImg}`;
    img.alt = sign.id;
    radioLabel.appendChild(img);

    return li;
}

export function renderPlanet(planet) {
    
    const li = document.createElement('li');
    li.className = planet.name;
    li.title = planet.name;

    const radioLabel = document.createElement('label');
    li.appendChild(radioLabel);

    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'signs';
    radioButton.value = planet.id;


    radioButton.addEventListener('click', (event) => {
        localStorage.removeItem('planet');
        const chosenPlanet = event.target.value;
        const planetChoice = savePlanet(chosenPlanet);
        return planetChoice;
    });


    radioLabel.appendChild(radioButton);

    const img = document.createElement('img');
    img.src = `https://jodinkansagor.github.io/astro-learning/assets/${planet.image}`;
    img.alt = planet.id;
    radioLabel.appendChild(img);

    return li;
}

export function renderStory(storyFromStorage) {
    const li = document.createElement('li');
    const storyH2 = document.createElement('h2');
    storyH2.textContent = storyFromStorage;
    li.appendChild(storyH2);

    return li;
} 
