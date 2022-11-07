const Employee = require("./Employee");

const EngineerQuestions = [
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
    }
]


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }

}

module.exports = {Engineer, EngineerQuestions};