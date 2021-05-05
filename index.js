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

const licenceBadges = {
    'MIT License' : ['https://img.shields.io/badge/Licence-MIT-green','A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'],
    'GNU GPLv3' : ['https://img.shields.io/badge/Licence-GNU%20GPLv3-yellowgreen','Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'],
    'Apache License 2.0' : ['https://img.shields.io/badge/Licence-Apache%202.0-brightgreen','A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'],
    'GNU AGPLv3' : ['https://img.shields.io/badge/Licence-GNU%20AGPLv3-brightgreen','Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.'],
    'Mozilla Public License 2.0' : ['https://img.shields.io/badge/Licence-Mozilla%20Public%202.0-green','Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'],
    'Boost Software License 1.0' : ['https://img.shields.io/badge/Licence-Boost%20Software%201.0-yellowgreen','A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'],
    'The Unlicense' : ['https://img.shields.io/badge/Licence-The%20Unlicense-brightgreen','A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'],
}

const generateReadMEFile = (answers) =>{
    const licence = answers.licence.trim();
    return `# ${((answers.title.trim() === "") ? 'N/A': answers.title.trim())} 
    
${'![Licence]('+licenceBadges[licence][0]+'.png)'}    

${(answers.description.trim() === "") ? '': '## Description\n\`\`\`'+answers.description.trim()+'\`\`\`'}

## Table of Contents
${(answers.installation.trim() === "") ? '': '- [Installation](#installation)'}
${(answers.usage.trim() === "") ? '': '- [Usage](#usage)'}
${(answers.contribute.trim() === "") ? '': '- [Contributing](#contributing)'}
- [License](#license)
${(answers.features.trim() === "") ? '': '- [Features](#features)'}
${((answers.email.trim() === "") && (answers.githubUsername.trim() === ""))? '':'- [Got_Any_Questions](#Got_Any_Questions)'}

${(answers.installation.trim() === "") ? '': '## Installation\n\`\`\`'+answers.installation.trim()+'\`\`\`'} 

${(answers.usage.trim() === "") ? '': '## Usage\n\`\`\`'+answers.usage.trim()+'\`\`\`'} 

${(answers.contribute.trim() === "") ? '': '## Contributing\n\`\`\`'+answers.contribute.trim()+'\`\`\`'} 

${(answers.tests.trim() === "") ? '': '## Tests\n\`\`\`'+answers.tests.trim()+'\`\`\`'} 

## License\n\`\`\`${licence}\`\`\`

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
