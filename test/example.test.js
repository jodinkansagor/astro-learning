import { lookForPlanet } from '../src/utils';
import sun from '../data/planet-data.js';
import gemini from '../data/sign-data.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('takes in the chosen planet object and returns string of that matching planet value in signs.', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'gemini sun';
    //Act 
    // Call the function you're testing and set the result to a const
    const match = lookForPlanet(sun, gemini);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, match);
});