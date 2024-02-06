import fs, { writeFile } from 'fs';
import inquirer from 'inquirer';



// Function to ask user questions

function questionUser() {

    let questions = [
        {
            type: 'input',
            name: 'title',
            message: "What's your project called?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please provide a description of the project:",
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use. Include screenshots as needed:",
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select a license type for this project:",
            choices: [
                {
                    name: 'Apache License 2.0', 
                    value: 'Apache License 2.0',
                    // short:
                },
                {
                    name:  'GNU General Public License v3.0',
                    value: 'GNU General Public License v3.0',
                    // short:
                },
                {
                    name: 'MIT',
                    value: 'MIT',
                    // short:
                },
                {
                    name: 'BSD 2-Clause "Simplified" License',
                    value: 'BSD 2-Clause "Simplified" License',
                    // short:
                },
                {
                    name: 'BSD 3-Clause "New" or "Revised License',
                    value: 'BSD 3-Clause "New" or "Revised License',
                    // short:
                },
                {
                    name: 'Boost Software License',
                    value: 'Boost Software License',
                    // short:
                },
                {
                    name: 'Creative Commons Zero v1.0 Universal',
                    value: 'Creative Commons Zero v1.0 Universal',
                    // short:
                },
                {
                    name: 'Eclipse Publish License 2.0',
                    value: 'Eclipse Publish License 2.0',
                    // short:
                },
                {
                    name: 'GNU Affero General Public License v3.0',
                    value: 'GNU Affero General Public License v3.0',
                    // short:
                },
                {
                    name: 'GNU General Public License v2.0',
                    value: 'GNU General Public License v2.0',
                    // short:
                },
                {
                    name: 'GNU Lesser General Public License v3.0',
                    value: 'GNU Lesser General Public License v3.0',
                    // short: 
                },
                {
                    name: 'Mozilla Public License 2.0',
                    value: 'Mozilla Public License 2.0',
                    // short:
                },
                {
                    name: 'The Unilicense',
                    value: 'The Unilicense'
                    // short:
                },
                {
                    name: 'The WTF***PL',
                    value: 'The WTF***PL'
                    // short:
                },
            ],
        },
        {
            type: 'input',
            name: 'contribution',
            message: "List your collaborators, if any, with their GitHub profile URL extension (e.g. for https://github.com/mitchjsutherland, you should enter mitchjsutherland only):",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Here you can provide tests for your application. Then provide examples on how to run them here:",
        },
        {
            type: 'input',
            name: 'questions',
            message: "What email address can you be contacted on if a user has questions about your application?",
        },
    ];

    return inquirer.prompt(questions);
};


// Determine the selected license and set the badge link accordingly



// Function to create user README content 

function createReadMeContent(answers) {

    let licenseBadge;

    switch (answers.license) {
        case 'Apache License 2.0':
            licenseBadge = '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
            break;

        case 'GNU General Public License v3.0':
            licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
            break;

        case 'MIT':
            licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
            break;

        case 'BSD 2-Clause "Simplified" License':
            licenseBadge = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
            break;   

        case 'BSD 3-Clause "New" or "Revised License':
            licenseBadge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
            break;

        case 'Boost Software License':
            licenseBadge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
            break;

        case 'Creative Commons Zero v1.0 Universal':
            licenseBadge = '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
            break; 

        case 'Eclipse Publish License 2.0':
            licenseBadge = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
            break; 

        case 'GNU Affero General Public License v3.0':
            licenseBadge = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
            break; 

        case 'GNU General Public License v2.0':
            licenseBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
            break; 

        case 'GNU Lesser General Public License v3.0':
            licenseBadge = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
            break; 

        case 'Mozilla Public License 2.0':
            licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
            break; 

        case 'The Unilicense':
            licenseBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
            break;

        case 'The WTF***PL':
            licenseBadge = '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)';
            break;

        default:
            licenseBadge = '';

    }


let fileContent = 

`# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
[Installation](#installation) <br>
[Usage](#usage) <br>
[License](#license) <br>
[Contributing](#contributing) <br>
[Tests](#tests) <br>
[Questions](#questions) <br>

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
The license for this project is ${answers.license}.



## Contributing
[${answers.contribution}](https://github.com/${answers.contribution})

## Tests
${answers.tests}

## Questions
If you have any questions on the ${answers.title}, you can email ${answers.questions} for more information.`

    return fileContent;

};



// Function to create user README file

async function createReadMe() {
    let answers = await questionUser();
    let content = createReadMeContent(answers);
    // console.log(content);
    await fs.writeFile('ReadMeTesting4.md', content, (error) =>
    error ? console.error(error) : console.log('Success! Your read me has been saved.'))
};

createReadMe();