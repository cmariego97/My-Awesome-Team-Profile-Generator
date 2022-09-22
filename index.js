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
            choices: ['engineer', 'intern', 'none'],
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
        "dist/my-team.html",
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- link to bootstrap css -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<!-- link to google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Lato&display=swap" rel="stylesheet">
<!-- link to font awesome -->
<script src="https://kit.fontawesome.com/73525b73cb.js" crossorigin="anonymous"></script>
<!-- link to stylesheet css -->
<link rel="stylesheet" href="../src/assets/css/style.css">
<title>Title</title>
</head>

<body>
  <!-- JUMBOTRON HEADER -->
  <header>
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <h1 class="display-4">My Awesome Team</h1>
        <p class="lead">This is my amazing team! Go team!</p>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center">
        <div? class="row my-5">
`
    );
    for (let i = 0; i < myTeam.length; i++) {
        // manager team card
        if (myTeam[i].officeNumber) {
          card = 
        `
            <!-- manager team-card -->
            <div id="team-card" class="col card m-2 py-3 px-4">
                <div id="title-card" class="">
                    <h4 id="name" class="">
                    ${myTeam[i].name}
                    </h4>
                    <div id="job-role">
                    <i class="fa-solid fa-crown p-1"></i>
                    Manager
                    </div>
                </div>        
                <hr>
                <div id="employee-info" class="pt-4">
                    <ul class="px-3">
                        <p>
                        Employee ID:
                        <br>
                        <span class="p-1">${myTeam[i].id}</span>
                        </p>
                        <p>
                        E-mail:
                        <br> 
                        <span class="p-1">${myTeam[i].email}</span>
                        </p>
                        <p>
                        Office Number:
                        <br> 
                        <span class="p-1">${myTeam[i].officeNumber}</span>
                        </p>
                    </ul> 
                </div>
            </div>

`
        }
        // engineer team card
        else if (myTeam[i].github){
          card = 
        `
            <!-- engineer team-card -->
            <div id="team-card" class="col card m-2 py-3 px-4">
                <div id="title-card" class="">
                    <h4 id="name" class="">
                    ${myTeam[i].name}
                    </h4>
                    <div id="job-role">
                    <i class="fa-solid fa-glasses p-1"></i>
                    Engineer
                    </div>
                </div>
                <hr>
                <div id="employee-info" class="pt-4">
                    <ul class="px-3">
                        <p>
                        Employee ID:
                        <br>
                        <span class="p-1">${myTeam[i].id}</span>
                        </p>
                        <p>
                        E-mail:
                        <br> 
                        <span class="p-1">${myTeam[i].email}</span>
                        </p>
                        <p>
                        GitHub:
                        <br> 
                        <span class="p-1">${myTeam[i].github}</span>
                        </p>
                    </ul> 
                </div>
            </div>

            `
        }
        // intern team card
        else {
          card = 
        `
            <!-- Intern team-card -->
            <div id="team-card" class="col card m-2 py-3 px-4">
                <div id="title-card" class="">
                    <h4 id="name" class="">
                    ${myTeam[i].name}
                    </h4>
                    <div id="job-role">
                    <i class="fa-solid fa-book-open p-1"></i>
                    Intern
                    </div>
                </div>
                <hr>
                <div id="employee-info" class="pt-4">
                    <ul class="px-3">
                        <p>
                        Employee ID:
                        <br>
                        <span class="p-1">${myTeam[i].id}</span>
                        </p>
                        <p>
                        E-mail:
                        <br> 
                        <span class="p-1">${myTeam[i].email}</span>
                        </p>
                        <p>
                        School Name:
                        <br> 
                        <span class="p-1">${myTeam[i].school}</span>
                        </p>
                    </ul> 
                </div>
            </div>

        `
        };
        fs.appendFileSync("dist/my-team.html", card)
    }
    fs.appendFileSync("dist/my-team.html", 
    `
            <!-- end of row container -->
            </div>
        </div>
        <!--end of class container  -->
        </div>
    </main>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>
`
)};

managerQuestions();