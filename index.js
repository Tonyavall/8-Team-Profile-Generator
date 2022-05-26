const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const questions = require('./lib/questions')
const generateHtml = require('./lib/generateHtml')

const members = []

const promptUser = () => inquirer.prompt(questions)

const init = () => {
    promptUser()
        .then(answers => {
            if (!answers.role) return console.log('Canceled')

            switch(answers.role) {
                case 'Manager':
                    const manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_office)
                    members.push(manager)
                    break;
                case 'Engineer':
                    const engineer = new Engineer(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github)
                    members.push(engineer)
                    break;
                case 'Intern':
                    const intern = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school)
                    members.push(intern)
                    break;
            }
            return answers.add_new ? init() : members
        })
        .then(() => {
            if (!members.length) {
                throw new Error('No members were added.') 
            }
            fs.writeFileSync('index.html', generateHtml(members))
        })
        .then(() => console.log('Successfully generated the Html'))
        .catch(err => console.error(err))
};

init();