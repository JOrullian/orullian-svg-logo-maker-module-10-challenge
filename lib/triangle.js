const Shapes = require('./shapes');

class Triangle extends Shapes {
    render(shapeColor) {
        return `<polygon points="150,25 75,175 225,175" fill="${shapeColor}" />`
    }
}

module.exports = Triangle;