const Shapes = require('./shapes');
const { shapeColor } = require('./cli');

class Square extends Shapes {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`
    }
}

module.exports = Square;