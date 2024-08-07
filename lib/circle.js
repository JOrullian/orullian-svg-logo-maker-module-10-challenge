const Shapes = require('./shapes');

class Circle extends Shapes {
    render(shapeColor) {
        return `<circle cx="150" cy="100" r="75" fill="${shapeColor}" />`
    }
}

module.exports = Circle;