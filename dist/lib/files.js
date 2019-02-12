const fs = require("fs")
const path = require("path")

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd()) // Com isso habilitamos de modo global
  },

  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory()
    } catch (error) {
      console.log("A pasta dist/temas não existe, por favor verifique a instalação")
      return false
    }
  },
}
