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
        myTeam.push(employee);
        
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
        myTeam.push(employee);
        
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
        myTeam.push(employee);
        
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

// function generate team
function generateTeam() {
    fs.writeFileSync(
        "dist/team.html",
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Title</title>
        </head>
        <body>
            <div class="container">
                <div? class="row">
        `
    );
    for (let i = 0; i < myTeam.length; i++) {
        if (myTeam[i].officeNo) {
          card = 
          `<div class="col card">
          Manager
          <p>${myTeam[i].name}</p>
          <p>id:${myTeam[i].id}</p>
          <p>Email:${myTeam[i].email}</p>
          <p>Office Number:${myTeam[i].officeNo}</p>
           </div>`
        }else if (myTeam[i].github){
          card = 
          `<div class="col card">
          Engineer
          <p>${myTeam[i].name}</p>
          <p>id:${myTeam[i].id}</p>
          <p>Email:${myTeam[i].email}</p>
          <p>Github:${myTeam[i].github}</p>
           </div>`
        }else {
          card = 
          `<div class="col card">
          Intern
          <p>${myTeam[i].name}</p>
          <p>id:${myTeam[i].id}</p>
          <p>Email:${myTeam[i].email}</p>
          <p>School:${myTeam[i].school}</p>
          </div>`
        };
        fs.appendFileSync("dist/team.html", card)
    }
    fs.appendFileSync("dist/team.html", 
    `
    </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    </body>
    </html>`)
}

managerQuestions();