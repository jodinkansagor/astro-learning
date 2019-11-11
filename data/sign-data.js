const aries = {
    id: 'aries',
    name: 'Aries',
    symbolName: 'ram',
    symbolImg: 'aries-blue-square.png',
    element: 'fire',
    ruler: 'Mars',
    modality: 'cardinal',
};

const taurus = {
    id: 'taurus',
    name: 'Taurus',
    symbolName: 'bull',
    symbolImg: 'taurus-blue-square.png',
    element: 'earth',
    ruler: 'Venus',
    modality: 'fixed',
};

const gemini = {
    id: 'gemini',
    name: 'Gemini',
    symbolName: 'twins',
    symbolImg: 'gemini-blue-square.png',
    element: 'air',
    ruler: 'Mercury',
    modality: 'mutable',
};

const cancer = {
    id: 'cancer',
    name: 'Cancer',
    symbolName: 'crab',
    symbolImg: 'cancer-blue-square.png',
    element: 'water',
    ruler: 'Moon',
    modality: 'cardinal',
};

const leo = {
    id: 'leo',
    name: 'Leo',
    symbolName: 'lion',
    symbolImg: 'leo-blue-square.png',
    element: 'fire',
    ruler: 'Sun',
    modality: 'fixed',
};

const virgo = {
    id: 'virgo',
    name: 'Virgo',
    symbolName: 'maiden',
    symbolImg: 'virgo-blue-square.png',
    element: 'earth',
    ruler: 'Mercury',
    modality: 'mutable',
};

const libra = {
    id: 'libra',
    name: 'Libra',
    symbolName: 'scales',
    symbolImg: 'libra-blue-square.png',
    element: 'air',
    ruler: 'Venus',
    modality: 'cardinal',
};

const scorpio = {
    id: 'scorpio',
    name: 'Scorpio',
    symbolName: 'scorpion',
    symbolImg: 'scorpio-blue-square.png',
    element: 'water',
    ruler: ['Pluto', 'Mars'],
    modality: 'fixed',
};

const sagitarius = {
    id: 'sagitarius',
    name: 'Sagitarius',
    symbolName: 'archer',
    symbolImg: 'sag-blue-square.png',
    element: 'fire',
    ruler: 'Jupiter',
    modality: 'mutable',
};

const capricorn = {
    id: 'capricon',
    name: 'Capricorn',
    symbolName: 'goat',
    symbolImg: 'capricorn-blue-square.png',
    element: 'earth',
    ruler: 'Saturn',
    modality: 'cardinal',
};

const aquarius = {
    id: 'aquarius',
    name: 'Aquarius',
    symbolName: 'water bearer',
    symbolImg: 'aquarius-blue-square.png',
    element: 'air',
    ruler: 'Uranus',
    modality: 'Fixed',
};

const pisces = {
    id: 'pisces',
    name: 'Pisces',
    symbolName: 'fish',
    symbolImg: 'pisces-blue-square.png',
    element: 'water',
    ruler: 'Neptune',
    modality: 'mutable',
    planetOptions: ['sun', 'moon', 'rising'],
};

const signs = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagitarius, capricorn, aquarius, pisces];

export default signs;