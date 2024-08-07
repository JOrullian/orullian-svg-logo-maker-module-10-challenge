const Shapes = require('./shapes');
const { shapeColor } = require('./cli');

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,25 75,175 225,175" fill="${shapeColor}" />`
    }
}

module.exports = Triangle;