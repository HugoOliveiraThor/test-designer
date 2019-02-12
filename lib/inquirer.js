const inquirer = require("inquirer")
const _without = require("lodash/without")
const fs = require("fs")

module.exports = {
  selectTheme: () => {
    const filelist = _without(fs.readdirSync("./dist/temas/"))
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
