// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")


class Engineer extends Employee {
    // can add more parameters
    constructor(name, id, email, github) {
        super(name, id, email,);
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = github
    }
    getName() {
        return this.name
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}






module.exports = Engineer;
