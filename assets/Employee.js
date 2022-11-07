// starter code for all team members
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    
    getID() {
        return this.id;
    }

    getStatus() {
        return 'Employee'
    }

    getRole() {
        return 'Employee'
    }
    
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;