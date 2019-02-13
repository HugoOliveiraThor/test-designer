(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["temas/myfarm/index"] = factory();
	else
		root["temas/myfarm/index"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "NGtS");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+sW4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/toggle/toogle.scss?vue&type=style&index=0&id=bebebf10&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Dh70":
/*!**********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/toggle/Toogle.vue?vue&type=custom&index=0&blockType=docs ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "ETG5":
/*!******************************************************************************************!*\
  !*** ./src/temas/myfarm/components/button/button.scss?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./button.scss?vue&type=style&index=0&lang=scss& */ "zz89");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "KHd+":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "NGtS":
/*!**********************************!*\
  !*** ./src/temas/myfarm/main.js ***!
  \**********************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import "element-ui/lib/theme-chalk/index.css"
// import ElementUI from "element-ui"
// Define contexts to require
var contexts = [__webpack_require__("dOj6")]; // Define components

var components = [];
contexts.forEach(function (context) {
  console.log("MAIN", context);
  context.keys().forEach(function (key) {
    return components.push(context(key).default);
  });
}); // Install the above defined components

var System = {
  install: function install(Vue) {
    components.forEach(function (component) {
      return Vue.component(component.name, component);
    }); // Vue.use(ElementUI)
  }
}; // Automatic installation if Vue has been added to the global scope

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System);
} // Finally export as default


/* harmony default export */ __webpack_exports__["default"] = (System);

/***/ }),

/***/ "NhIO":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Ognz":
/*!*******************************************************************!*\
  !*** ./src/temas/myfarm/components/toggle/Toogle.vue + 4 modules ***!
  \*******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/toggle/ToggleButton.vue (<- Module is referenced from these modules with unsupported syntax: ./src/temas/myfarm/components sync \.vue$ (referenced with context element)) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/toggle/Toogle.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/toggle/ToggleButton.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/tokens/_index.json (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/toggle/Toogle.vue?vue&type=template&id=bebebf10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-radio-group',{staticClass:"toggle",class:_vm.customClass,style:({ 'background-color': _vm.bgColor }),model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('toggle-button',{attrs:{"selected":_vm.firstLabel === _vm.selected || _vm.selected === true || _vm.selected === 1,"textColor":_vm.textColor,"selectedBgColor":_vm.selectedBgColor,"selectedTextColor":_vm.selectedTextColor,"label":_vm.firstLabel}}),_vm._v(" "),_c('toggle-button',{attrs:{"selected":_vm.secondLabel === _vm.selected || _vm.selected === false || _vm.selected === 0,"textColor":_vm.textColor,"selectedBgColor":_vm.selectedBgColor,"selectedTextColor":_vm.selectedTextColor,"label":_vm.secondLabel}}),_vm._v(" "),_c('toggle-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.thirdLabel !== null && _vm.thirdLabel !== ''),expression:"thirdLabel !== null && thirdLabel !== ''"}],attrs:{"selected":_vm.thirdLabel === _vm.selected || _vm.selected === false || _vm.selected === 2,"textColor":_vm.textColor,"selectedBgColor":_vm.selectedBgColor,"selectedTextColor":_vm.selectedTextColor,"label":_vm.thirdLabel}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/toggle/Toogle.vue?vue&type=template&id=bebebf10&scoped=true&

// EXTERNAL MODULE: ./src/temas/myfarm/components/toggle/ToggleButton.vue + 4 modules
var ToggleButton = __webpack_require__("ogzH");

// EXTERNAL MODULE: ./src/temas/myfarm/tokens/_index.json
var _index = __webpack_require__("ti+b");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/toggle/toogle.js?vue&type=script&lang=js&
/**
 * @author 'Seu nome' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Steps guiam o usuário para concluir alguma tarefa ou seguir algum fluxo. Importante salientar que o número de etapas não pode ser inferior a 2
 * Local de onde retirou @see Veja [ElementUI Steps](https://element.eleme.io/#/en-US/component/steps)
 *
 */


