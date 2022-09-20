const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super pulls info from Employee.js
        super(name, id, email)
        this.github = github;
    } 
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
};

// export module
module.exports = Engineer;