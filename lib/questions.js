const questions = {
    init: [
        {
            type: 'input',
            name: 'fileName',
            message: 'What will the html file name be?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office number where they work?'
        },
    ],
    engineer: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github?'
        },
    ],
    intern: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'intern',
            message: 'What is their school?'
        },
    ]
}

module.exports = questions;