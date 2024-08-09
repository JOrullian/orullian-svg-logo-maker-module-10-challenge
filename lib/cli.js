const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Svg = require('./svg');
const Shapes = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const Text = require('./text');

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
                    message: 'Please enter the characters for your logo (logo may be up to three characters in length):',
                    validate: (input) => {
                        if (input.length > 3) {
                            return 'Please use up to 3 characters.'
                        } else {
                            return true;
                        }
                    }
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
                    message: 'Choose a background color for the shape (you may enter the name of the color or its hexadecimal code):'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Choose a color for the text(you may enter the name of the color or its hexadecimal code):'
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
                
                const selectedText = new Text();

                selectedShape.setColor(shapeColor);
                selectedText.setColor(textColor);

                const svg = new Svg();

                svg.setTextSvg(selectedText, text);
                svg.setShapeSvg(selectedShape);

                return writeFile('./created/logo.svg', svg.render());
            })
            .then(() => {
                console.log(`Generated logo.svg and placed in the /created folder!`)
            })
            .catch((err) => {
                console.log(err);
                console.log('Oops, something went wrong.');
            })
    }
}

module.exports = CLI;