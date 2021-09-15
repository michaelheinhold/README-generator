// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

// TODO: Create an array of questions for user input
//*created a seperate file

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw err;

        console.log('Success! README created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const fileName = `README.md`;
            writeToFile(fileName, answers);
            console.log(answers);
        })
};

// Function call to initialize app
init();
