const Employee = require("./Employee");

const ManagerQuestions = [

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

        type: 'input',
        name: 'officeNum',
        message: "What is your office number?",
    }
]

class Manager extends Employee {
    constructor(name, id, email, officeNum) {

    
        super(name, id, email,);
        this.officeNum = officeNum;

    }


    getRole() {

        return 'Manager'
    }

    getOfficeNum() {

        return this.officeNum;
    }

}

 
module.exports = { Manager, ManagerQuestions };
