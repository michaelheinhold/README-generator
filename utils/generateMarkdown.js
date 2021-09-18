// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU GPLv3') {
    return "[!['License: GPL v3']('https://img.shields.io/badge/License-GPLv3-blue.svg')]('https://www.gnu.org/licenses/gpl-3.0')"
  } else if (license === 'MIT'){
    return "[!['License: MIT']('https://img.shields.io/badge/License-MIT-yellow.svg')]('https://opensource.org/licenses/MIT')"
  } else {
    return "[!['License']('https://img.shields.io/badge/License-Apache%202.0-blue.svg')]('https://opensource.org/licenses/Apache-2.0')"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU GPLv3') {
    return 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  } else if (license === 'MIT'){
    return 'https://spdx.org/licenses/MIT.html'
  } else {
    return 'https://spdx.org/licenses/Apache-2.0.html'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);

  return `
  This application is licensed under the [${license}](${licenseLink}) license.
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  To install ${data.title} onto your computer, type this code into your terminal:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
`;
}

module.exports = generateMarkdown;
