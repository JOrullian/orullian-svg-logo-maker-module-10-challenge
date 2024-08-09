const Svg = require('../lib/svg');
const Triangle = require('../lib/triangle');
const Text = require('../lib/text');

describe('Svg', () => {
    test('should render the correct svg code', () => {
        const svg = new Svg();
        const triangle = new Triangle();
        const text = new Text();

        triangle.setColor('black');
        text.setColor('white');

        svg.setShapeSvg(triangle);
        svg.setTextSvg(text, "abc")

        const svgRendered = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
${triangle.render()}
${text.render("abc")}
</svg>`;

        expect(svg.render()).toEqual(svgRendered);
    });
});