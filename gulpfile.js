var gulp = require("gulp")
const args = require("yargs").argv
const replace = require("gulp")

// To pass arguments send --name -> is default for the tasks
const defaults = function(name) {
  return name === "" || name === undefined ? "default" : name
}

/**
 * Create a new theme based on the first myfarm
 * There is some defaults options used here
 * @params nameTheme
 *
 */
gulp.task("newTheme", async function() {
  // This task pass name of the component
  let newTheme = defaults(args.nameTheme)
  gulp.src(["./src/temas/myfarm/**/*"]).pipe(gulp.dest("./src/temas/" + newTheme + "/"))
})

/**
 * É uma maneira de contornar o problema dentro do element-theme-chalk
 * There is some defaults options used here
 * Ex: gulp newComponent --nameComponent "select" --nameTheme "myfarm"
 * @params nameComponent
 * @params nameTheme
 */

gulp.task("newComponent", async function() {
  // This task pass name of the component
  let nameComponent = defaults(args.nameComponent)
  let nameTheme = defaults(args.nameTheme)
  gulp
    .src(["./src/boilerplate-component/*"])
    .pipe(gulp.dest("./src/temas/" + nameTheme + "/components/" + nameComponent + "/"))
})
