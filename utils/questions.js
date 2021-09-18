const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation proccess.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to choose for your project?',
        choices: ['GNU GPLv3', 'MIT', 'Apache 2.0'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Explain the contribution guidelines you would like people to follow.',
        validate: contrinput => {
            if (contrinput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Describe the testing proccess.',
        validate: testinginput => {
            if (testinginput) {
                return true;
            } else {
                return false;
            }
        }
    },
];

module.exports = questions;