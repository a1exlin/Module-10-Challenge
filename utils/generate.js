// TODO: Create a function to generate markdown for HTML
// If there is no license, return an empty string
class htmlgen {
  
     
     display(data) {
   
   
       return `# ${data.name}
       ${this.renderLicenseBadge(data.license)}
       
     ## Table of Content
     -[Project description](#Description)
     -[Installations](#Installations)
     -[License](#License)
     -[Contributions](#Contributions)
     -[Tests](#Tests)
     -[Usage](#Usage)
     -[Questons](#Questions)
      
   
   ## Description
   ${data.description}
   
   ## Installation
     ${data.install}
   
     ## License
     ${data.license}
   
     ## Contributions
     ${data.contribute}
   
     ## Tests
     ${data.test}
   
     ## Usage
     ${data.usage}
   
   
     ## Questions
     ${data.username}
     ${data.address}
     
     ` ;
   
   
     }
   
   }
   // exports the code inside the file
   module.exports = new htmlgen();
   
   // A generator that is produced on the backend developer using node.js. This generator creates a professional README file which users can 
   // use to their discretion 