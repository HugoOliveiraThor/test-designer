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

/***/ "+Gu8":
/*!******************************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue?vue&type=custom&index=0&blockType=docs ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "3g8D":
/*!***************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-button/cnx-button.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/cnx-button/cnx-button.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-button/cnx-button.vue?vue&type=template&id=9da1defc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-row',[_c('el-button',{attrs:{"type":"primary active"}},[_vm._v("Primary")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"}},[_vm._v("Primary with icon")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","disabled":""}},[_vm._v("Disabled")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus","disabled":""}},[_vm._v("Primary with icon")])],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-row',[_c('el-button',[_vm._v("Secundário")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-plus"}},[_vm._v("Default with icon")]),_vm._v(" "),_c('el-button',{attrs:{"disabled":""}},[_vm._v("Disabled")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-plus","disabled":""}},[_vm._v("Default disabled")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-button/cnx-button.vue?vue&type=template&id=9da1defc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/cnx-button/button.js?vue&type=script&lang=js&
/**
 * @author Renatto Machado <renatto.machado@siagri.com.br>
 */

/**
 * Botões são geralmente usados ​​para ações de interface.
 *
 *
 * Use os botões personalizados para ações em formulários, diálogos e outras coisas.
 *
 *
 * Lembrando que esse componente tem suporte a escolha de tamanhos, estados e muito mais.
 */
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "cnx-button",
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
// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-button/button.js?vue&type=script&lang=js&
 /* harmony default export */ var cnx_button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-button/button.scss?vue&type=style&index=0&lang=scss&
var buttonvue_type_style_index_0_lang_scss_ = __webpack_require__("otj8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-button/cnx-button.vue?vue&type=custom&index=0&blockType=docs
var cnx_buttonvue_type_custom_index_0_blockType_docs = __webpack_require__("FyLD");
var cnx_buttonvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(cnx_buttonvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-button/cnx-button.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  cnx_button_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof cnx_buttonvue_type_custom_index_0_blockType_docs_default.a === 'function') cnx_buttonvue_type_custom_index_0_blockType_docs_default()(component)

/* harmony default export */ var cnx_button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "FyLD":
/*!******************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-button/cnx-button.vue?vue&type=custom&index=0&blockType=docs ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "J6Re":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/cnx-toggle/toggle.scss?vue&type=style&index=0&id=e33d28e6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "MEnu":
/*!**************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-checkbox/checkbox.scss?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./checkbox.scss?vue&type=style&index=0&lang=scss& */ "Sj04");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "NE+T":
/*!****************************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=custom&index=0&blockType=docs ***!
  \****************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



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
// Define contexts to require
var contexts = [__webpack_require__("dOj6")]; // Define components

var components = [];
contexts.forEach(function (context) {
  context.keys().forEach(function (key) {
    return components.push(context(key).default);
  });
}); // Install the above defined components

var System = {
  install: function install(Vue) {
    components.forEach(function (component) {
      return Vue.component(component.name, component);
    });
  }
}; // Automatic installation if Vue has been added to the global scope

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(System);
} // Finally export as default


/* harmony default export */ __webpack_exports__["default"] = (System);

/***/ }),

