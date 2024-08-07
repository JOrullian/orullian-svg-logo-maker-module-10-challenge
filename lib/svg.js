const Shapes = require('./shapes');
const Text = require('./text');


function createSvgCode(selectedText, shape, shapeColor) {
    const shapeSvg = Shapes.renderSvgCode(shape, shapeColor);
    const textSvg = new Text().render(selectedText);

    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    ${textSvg}
    </svg>`;
}

module.exports = { createSvgCode };