// Packages required
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [{
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use:',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide guidlines how other developers can contribute to your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide guidlines how to run tests for your project:',
        },
        {
            type: 'input',
            name: 'features',
            message: 'What are the features of your project?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email ID?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?',
        },
        {
          type: 'list',
          message: 'Which licence would you like to choose for your project?',
          name: 'licence',
          choices: ['MIT License', 'GNU GPLv3','GNU AGPLv3', 'Mozilla Public License 2.0','Apache License 2.0','Boost Software License 1.0','The Unlicense'],
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
