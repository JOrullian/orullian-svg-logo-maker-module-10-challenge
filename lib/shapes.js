// Shapes is the parent class of circle, square and triangle.
class Shapes {
    constructor() {
        this.shapeColor = '';
    }

    // setColor method, passed on to circle, square and triangle classes.
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    // method used in shapes.test.js
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

// Export Shapes as parent class for inheritance.
module.exports = Shapes;
