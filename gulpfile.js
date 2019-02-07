var gulp = require("gulp")

gulp.task("newTheme", async function() {
  gulp.src(["./src/temas/myfarm/**/*"]).pipe(gulp.dest("./src/temas/blue-flow/"))
})
