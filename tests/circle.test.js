const Circle = require('../lib/circle');
const { shapeColor } = require('../lib/cli');

describe('Circle', () => {
    test('should render a circle', () => {
    const expectedCircle = `<circle cx="150" cy="100" r="75" fill="${shapeColor}" />`
    const circle = new Circle();
    expect(circle.render()).toEqual(expectedCircle);
    })
})