/***/ "OS5R":
/*!***************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue + 5 modules ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue?vue&type=template&id=5581c704&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"siagri-input-number",class:_vm.size},[_c('input',{directives:[{name:"money",rawName:"v-money",value:({ precision: _vm.precision, suffix: _vm.suffix, prefix: _vm.prefix, thousands: _vm.thousands }),expression:"{ precision, suffix, prefix, thousands }"}],ref:"input",attrs:{"size":_vm.size,"min":_vm.min,"max":_vm.max,"readonly":_vm.$props.readonly},domProps:{"value":_vm.valor},on:{"change":_vm.change,"blur":function($event){return _vm.$emit('blur')},"keydown":function($event){return _vm.$emit('keydown')},"keyup":function($event){return _vm.$emit('keyup')}}}),_vm._v(" "),(_vm.$slots.suffix)?_c('div',{staticClass:"suffix"},[_vm._t("suffix")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue?vue&type=template&id=5581c704&

// CONCATENATED MODULE: ./src/temas/myfarm/helpers/utils/monetary.js
var moedaParaNumero = function moedaParaNumero(valor) {
  console.log(valor);
  if (typeof valor === "number") return valor;
  var occ = occurrences(valor, ".");

  if (occ >= 1) {
    var str = valor.replace("R$", "");
    var numeroDeVirgulas = occurrences(valor, ",");
    if (occ >= 1 && numeroDeVirgulas >= 1) str = str.split(".").join("");
    str = str.replace(",", ".");
    return parseFloat(str);
  } else {
    var _str = valor.replace("R$", "");

    if (_str.indexOf(",") > -1) _str = _str.replace(",", ".");
    return parseFloat(_str);
  }
};

function occurrences(string, subString, allowOverlapping) {
  string += "";
  subString += "";
  if (subString.length <= 0) return string.length + 1;
  var n = 0;
  var pos = 0;
  var step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);

    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }

  return n;
}

var numeroParaMoeda = function numeroParaMoeda(valor) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: decimal
  });
  return typeof valor === "string" ? formatter.format(moedaParaNumero(valor)).replace("R$", "") : formatter.format(valor).replace("R$", "");
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/cnx-input-number/scripts.js?vue&type=script&lang=js&
/**
 * @author 'Hugo Oliveira' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Ex: Input Numbers são geralmente usados ​​selecionar opções sejam unitários ou em grupos.
 *
 *
 */

