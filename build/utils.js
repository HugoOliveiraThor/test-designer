"use strict"
const path = require("path")
const config = require("../config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const packageConfig = require("../package.json")

exports.assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.assetsSystemPath = function(_path) {
  return path.posix.join(config.system.assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}

  const cssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: options.sourceMap,
    },
  }

  const postcssLoader = {
    loader: "postcss-loader",
    options: {
      sourceMap: options.sourceMap,
    },
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = []

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      loaders.push(MiniCssExtractPlugin.loader)
    } else {
      loaders.push("vue-style-loader")
    }

    loaders.push(cssLoader)

    if (options.usePostCSS) {
      loaders.push(postcssLoader)
    }

    if (loader) {
      loaders.push({
        loader: loader + "-loader",
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        }),
      })
    }

    return loaders
  }

  const sassResourcesConfig = {
    loader: "sass-resources-loader",
    options: {
      resources: [path.resolve(__dirname, "../src/styles/styles.scss")],
    },
  }

  const sassOptions = {
    outputStyle: "expanded", // Depois vou mudar para compress por enquanto para fazer os testes.
  }
  // https://vue-loader.vuejs.org/guide/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    sass: generateLoaders("sass", Object.assign({ indentedSyntax: true }, sassOptions)).concat(
      sassResourcesConfig
    ),
    scss: generateLoaders("sass", sassOptions).concat(sassResourcesConfig),
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp("\\." + extension + "$"),
      use: loader,
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require("node-notifier")

  return (severity, errors) => {
    if (severity !== "error") return

    const error = errors[0]
    const filename = error.file && error.file.split("!").pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ": " + error.name,
      subtitle: filename || "",
      icon: path.join(__dirname, "logo.png"),
    })
  }
}

exports.createDynamicInputsOutputDistFolder = entryArray => {
  const createObject = entryArray.reduce((acc, item) => {
    const name = item.replace("./src/", "").replace("main.js", "index")
    acc[name] = item
    return acc
  }, {})
  return createObject
}
