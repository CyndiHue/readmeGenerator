import inquirer from "inquirer";
import fs from "fs/promises";

// let {description, title} = await inquirer
let {description} = await inquirer
  .prompt([
    {
        type: 'input',
        name: 'description',
        message: "Write a description of your project",
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'What size do you need?',
    //     choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    //     filter(val) {
    //       return val.toLowerCase();
    //     }
    // }
  ]) 

 let readmeText = `# Project Description
  ${description}

  ## The second largest heading
//   $ { generateLicense(license)}
//   return strings based off of...

  ###### The smallest heading
  
  `
  fs.writeFile("README.md", readmeText)
 


//   examples for license in video
// function generateLicense(license){
//      if(license === "jumbo")
        // return "String in git hub documentation"



    //     generateLicense()
    // return `` 
//   }