const Shapes = require('./shapes');
const { shapeColor } = require('./cli');

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${shapeColor}" />`
    }
}

module.exports = Circle;