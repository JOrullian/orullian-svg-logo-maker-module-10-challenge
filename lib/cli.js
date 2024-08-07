const inquirer = require('inquirer');
const fs = require('fs');
const Svg = require('./svg');
const Shapes = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

class CLI {
    // constructor() {
    //     this.text = '';
    //     this.fileName = '';
    //     this.components = [];
    // }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter the characters for your logo (logo may be up to three characters in length):'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape as the background:',
                    choices: ['triangle', 'circle', 'square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Choose a background color for the shape:'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Choose a color for the text:'
                },
            ])
            .then(({ text, shape, shapeColor, textColor }) => {
                let selectedShape;

                switch(shape) {
                    case 'triangle' :
                    selectedShape = new Triangle();
                    break
                    case 'circle' :
                    selectedShape = new Circle();
                    break
                    default :
                    selectedShape = new Square();
                    break;
                }
                
                selectedShape.setColor(shapeColor);

                const svg = new Svg();

                svg.setTextSvg(text, textColor);
                svg.setShapeSvg(shape);

                return writeFile('logo.svg', svg.render());
                // console.log(`${this.fileName} created successfully!`);
                // this.fileName = `${this.text}.svg`;
            })
            .then(() => {
                console.log(`logo.svg created!`)
            })
            .catch((err) => {
                console.log(err);
                console.log('Oops, something went wrong.');
            })
    }
}

module.exports = CLI;