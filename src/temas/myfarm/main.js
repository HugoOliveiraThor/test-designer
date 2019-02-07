// import "element-ui/lib/theme-chalk/index.css"
import "./components/main.scss"
import ElementUI from "element-ui"
// Define contexts to require
const contexts = [require.context("./components/", true, /\.vue$/)]

// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Install the above defined components
const System = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
    Vue.use(ElementUI)
  },
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System)
}

// Finally export as default
export default System
