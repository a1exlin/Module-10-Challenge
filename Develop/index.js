// run node index.js here
const inquirer = require('inquirer');
const template = require('../sources/template');
const fs = require('fs');
const generate = require('../utils/generate.js');
const {Manager, ManagerQuestions} = require('../assets/Manager');
const {Engineer, EngineerQuestions} = require('../assets/Engineer');
const {Intern, InterQuestions} = require('../assets/Intern');


// code below will be sent into this Employee array when code is running on node.js
const Employees = [];

const display = () => {
	managerQ();
}
const managerQ =() => {
	inquirer.prompt(ManagerQuestions)

	.then((answers) =>{
		let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
		Employees.push(manager);
		return EmployeesPrompt();
	})

}

const EngineerQ =() => {
	inquirer.prompt(EngineerQuestions) 
	.then((answers) => {
		let engineer = new Engineer(answers.name, answers.id, answers.github);
		Employees.push(engineer);
		return EmployeesPrompt();
	})

}
const InternQ =() => {
	inquirer.prompt(InterQuestions)
	.then((answers) => {
		let intern = new Intern(answers.name, answers.id, answers.email, answers.school)

		Employees.push(intern);
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
			{name: 'finished', value: 'finished'},
		]
	}])

	.then(answer => {
		if(answer.employeeType === 'addEngineer') { EngineerQ();};
		if(answer.employeeType === 'addintern') { InternQ();};
		if(answer.employeeType === 'finished')  {
			let html = template(Employees)
			console.log('...');
			fs.writeFile(html);

		}
	})
};

display();
