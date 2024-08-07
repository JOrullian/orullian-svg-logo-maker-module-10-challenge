const Shapes = require('./shapes');

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />`
    }
}

module.exports = Circle;