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
            type: 'input',
            name: 'contribution',
            message: "List your collaborators, if any, with their GitHub profile URL extension (e.g. for https://github.com/mitchjsutherland, you should enter mitchjsutherland only):",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here:",
        },
        {
            type: 'input',
            name: 'questions',
            message: "What email address can you be contacted on if a user has questions about your application?",
        },
    ];

    return inquirer.prompt(questions);
};



// Function to create user README content 

function createReadMeContent(answers) {

    let fileContent = 

    `#${answers.title}

    ## Description
    ${answers.description}

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contribution
    ${answers.contribution}

    ## Tests
    ${answers.tests}

    ## Questions
    If you have any questions on the ${answers.title}, please contact me at ${answers.questions}`

    return fileContent;

};



// Function to create user README file

async function createReadMe() {
    let answers = await questionUser();
    let content = createReadMeContent(answers);
    // console.log(content);
    await fs.writeFile('ReadMeTesting.md', content, (error) =>
    error ? console.error(error) : console.log('Success! Your read me has been saved.'))
};

createReadMe();