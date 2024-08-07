const inquirer = require('inquirer');
const fs = require('fs');
const { createSvgCode } = require('./svg');

class CLI {
    constructor() {
        this.title = '';
        this.components = [];
    }

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
            .then(() => {
                this.fileName = `${text}.svg`
                
                this.components.push({ text, shape, shapeColor, textColor })
            })
            .then(() => {
                return fs.writeFile(this.fileName, createSvgCode(this.text, this.shape, this.shapeColor, this.textColor));
            })
            .then(() => {
                console.log(`${text}.svg created!`)
            })
            .catch((err) => {
                console.log(err);
                console.log('Oops, something went wrong.');
            })
    }
}

module.exports = CLI;