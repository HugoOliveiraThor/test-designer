const _ = require("lodash")
const path = require("path")
const CLI = require("clui")
const Spinner = CLI.Spinner
const inquirer = require("./inquirer")
const replace = require("replace-in-file")

module.exports = {
  setTheme: async () => {
    const answers = await inquirer.selectTheme()
    if (answers) {
      console.log(_options(answers))
      try {
        const changes = await replace(_options(answers))
        if (!changes.length) {
          console.info("Nenhum arquivo foi modificado")
        } else {
          _startSpinner()
          console.log("Modified files:", changes.join(", "))
        }
      } catch (error) {
        console.log("Error", error)
      }
    }
  },
}

const _startSpinner = async () => {
  const status = new Spinner("Ajustando o tema ao projeto.....")
  status.start()
  setTimeout(() => {
    status.stop()
  }, 4000)
}

const _options = answers => {
  let reqPath = path.join(__dirname, "../package.json")
  return {
    disableGlobs: true,
    files: "package.json",
    from: '"main": ""',
    to: '"main":"./dist/temas/' + answers.tema + '/index.js"',
  }
}
