const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // super pulls info from Employee.js
        super(name, id, email)
        this.school = school;
    } 
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};

// export module
module.exports = Intern;