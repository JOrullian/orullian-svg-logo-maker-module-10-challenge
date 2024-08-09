# orullian-svg-logo-maker-module-10-challenge

## Description
This is a simple CLI based logo generator that will allow users to select up to three characters, shape and colors of their logo and the app will deliver the requested logo in an .svg format.  The logo will have the appearance of up to three characters on a circle, square or triangle background with chosen colors for both the background shape and the text.  For users who do not want to spend money on graphic designers for their logo, they can make use of this app and get a functional logo in a few minutes.  The generated logo.svg can be further adjusted according to the users desires if they have the technical knowledge to do so.

As this app is CLI-based, the user will be required to access the terminal.  All user inputs will be done in the terminal after calling the app.  There may an issue with some users who have never, or who seldom, use a CLI; however, the usage section will clearly explain all instructions so that any user can use this app.

## Usage
Firstly, the user needs to ensure node.js is installed on their device; then they must install the required 'inquirer' npm package by navigating to the terminal and inputting "npm i" which will automatically install all dependencies.

The user targets the download location of the app in their terminal. An alternative to this is the user can open the source code in their editor of choice and invoke the integrated terminal. Once in the CLI, the user will input the following: 

`node ./index.js generate logo`

This will initiate the application and the user will be greeted with a series of questions to get the text, shape, and colors for the logo.  Upon completing all of the questions, the new logo will be saved to the `created` folder under the title `logo.svg`.  The logo.svg can be opened in a text editor and altered to the desires of the user.

[Tutorial Video](https://drive.google.com/file/d/1eb3QconSKekVc3T90IB1pWHgmW_YW9fs/view?usp=sharing)

## Credits
### Third-Party Assets
- inquirer
- jest
- node.js

All code is original and written by Jedediah Craig Orullian.

This project is part of an ongoing coding bootcamp.