// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    // can add more parameters
    constructor(name, email, id, office,) {
        super(name, email, id);
        this.office = office;

    }
    getOffice() {
        return this.office
    }
}
module.exports = Manager;