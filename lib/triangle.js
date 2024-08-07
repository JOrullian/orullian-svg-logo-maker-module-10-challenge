const Shapes = require('./shapes');

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,25 75,175 225,175" fill="${this.shapeColor}" />`
    }
}

module.exports = Triangle;