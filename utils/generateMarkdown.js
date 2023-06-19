// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT':
      const mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      // console.log(mitBadge);
      break;

    case 'Apache 2.0':
      const apacheBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      // console.log(mitBadge);
      break;

    case 'GPLv3':
      const gplv3Badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      // console.log(gplv3Badge);
      break;

    default:
      // console.log('N/A');

  }

  return license;

  // return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;

}

// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  license = `${data.license}`

return `${renderLicenseBadge(license)}

## License
${license}

`;
  
};

module.exports = generateMarkdown;


// # ${data.title}

// ## Description
// ${data.description}

// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage}

// ## Contributing
// ${data.contribution}

// ## Tests
// ${data.tests}