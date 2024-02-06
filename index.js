import fs, { writeFile } from 'fs';
import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     /* Pass your questions in here */

//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


// Function to ask user questions

function questionUser() {

    const questions = [
        {
            type: 'input',
            name: 'project-title',
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


// Function to get user answers 

async function getAnswers() {
    await questionUser()
    .then((answers) => {
        console.log(answers)});
    // return answers;
    // console.log(readMeQuestions);
};

getAnswers();


// Function to create user README content 

function createReadMeContent(answers) {

    let fileContent = 
    
    <p>`
        #{answers.project-title}

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
        If you have any questions on the ${answers.project-title}, please contact me at ${answers.questions}`
    </p>

    return fileContent;

};


// Function to create user README file

async function createReadMe(fileContent) {
    await createReadMeContent;
    fs.writeFile('ReadMeTesting.md', fileContent)

};