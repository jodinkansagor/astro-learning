import { getStory } from '../src/utils.js';
import { renderStory } from '../src/render.js';


const restart = document.getElementById('restart');
const storySpace = document.getElementById('story');



let storyFromLocalStorage = getStory();
let storyText = renderStory(storyFromLocalStorage);
storySpace.appendChild(storyText);


restart.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});