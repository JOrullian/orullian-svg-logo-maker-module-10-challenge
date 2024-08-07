const Shapes = require('./shapes');
const Text = require('./text');

class Svg {
    constructor () {
        this.shapeSvg = '';
        this.textSvg = '';
    }

        render() {
            return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            ${this.shapeSvg}
            ${this.textSvg}
            </svg>`;
        }

        setShapeSvg(shape) {
            this.shapeSvg = shape.render();
        }

        setTextSvg(textColor, text) {
            this.textSvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
        }
}

module.exports = Svg;