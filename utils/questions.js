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
        type: 'confirm',
        name: 'installConfirm',
        message: 'Would you like to add installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation proccess.',
        when: ({installConfirm})=> {
            if (installConfirm){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'usageConfirm',
        message: 'Would you like to add usage instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
        when: ({usageConfirm})=> {
            if (usageConfirm){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'contributeConfirm',
        message: 'Would you like to add contributution guidelines?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Explain the contribution guidelines you would like people to follow.',
        when: ({contributeConfirm})=> {
            if (contributeConfirm){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'testConfirm',
        message: 'Would you like to add testing instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Describe the testing proccess.',
        when: ({testConfirm})=> {
            if (testConfirm){
                return true;
            } else {
                return false;
            }
        }
    },
];

module.exports = questions;