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

        setTextSvg(textClass, textString) {
            this.textSvg = textClass.render(textString);
        }
}

module.exports = Svg;