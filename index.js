const inquirer = require('inquirer');
const fs = require('fs')
const util = require( "util" );
const generateMarkdown = require('./utils/generateMarkdown');



const appendFileAsync = util.promisify(fs.appendFile)

// array of questions for user
const questions = () => 
  inquirer.prompt([
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
    },
    {
    type: 'input',
    message: 'Description',
    name: 'description'
    },
    {
    type: 'input',
    message: 'Installation instructions',
    name: 'installation'
    },
    {
    type: 'input',
    message: 'Usage information',
    name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines',
        name: 'contribution',
    },
    {
    type: 'input',
    message: 'Test instructions',
    name: 'test'
    },
    {
    type: 'list',
    message: 'License',
    choices: ['BSD', 'MIT', 'GPL'],
    name: 'license'
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
    }
]);


// function to write README file
function writeToFile() {
    questions()
      .then((data) => appendFileAsync('README.md', generateMarkdown(data)))
      .then(() => console.log("Generating README...."))
      .catch((err) => console.log(err))

 }

// writeToFile(questions)

// function to initialize program
function init() {
    writeToFile()
}

// // function call to initialize program
init();
