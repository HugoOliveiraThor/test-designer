#!/usr/bin/env node
const chalk = require("chalk")
const clear = require("clear")
const figlet = require("figlet")
const path = require("path")
const repo = require("./repo")
const verifyPath = require("./files")

clear()
console.log(chalk.yellow(figlet.textSync("Conexa SDK", { horizontalLayout: "full" })))

console.log(path.join(__dirname))

const run = async () => verifyPath.directoryExists("./temas/") && (await repo.setTheme())

run()