/* harmony default export */ var tooglevue_type_script_lang_js_ = ({
  name: "Toogle",
  element: "N/A",
  status: "prototype",
  release: "0.0.1",
  components: {
    ToggleButton: ToggleButton["default"]
  },
  props: {
    customClass: {
      type: String,
      default: ""
    },
    firstLabel: {
      type: String,
      default: ""
    },
    secondLabel: {
      type: String,
      default: ""
    },
    thirdLabel: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: _index.color_grey_10
    },
    selectedBgColor: {
      type: String,
      default: "#fff"
    },
    selectedTextColor: {
      type: String,
      default: _index.color_primary
    },
    textColor: {
      type: String,
      default: _index.color_grey_80
    },
    value: {
      type: [String, Boolean, Number]
    },
    transformValue: {
      type: Boolean,
      default: false
    },
    transformToInt: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      selected: null
    };
  },
  methods: {
    toInt: function toInt(val) {
      var self = this; // eslint-disable-next-line no-extra-boolean-cast

      return self.transformToInt ? val ? 1 : 0 : val;
    },
    transform: function transform(val) {
      var self = this;
      var transform = self.transformValue || self.transformToInt ? self.toInt(val === self.firstLabel || val === true || val === 1) : val;
      return transform;
    }
  },
  watch: {
    selected: {
      handler: function handler(val) {
        var self = this;
        self.$emit("input", val);
        self.$emit("onChange", val);
        console.log("Val", val);
      },
      immediate: true
    },
    "$props.value": {
      handler: function handler(val) {
        var self = this;
        var result = self.toInt(self.transform(val));
        self.$set(self, "selected", result);
      },
      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/toggle/toogle.js?vue&type=script&lang=js&
 /* harmony default export */ var toggle_tooglevue_type_script_lang_js_ = (tooglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/toggle/toogle.scss?vue&type=style&index=0&id=bebebf10&lang=scss&scoped=true&
var tooglevue_type_style_index_0_id_bebebf10_lang_scss_scoped_true_ = __webpack_require__("SaUB");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/toggle/Toogle.vue?vue&type=custom&index=0&blockType=docs
var Tooglevue_type_custom_index_0_blockType_docs = __webpack_require__("Dh70");
var Tooglevue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Tooglevue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/toggle/Toogle.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  toggle_tooglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "bebebf10",
  null
  
)

/* custom blocks */

if (typeof Tooglevue_type_custom_index_0_blockType_docs_default.a === 'function') Tooglevue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Toogle.vue"
/* harmony default export */ var Toogle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "SaUB":
/*!******************************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/toggle/toogle.scss?vue&type=style&index=0&id=bebebf10&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toogle_scss_vue_type_style_index_0_id_bebebf10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./toogle.scss?vue&type=style&index=0&id=bebebf10&lang=scss&scoped=true& */ "+sW4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toogle_scss_vue_type_style_index_0_id_bebebf10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toogle_scss_vue_type_style_index_0_id_bebebf10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toogle_scss_vue_type_style_index_0_id_bebebf10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toogle_scss_vue_type_style_index_0_id_bebebf10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toogle_scss_vue_type_style_index_0_id_bebebf10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "VnZC":
/*!***********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToggleButton.vue?vue&type=style&index=0&lang=scss& */ "NhIO");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dOj6":
/*!*************************************************!*\
  !*** ./src/temas/myfarm/components sync \.vue$ ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/Button.vue": "hGyZ",
	"./toggle/ToggleButton.vue": "ogzH",
	"./toggle/Toogle.vue": "Ognz"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "dOj6";

/***/ }),

/***/ "hGyZ":
/*!*******************************************************************!*\
  !*** ./src/temas/myfarm/components/button/Button.vue + 4 modules ***!
  \*******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/button/Button.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/toggle/ToggleButton.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/button/Button.vue?vue&type=template&id=64ac9e75&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-row',[_c('el-button',{staticClass:"terapia",attrs:{"type":"primary active"}},[_vm._v("Primary")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"}},[_vm._v("Primary with icon")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","disabled":""}},[_vm._v("Disabled")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info","icon":"el-icon-plus","disabled":""}},[_vm._v("Primary with icon")])],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-row',[_c('el-button',[_vm._v("Secundário")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-plus"}},[_vm._v("Default with icon")]),_vm._v(" "),_c('el-button',{attrs:{"disabled":""}},[_vm._v("Disabled")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-plus","disabled":""}},[_vm._v("Default disabled")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/button/Button.vue?vue&type=template&id=64ac9e75&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/button/button.js?vue&type=script&lang=js&
/**
 * @author Renatto Machado <renatto.machado@siagri.com.br>
 */

/**
 * Botões são geralmente usados ​​para ações de interface.
 *
 * O valor default é Primary.
 *
 *
 * Para implementação do botão no component em Vue veja a documentação em : https://element.eleme.io/#/en-US/component/button.
 *
 */
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "Button",
  element: "<el-button/>",
  status: "prototype",
  release: "0.0.1",
  props: {
    /**
     * O elemento referente ao HTML.
     * `button`
     */
    type: {
      type: String,
      default: "default",
      validator: function validator(value) {
        return value.match(/(primary|default|success|warning|danger|info|text)/);
      }
    },

    /**
     * O tamanho do botão . O valor default é medium
     * `medium, small, mini`
     */
    size: {
      type: String,
      default: "medium",
      validator: function validator(value) {
        return value.match(/(medium|small|mini)/);
      }
    },

    /**
     * Determina se é o botão é redondo
     * `true, false`
     */
    round: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Determina se é o botão é simples
     * `true, false`
     */
    plain: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Determina se o botão é um circulo
     * `true, false`
     */
    circle: {
      type: Boolean,
      default: false
    },

    /**
     * Habilita o focus no campo
     * `true, false`
     */
    autofocus: {
      type: Boolean,
      default: false
    },

    /**
     * Habilita se apresenta loading ou não.
     * `true, false`
     */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * Seta o tipo do botão.
     */
    submit: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(null|submit)/);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/button/button.js?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/button/button.scss?vue&type=style&index=0&lang=scss&
