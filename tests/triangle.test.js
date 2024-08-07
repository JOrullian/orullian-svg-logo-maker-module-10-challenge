const Triangle = require('../lib/triangle');
const { shapeColor } = require('../lib/cli');

describe('Triangle', () => {
    test('should render a triangle', () => {
    const expectedTriangle = `<polygon points="150,25 75,175 225,175" fill="${shapeColor}" />`
    const triangle = new Triangle();
    expect(triangle.render()).toEqual(expectedTriangle);
    })
})