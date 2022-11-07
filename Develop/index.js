// run node index.js here
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('../utils/generate.js');
const { Engineers, EngineerQ } = require('../assets/Engineer.js');

const {Manager, ManagerQuestions} = require('./assets/Manager.js');
const {Engineer, EngineerQuestions} = require('./assets/Engineer');
const {Intern, InterQuestions} = require('./assets/Intern');
const { init } = require('../../Project-2/models/User.js');

// code below will be sent into this Employee array when code is running on node.js
const Employees = [];

const display = () => {
	managerQ
}
const managerQ =() => {
	inquirer.prompt(ManagerQuestions)

	.then((answers) =>{
		answer = new Manager(answer.name, answers.id, answers.email, answers.officeNum)
		return EmployeesPrompt();
	})

}

const engineerQ =() => {
	inquirer.promt(EngineerQuestions) 
	.then((answers) => {
		answers = new Engineers(answer.name, answer.id, answers.github);
		Employees.push(answers);
		return EmployeePrompts();
	})

}
const InternQ =() => {
	inquirer.prompt(InterQuestions)
	.then((answers) => {
		answers = new Intern(answers.name, answers.id, answers.email, answers.school)

		display.push(answers);
		return EmployeesPrompt();
	})
}

const EmployeesPrompt = () => {
	inquirer.prompt([{
		type: 'list',
		name: 'employeeType',
		message: 'What kind of team member would you like to add?',
		choices: [
			{name: 'Engineer', value:  'addEngineer'},
			{name: 'Intern', value: 'addIntern'},
		]
	}])
	.then(answer => {
		if(answer.employeeType === 'addEngineer') { engineerQ();};
		if(answer.employeeType === 'addintern') { internQ();};
		if(answer.employeeType === 'finished')  {
			let html = template(Employees)
			console.log('...');
			fs.writeFile(html);

		}
	})
};

display();