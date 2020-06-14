/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize-scss/sass/_normalize.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize-scss/sass/_normalize.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/normalize-scss/sass/_normalize.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Lato_Bold.woff2 */ \"./src/fonts/Lato_Bold.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/Lily_Script_One.woff2 */ \"./src/fonts/Lily_Script_One.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/texture.original.jpeg */ \"./src/img/texture.original.jpeg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"Lato\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 700;\\n  font-style: normal;\\n  font-stretch: normal;\\n  unicode-range: U+0020-02DC;\\n}\\n@font-face {\\n  font-family: \\\"Lily Script One\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-stretch: normal;\\n  unicode-range: U+0020-00FE;\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Arial\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 16px;\\n}\\n\\nul {\\n  padding-inline-start: 0;\\n}\\n\\n.container, .header .grid {\\n  width: 960px;\\n  display: grid;\\n  margin: auto;\\n}\\n\\n.h1 {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 48px;\\n}\\n\\n.h2 {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 36px;\\n}\\n\\n.h3 {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 24px;\\n}\\n\\n.h4 {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 900;\\n  font-size: 20px;\\n}\\n\\n.h5 {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 900;\\n  font-size: 18px;\\n}\\n\\n.left-line {\\n  border-left: solid 4px #e2574c;\\n  padding-left: 15px;\\n}\\n\\n.d-flex-centr, .main .price .card, .main .enjoy, .main .nout {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.text {\\n  display: block;\\n  text-align: center;\\n  line-height: 26px;\\n}\\n\\n.bottom-line {\\n  width: 80px;\\n  height: 4px;\\n  background-color: #e2574c;\\n  margin: 25px auto 0 auto;\\n}\\n\\n.btn {\\n  text-decoration: none;\\n  display: block;\\n  padding: 15px 16px;\\n  background-color: #e2574c;\\n  text-align: center;\\n  color: white;\\n  font-size: 18px;\\n  line-height: 22px;\\n  cursor: pointer;\\n}\\n\\n.header {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  color: white;\\n}\\n.header .grid {\\n  grid-template-columns: auto auto;\\n  grid-template: \\\"whowe form\\\";\\n  gap: 60px;\\n}\\n.header .grid .whowe {\\n  grid-area: whowe;\\n  padding: 75px 0 145px 0;\\n}\\n.header .grid .whowe .logo {\\n  margin-bottom: 80px;\\n}\\n.header .grid .whowe .text {\\n  text-align: left;\\n  margin-top: 35px;\\n}\\n.header .grid .whowe .btn {\\n  margin-top: 54px;\\n  width: 250px;\\n  background-color: #e2574c;\\n  color: white;\\n}\\n.header .grid .form {\\n  grid-area: form;\\n  width: 375px;\\n  height: 90%;\\n  background-color: #eeeff1;\\n}\\n.header .grid .form .form__header {\\n  background-color: #e2574c;\\n  padding: 30px 30px 74px 30px;\\n  text-align: center;\\n  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 60% 75%, 50% 90%, 40% 75%, 0% 75%);\\n}\\n.header .grid .form .form__content *:focus {\\n  outline: none;\\n}\\n.header .grid .form .form__content .form__item {\\n  margin: 16px 20px;\\n}\\n.header .grid .form .form__content .form__item input[type=text],\\n.header .grid .form .form__content .form__item select {\\n  border: none;\\n  width: 100%;\\n  color: #8f96a9;\\n  font-size: 13px;\\n  padding: 15px 0 15px 15px;\\n}\\n.header .grid .form .form__content .form__item input[type=text] {\\n  width: calc(100% - 15px);\\n}\\n.header .grid .form .form__content .form__item .btn {\\n  background-color: #e2574c;\\n  color: white;\\n  width: 100%;\\n  border: none;\\n}\\n.header .nav {\\n  grid-area: nav;\\n  background-color: #17262d;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n.header .nav .brand {\\n  list-style: none;\\n  padding: 25px 0;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.header .nav .brand__item a {\\n  font-family: \\\"Lily Script One\\\";\\n  font-size: 20px;\\n  color: white;\\n  text-decoration: none;\\n  display: block;\\n  text-decoration: none;\\n  background-color: #374d5b;\\n  padding: 20px 15px;\\n}\\n.header .nav .brand__item img {\\n  margin-right: 10px;\\n}\\n.header .nav .brand .active {\\n  background-color: #e2574c;\\n  clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);\\n}\\n\\n.main {\\n  background-color: #e9eaec;\\n}\\n.main .advantage {\\n  background-color: white;\\n  padding: 60px 30px;\\n  display: flex;\\n}\\n.main .advantage .h2,\\n.main .advantage .h3,\\n.main .advantage .h4,\\n.main .advantage .h5 {\\n  color: #474c56;\\n}\\n.main .advantage .features {\\n  padding-right: 63px;\\n}\\n.main .advantage .features .text {\\n  text-align: left;\\n  color: #8f96a9;\\n}\\n.main .advantage .features .advantage-list {\\n  padding: 0;\\n  margin: 35px 0;\\n  list-style: none;\\n}\\n.main .advantage .features .advantage-list .advantage-list__item .num {\\n  color: white;\\n  background: #e2574c;\\n  border-radius: 50%;\\n  display: inline-block;\\n  text-align: center;\\n  margin-right: 15px;\\n  line-height: 48px;\\n  width: 48px;\\n  height: 48px;\\n  font-size: 20px;\\n  font-weight: 600;\\n  position: relative;\\n  top: 15px;\\n  left: 0;\\n}\\n.main .advantage .features .advantage-list .advantage-list__item .text {\\n  margin-left: 68px;\\n  line-height: 8px;\\n}\\n.main .nout {\\n  background-color: #e2574c;\\n  color: white;\\n  padding: 60px 0;\\n  position: relative;\\n}\\n.main .nout .d-flex-centr, .main .nout .price .card, .main .price .nout .card, .main .nout .enjoy, .main .nout .nout {\\n  width: 600px;\\n  margin-bottom: 36px;\\n}\\n.main .nout .d-flex-centr .bottom-line, .main .nout .price .card .bottom-line, .main .price .nout .card .bottom-line, .main .nout .enjoy .bottom-line, .main .nout .nout .bottom-line {\\n  background-color: white;\\n}\\n.main .nout iframe {\\n  position: absolute;\\n  bottom: 83px;\\n}\\n.main .enjoy {\\n  background-color: white;\\n  padding: 60px 30px 30px 30px;\\n}\\n.main .enjoy .h2,\\n.main .enjoy .h3,\\n.main .enjoy .h4,\\n.main .enjoy .h5 {\\n  color: #474c56;\\n}\\n.main .enjoy .text {\\n  color: #8f96a9;\\n  line-height: 26px;\\n}\\n.main .enjoy .d-flex-centr, .main .enjoy .price .card, .main .price .enjoy .card, .main .enjoy .nout, .main .enjoy .enjoy {\\n  width: 600px;\\n  margin-bottom: 36px;\\n}\\n.main .enjoy .d-flex-centr .bottom-line, .main .enjoy .price .card .bottom-line, .main .price .enjoy .card .bottom-line, .main .enjoy .nout .bottom-line, .main .enjoy .enjoy .bottom-line {\\n  background-color: #e2574c;\\n}\\n.main .enjoy .enjoy-list {\\n  list-style: none;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 43px;\\n}\\n.main .enjoy .enjoy-list .enjoy-list__item {\\n  padding: 0 11px 16px 11px;\\n  text-align: center;\\n}\\n.main .enjoy .enjoy-list .enjoy-list__item .h5 {\\n  margin-top: 21px;\\n}\\n.main .enjoy .enjoy-list .enjoy-list__item span {\\n  display: block;\\n  text-align: center;\\n}\\n.main .comment {\\n  background-color: #ffecb3;\\n  display: flex;\\n  align-items: center;\\n  padding: 40px 30px 40px 30px;\\n}\\n.main .comment .text {\\n  text-align: left;\\n  color: #474c56;\\n}\\n.main .comment__img {\\n  margin-right: 30px;\\n}\\n.main .comment .left-line {\\n  height: 127px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n}\\n.main .price {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 30px;\\n  background-color: white;\\n}\\n.main .price .h2,\\n.main .price .h3,\\n.main .price .h4,\\n.main .price .h5 {\\n  color: #474c56;\\n}\\n.main .price .card {\\n  padding: 35px 24px;\\n  background-color: white;\\n}\\n.main .price .card__round {\\n  width: 165px;\\n  height: 165px;\\n  position: relative;\\n  margin-bottom: 30px;\\n}\\n.main .price .card__round .card__price, .main .price .card__round .card__dollar {\\n  border-radius: 50%;\\n  background-color: #e9eaec;\\n  text-align: center;\\n  width: 165px;\\n  height: 165px;\\n  color: #474c56;\\n  font-size: 72px;\\n  font-weight: 700;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.main .price .card__round .card__dollar {\\n  width: 50px;\\n  height: 50px;\\n  color: #e2574c;\\n  font-size: 28px;\\n  position: absolute;\\n}\\n.main .price .card__round .card__price {\\n  color: #474c56;\\n  font-size: 72px;\\n}\\n.main .price .card .bottom-line {\\n  margin: 12px auto 0 auto;\\n}\\n.main .price .card__content {\\n  text-align: center;\\n  color: #8f96a9;\\n}\\n.main .price .card__detail {\\n  width: 100%;\\n}\\n.main .price .card:hover {\\n  background-color: #e2574c;\\n}\\n.main .price .card:hover .card__detail {\\n  background-color: white;\\n  color: #e2574c;\\n}\\n.main .price .card:hover .h3,\\n.main .price .card:hover .card__item {\\n  color: white;\\n}\\n.main .price .card:hover .bottom-line {\\n  background-color: white;\\n}\\n\\n.footer {\\n  color: white;\\n}\\n.footer .d-flex-centr, .footer .main .nout, .main .footer .nout, .footer .main .enjoy, .main .footer .enjoy, .footer .main .price .card, .main .price .footer .card {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  padding: 58px 0 38px 0;\\n}\\n.footer .d-flex-centr .text, .footer .main .nout .text, .main .footer .nout .text, .footer .main .enjoy .text, .main .footer .enjoy .text, .footer .main .price .card .text, .main .price .footer .card .text {\\n  width: 540px;\\n  margin-top: 14px;\\n}\\n.footer .d-flex-centr .bottom-line, .footer .main .nout .bottom-line, .main .footer .nout .bottom-line, .footer .main .enjoy .bottom-line, .main .footer .enjoy .bottom-line, .footer .main .price .card .bottom-line, .main .price .footer .card .bottom-line {\\n  background-color: white;\\n}\\n.footer .d-flex-centr .footer__link, .footer .main .nout .footer__link, .main .footer .nout .footer__link, .footer .main .enjoy .footer__link, .main .footer .enjoy .footer__link, .footer .main .price .card .footer__link, .main .price .footer .card .footer__link {\\n  width: 350px;\\n  margin: 35px auto;\\n}\\n.footer .d-flex-centr .social, .footer .main .nout .social, .main .footer .nout .social, .footer .main .enjoy .social, .main .footer .enjoy .social, .footer .main .price .card .social, .main .price .footer .card .social {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.footer .d-flex-centr .social__item, .footer .main .nout .social__item, .main .footer .nout .social__item, .footer .main .enjoy .social__item, .main .footer .enjoy .social__item, .footer .main .price .card .social__item, .main .price .footer .card .social__item {\\n  list-style: none;\\n}\\n.footer .d-flex-centr .social__link, .footer .main .nout .social__link, .main .footer .nout .social__link, .footer .main .enjoy .social__link, .main .footer .enjoy .social__link, .footer .main .price .card .social__link, .main .price .footer .card .social__link {\\n  text-decoration: none;\\n  display: block;\\n  padding: 10px 16px;\\n  background-color: #e2574c;\\n  margin: 12px;\\n  color: white;\\n  font-family: \\\"Lily Script One\\\";\\n  font-size: 20px;\\n  font-weight: 400;\\n}\\n.footer .e {\\n  font-family: arial, helvetica, sans-serif;\\n  font-size: 12px;\\n  width: 100%;\\n  background-color: #17262d;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 36px 0;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/normalize-scss/sass/_normalize.scss":
/*!**********************************************************!*\
  !*** ./node_modules/normalize-scss/sass/_normalize.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./_normalize.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize-scss/sass/_normalize.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./node_modules/normalize-scss/sass/_normalize.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/fonts/Lato_Bold.woff2":
/*!***********************************!*\
  !*** ./src/fonts/Lato_Bold.woff2 ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Lato_Bold.woff2\");\n\n//# sourceURL=webpack:///./src/fonts/Lato_Bold.woff2?");

/***/ }),

