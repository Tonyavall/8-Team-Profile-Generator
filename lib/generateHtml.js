const Employee = require('./Employee')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

const generateMembers = members => {
    const membersDOM = []

    members
    // Sorts all members based on ranking.
    .sort((member1, member2) => {
        let compare = 0

        return (member1.rank > member2.rank) ? compare = 1
            : (member1.rank < member2.rank) ? compare = -1
            : compare
    })
    // Pushes respective DOM elements role for each member
    .forEach(member => {
        switch(member.getRole()) {
            case 'Manager':
                membersDOM.push(
            `<div id="member">
                <div class="title">
                    <h2 id="name">
                        ${member.getName()}
                    </h2>
                    <h3 id="role">
                        ${member.getRole()}
                    </h3>
                </div>
                <div class="info">
                    <div class="pair">
                        <p id="pair-info">
                            Id
                        </p>
                        <p>
                            ${member.getId()}
                        </p>
                    </div>
                    <div class="pair">
                        <p id="pair-info">
                            Email
                        </p>
                        <p>
                            ${member.getEmail()}
                        </p>
                    </div>
                    <div class="pair">
                        <p id="pair-info">
                            Office
                        </p>
                        <p>
                            ${member.getOfficeNumber()}
                        </p>
                    </div>
                </div>
            </div>
            `
                )
                break;
            case 'Engineer':
                membersDOM.push(
            `<div id="member">
                <div class="title">
                    <h2 id="name">
                        ${member.getName()}
                    </h2>
                    <h3 id="role">
                        ${member.getRole()}
                    </h3>
                </div>
                <div class="info">
                    <div class="pair">
                        <p id="pair-info">
                            Id
                        </p>
                        <p>
                            ${member.getId()}
                        </p>
                    </div>
                    <div class="pair">
                        <p id="pair-info">
                            Email
                        </p>
                        <p>
                            ${member.getEmail()}
                        </p>
                    </div>
                    <div class="pair">
                        <p id="pair-info">
                            Github
                        </p>
                        <p>
                            ${member.getGithub()}
                        </p>
                    </div>
                </div>
            </div>
            `
                )
                break;
            case 'Intern':
                membersDOM.push(
            `<div id="member">
                <div class="title">
                    <h2 id="name">
                        ${member.getName()}
                    </h2>
                    <h3 id="role">
                        ${member.getRole()}
                    </h3>
                </div>
                <div class="info">
                    <div class="pair">
                        <p id="pair-info">
                            Id
                        </p>
                        <p>
                            ${member.getId()}
                        </p>
                    </div>
                    <div class="pair">
                        <p id="pair-info">
                            Email
                        </p>
                        <p>
                            ${member.getEmail()}
                        </p>
                    </div>
                    <div class="pair">
                        <p id="pair-info">
                            School
                        </p>
                        <p>
                            ${member.getSchool()}
                        </p>
                    </div>
                </div>
            </div>`
                )
                break;
            default:
                console.log('This member was not found. Line 20, generateHtml')
                break;
        }
    })
    
    // Returning a concatenated html using partial sums
    return membersDOM.reduce(
        (partialSum, member) => partialSum + member,
    )
}

const generateHtml = members => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    <article>
        <h1>
            Here's the Team
        </h1>

        <section>
            ${generateMembers(members)}
        </section>
    </article>
</body>
</html>`
}

module.exports = generateHtml;