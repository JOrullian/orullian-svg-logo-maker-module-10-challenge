const Square = require('../lib/square');
const { shapeColor } = require('../lib/cli');

describe('Square', () => {
    test('should render a square', () => {
    const expectedSquare = `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`
    const square = new Square();
    expect(square.render()).toEqual(expectedSquare);
    })
})