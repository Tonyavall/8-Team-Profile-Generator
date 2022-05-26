const isManager = answers => {
    if (answers.role === 'Manager') {
        return true
    }
    return false
}

const isEngineer = answers => {
    if (answers.role === 'Engineer') {
        return true
    }
    return false
}

const isIntern = answers => {
    if (answers.role === 'Intern') {
        return true
    }
    return false
}

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Hello, what role would you like to add?',
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
        message: 'Hello, would you like to add another member?',
        choices: [
            {name: 'Yes', value: true},
            {name: 'No', value: false},
        ],
        when: function(answers) {
            if (!answers.role) {
                return false
            }
            return true
        },
    }
]

module.exports = questions;