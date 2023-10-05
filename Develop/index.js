const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (data) =>
  `# <${data.title}>

  ## Description

  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  
      
  
  ## Credits
  ${data.credits}
  
 
  
  ## License
${data.license}
  
  ---
  
 
  `

  
  
  
  
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title', //answer labeled 
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of the project?', //message user will be asked 
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is teh installation of the project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of the project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter your licenses for the project',
    },
    
  ])
  .then((answers) => {
    const ReadMeContent = generateReadMe(answers);

    fs.writeFile('ReadMe.md', ReadMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );
  });

