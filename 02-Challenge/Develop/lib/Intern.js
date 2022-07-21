// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Intern extends Employee {
    // can add more parameters
    constructor(name, email, id, role, school) {
        super(name, email, id);
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
        this.school = school
    };
    getSchool() {
        return this.school
    }


}
module.exports = Intern;