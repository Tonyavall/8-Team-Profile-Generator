const inquirer = require('inquirer')
const fs = require('fs')

const questions = require('questions')
const generateHtml = require('generateHtml')

const promptUser = () => inquirer.prompt(questions)

const init = () => {
    promptUser()
        .then(answers => {
        const fileName = `${answers.fileName.split(' ').join('')}.html`
        fs.writeFileSync(fileName, generateHtml(answers))
        })
        .then(() => console.log('Successfully generated the Html'))
        .catch(err => console.err(err))
};

init();