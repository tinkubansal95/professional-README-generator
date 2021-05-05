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
            message: 'Please provide examples for use:',
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

const generateReadMEFile = (answers) =>{
    return `# ${(answers.title.trim() === "") ? 'N/A': answers.title.trim() }
    
 ${(answers.description.trim() === "") ? '': '## Description\n\`\`\`'+answers.description.trim()+'\`\`\`'}

## Table of Contents
${(answers.installation.trim() === "") ? '': '- [Installation](#installation)'}
${(answers.usage.trim() === "") ? '': '- [Usage](#usage)'}
${(answers.contribute.trim() === "") ? '': '- [Contributing](#contributing)'}
${(answers.licence.trim() === "") ? '': '- [License](#license)'}
${(answers.features.trim() === "") ? '': '- [Features](#features)'}
${((answers.email.trim() === "") && (answers.githubUsername.trim() === ""))? '':'- [Got_Any_Questions](#Got_Any_Questions)'}

${(answers.installation.trim() === "") ? '': '## Installation\n\`\`\`'+answers.installation.trim()+'\`\`\`'} 

${(answers.usage.trim() === "") ? '': '## Usage\n\`\`\`'+answers.usage.trim()+'\`\`\`'} 

${(answers.contribute.trim() === "") ? '': '## Contributing\n\`\`\`'+answers.contribute.trim()+'\`\`\`'} 

${(answers.tests.trim() === "") ? '': '## Tests\n\`\`\`'+answers.tests.trim()+'\`\`\`'} 

${(answers.licence.trim() === "") ? '': '## License\n\`\`\`'+answers.licence.trim()+'\`\`\`'} 

${(answers.features.trim() === "") ? '': '## Features\n\`\`\`'+answers.features.trim()+'\`\`\`'} 

${((answers.email.trim() === "") && (answers.githubUsername.trim() === ""))? '': '## Got_Any_Questions\nFeel free to reach me through\n'+((answers.email.trim() === "") ? '': answers.email.trim())+'\n'+((answers.githubUsername.trim() === "") ? '': '\nhttps://github.com/'+answers.githubUsername.trim())}
`;
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMEPageContent = generateReadMEFile(answers);
    
        fs.writeFile('SampleREADME.md', readMEPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created Sample README.md!')
        );
      });
}

// Function call to initialize app
init();
