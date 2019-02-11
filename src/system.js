/**
 * System.js creates the Design System Library.
 * It’s used in the system itself and when exporting it.
 *
 * You should & can add your own dependencies here if needed.
 */
// import ElementUI from "element-ui"
// Define contexts to require
const contexts = [
  require.context("@/elements/", true, /\.vue$/),
  // require.context("@/patterns/", true, /\.vue$/),
  // require.context("@/templates/", true, /\.vue$/),
  require.context("@/temas/", true, /\.vue$/),
]

// Define components
const components = []
contexts.forEach(context => {
  console.log("MAIN SYSTEM")
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const System = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
    // Vue.use(ElementUI)
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System)
}

// Finally export as default
export default System
