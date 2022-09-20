// packages required for this app
const inquirer = require('inquirer');
const fs = require('fs');

// const lib js files
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const myTeam = [];

// Create an array of manager questions for user input
function managerQuestions() {
    inquirer
    .prompt([
        {
            type:'input',
            message:'What is the manager\'s name?',
            name:'name',
        },
        {
            type:'input',
            message:'What is the manager\'s employee ID?',
            name:'id',
        },
        {
            type:'input',
            message:'What is the manager\'s email address?',
            name:'email',
        },
        {
            type:'input',
            message:'What is the manager\'s office number?',
            name:'officeNumber',
        },
        {
            type:'list',
            message:'Would you like to add another employee to the team?',
            choices: ['engineer', 'intern', 'none'],
            name:'newEmployee',
        },
        
    ])
    .then ((data) => {
        let employee = new Manager (data.name, data.id, data.email, data.officeNumber);
        team.push(employee);
        
        if (data.newEmployee === 'none') {
            generateTeam ()
        }
        else if (data.newEmployee === 'engineer') {
            engineerQuestions()
        }
        else {
            internQuestions()
        }
    });
};

// Create an array of engineer questions for user input
function engineerQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your engineer\'s GitHub username?',
            name: 'github',
        },
        {
            type:'list',
            message:'Would you like to add another employee to the team?',
            choices: ['engineer', 'intern', 'none'],
            name:'newEmployee',
        },
    ])
    .then ((data) => {
        let employee = new Engineer (data.name, data.id, data.email, data.github);
        team.push(employee);
        
        if (data.newEmployee === 'none') {
            generateTeam ()
        }
        else if (data.newEmployee === 'engineer') {
            engineerQuestions()
        }
        else {
            internQuestions()
        }
    });
    
}

// Create an array of intern questions for user input
function internQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your intern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your intern\'s employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your intern\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your intern\'s school name?',
            name: 'school',
        },
        {
            type:'list',
            message:'Would you like to add another employee to the team?',
            choices: ['intern', 'intern', 'none'],
            name:'newEmployee',
        },
    ])
    .then ((data) => {
        let employee = new Intern (data.name, data.id, data.email, data.school);
        team.push(employee);
        
        if (data.newEmployee === 'none') {
            generateTeam ()
        }
        else if (data.newEmployee === 'engineer') {
            engineerQuestions()
        }
        else {
            internQuestions()
        }
    });
    
}