// Shapes is the parent class of circle, square and triangle.
class Shapes {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }

    renderSvgCode() {
        // Loop over shapes children and convert each into a string.
        return this.children
            .map((shape) => {
                if (typeof shape === 'string') {
                    return shape;
                }
                return shape.render();
            })
            .join('');
    }
}

// Export Shapes as parent class for inheritance.
module.exports = Shapes;