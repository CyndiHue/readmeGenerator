import inquirer from "inquirer";
import fs from "fs/promises";

let {title, description, license, installation, usage, contributions, github, email, tests, questions} = await inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "Write a title for your project:",
    },

    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project:",
    },

    {
        type: 'list',
        name: 'license',
        message: 'What size do you need?',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License'],
        filter(val) {
          return val;
        }
    },

    {
      type: 'input',
      name: 'installation',
      message: "Explain the steps needed for installation",
    },
    
    {
      type: 'input',
      name: 'tests',
      message: "What test instructions should the user know",
    },
    
    {
      type: 'input',
      name: 'usage',
      message: "What are some instructions for usage of this project?",
    },

    {
      type: 'input',
      name: 'contributions',
      message: "What are some instructions for contributing to this project?",
    },
    
    {
      type: 'input',
      name: 'github',
      message: "Enter your Github so user can contact you:",
    },
    
    {
      type: 'input',
      name: 'email',
      message: "Enter your email so user can contact you:",
    },

    {
      type: 'input',
      name: 'questions',
      message: "Instructions for questions user may have:",
    }

  ]) 
  
  let readmeText = 
  `# Title
  ${title}

 ## Project Description
  ${description}

 ## Table Of Contents

  1. [License](#license)

  2. [Installation](#installation)

  3. [Usage](#usage)

  4. [Contributions](#contributions)

  5. [Tests](#tests)

  6. [Questions](#questions)


 ## License
  ${generateLicense(license)}
  
 ## Installation
  ${installation}

 ## Usage
  ${usage}

 ## Contributions
  ${contributions}
 
 ## Tests
  ${tests}
 
 ## Questions
 ${questions}

 ${github}

 [${email}](${email})

  
  `
  fs.writeFile("README.md", readmeText)
 


  // function to return license links
function generateLicense(license){
     if(license === "Apache 2.0 License"){
       return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
     }else if(license === "Boost Software License 1.0"){
       return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
     }else if(license === "BSD 3-Clause License"){
       return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
     }

     return ``
  }