const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github
  }
  getGithub() {
    if (this.github) {
      return this.github
    }
    return console.log('This person is not an engineer and does not have their Github logged.')
  }
}

module.exports = Engineer;
