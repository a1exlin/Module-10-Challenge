// run node index.js here
const inquirer = require('inquirer');
const fs = require('fs');
const htmlgen = require('../utils/generate.js');

function questionBank1() {
	inquirer
		.prompt([
			{
				type: 'input',
				message: 'Welcome Team Manager, What is your name?',
				name: 'ManagerName',
			},

			{
				type: 'input',
				message: 'Please enter your employee ID',
				name: 'ID',
			},

			{
				type: 'input',
				message: 'What is your email address? ',
				name: 'email',
			},
			{
				type: 'list',
				message: "Please select your employee's status",
				choices: ["Engineer", "Intern",],
				name: "status",


				// filter function prints out userinput choice
				filter(val) {

					return val.toLowerCase();
				}
			}
		])

		.then(answer => {
			if (answer.menuoption === "Engineer") {
				questionBank2();
			}
			if (answer.menuoption === "Intern") {
				questionBank3();
			}
			if(answer.menuoption === "exit") {

			}
		});
}

function questionBank2() {
	inquirer
		.prompt([

			{
				type: 'input',
				message: 'What is your name engineer?',
				name: 'engineerName',
			},
			{
				type: 'input',
				message: 'What is your ID?',
				name: 'engineerID',
			},
			{
				type: 'input',
				message: 'What is your email address?',
				name: 'engineerEmail',
			},
			{
				type: 'input',
				message: 'What is your Github username?',
				name: 'Github',
			},

		])
		.then(answer => {
			console.log(answer.second);
			questionBank1();
		});
}

function questionBank3() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'InternName',
				message: 'Welcome Intern, what is your name?',
			},

			{
				type: 'input',
				name: 'InternID',
				message: 'What is your ID?',

			},

			{
				type: 'input',
				name: 'InternEmail',
				message: 'What is your email?',

			},

			{
				type: 'input',
				name: 'School',
				message: 'What school do you attend?',

			},
		])
		.then(answer => {
			console.log(answer.third);
			questionBank1();
		});
}


// function to run the questions on terminal
function readQuestion() {
    return inquirer.prompt(readQuestion)

        .then((data) => {
            const mark = htmlgen.display(data)
            fs.writeFile('index.html', mark, function (err) {
                if (err) {
                    console.log(mark);
                    console.log("filed could not be saved");
                }
                else {
                    console.log('Sucess!');
                    console.log('Generating HTML file...');
                }

            })

        })
        .catch((error) => {
            console.log(error);
        });
}

// calling the function back
questionBank1();
readQuestion();

