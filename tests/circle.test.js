const Circle = require('../lib/circle');

describe('Circle', () => {
    test('should render a circle', () => {
    const circle = new Circle();
    const shapeColor = circle.setColor('blue');

    const expectedCircle = `<circle cx="150" cy="100" r="75" fill="blue" />`;
    expect(circle.render()).toEqual(expectedCircle);
    })
})