const inquirer = require('inquirer')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const fs = require('fs')
const generateTeam = require('./util/generateHtml.js')
const generateHtml = require('./util/generateHtml.js')

const team = []


const start = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ["Manager Sign in", "Add Engineer", "Add Intern", "Close Application"],
            message: 'Hello what would you like to do?',
            name: 'selection'
        }]).then(ans => {
            switch (ans.selection) {

                case "Manager Sign in":
                    addManager()
                    break;
                case "Add Engineer":
                    addEngineer()
                    break;
                case "Add Intern":
                    addIntern()
                    break;
                case "Close Application":
                    finish()
                    break;
                default:
                    console.log("thanks for using our software!")
                    break;
            }
        })
}

const addManager = () => {

    inquirer.prompt([
        {
            type: 'Input',
            message: "Hello Manager! What is your Name?",
            name: 'managerName',
        },
        {
            type: 'Input',
            message: "What is your Email??",
            name: 'managerEmail',
        },
        {
            type: 'Input',
            message: "What is your Employee ID?",
            name: 'managerId',
        },
        {
            type: 'Input',
            message: "What is your office number??",
            name: 'managerOfficeNumber',
        },

    ]).then(ans => {
        let manager = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOfficeNumber)
        console.log(`Welcome  ${ans.managerName}`)
        team.push(manager)
        console.log(`${ans.managerName} has been added, go get them`)

        start()
    })
}


const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'Input',
            message: "What is the Engineers Name?",
            name: 'engineerName',
        },
        {
            type: 'Input',
            message: "What is the Engineers Email?",
            name: 'engineerEmail',
        },
        {
            type: 'Input',
            message: "What is the Engineers ID ?",
            name: 'engineerId',
        },
        {
            type: 'Input',
            message: "What is the Engineers GitHub account?",
            name: 'engineerGitHub',
        },
    ]).then(ans => {
        let engineer = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGitHub)
        console.log(`Welcome  ${ans.engineerName}`)
        team.push(engineer)
        console.log(`${ans.engineerName} has been added.`)


        start()
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'Input',
            message: "What is the Interns name?",
            name: 'internName',
        },
        {
            type: 'Input',
            message: "What is the Interns Email??",
            name: 'internEmail',
        },
        {
            type: 'Input',
            message: "What is the Interns Employee ID?",
            name: 'internId',
        },
        {
            type: 'Input',
            message: "Where is the Intern attending school??",
            name: 'internSchool',
        },
    ]).then(ans => {
        let intern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool)
        console.log(`Welcome  ${ans.internName}`)
        team.push(intern)
        console.log(`${ans.internName} has been added, now get me some coffee.`)

        start()
    })
}

const finish = () => {

    const template = generateHtml(team)
    // fs.writeFile('index.html', template, (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // )
    writeFile(template)

}

const writeFile = (data) => {
    fs.writeFile('index.html', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};



start()

