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

/***/ "00fl":
/*!***********************************************************************!*\
  !*** ./src/temas/myfarm/components/switcher/Switcher.vue + 4 modules ***!
  \***********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/switcher/Switcher.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/switcher/Switcher.vue?vue&type=template&id=1305128d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-row',[_c('el-switch',{attrs:{"active-text":"Comportamento normal"},model:{value:(_vm.value1),callback:function ($$v) {_vm.value1=$$v},expression:"value1"}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-row',[_c('el-switch',{attrs:{"active-text":"Desativado","disabled":""},model:{value:(_vm.value6),callback:function ($$v) {_vm.value6=$$v},expression:"value6"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/switcher/Switcher.vue?vue&type=template&id=1305128d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/switcher/switch.js?vue&type=script&lang=js&
/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Switches são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Switch](https://element.eleme.io/#/en-US/component/checkbox)
 */
/* harmony default export */ var switchvue_type_script_lang_js_ = ({
  name: "Switcher",
  element: "<el-switch/>",
  status: "prototype",
  release: "0.0.1",
  data: function data() {
    return {
      value1: true,
      value2: true,
      value6: true,
      value7: false
    };
  },
  props: {
    /**
     * @model
     *
     */
    value: String
  },
  watch: {
    value1: function value1(val) {
      console.log("Trocou valor", val);
      alert("Testando troca componentes----".concat(val));
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/switcher/switch.js?vue&type=script&lang=js&
 /* harmony default export */ var switcher_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/switcher/switch.scss?vue&type=style&index=0&lang=scss&
var switchvue_type_style_index_0_lang_scss_ = __webpack_require__("Q6ss");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/switcher/Switcher.vue?vue&type=custom&index=0&blockType=docs
var Switchervue_type_custom_index_0_blockType_docs = __webpack_require__("tIt1");
var Switchervue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Switchervue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/switcher/Switcher.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  switcher_switchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Switchervue_type_custom_index_0_blockType_docs_default.a === 'function') Switchervue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Switcher.vue"
/* harmony default export */ var Switcher = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1Xl/":
/*!*********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/inputs/Input.vue?vue&type=custom&index=0&blockType=docs ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "8n7G":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/card/Card.vue?vue&type=style&index=0&id=ccdcfde8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8qWK":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/switcher/switch.scss?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "AKWk":
/*!*****************************************************************************************!*\
  !*** ./src/temas/myfarm/components/steps/styles.scss?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./styles.scss?vue&type=style&index=0&lang=scss& */ "KKOu");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_styles_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ARW+":
/*!********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/steps/Steps.vue?vue&type=custom&index=0&blockType=docs ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



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

/***/ "JJvw":
/*!****************************************************************************************!*\
  !*** ./src/temas/myfarm/components/radio/radio.scss?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_radio_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./radio.scss?vue&type=style&index=0&lang=scss& */ "Yb7a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_radio_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_radio_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_radio_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_radio_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_radio_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "KKOu":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/steps/styles.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "NgiU":
/*!*****************************************************************!*\
  !*** ./src/temas/myfarm/components/steps/Steps.vue + 4 modules ***!
  \*****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/steps/Steps.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/steps/Steps.vue?vue&type=template&id=ead429de&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-steps',{attrs:{"active":_vm.active,"finish-status":"success"}},[_c('el-step',{attrs:{"title":"Primeiro"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"Segundo"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"Terceiro"}})],1),_vm._v(" "),_c('el-button',{staticStyle:{"margin-top":"12px"},on:{"click":_vm.next}},[_vm._v("Próximo etapa")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticStyle:{"height":"300px"}},[_c('el-steps',{attrs:{"direction":"vertical","active":1}},[_c('el-step',{attrs:{"title":"Primeiro"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"Segundo"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"Terceiro"}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/steps/Steps.vue?vue&type=template&id=ead429de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/steps/scripts.js?vue&type=script&lang=js&
/**
 * @author 'Seu nome' <seunome.oliveira@siagri.com.br>
 */

/**
 *
 * Steps guiam o usuário para concluir alguma tarefa ou seguir algum fluxo. Importante salientar que o número de etapas não pode ser inferior a 2
 * Local de onde retirou @see Veja [ElementUI Steps](https://element.eleme.io/#/en-US/component/steps)
 *
 */
/* harmony default export */ var scriptsvue_type_script_lang_js_ = ({
  name: "Steps",
  element: "<el-steps/>",
  status: "prototype",
  release: "0.0.1",
  data: function data() {
    return {
      active: 0
    };
  },
  methods: {
    next: function next() {
      if (this.active++ > 2) this.active = 0;
    }
  },
  props: {
    /**
     * @model
     *
     */
    value: String
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/steps/scripts.js?vue&type=script&lang=js&
 /* harmony default export */ var steps_scriptsvue_type_script_lang_js_ = (scriptsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/steps/styles.scss?vue&type=style&index=0&lang=scss&
var stylesvue_type_style_index_0_lang_scss_ = __webpack_require__("AKWk");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/steps/Steps.vue?vue&type=custom&index=0&blockType=docs
var Stepsvue_type_custom_index_0_blockType_docs = __webpack_require__("ARW+");
var Stepsvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Stepsvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/steps/Steps.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  steps_scriptsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Stepsvue_type_custom_index_0_blockType_docs_default.a === 'function') Stepsvue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Steps.vue"
/* harmony default export */ var Steps = __webpack_exports__["default"] = (component.exports);

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
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
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

/***/ "Q6ss":
/*!********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/switcher/switch.scss?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_switch_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./switch.scss?vue&type=style&index=0&lang=scss& */ "8qWK");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_switch_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_switch_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_switch_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_switch_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_switch_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "TNIx":
/*!**********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/checkbox/checkbox.scss?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--9-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--9-3!../../../../../node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./checkbox.scss?vue&type=style&index=0&lang=scss& */ "iuQT");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_lib_loader_js_ref_9_3_node_modules_sass_resources_loader_lib_loader_js_ref_9_4_checkbox_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Uyzw":
/*!***********************************************************************!*\
  !*** ./src/temas/myfarm/components/checkbox/Checkbox.vue + 4 modules ***!
  \***********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/checkbox/Checkbox.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/card/Card.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/checkbox/Checkbox.vue?vue&type=template&id=1c9c9f64&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"font-family":"'Barlow'"}},[_c('el-checkbox',{on:{"change":_vm.change},model:{value:(_vm.checked),callback:function ($$v) {_vm.checked=$$v},expression:"checked"}},[_vm._v("Normal")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-checkbox-group',{model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_c('el-checkbox',{attrs:{"label":"Desativado","disabled":""}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"Selecionado e Desativado","disabled":""}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/checkbox/Checkbox.vue?vue&type=template&id=1c9c9f64&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/checkbox/checkbox.js?vue&type=script&lang=js&
/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Checkboxs são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Checkbox](https://element.eleme.io/#/en-US/component/checkbox)
 */
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: "Checkbox",
  element: "<el-checkbox/>",
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
// CONCATENATED MODULE: ./src/temas/myfarm/components/checkbox/checkbox.js?vue&type=script&lang=js&
 /* harmony default export */ var checkbox_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/checkbox/checkbox.scss?vue&type=style&index=0&lang=scss&
var checkboxvue_type_style_index_0_lang_scss_ = __webpack_require__("TNIx");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/checkbox/Checkbox.vue?vue&type=custom&index=0&blockType=docs
var Checkboxvue_type_custom_index_0_blockType_docs = __webpack_require__("y7Hy");
var Checkboxvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Checkboxvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/checkbox/Checkbox.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  checkbox_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Checkboxvue_type_custom_index_0_blockType_docs_default.a === 'function') Checkboxvue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Checkbox.vue"
/* harmony default export */ var Checkbox = __webpack_exports__["default"] = (component.exports);

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

/***/ "Yb7a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/radio/radio.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZtqM":
/*!********************************************************************************************!*\
  !*** ./src/temas/myfarm/components/radio/Radio.vue?vue&type=custom&index=0&blockType=docs ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



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
	"./card/Card.vue": "wQ7u",
	"./checkbox/Checkbox.vue": "Uyzw",
	"./inputs/Input.vue": "ylCN",
	"./radio/Radio.vue": "xgvz",
	"./steps/Steps.vue": "NgiU",
	"./switcher/Switcher.vue": "00fl",
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
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
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

/***/ "iuQT":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/lib/loader.js??ref--9-3!./node_modules/sass-resources-loader/lib/loader.js??ref--9-4!./src/temas/myfarm/components/checkbox/checkbox.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
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

/***/ "r+bp":
/*!************************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/card/Card.vue?vue&type=style&index=0&id=ccdcfde8&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Card.vue?vue&type=style&index=0&id=ccdcfde8&scoped=true&lang=css& */ "8n7G");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "tIt1":
/*!**************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/switcher/Switcher.vue?vue&type=custom&index=0&blockType=docs ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



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

/***/ "wQ7u":
/*!***************************************************************!*\
  !*** ./src/temas/myfarm/components/card/Card.vue + 4 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/card/Card.vue?vue&type=template&id=ccdcfde8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/card/Card.vue?vue&type=template&id=ccdcfde8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/card/Card.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: "Card"
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/card/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/card/Card.vue?vue&type=style&index=0&id=ccdcfde8&scoped=true&lang=css&
var Cardvue_type_style_index_0_id_ccdcfde8_scoped_true_lang_css_ = __webpack_require__("r+bp");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/temas/myfarm/components/card/Card.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  card_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ccdcfde8",
  null
  
)

component.options.__file = "Card.vue"
/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "xgvz":
/*!*****************************************************************!*\
  !*** ./src/temas/myfarm/components/radio/Radio.vue + 4 modules ***!
  \*****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/radio/Radio.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/radio/Radio.vue?vue&type=template&id=4095490c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-row',[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.radio),callback:function ($$v) {_vm.radio=$$v},expression:"radio"}},[_vm._v("Normal Primary")])],1),_vm._v(" "),_c('el-row',[_c('el-radio',{attrs:{"disabled":"","label":"disabled"},model:{value:(_vm.radio1),callback:function ($$v) {_vm.radio1=$$v},expression:"radio1"}},[_vm._v("Disabled")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/radio/Radio.vue?vue&type=template&id=4095490c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/radio/radio.js?vue&type=script&lang=js&
/**
 * @author Hugo Oliveira <hugo.oliveira@siagri.com.br>
 */

/**
 * Checkboxs são geralmente usados ​​para selecionar opções sejam unitários ou em grupos.
 *
 * @see Veja [ElementUI Radio](https://element.eleme.io/#/en-US/component/radio)
 */
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: "Radio",
  element: "<el-radio/>",
  status: "prototype",
  release: "0.0.1",
  data: function data() {
    return {
      radio: "1",
      radio1: "selected and disabled"
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
// CONCATENATED MODULE: ./src/temas/myfarm/components/radio/radio.js?vue&type=script&lang=js&
 /* harmony default export */ var radio_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/temas/myfarm/components/radio/radio.scss?vue&type=style&index=0&lang=scss&
var radiovue_type_style_index_0_lang_scss_ = __webpack_require__("JJvw");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/radio/Radio.vue?vue&type=custom&index=0&blockType=docs
var Radiovue_type_custom_index_0_blockType_docs = __webpack_require__("ZtqM");
var Radiovue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Radiovue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/radio/Radio.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  radio_radiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Radiovue_type_custom_index_0_blockType_docs_default.a === 'function') Radiovue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Radio.vue"
/* harmony default export */ var Radio = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "y7Hy":
/*!**************************************************************************************************!*\
  !*** ./src/temas/myfarm/components/checkbox/Checkbox.vue?vue&type=custom&index=0&blockType=docs ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),

/***/ "ylCN":
/*!******************************************************************!*\
  !*** ./src/temas/myfarm/components/inputs/Input.vue + 4 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/temas/myfarm/components/inputs/Input.vue?vue&type=custom&index=0&blockType=docs (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js because of ./src/temas/myfarm/components/checkbox/Checkbox.vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/temas/myfarm/components/inputs/Input.vue?vue&type=template&id=773626bd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.ruleForm,"label-position":"top","rules":_vm.rules,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"Normal"}},[_c('el-input',{attrs:{"autocomplete":"off","placeholder":""},model:{value:(_vm.ruleForm.value1),callback:function ($$v) {_vm.$set(_vm.ruleForm, "value1", $$v)},expression:"ruleForm.value1"}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Disabled"}},[_c('el-input',{attrs:{"placeholder":"","disabled":true},model:{value:(_vm.value2),callback:function ($$v) {_vm.value2=$$v},expression:"value2"}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Focus primario"}},[_c('el-input',{attrs:{"placeholder":"Focus primário","disabled":true},model:{value:(_vm.value3),callback:function ($$v) {_vm.value3=$$v},expression:"value3"}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"Alerta","disabled":true},model:{value:(_vm.value4),callback:function ($$v) {_vm.value4=$$v},expression:"value4"}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"erro"}},[_c('el-input',{attrs:{"placeholder":"Erro"},model:{value:(_vm.ruleForm.erro),callback:function ($$v) {_vm.$set(_vm.ruleForm, "erro", $$v)},expression:"ruleForm.erro"}})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"Sucesso","type":"success"},model:{value:(_vm.value6),callback:function ($$v) {_vm.value6=$$v},expression:"value6"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("Testar form")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("Limpar os campos")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/temas/myfarm/components/inputs/Input.vue?vue&type=template&id=773626bd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./src/temas/myfarm/components/inputs/input.js?vue&type=script&lang=js&
/** 
Entradas são usadas para permitir que os usuários forneçam entrada de texto quando o esperado
entrada é curta. Form Input tem um leque de opções e suporta vários textos
formatos incluindo números. Para uma entrada mais longa, use o elemento `Textarea` do formulário. */
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: "Input",
  // status: "prototype",
  // release: "0.0.1",
  data: function data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: ""
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        normal: "",
        erro: "",
        value1: ""
      },
      rules: {
        region: [{
          required: true,
          message: "Please select Activity zone",
          trigger: "change"
        }],
        erro: [{
          required: true,
          message: this.upperCaseString("erro com uppercase"),
          trigger: "blur"
        }, {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur"
        }],
        date1: [{
          type: "date",
          required: true,
          message: "Please pick a date",
          trigger: "change"
        }],
        date2: [{
          type: "date",
          required: true,
          message: "Please pick a time",
          trigger: "change"
        }],
        type: [{
          type: "array",
          required: true,
          message: "Please select at least one activity type",
          trigger: "change"
        }],
        resource: [{
          required: true,
          message: "Please select activity resource",
          trigger: "change"
        }],
        desc: [{
          required: true,
          message: "Please input activity form",
          trigger: "blur"
        }]
      }
    };
  },
  props: {
    /**
     * The type of the form input field.
     * `text, number, email`
     */
    type: {
      type: String,
      default: "text",
      validator: function validator(value) {
        return value.match(/(text|number|email)/);
      }
    },

    /**
     * Text value of the form input field.
     */
    value: {
      type: String,
      default: null
    },

    /**
     * Could be an object or a single value.
     */
    object: {
      type: String || Object,
      default: null
    },

    /**
     * The placeholder value for the form input field.
     */
    placeholder: {
      type: String,
      default: null
    },

    /**
     * The label of the form input field.
     */
    label: {
      type: String,
      default: null
    },

    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: function validator(value) {
        return value.match(/(div|section)/);
      }
    },

    /**
     * The width of the form input field.
     * `medium`
     */
    size: {
      type: String,
      default: "medium",
      validator: function validator(value) {
        return value.match(/(auto|medium)/);
      }
    },

    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Manually trigger various states of the input.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: function validator(value) {
        return value.match(/(hover|active|focus)/);
      }
    }
  },
  methods: {
    onInput: function onInput(value) {
      this.$emit("change", value);
    },
    onFocus: function onFocus(value) {
      this.$emit("focus", value);
    },
    submitForm: function submitForm(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    upperCaseString: function upperCaseString(string) {
      return string.toUpperCase();
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});
// CONCATENATED MODULE: ./src/temas/myfarm/components/inputs/input.js?vue&type=script&lang=js&
 /* harmony default export */ var inputs_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// EXTERNAL MODULE: ./src/temas/myfarm/components/inputs/Input.vue?vue&type=custom&index=0&blockType=docs
var Inputvue_type_custom_index_0_blockType_docs = __webpack_require__("1Xl/");
var Inputvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(Inputvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./src/temas/myfarm/components/inputs/Input.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  inputs_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Inputvue_type_custom_index_0_blockType_docs_default.a === 'function') Inputvue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "Input.vue"
/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

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