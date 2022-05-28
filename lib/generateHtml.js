const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

const generateMembers = answer => {
    const allMembers = []

    answer.forEach(member => {
        switch(member.getRole()) {
            case 'Manager':
                allMembers.push(`${member.getName()} Im a Manager`)
                break;
            case 'Engineer':
                allMembers.push(`${member.getName()} Engi`)
                break;
            case 'Intern':
                allMembers.push(`${member.getName()} Intern`)
                break;
            default:
                console.log('This member was not found. Line 20, generateHtml')
                break;
        }
    })
            
    console.log(allMembers)
    
    // Returning a concatenated html using a partial sums algo
    return allMembers.reduce(
        (partialSum, member) => partialSum + member,
    )
}

const generateHtml = answer => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    ${generateMembers(answer)}
</body>
</html>`
}

module.exports = generateHtml;