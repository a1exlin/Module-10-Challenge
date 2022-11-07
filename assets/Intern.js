const Employee = require("./Employee");

const InterQuestions = [
    {
        type: 'input',
        name: 'InternName',
        message: "What is your Intern's name?",
    },

    {
        type: 'input',
        name: 'InternID',
        message: 'What is their your ID?',

    },

    {
        type: 'input',
        name: 'InternEmail',
        message: 'What is their email?',

    },

    {
        type: 'input',
        name: 'School',
        message: 'What school does the Intern attend?',

    },

]

class Intern extends Employee {
    constructor(name, id, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchoo() {

        return this.school;

    }
    getRole() {

        return 'Intern';
    }
}

module.exports= {Intern, InterQuestions};


