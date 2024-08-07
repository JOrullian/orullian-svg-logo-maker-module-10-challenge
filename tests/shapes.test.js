const Shapes = require('../lib/shapes');

describe('Shapes', () => {
    test('should throw error if render is called', () => {
        const shapes = new Shapes();

        expect(() => shapes.render()).toThrowError('Child class must implement a render() method.');
    });
});