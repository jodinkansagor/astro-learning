import zodiacSigns from './data/sign-data.js';
import { renderSigns } from './src/render.js';

const signList = document.getElementById('signs');

for (let i = 0; i < zodiacSigns.length; i++) {
    const sign = zodiacSigns[i];
    const signListElement = renderSigns(sign);
    console.log(signListElement);
    signList.appendChild(signListElement);
}