const inquirer = require("inquirer")
const _without = require("lodash/without")
const fs = require("fs")
const path = require('path')

module.exports = {
  selectTheme: () => {
    const filelist = _without(fs.readdirSync(path.join(__dirname, "../temas")))
    const questions = [
      {
        type: "list",
        name: "tema",
        message: "Selecione o tema que deseja utilizar no sistema:",
        choices: filelist,
        default: "",
      },
    ]
    return inquirer.prompt(questions)
  },
}
