
// ye olde find by id function
export function findById(signs, signId) {
    for (let i = 0; i < signs.length; i++) {
        const sign = signs[i];
        if (sign.id === signId) {
            return sign;
        }
    }
    return null;
}


//set my local storage
export function saveSign(sign) {
    const json = JSON.stringify(sign);
    localStorage.setItem('sign', json);
}

export function savePlanet(planet) {
    const json = JSON.stringify(planet);
    localStorage.setItem('planet', json);
}


//get from local storage
export function getSign() {
    const json = localStorage.getItem('sign');
    if (!json) {
        return null;
    } else {
        const sign = JSON.parse(json);
        return sign;
    }
}

export function getPlanet() {
    const json = localStorage.getItem('planet');
    if (!json) {
        return null;
    } else {
        const planet = JSON.parse(json);
        return planet;
    }
}
//not working because planet info is held in an object inside an object rather than an array inside an object

// export const lookForPlanet = (signId, planetId, signs) => {
//     return signs.find(signId => {
//         return signId = planetId;
//     }); 
// };



export function lookForPlanet(signId, planetId, allTheSignsAndPlanets) {
    allTheSignsAndPlanets.forEach((match) => {
        if (match.sign === signId && match.planet === planetId) {
            console.log(match.sign);
            return match.story;
        }   
    });
    return null;
}

