// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")


class Engineer extends Employee {
    // can add more parameters
    constructor(name, email, id, role, github) {
        super(name, email, id);
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
        this.github = github
    }
    getName = () => {
        return this.name
    }
}






module.exports = Engineer;
