#!/usr/bin/env node
const chalk = require("chalk")
const clear = require("clear")
const figlet = require("figlet")
const path = require("path")
const repo = require("./repo")
const verifyPath = require("./files")

clear()
console.log(chalk.yellow(figlet.textSync("Conexa SDK", { horizontalLayout: "full" })))

// Não adianta rodar o projeto a partir do sdk não ira funcionar , somente a partir da instalação do node_modules
const run = async () =>
  verifyPath.directoryExists(path.join(__dirname, "../temas")) && (await repo.setTheme())

run()