/***/ "./src/fonts/Lily_Script_One.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Lily_Script_One.woff2 ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/Lily_Script_One.woff2\");\n\n//# sourceURL=webpack:///./src/fonts/Lily_Script_One.woff2?");

/***/ }),

/***/ "./src/img/brand.png":
/*!***************************!*\
  !*** ./src/img/brand.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/brand.png\");\n\n//# sourceURL=webpack:///./src/img/brand.png?");

/***/ }),

/***/ "./src/img/brands.png":
/*!****************************!*\
  !*** ./src/img/brands.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/brands.png\");\n\n//# sourceURL=webpack:///./src/img/brands.png?");

/***/ }),

/***/ "./src/img/client.png":
/*!****************************!*\
  !*** ./src/img/client.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/client.png\");\n\n//# sourceURL=webpack:///./src/img/client.png?");

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon.png\");\n\n//# sourceURL=webpack:///./src/img/icon.png?");

/***/ }),

/***/ "./src/img/icon1.png":
/*!***************************!*\
  !*** ./src/img/icon1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon1.png\");\n\n//# sourceURL=webpack:///./src/img/icon1.png?");

/***/ }),

/***/ "./src/img/icon2.png":
/*!***************************!*\
  !*** ./src/img/icon2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon2.png\");\n\n//# sourceURL=webpack:///./src/img/icon2.png?");

/***/ }),

