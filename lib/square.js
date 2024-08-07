const Shapes = require('./shapes');

class Square extends Shapes {
    render(shapeColor) {
        return `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`
    }
}

module.exports = Square;