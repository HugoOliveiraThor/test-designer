const path = require("path")
const baseConfig = require("../build/webpack.base.conf.js")
const merge = require("webpack-merge")
const packageConfig = require("../package.json")
const chalk = require("chalk")

module.exports = {
  /**
   * Name of your design system. Changes both page title and sidebar logo.
   */
  title: "Conexa SDK UI",
  /**
   * Most of the styles are defined in /docs/docs.styles.scss
   */
  version: packageConfig.version,
  theme: {
    maxWidth: "100%",
    sidebarWidth: 240,
    fontFamily: {
      base: ["'Barlow'", "Helvetica", "Arial", "sans-serif"],
      monospace: ["Consolas", "'Liberation Mono'", "Menlo", "monospace"],
    },
  },
  renderRootJsx: path.join(__dirname, "../docs/components/Preview.js"),
  /**
   * Define a custom code highlighting theme.
   */
  editorConfig: {
    theme: "dracula",
  },
  /**
   * Path to static assets directory
   */
  // assetsDir: path.join(__dirname, "../src/assets"),
  /**
   * Enabling the below option will break things in Vue Design System!
   * Essa opção se habilitado destroi o projeto ;(
   */
  skipComponentsWithoutExample: false,
  /**
   * We’re defining below JS and SCSS requires for the documentation.
   */
  require: [
    path.join(__dirname, "../docs/docs.helper.js"),
    path.join(__dirname, "../docs/docs.styles.scss"),
    path.join(__dirname, "../src/main.js"), // Aqui onde importamos o ElementUI - esta na documentação do styleguide vue - Using third plugins
  ],
  /**
   * Enabling the following option splits sections into separate views.
   */
  pagePerSection: true,
  sections: [
    {
      name: "Sobre Conexa UI",
      content: "../docs/overview.md",
      exampleMode: "hide",
      sectionDepth: 1,
    },
    {
      name: "Como utilizar",
      content: "../docs/getting-started/getting-started.md",
      components: "../docs/components/status/**!.vue/[A-Z]*.vue",
      sectionDepth: 1,
    },
    {
      name: "Temas",
      content: "../docs/themes/themes.md",
      exampleMode: "collapse",
      usageMode: "collapse",
      sectionDepth: 2,
      sections: [
        {
          name: "MyFarm",
          content: "../docs/themes/myfarm/myfarm.md",
          components: "../docs/components/status/Components.vue",
          exampleMode: "expand",
          usageMode: "expand",
          sections: [
            {
              name: "Design Tokens",
              content: "../docs/design-tokens/tokens.md",
              theme: "my-farm",
              sectionDepth: 2,
              exampleMode: "expand",
              usageMode: "expand",
              components: () => [
                "../docs/components/tokens/Color.vue",
                "../docs/components/tokens/FontSize.vue",
                "../docs/components/tokens/Spacing.vue",
                "../docs/components/tokens/All.vue",
                "../docs/components/tokens/Typography.vue",
                "../docs/components/tokens/Padroes.vue",
                "../docs/components/status/Components.vue",
              ],
            },
            {
              name: "Componentes",
              content: "../docs/themes/myfarm/components.md",
              components: "../src/temas/myfarm/components/**/*.vue",
              usageMode: "expand",
              exampleMode: "expand",
              sectionDepth: 2,
            },
          ],
        },
      ],
      exampleMode: "hide",
      usageMode: "hide",
      sectionDepth: 3,
    },
    // {
    //   name: "Princípios do Design",
    //   content: "../docs/design-principles/principles.md",
    //   sectionDepth: 1,
    //   exampleMode: "hide",
    //   usageMode: "hide",
    // },
    // {
    //   name: "Downloads",
    //   content: "../docs/downloads.md",
    //   exampleMode: "hide",
    //   usageMode: "hide",
    //   sectionDepth: 1,
    // },
    // {
    //   name: "FAQ",
    //   content: "../docs/faq.md",
    //   exampleMode: "hide",
    //   usageMode: "hide",
    //   sectionDepth: 1,
    // },
    {
      /**
       * Private components have to be loaded into the documentation as well,
       * otherwise anything using them will be broken. We’re loading them in
       * their own section, which then gets hidden in docs/docs.styles.scss
       */
      name: "Private Components",
      exampleMode: "hide",
      usageMode: "hide",
      components: "../src/**/[_]*.vue",
    },
  ],
  /**
   * Custom wrapper template for the documentation.
   */
  template: {
    title: "Example — Vue Design System",
    lang: "en",
    trimWhitespace: true,
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1.0",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
      ],
    },
  },
  /**
   * Ignore app.vue, tests, and example component.
   */
  ignore: [
    "**/App.vue",
    "**/__tests__/**",
    "**/*.test.js",
    "**/*.test.jsx",
    "**/*.spec.js",
    "**/*.spec.jsx",
    "**/ExampleComponent.vue",
  ],
  webpackConfig: merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.(css?|scss|sass)(\?.*)?$/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader",
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  path.join(__dirname, "../src/assets/themes/**/_index.scss"),
                  path.join(__dirname, "../src/assets/themes/**/_index.map.scss"),
                  path.join(__dirname, "../src/themes/**/*.scss"),
                  path.join(__dirname, "../src/styles/styles.scss"),
                ],
              },
            },
          ],
        },
      ],
    },
  }),
  styleguideDir: "../dist/docs",
  printServerInstructions() {},
  printBuildInstructions(config) {
    console.log(chalk.cyan("\n  Design System Docs terminou build com sucesso!\n"))
    console.log(
      chalk.yellow(
        "  Tip: You can now deploy the docs as a static website.\n" +
          "  Copy the build files from " +
          `${config.styleguideDir}\n`
      )
    )
  },
}
