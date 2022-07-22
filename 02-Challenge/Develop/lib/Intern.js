// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Intern extends Employee {
    // can add more parameters
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school
    };
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }


}
module.exports = Intern;