import { lookForPlanet } from '../src/utils.js';


// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('takes in the chosen planet object and returns string of that matching planet value in signs.', function(assert) {



    const array = [{
        sign: 'aries',
        planet: 'sun',
        story: 'aries sun'
    },
    {
        sign: 'aries',
        planet: 'moon',
        story: 'aries moon'
    },
    {
        sign: 'aries',
        planet: 'rising',
        story: 'aries rising'
    }];
    //Arrange
    // Set up your parameters and expectations
    const expected = 'aries moon';
    //Act 
    // Call the function you're testing and set the result to a const
    const match = lookForPlanet('aries', 'moon', array);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(match, expected);
});
