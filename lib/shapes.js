// Shapes is the parent class of circle, square and triangle.
class Shapes {
    constructor() {
        this.shapeColor = '';
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    // render() {
    //     throw new Error('Child class must implement a render() method.');
    // }

    // renderSvgCode(shape, shapeColor) {
    //     let selectedShape;
    //     if (shape === 'triangle') {
    //         selectedShape = new Triangle().render(shapeColor);
    //     } else if (shape === 'circle') {
    //         selectedShape = new Circle().render(shapeColor);
    //     } else if (shape === 'square') {
    //         selectedShape = new Square().render(shapeColor);
    //     }

    //     return selectedShape;
    // }
}

// Export Shapes as parent class for inheritance and exports renderSvgCode function.
module.exports = Shapes;
