const Employee = require("./Employee");

const InternQuestions = [
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
    constructor(name, id, school, InternEmail) {
        super(name, id, InternEmail);
        this.school = school;
    }

    getRole() {

        return 'Intern';
    }
    getSchool() {

        return this.school;

    }

 
}

module.exports= {Intern, InternQuestions};


