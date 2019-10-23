
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
export function lookForPlanet(signId, planetId, allTheSignsAndPlanets) {
    for (let i = 0; i < allTheSignsAndPlanets.length; i++) { 
        const matchId1 = allTheSignsAndPlanets[i].id1;
        const matchId2 = allTheSignsAndPlanets[i].id2;
        
        if (matchId1 === signId && matchId2 === planetId) {
            return allTheSignsAndPlanets[i].story;
        }   
    }
    return null;
}

