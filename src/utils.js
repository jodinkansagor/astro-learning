
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

export function saveStory(story) {
    const json = JSON.stringify(story);
    localStorage.setItem('story', json);
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

export function getStory() {
    const json = localStorage.getItem('story');
    if (!json) {
        return null;
    } else {
        const story = JSON.parse(json);
        return story;
    }
}

export function lookForPlanet(signId, planetId, allTheSignsAndPlanets) {
    let myMatch = [];
    for (let i = 0; i < allTheSignsAndPlanets.length; i++) {
        if (allTheSignsAndPlanets[i].sign === signId && allTheSignsAndPlanets[i].planet === planetId) {
            myMatch.push(allTheSignsAndPlanets[i].story);
            return myMatch;
        } 
    }
}
