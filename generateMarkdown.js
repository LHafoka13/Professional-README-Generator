// function to generate markdown for README
function generateMarkdown(data) {
  
  if (`${data.license}` === 'BSD') {
  return `# ${data.title}  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) Note: This application is covered under BSD.   
  # Table of Contents
  [Description](#Description)  
  [Installation](#Installation)  
  [Usage](#Usage-Information)  
  [Contribution](#Contribution-Guidelines)  
  [Test](#Test-Instructions)  
  # Description
  ${data.description}  
  # Installation
  ${data.installation}
  # Usage-Information
  ${data.usage}
  # Contribution-Guidelines
  ${data.contribution}
  # Test-Instructions
  ${data.test}
  # Questions  
  If you have any additional questions about this application, feel free to contact me via GitHub or Email:  
  [GitHub](https://github.com/${data.github})  
  [Email](${data.email})
  `
  } else if (`${data.license}` === 'MIT') {

   return `# ${data.title}  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)} Note: This application is covered under MIT. 
  # Table of Contents
  [Description](#Description)  
  [Installation](#Installation)  
  [Usage](#Usage-Information)   
  [Contribution](#Contribution-Guidelines)  
  [Test](#Test-Instructions)  
  # Description
  ${data.description}  
  # Installation
  ${data.installation}
  # Usage-Information
  ${data.usage}
  # Contribution-Guidelines
  ${data.contribution}
  # Test-Instructions
  ${data.test}
  # Questions  
  If you have any additional questions about this application, feel free to contact me via GitHub or Email:   
  [GitHub](https://github.com/${data.github})  
  [Email](${data.email})
  `
  } else if (`${data.license}` === 'GPL') {
       return `# ${data.title}  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) Note: This application is covered under GPL.
  # Table of Contents
  [Description](#Description)  
  [Installation](#Installation)  
  [Usage](#Usage-Information)   
  [Contribution](#Contribution-Guidelines)  
  [Test](#Test-Instructions)   
  # Description
  ${data.description}  
  # Installation
  ${data.installation}
  # Usage-Information
  ${data.usage}
  # Contribution-Guidelines
  ${data.contribution}
  # Test-Instructions
  ${data.test}
  # Questions  
  If you have any additional questions about this application, feel free to contact me via GitHub or Email:   
  [GitHub](https://github.com/${data.github})  
  [Email](${data.email})
  `
  }

}

module.exports = generateMarkdown;
