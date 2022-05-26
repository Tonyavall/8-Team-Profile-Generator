const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  getOfficeNumber() {
    if (this.officeNumber) {
      return this.officeNumber
    }
    return console.log('This person is not an office manager and does not have an office number logged')
  }
}

module.exports = Manager;