/***/ "./src/img/icon3.png":
/*!***************************!*\
  !*** ./src/img/icon3.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/icon3.png\");\n\n//# sourceURL=webpack:///./src/img/icon3.png?");

/***/ }),

/***/ "./src/img/laptop.png":
/*!****************************!*\
  !*** ./src/img/laptop.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/laptop.png\");\n\n//# sourceURL=webpack:///./src/img/laptop.png?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/logo.png\");\n\n//# sourceURL=webpack:///./src/img/logo.png?");

/***/ }),

/***/ "./src/img/mobile.png":
/*!****************************!*\
  !*** ./src/img/mobile.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/mobile.png\");\n\n//# sourceURL=webpack:///./src/img/mobile.png?");

/***/ }),

/***/ "./src/img/texture.original.jpeg":
/*!***************************************!*\
  !*** ./src/img/texture.original.jpeg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/texture.original.jpeg\");\n\n//# sourceURL=webpack:///./src/img/texture.original.jpeg?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static */ \"./src/js/static.js\");\n\nconst {\n  minus,\n  sum\n} = __webpack_require__(/*! ./sum */ \"./src/js/sum.js\")\n\nconst brand = document.querySelector('.brand')\n\nconsole.log(brand);\nbrand.addEventListener('click', hedlerAddActove)\n\n\nfunction hedlerAddActove(event) {\n  event.preventDefault();\n  const el = event.target;\n  if (el.classList.contains('brand__link')) {\n    el.classList.toggle('active')\n  }\n}\n\nconsole.log(sum(2, 3));\nconsole.log(minus(4, 2));\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/static.js":
