#!/usr/bin/env node
const chalk = require("chalk")
const clear = require("clear")
const figlet = require("figlet")

const repo = require("./lib/repo")
const verifyPath = require("./lib/files")

clear()
console.log(chalk.yellow(figlet.textSync("Conexa SDK", { horizontalLayout: "full" })))

const run = async () => verifyPath.directoryExists("./dist/temas/") && (await repo.setTheme())

run()
