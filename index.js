const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const questions = require('./assets/scripts/questions')
const generateHtml = require('./assets/scripts/generateHtml')

let fileName;

const promptUser = () => inquirer.prompt(questions.questions)

const init = members => {
    const staff = members ? members : []

    promptUser()
        .then(answers => {
            switch (answers.role) {
                case 'Manager':
                    const manager = new Manager(
                        answers.manager_name,
                        answers.manager_id,
                        answers.manager_email,
                        answers.manager_office
                    )
                    manager.rank = 0
                    staff.push(manager)
                    break;
                case 'Engineer':
                    const engineer = new Engineer(
                        answers.engineer_name,
                        answers.engineer_id,
                        answers.engineer_email,
                        answers.engineer_github
                    )
                    engineer.rank = 1
                    staff.push(engineer)
                    break;
                case 'Intern':
                    const intern = new Intern(
                        answers.intern_name,
                        answers.intern_id,
                        answers.intern_email,
                        answers.intern_school
                    )
                    intern.rank = 2
                    staff.push(intern)
                    break;
            }
            // Setting fileName for the first iteration because after we recurse it will be undefined since the question won't be asked.
            if (questions.firstInit) fileName = `${answers.file_name.split(' ').join('')}.html`

            // Setting firstInit to false so certain questions like file_name won't be asked again.
            questions.firstInit = false

            // If the add_new is truthy we recurse and ask the same questions with current staff object
            if (answers.add_new) return init(staff)

            // Otherwise we just make an html file or edit a current one
            fs.writeFileSync(fileName, generateHtml(staff))
        })
        .catch(err => console.error(err))
};

init()