/*!**************************!*\
  !*** ./src/js/static.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-scss */ \"./node_modules/normalize-scss/sass/_normalize.scss\");\n/* harmony import */ var normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icon.png */ \"./src/img/icon.png\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _img_brand_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/brand.png */ \"./src/img/brand.png\");\n/* harmony import */ var _img_brands_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/brands.png */ \"./src/img/brands.png\");\n/* harmony import */ var _img_mobile_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/mobile.png */ \"./src/img/mobile.png\");\n/* harmony import */ var _img_laptop_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/laptop.png */ \"./src/img/laptop.png\");\n/* harmony import */ var _img_icon1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/icon1.png */ \"./src/img/icon1.png\");\n/* harmony import */ var _img_icon2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/icon2.png */ \"./src/img/icon2.png\");\n/* harmony import */ var _img_icon3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/icon3.png */ \"./src/img/icon3.png\");\n/* harmony import */ var _img_client_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/client.png */ \"./src/img/client.png\");\n// Style\n\n\n\n// Image\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/static.js?");

/***/ }),

/***/ "./src/js/sum.js":
/*!***********************!*\
  !*** ./src/js/sum.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sum(a, b) {\n  return a + b;\n}\n\nfunction minus(a, b) {\n  return a - b;\n}\n\nmodule.exports = {\n  sum,\n  minus\n}\n\n//# sourceURL=webpack:///./src/js/sum.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/index.scss?");

/***/ })

/******/ });