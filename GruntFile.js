grunt.initConfig({
  sass: {
    // Task
    dist: {
      // Target
      options: {
        // Target options
        style: "expanded",
      },
      files: {
        // Dictionary of files
        "main.css": "main.scss", // 'destination': 'source'
        "widgets.css": "widgets.scss",
      },
    },
  },
})

grunt.loadNpmTasks("grunt-contrib-sass")

grunt.registerTask("default", ["sass"])
