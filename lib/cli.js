const inquirer = require('inquirer');

class CLI {
    constructor() {
        this.components = [];
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'logo',
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
            .then(({ logo, shape, shapeColor, textColor }) => {
                this.logo = logo;
                this.shape = shape;
                this.shapeColor = shapeColor;
                this.textColor = textColor;
                
                this.components.push({ logo, shape, shapeColor, textColor })
            })
            .then(() =>  {

            })
            .catch((err) => {
                console.log(err);
                console.log('Oops, something went wrong.');
            })
    }
}

module.exports = CLI;