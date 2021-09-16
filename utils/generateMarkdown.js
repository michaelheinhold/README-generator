// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//sections that depend on user selection
const generateInstall = installation => {
  if(!installation){
    return ''
  } else {
    return `
  ## Installation
  To install this on your computer type the following code into your terminal:
  \`\`\`
  ${installation}
  \`\`\``
  }
}

const generateUsage = usage => {
  if(!usage){
    return ''
  } else {
    return `
  ## Usage
  ${usage}`
  }
}

const generateContribution = contribution => {
  if(!contribution){
    return ''
  } else {
    return `
  ## How To Contribute
  ${contribution}`
  }
}

const generateTesting = testing => {
  if(!testing){
    return ''
  } else {
    return `
  ## Testing
  ${testing}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ${generateInstall(data.installation)}
  ${generateUsage(data.usage)}
  ${generateContribution(data.contribution)}
  ${generateTesting(data.testing)}
`;
}

module.exports = generateMarkdown;
