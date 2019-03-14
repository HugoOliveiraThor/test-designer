
import camelCase from 'lodash/camelCase'
import toUpper from 'lodash/toUpper'

export default {
  install (Vue, Options = {}) {
    Options = {
      theme: 'myfarm',
      ...Options
    }

    if (!Options.theme) {
      // eslint-disable-next-line
      console.warn('You must provide a theme!')
      return
    }

    const requireModule = require.context('.', true, /dist\/temas\/([^/]+\/)*index.js$/)
    const modules = {}
    
    requireModule.keys().forEach(filePath => {
      if (!filePath.includes(Options.theme)) return

      const moduleName = toUpper(camelCase(
        filePath.replace(/(\.\/|\.js)/g, '')
      ))

      let currentModule = requireModule(filePath).default
      
      Vue.use(currentModule)
    })
   
  }
}
