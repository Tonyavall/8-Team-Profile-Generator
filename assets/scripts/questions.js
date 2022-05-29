// Callback functions. If return true the respective question will be asked.
const isManager = answers => {
    return (answers.role === 'Manager') ? true : false
}

const isEngineer = answers => {
    return (answers.role === 'Engineer') ? true : false
}

const isIntern = answers => {
    return (answers.role === 'Intern') ? true : false
}

// Questions for npm Inquirer
const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What role would you like to add?',
        choices: [
            {name: 'Manager', value: 'Manager'},
            {name: 'Engineer', value: 'Engineer'},
            {name: 'Intern', value: 'Intern'},
            {name: 'Cancel', value: false}
        ]
    },
    {
        type: 'input',
        name: 'manager_name',
        message: 'What is the name of the team manager?',
        when: isManager
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is their employee ID?',
        when: isManager
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'What is their email address?',
        when: isManager
    },
    {
        type: 'input',
        name: 'manager_office',
        message: 'What is the office number where they work?',
        when: isManager
    },
    {
        type: 'input',
        name: 'engineer_name',
        message: 'What is the name of the engineer?',
        when: isEngineer
    },
    {
        type: 'input',
        name: 'engineer_id',
        message: 'What is their employee ID?',
        when: isEngineer
    },
    {
        type: 'input',
        name: 'engineer_email',
        message: 'What is their email address?',
        when: isEngineer
    },
    {
        type: 'input',
        name: 'engineer_github',
        message: 'What is their github?',
        when: isEngineer
    },
    {
        type: 'input',
        name: 'intern_name',
        message: 'What is the name of the intern?',
        when: isIntern
    },
    {
        type: 'input',
        name: 'intern_id',
        message: 'What is their employee ID?',
        when: isIntern
    },
    {
        type: 'input',
        name: 'intern_email',
        message: 'What is their email address?',
        when: isIntern
    },
    {
        type: 'input',
        name: 'intern_school',
        message: 'What is their school?',
        when: isIntern
    },
    {
        type: 'list',
        name: 'add_new',
        message: 'Would you like to add another member?',
        choices: [
            {name: 'Yes', value: true},
            {name: 'No', value: false},
        ],
        when: answers => answers.role ? true : false
    }
]

module.exports = questions;