/* harmony default export */ var scriptsvue_type_script_lang_js_ = ({
  name: "cnx-input-number",
  status: "ready",
  release: "0.0.1",
  props: {
    /**
     * @model
     *
     */
    value: {
      type: [Number, String],
      default: 0
    },

    /**
     * Define modo de leitura
     * Por padrão é false
     *
     */
    readonly: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },

    /**
     * Define modo de leitura
     * Por padrão é false
     *
     */
    size: {
      type: String,
      default: "normal"
    },

    /**
     * Define modo de leitura
     * Por padrão é false
     *
     */
    thousands: {
      type: String,
      default: ""
    },

    /**
     * Define precisão das casas
     *
     *
     */
    precision: {
      type: Number,
      default: 2
    },

    /**
     * Define suffixo no input
     *
     *
     */
    suffix: {
      type: String,
      default: ""
    },

    /**
     * Define prefixo no input
     */
    prefix: {
      type: String,
      default: ""
    },

    /**
     * Define valor inicial do input
     */
    initialValue: {
      type: [Number, String],
      default: 0
    },

    /**
     * Define valor mínimo no input
     */
    min: {
      type: Number,
      default: 999999999
    },

    /**
     * Define valor máximo no input
     */
    max: {
      type: Number,
      default: 999999999
    }
  },
  data: function data() {
    return {
      valor: 0
    };
  },
  mounted: function mounted() {
    if (this.$slots.suffix) {
      var width = this.$slots.suffix[0].elm.clientWidth;
      this.$refs.input.style.paddingRight = "".concat(width + 20, "px");
    }
  },
  updated: function updated() {
    if (this.$slots.suffix) {
      var width = this.$slots.suffix[0].elm.clientWidth;
      this.$refs.input.style.paddingRight = "".concat(width + 20, "px");
    }
  },
  methods: {
    change: function change(evt) {
      var value = moedaParaNumero(evt.target.value);
      this.$emit("input", value);
      this.$emit("change", value);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(val, oldVal) {
        this.valor = "".concat(this.prefix).concat(numeroParaMoeda(val, this.precision)).concat(this.suffix);
        this.$forceUpdate();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-input-number/scripts.js?vue&type=script&lang=js&
 /* harmony default export */ var cnx_input_number_scriptsvue_type_script_lang_js_ = (scriptsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-input-number/styles.scss?vue&type=style&index=0&lang=scss&
var stylesvue_type_style_index_0_lang_scss_ = __webpack_require__("dL4Q");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue?vue&type=custom&index=0&blockType=docs
var cnx_input_numbervue_type_custom_index_0_blockType_docs = __webpack_require__("+Gu8");
var cnx_input_numbervue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(cnx_input_numbervue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-input-number/cnx-input-number.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  cnx_input_number_scriptsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof cnx_input_numbervue_type_custom_index_0_blockType_docs_default.a === 'function') cnx_input_numbervue_type_custom_index_0_blockType_docs_default()(component)

/* harmony default export */ var cnx_input_number = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "QH+S":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/cnx-button-icon/styles.scss?vue&type=style&index=0&id=48254466&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Sj04":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/cnx-checkbox/checkbox.scss?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bDz2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/cnx-input-number/styles.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bimT":
/*!*************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue + 4 modules ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/tokens/_index.json (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=template&id=48254466&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ciclo-wrapper-btn",style:({ width: _vm.width }),on:{"click":_vm.onClick}},[_c('button',{style:({
      width: _vm.widthHeightButton,
      height: _vm.widthHeightButton,
      backgroundColor: _vm.backgColorBtn,
    }),attrs:{"type":"button"}},[_c('i',{class:_vm.icon,style:({ color: _vm.colorIcon, fontSize: _vm.fontSizeButton })})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.label))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=template&id=48254466&scoped=true&

// EXTERNAL MODULE: ./src/temas/myfarm/tokens/_index.json
var _index = __webpack_require__("ti+b");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=script&lang=js&
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
//
//
//
//
//

/*
 * O width do botão é necessário se ajustar quando for se usar LABEL
 * voce não irá conseguir visualizar o texto
 *
 */

/* harmony default export */ var cnx_button_iconvue_type_script_lang_js_ = ({
  name: "cnx-button-icon",
  status: "ready",
  release: "0.0.1",
  props: {
    /**
     * Um label que pode ser apresentando junto ao botão com icone
     *
     */
    label: {
      type: String,
      required: false,
      default: "Adicionar"
    },

    /**
     * A função que dispara a ação de clicar no botão
     */
    onClick: {
      type: Function,
      required: false,
      default: function _default() {}
    },

    /**
     * O icone para ser usado no botão
     * Acessar a lista de icones do siagri
     * Por padrão está usando um icone do el-icon-plus
     */
    icon: {
      type: String,
      required: false,
      default: "el-icon-plus"
    },

    /**
     * A cor do icone.
     */
    colorIcon: {
      type: String,
      default: _index.color_secondary,
      required: false
    },

    /**
     * O tamanho do botão.
     *
     */
    width: {
      type: String,
      required: false,
      default: "32px"
    },

    /**
     * A altura e largura do botão.
     */
    widthHeightButton: {
      type: String,
      required: false,
      default: "30px"
    },

    /**
     * O tamanho do icone dentro do botão
     */
    fontSizeButton: {
      type: String,
      required: false,
      default: "17px"
    },

    /**
     * Cor de fundo do botão
     */
    backgColorBtn: {
      type: String,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var cnx_button_icon_cnx_button_iconvue_type_script_lang_js_ = (cnx_button_iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-button-icon/styles.scss?vue&type=style&index=0&id=48254466&lang=scss&scoped=true&
var stylesvue_type_style_index_0_id_48254466_lang_scss_scoped_true_ = __webpack_require__("q6c4");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue?vue&type=custom&index=0&blockType=docs
var cnx_button_iconvue_type_custom_index_0_blockType_docs = __webpack_require__("NE+T");
var cnx_button_iconvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(cnx_button_iconvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  cnx_button_icon_cnx_button_iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "48254466",
  null
  
)

/* custom blocks */

if (typeof cnx_button_iconvue_type_custom_index_0_blockType_docs_default.a === 'function') cnx_button_iconvue_type_custom_index_0_blockType_docs_default()(component)

/* harmony default export */ var cnx_button_icon = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dL4Q":
/*!****************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-input-number/styles.scss?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./styles.scss?vue&type=style&index=0&lang=scss& */ "bDz2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dOj6":
/*!*************************************************!*\
  !*** ./src/temas/myfarm/components sync \.vue$ ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cnx-button-icon/cnx-button-icon.vue": "bimT",
	"./cnx-button/cnx-button.vue": "3g8D",
	"./cnx-checkbox/cnx-checkbox.vue": "yKQL",
	"./cnx-input-number/cnx-input-number.vue": "OS5R",
	"./cnx-toggle/cnx-toggle-button.vue": "wm3i",
	"./cnx-toggle/cnx-toggle.vue": "wmN9"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "dOj6";

/***/ }),

/***/ "j1Ii":
/*!******************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue?vue&type=custom&index=0&blockType=docs ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "m8Bu":
/*!**********************************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-toggle/toggle.scss?vue&type=style&index=0&id=e33d28e6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toggle_scss_vue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./toggle.scss?vue&type=style&index=0&id=e33d28e6&lang=scss&scoped=true& */ "J6Re");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toggle_scss_vue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toggle_scss_vue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toggle_scss_vue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toggle_scss_vue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_toggle_scss_vue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "mEtA":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/cnx-button/button.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "otj8":
/*!**********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-button/button.scss?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./button.scss?vue&type=style&index=0&lang=scss& */ "mEtA");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_button_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "q6c4":
/*!***************************************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-button-icon/styles.scss?vue&type=style&index=0&id=48254466&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_id_48254466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./styles.scss?vue&type=style&index=0&id=48254466&lang=scss&scoped=true& */ "QH+S");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_id_48254466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_id_48254466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_id_48254466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_id_48254466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_id_48254466_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "s67f":
/*!**********************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue?vue&type=custom&index=0&blockType=docs ***!
  \**********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "ti+b":
/*!*********************************************!*\
  !*** ./src/temas/myfarm/tokens/_index.json ***!
  \*********************************************/
/*! exports provided: color_hover, color_grey_40, color_grey_10, color_ativo_extra, color_primary, color_text_regular, color_status_alerta_2, color_text_primary, color_grey_0, color_white, color_status_atraso, color_hover_extra, color_support_alerta, color_status_indiferente, color_ativo, color_charts_charts_1, color_support_erro, color_charts_charts_2, color_status_alerta, color_charts_charts_3, color_charts_charts_4, color_secondary, color_charts_charts_5, color_status_concluido, color_support_info, color_charts_charts_6, color_grey_dark, color_charts_charts_7, color_status_em_progresso, color_grey_80, color_text_placeholder, color_text_secondary, color_grey_60, color_support_sucesso, size_body, size_input_label, size_icon_sm, size_icon_xs, size_icon_l, size_button_medium, size_icon_m, size_overline, size_button_mini, size_h1, size_h2, size_h3, size_text, size_button, size_button_big, size_button_small, size_icon_xl, font_heading, font_text, weight_bold, weight_semi_bold, weight_regular, weight_light, opacity_disabled, height_footer, tappable_square, media_query_xs, media_query_sm, media_query_md, media_query_lg, media_query_xl, box-shadow, radius_default, space_topo, space_between_components, space_padding_interno, line_height_xxs, line_height_xs, line_height_s, line_height_m, line_height_l, line_height_xl, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = {"color_hover":"rgb(0, 173, 167)","color_grey_40":"rgb(189, 193, 201)","color_grey_10":"rgb(238, 239, 241)","color_ativo_extra":"rgb(241, 255, 255)","color_primary":"rgb(255, 118, 57)","color_text_regular":"rgb(124, 130, 147)","color_status_alerta_2":"rgb(253, 183, 113)","color_text_primary":"rgb(69, 78, 95)","color_grey_0":"rgb(255, 255, 255)","color_white":"rgb(255, 255, 255)","color_status_atraso":"rgb(249, 92, 117)","color_hover_extra":"rgb(255, 255, 255)","color_support_alerta":"rgb(252, 164, 68)","color_status_indiferente":"rgb(189, 193, 201)","color_ativo":"rgb(0, 122, 118)","color_charts_charts_1":"rgb(85, 152, 221)","color_support_erro":"rgb(247, 57, 82)","color_charts_charts_2":"rgb(234, 116, 49)","color_status_alerta":"rgb(252, 164, 68)","color_charts_charts_3":"rgb(0, 170, 120)","color_charts_charts_4":"rgb(239, 71, 122)","color_secondary":"rgb(0, 147, 143)","color_charts_charts_5":"rgb(149, 90, 210)","color_status_concluido":"rgb(68, 200, 155)","color_support_info":"rgb(75, 137, 255)","color_charts_charts_6":"rgb(0, 164, 181)","color_grey_dark":"rgb(69, 78, 95)","color_charts_charts_7":"rgb(69, 78, 95)","color_status_em_progresso":"rgb(112, 157, 252)","color_grey_80":"rgb(124, 130, 147)","color_text_placeholder":"rgb(157, 161, 174)","color_text_secondary":"rgb(189, 193, 201)","color_grey_60":"rgb(157, 161, 174)","color_support_sucesso":"rgb(4, 162, 108)","size_body":"14px","size_input_label":"13","size_icon_sm":"20px","size_icon_xs":"14px","size_icon_l":"32px","size_button_medium":"40px","size_icon_m":"24px","size_overline":"11px","size_button_mini":"12px","size_h1":"34px","size_h2":"20px","size_h3":"19px","size_text":"12px","size_button":"14px","size_button_big":"60px","size_button_small":"30px","size_icon_xl":"40","font_heading":"Barlow, sans-serif","font_text":"Barlow, sans-serif","weight_bold":"700","weight_semi_bold":"600","weight_regular":"400","weight_light":"300","opacity_disabled":"0.5","height_footer":"64px","tappable_square":"44px","media_query_xs":"(max-width: 767px)","media_query_sm":"(min-width: 768px) and (max-width: 992px)","media_query_md":"(min-width: 768px) and (max-width: 992px)","media_query_lg":"(min-width: 1200px) and (max-width: 1919px)","media_query_xl":"(min-width: 1920px)","box-shadow":"0 2px 5px 0 rgba(0, 0, 0, 0.15)","radius_default":"4px","space_topo":"45px","space_between_components":"40px","space_padding_interno":"20px","line_height_xxs":"0","line_height_xs":"14px","line_height_s":"14px","line_height_m":"16px","line_height_l":"17px","line_height_xl":"24px"};

/***/ }),

/***/ "wm3i":
/*!**********************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue + 4 modules ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue?vue&type=template&id=1f806b1e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-radio-button',{staticClass:"toggle-button",style:({
    color: _vm.selected ? _vm.selectedTextColor : _vm.textColor,
    'background-color': _vm.selected ? _vm.selectedBgColor : 'transparent',
  }),attrs:{"label":_vm.label}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue?vue&type=template&id=1f806b1e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue?vue&type=script&lang=js&
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
/* harmony default export */ var cnx_toggle_buttonvue_type_script_lang_js_ = ({
  name: "cnx-toggle-button",
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
// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var cnx_toggle_cnx_toggle_buttonvue_type_script_lang_js_ = (cnx_toggle_buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  cnx_toggle_cnx_toggle_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cnx_toggle_button = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "wmN9":
/*!***************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue (<- Module is referenced from these modules with unsupported syntax: ./src/temas/myfarm/components sync \.vue$ (referenced with context element)) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/tokens/_index.json (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue?vue&type=template&id=e33d28e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-radio-group',{staticClass:"toggle",class:_vm.customClass,style:({ 'background-color': _vm.bgColor }),model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},[_c('cnx-toggle-button',{attrs:{"selected":_vm.firstLabel === _vm.selected || _vm.selected === true || _vm.selected === 1,"textColor":_vm.textColor,"selectedBgColor":_vm.selectedBgColor,"selectedTextColor":_vm.selectedTextColor,"label":_vm.firstLabel}}),_vm._v(" "),_c('cnx-toggle-button',{attrs:{"selected":_vm.secondLabel === _vm.selected || _vm.selected === false || _vm.selected === 0,"textColor":_vm.textColor,"selectedBgColor":_vm.selectedBgColor,"selectedTextColor":_vm.selectedTextColor,"label":_vm.secondLabel}}),_vm._v(" "),_c('cnx-toggle-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.thirdLabel !== null && _vm.thirdLabel !== ''),expression:"thirdLabel !== null && thirdLabel !== ''"}],attrs:{"selected":_vm.thirdLabel === _vm.selected || _vm.selected === false || _vm.selected === 2,"textColor":_vm.textColor,"selectedBgColor":_vm.selectedBgColor,"selectedTextColor":_vm.selectedTextColor,"label":_vm.thirdLabel}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue?vue&type=template&id=e33d28e6&scoped=true&

// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle-button.vue + 4 modules
var cnx_toggle_button = __webpack_require__("wm3i");

// EXTERNAL MODULE: ./src/temas/myfarm/tokens/_index.json
var _index = __webpack_require__("ti+b");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/cnx-toggle/toggle.js?vue&type=script&lang=js&
/**
 * @author 'Hugo Oliveira' <hugo.oliveira@siagri.com.br>
 */

/**
 *
 * Toggle permite alterar entre opções e disparar eventos que podem ser usados para manipular eventos dados etc...
 *
 *
 */


/* harmony default export */ var togglevue_type_script_lang_js_ = ({
  name: "cnx-toggle",
  element: "cnx-toggle",
  status: "ready",
  release: "0.0.1",
  components: {
    cnxToogleButton: cnx_toggle_button["default"]
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
      default: _index.color_white
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
// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-toggle/toggle.js?vue&type=script&lang=js&
 /* harmony default export */ var cnx_toggle_togglevue_type_script_lang_js_ = (togglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-toggle/toggle.scss?vue&type=style&index=0&id=e33d28e6&lang=scss&scoped=true&
var togglevue_type_style_index_0_id_e33d28e6_lang_scss_scoped_true_ = __webpack_require__("m8Bu");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue?vue&type=custom&index=0&blockType=docs
var cnx_togglevue_type_custom_index_0_blockType_docs = __webpack_require__("j1Ii");
var cnx_togglevue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(cnx_togglevue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-toggle/cnx-toggle.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  cnx_toggle_togglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e33d28e6",
  null
  
)

/* custom blocks */

if (typeof cnx_togglevue_type_custom_index_0_blockType_docs_default.a === 'function') cnx_togglevue_type_custom_index_0_blockType_docs_default()(component)

/* harmony default export */ var cnx_toggle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "yKQL":
/*!*******************************************************************************!*\
  !*** ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue + 4 modules ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/cnx-button-icon/cnx-button-icon.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue?vue&type=template&id=254a02a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"font-family":"'Barlow'"}},[_c('el-checkbox',{on:{"change":_vm.change},model:{value:(_vm.checked),callback:function ($$v) {_vm.checked=$$v},expression:"checked"}},[_vm._v("Normal")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-checkbox-group',{model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_c('el-checkbox',{attrs:{"label":"Desativado","disabled":""}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"Selecionado e Desativado","disabled":""}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue?vue&type=template&id=254a02a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/cnx-checkbox/checkbox.js?vue&type=script&lang=js&
/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Checkboxs são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Checkbox](https://element.eleme.io/#/en-US/component/checkbox)
 */
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: "cnx-checkbox",
  element: "cnx-checkbox",
  status: "prototype",
  release: "0.0.1",
  data: function data() {
    return {
      checked: true,
      checkList: ["selected and disabled", "Option A"]
    };
  },
  props: {
    /**
     * @model
     *
     */
    value: String,

    /**
     * O elemento referente ao HTML.
     * `checkbox`
     */
    type: {
      type: String,
      default: "checkbox"
    },

    /**
     * Manually trigger various states of the checkbox.
     * `disabled, checked`
     */
    state: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(disabled|checked)/);
      }
    },

    /**
     * Eventos do checkbox.
     * Dispara quando se clica em cima do checkbox
     */
    change: {
      type: Function,
      default: function _default(event) {
        console.log("You have clicked here my friend!", event.target);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-checkbox/checkbox.js?vue&type=script&lang=js&
 /* harmony default export */ var cnx_checkbox_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-checkbox/checkbox.scss?vue&type=style&index=0&lang=scss&
var checkboxvue_type_style_index_0_lang_scss_ = __webpack_require__("MEnu");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue?vue&type=custom&index=0&blockType=docs
var cnx_checkboxvue_type_custom_index_0_blockType_docs = __webpack_require__("s67f");
var cnx_checkboxvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(cnx_checkboxvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/cnx-checkbox/cnx-checkbox.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  cnx_checkbox_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof cnx_checkboxvue_type_custom_index_0_blockType_docs_default.a === 'function') cnx_checkboxvue_type_custom_index_0_blockType_docs_default()(component)

/* harmony default export */ var cnx_checkbox = __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ });
});