var buttonvue_type_style_index_0_lang_scss_ = __webpack_require__("ETG5");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/button/Button.vue?vue&type=custom&index=0&blockType=docs
var Buttonvue_type_custom_index_0_blockType_docs = __webpack_require__("mCXD");
var Buttonvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Buttonvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/button/Button.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  button_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Buttonvue_type_custom_index_0_blockType_docs_default.a === 'function') Buttonvue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Button.vue"
/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "mCXD":
/*!**********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/button/Button.vue?vue&type=custom&index=0&blockType=docs ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "ogzH":
/*!*************************************************************************!*\
  !*** ./src/temas/myfarm/components/toggle/ToggleButton.vue + 4 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/button/Button.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=template&id=330822a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-radio-button',{staticClass:"toggle-button",style:({
    color: _vm.selected ? _vm.selectedTextColor : _vm.textColor,
    'background-color': _vm.selected ? _vm.selectedBgColor : 'transparent',
  }),attrs:{"label":_vm.label}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=template&id=330822a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ToggleButtonvue_type_script_lang_js_ = ({
  name: "Toogle-Button",
  props: {
    label: {
      type: String,
      default: ""
    },
    selectedTextColor: {
      type: String
    },
    selectedBgColor: {
      type: String
    },
    textColor: {
      type: String
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var toggle_ToggleButtonvue_type_script_lang_js_ = (ToggleButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/toggle/ToggleButton.vue?vue&type=style&index=0&lang=scss&
var ToggleButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("VnZC");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/temas/myfarm/components/toggle/ToggleButton.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  toggle_ToggleButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "ToggleButton.vue"
/* harmony default export */ var ToggleButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ti+b":
/*!*********************************************!*\
  !*** ./src/temas/myfarm/tokens/_index.json ***!
  \*********************************************/
/*! exports provided: color_grey_40, color_grey_10, color_primary, color_grey_0, color_white, color_status_atraso, color_support_alerta, color_status_indiferente, color_support_erro, color_status_alerta, color_secondary, color_status_concluido, color_support_info, color_grey_dark, color_status_em_progresso, color_grey_80, color_grey_60, color_support_sucesso, size_body, size_overline, size_button_mini, size_big_number, size_h1, size_h2, size_h3, size_text, size_button, size_medium_number, size_small_number, font_heading, font_text, weight_bold, weight_semi_bold, weight_regular, weight_light, opacity_disabled, height_footer, tappable_square, media_query_m, media_query_l, shadow_s, radius_default, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = {"color_grey_40":"rgb(189, 193, 201)","color_grey_10":"rgb(238, 239, 241)","color_primary":"rgb(255, 118, 57)","color_grey_0":"rgb(255, 255, 255)","color_white":"rgb(255, 255, 255)","color_status_atraso":"rgb(249, 92, 117)","color_support_alerta":"rgb(252, 164, 68)","color_status_indiferente":"rgb(189, 193, 201)","color_support_erro":"rgb(247, 57, 82)","color_status_alerta":"rgb(253, 183, 113)","color_secondary":"rgb(0, 147, 143)","color_status_concluido":"rgb(68, 200, 155)","color_support_info":"rgb(75, 137, 255)","color_grey_dark":"rgb(69, 78, 95)","color_status_em_progresso":"rgb(112, 157, 252)","color_grey_80":"rgb(124, 130, 147)","color_grey_60":"rgb(157, 161, 174)","color_support_sucesso":"rgb(4, 162, 108)","size_body":"14px","size_overline":"11px","size_button_mini":"12px","size_big_number":"60px","size_h1":"34px","size_h2":"20px","size_h3":"19px","size_text":"12px","size_button":"14px","size_medium_number":"40px","size_small_number":"20px","font_heading":"Barlow, sans-serif","font_text":"Barlow, sans-serif","weight_bold":"700","weight_semi_bold":"600","weight_regular":"400","weight_light":"300","opacity_disabled":"0.5","height_footer":"64px","tappable_square":"44px","media_query_m":"(min-width: 768px)","media_query_l":"(min-width: 1024px)","shadow_s":"0 0 0 1px rgba(92,106,196,.1)","radius_default":"4px"};

/***/ }),

/***/ "zz89":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/button/button.scss?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});