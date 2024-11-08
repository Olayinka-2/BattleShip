/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n   padding: 0;\r\n   margin: 0;\r\n   box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n   font-size: 62.5%;\r\n   height: 100%;\r\n}\r\n\r\nbody {\r\n   height: 100%;\r\n}\r\n\r\nheader {\r\n   display: flex;\r\n   align-items: center;\r\n   justify-content: center;\r\n   background: rgb(207, 205, 205);\r\n   \r\n}\r\n\r\nheader div {\r\n   font-size: 7rem;\r\n   padding: 1rem 0;\r\n}\r\n\r\n.start-session {\r\n   width: 100%;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n}\r\n\r\n.player-option {\r\n   display: flex;\r\n   justify-content: space-between;\r\n   width: 40rem;\r\n}\r\n\r\n.option button {\r\n   padding: 1rem;\r\n   font-size: 2rem;\r\n   background: transparent;\r\n   outline: none;\r\n   border: 1px solid black;\r\n   cursor: pointer ;\r\n}\r\n\r\n#startGame {\r\n   display: block;\r\n   margin: 0 auto;\r\n}\r\n\r\n.option button:hover {\r\n   background: black;\r\n   color: #fff;\r\n}\r\n\r\n.start-session > h2 {\r\n   font-size: 4rem;\r\n   margin: 10rem 0 5rem;\r\n}\r\n\r\n.content-container {\r\n   padding: 4rem;\r\n}\r\n\r\nh2 {\r\n   text-align: center;\r\n}\r\n\r\n.content-innerContainer {\r\n   display: flex;\r\n   align-items: center;\r\n}\r\n\r\n#startGame {\r\n   background-color: transparent;\r\n   text-decoration: underline;\r\n   font-size: 1.4rem;\r\n   padding: .5rem;\r\n   border: none;\r\n   color: #007400;\r\n   cursor: pointer;\r\n}\r\n\r\n.main-player {\r\n   display: flex;\r\n   justify-content: center;\r\n   width:50%;\r\n}\r\n\r\n.automated-player {\r\n   display: flex;\r\n   justify-content: center;\r\n   width: 50%;\r\n}\r\n\r\ntable {\r\n   border-collapse: collapse;\r\n   table-layout: fixed;\r\n}\r\n\r\ntd {\r\n   padding: 1.7rem 2rem;\r\n   text-align: center;\r\n   border: 1px solid black;\r\n}\r\n\r\n\r\nth[scope=\"row\"] {\r\n   font-weight: bold;\r\n   border: none; \r\n}\r\n\r\nthead td {\r\n   font-size: 1.4rem;\r\n   font-weight: bold;\r\n   border: none; \r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleDisplay.js":
/*!******************************!*\
  !*** ./src/battleDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _battleScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleScript */ \"./src/battleScript.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n// Global variables\r\nlet gameOver = false;\r\nlet currentTurn = \"player1\";  \r\nlet player1, player2, computer;\r\n\r\n// Ship color mapping\r\nconst shipColors = {\r\n  Carrier: 'Cyan',\r\n  BattleShip: 'Blue',\r\n  Cruiser: 'Gray',\r\n  Submarine: 'Purple',\r\n  Destroyer: 'Orange'\r\n};\r\n\r\n// Event Listeners\r\ndocument.getElementById(\"btn-1\").addEventListener(\"click\", () => startGame(\"PvP\"));\r\ndocument.getElementById(\"btn-2\").addEventListener(\"click\", () => startGame(\"PvB\"));\r\ndocument.getElementById(\"startGame\").addEventListener(\"click\", startPlaying);\r\n\r\n// Main game start function\r\nfunction startGame(mode) {\r\n  document.querySelector(\"main\").style.display = \"block\";\r\n  document.querySelector(\".welcome-page\").style.display = \"none\";\r\n\r\n  player1 = new _battleScript__WEBPACK_IMPORTED_MODULE_0__.Player('Player 1', true);\r\n  if (mode === \"PvP\") {\r\n    player2 = new _battleScript__WEBPACK_IMPORTED_MODULE_0__.Player('Player 2', true);\r\n    initializeGame(\"P1\", \"P2\", attachAttackListenersPvP);\r\n  } else {\r\n    computer = new _battleScript__WEBPACK_IMPORTED_MODULE_0__.Player('Computer', true);\r\n    initializeGame(\"P1\", \"P2\", attachAttackListenersPvB);\r\n  }\r\n}\r\n\r\n// Initialize boards and color ships\r\nfunction initializeGame(playerPrefix1, playerPrefix2, attachListeners) {\r\n\r\n  createAndAppendTable('.main-player', playerPrefix1);\r\n  createAndAppendTable('.automated-player', playerPrefix2);\r\n\r\n  if (computer) colorShip(player1.board.fleetItems, playerPrefix1);\r\n\r\n  attachListeners();\r\n  disableAllCells();\r\n}\r\n\r\n// Start playing and enable cells\r\nfunction startPlaying() {\r\n  enableAllCells();\r\n  document.querySelector(\"#startGame\").style.display = \"none\";\r\n  document.querySelector(\"#playerTurn\").innerText = \"Player 1's turn\";\r\n}\r\n\r\n// Color ships on the board\r\nfunction colorShip(fleetItems, playerPrefix) {\r\n  fleetItems.forEach(ship => {\r\n    const { coord, orientation, ship: { length, type } } = ship;\r\n    const startRow = coord.charCodeAt(0) - 65;\r\n    const startCol = parseInt(coord.substring(1)) - 1;\r\n\r\n    for (let i = 0; i < length; i++) {\r\n      const row = orientation === 'vertical' ? startRow + i : startRow;\r\n      const col = orientation === 'vertical' ? startCol : startCol + i;\r\n      const cell = document.getElementById(`${playerPrefix}-${String.fromCharCode(row + 65) + (col + 1)}`);\r\n      if (cell) cell.style.backgroundColor = shipColors[type];\r\n    }\r\n  });\r\n}\r\n\r\nfunction attachAttackListenersPvP() {\r\n  // Add event listeners for Player 2's board\r\n  document.querySelectorAll(`td[id^=\"P2-\"]`).forEach(cell => \r\n    cell.addEventListener('click', () => handlePvPAttack(cell, player2, \"player1\", \"Player 1 wins!\"))\r\n  );\r\n\r\n  // Add event listeners for Player 1's board\r\n  document.querySelectorAll(`td[id^=\"P1-\"]`).forEach(cell => \r\n    cell.addEventListener('click', () => handlePvPAttack(cell, player1, \"player2\", \"Player 2 wins!\"))\r\n  );\r\n}\r\n\r\n// PvP Mode attack listeners\r\nfunction handlePvPAttack(cell, defender, turn, winText) {\r\n  if (gameOver || currentTurn !== turn) return; // If the game is over or it's not the player's turn, do nothing\r\n  if (cell.innerText === \"H\" || cell.innerText === \"X\") return; // Prevent attacking already hit cells\r\n\r\n  // Perform attack\r\n  playerAttack(defender, cell.id.split(\"-\")[1], cell);\r\n\r\n  // Switch turns: from \"player1\" to \"player2\" and vice versa\r\n  currentTurn = currentTurn === \"player1\" ? \"player2\" : \"player1\";\r\n  \r\n  // Update the turn status and check if the game is over\r\n  updateTurnStatus(defender, winText);\r\n}\r\n// PvB Mode attack listeners\r\nfunction attachAttackListenersPvB() {\r\n  document.querySelectorAll(`td[id^=\"P2-\"]`).forEach(cell => \r\n    cell.addEventListener('click', () => {\r\n      if (cell.innerText === \"H\" || cell.innerText === \"X\") return;\r\n\r\n      playerAttack(computer, cell.id.replace(\"P2-\", \"\"), cell);\r\n      if (!isGameOver(computer)) {\r\n        currentTurn = \"computer\";\r\n        document.querySelector(\"#playerTurn\").innerText = \"Computer's turn\";\r\n        setTimeout(() => computerAttack(player1), 1000);\r\n      }\r\n    })\r\n  );\r\n}\r\n\r\n// Attack logic for both modes\r\nfunction playerAttack(opponent, cellId, cell) {\r\n  opponent.board.receiveAttack(cellId);\r\n  const isHit = opponent.board.board[cellId[0].charCodeAt(0) - 65][parseInt(cellId.slice(1)) - 1] === \"H\";\r\n  cell.innerText = isHit ? \"H\" : \"X\";\r\n  cell.style.color = isHit ? \"green\" : \"red\";\r\n}\r\n\r\nfunction computerAttack(player) {\r\n  if (gameOver || currentTurn !== \"computer\") return;\r\n\r\n  let cellId, cell;\r\n  do {\r\n    cellId = getRandomCoordinates();\r\n    cell = document.getElementById(`P1-${cellId}`);\r\n  } while (cell && (cell.innerText === \"H\" || cell.innerText === \"X\"));\r\n\r\n  playerAttack(player, cellId, cell);\r\n  updateTurnStatus(player, \"Computer wins!\");\r\n}\r\n\r\n// Utility functions\r\nfunction getRandomCoordinates() { \r\n  const row = String.fromCharCode(65 + Math.floor(Math.random() * 10));\r\n  const col = Math.floor(Math.random() * 10) + 1;\r\n  return `${row}${col}`;\r\n}\r\n\r\nfunction updateTurnStatus(defender, winText) {\r\n  if (isGameOver(defender)) {\r\n    gameOver = true;\r\n    document.querySelector(\"#playerTurn\").innerText = winText;\r\n    disableAllCells();\r\n  } else {\r\n    if(currentTurn == \"computer\") {\r\n      document.querySelector(\"#playerTurn\").innerText = \"Player 1's turn\";\r\n      return;\r\n    }\r\n    document.querySelector(\"#playerTurn\").innerText = `${currentTurn === \"player1\" ? \"Player 1\" : \"Player 2\"}'s turn`;\r\n  }\r\n}\r\n\r\n\r\nfunction disableAllCells() {\r\n  document.querySelectorAll('td').forEach(cell => cell.style.pointerEvents = 'none');\r\n}\r\n\r\nfunction enableAllCells() {\r\n  document.querySelectorAll('td').forEach(cell => cell.style.pointerEvents = 'auto');\r\n}\r\n\r\nfunction createAndAppendTable(parentSelector, playerId) {\r\n  document.querySelector(parentSelector).appendChild(createTable(playerId));\r\n}\r\n\r\nfunction createTable(playerId) {\r\n  const table = document.createElement('table');\r\n  const tbody = document.createElement('tbody');\r\n\r\n  const headerRow = document.createElement('tr');\r\n  headerRow.appendChild(document.createElement('td'));\r\n  for (let i = 1; i <= 10; i++) {\r\n    const cell = document.createElement('td');\r\n    cell.textContent = i;\r\n    headerRow.appendChild(cell);\r\n  }\r\n  table.appendChild(headerRow);\r\n\r\n  const rows = 'ABCDEFGHIJ';\r\n  rows.split('').forEach((row, i) => {\r\n    const rowElement = document.createElement('tr');\r\n    const rowHeader = document.createElement('th');\r\n    rowHeader.scope = 'row';\r\n    rowHeader.textContent = row;\r\n    rowElement.appendChild(rowHeader);\r\n\r\n    for (let j = 1; j <= 10; j++) {\r\n      const cell = document.createElement('td');\r\n      cell.id = `${playerId}-${row}${j}`;\r\n      rowElement.appendChild(cell);\r\n    }\r\n    tbody.appendChild(rowElement);\r\n  });\r\n\r\n  table.appendChild(tbody);\r\n  return table;\r\n}\r\n\r\nfunction isGameOver(player) {\r\n  return player.board.isAllSunk();\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/battleDisplay.js?");

/***/ }),

/***/ "./src/battleScript.js":
/*!*****************************!*\
  !*** ./src/battleScript.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n   constructor(name, autoCreateFleet) {\r\n      this.name = name;\r\n      this.board = new GameBoard(autoCreateFleet); \r\n   }\r\n}\r\n\r\n\r\nclass Ship {\r\n   constructor(length, shipType) {\r\n      this.name = shipType;\r\n      this.length = length;\r\n      this.timesHit = 0;\r\n      this.sunk = false;\r\n   }\r\n\r\n   hit() {\r\n      this.timesHit++;\r\n      console.log(`${this.name} hit count: ${this.timesHit}/${this.length}`);\r\n   }\r\n\r\n   isSunk() {\r\n      if(this.length === this.timesHit) {\r\n         this.sunk = true;\r\n      }\r\n      return this.sunk;\r\n   }\r\n}\r\n\r\nclass GameBoard {\r\n   constructor(autoCreateFleet = false) {\r\n      this.board = Array.from({ length: 10 }, () => Array(10).fill(null));\r\n      this.ships = [];\r\n      this.fleetItems = [];\r\n\r\n      if (autoCreateFleet) this.createFleet();\r\n   }\r\n\r\n   createFleet() {\r\n      const fleet = [\r\n         { type: 'Carrier', length: 5 },\r\n         { type: 'BattleShip', length: 4 },\r\n         { type: 'Cruiser', length: 3 },\r\n         { type: 'Submarine', length: 3 },\r\n         { type: 'Destroyer', length: 2 }\r\n      ];\r\n\r\n\r\n      for (let ship of fleet) {\r\n         let placed = false;\r\n         while (!placed) {\r\n            const row = Math.floor(Math.random() * 10) + 1;\r\n            const col = Math.floor(Math.random() * 10) + 1;\r\n            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';\r\n            const alphabeticRow = String.fromCharCode(65 + row);\r\n            placed = this.placeShip(`${alphabeticRow}${col}`, orientation, ship.type);\r\n            if(placed) {\r\n               this.fleetItems.push({\"coord\":`${alphabeticRow}${col}`, orientation, ship});\r\n               this.ships.push(this.#getShipType(ship.type));\r\n            }\r\n            \r\n         }\r\n      }\r\n      return this.fleetItems;\r\n   }\r\n\r\n   #getShipType(shipType) {\r\n      switch (shipType) {\r\n         case 'Carrier':\r\n            return new Ship(5, 'Carrier');\r\n         case 'BattleShip':\r\n            return new Ship(4, 'BattleShip');\r\n         case 'Cruiser':\r\n            return new Ship(3, 'Cruiser');\r\n         case 'Submarine':\r\n            return new Ship(3, 'Submarine');\r\n         case 'Destroyer':\r\n            return new Ship(2, 'Destroyer');\r\n         default:\r\n            console.log('Enter the game ship name');\r\n            return null;\r\n      }\r\n   }\r\n\r\n   #parseCoordinates(coordinates) {\r\n      return {\r\n         row: coordinates.toUpperCase().charCodeAt(0) - 65,\r\n         col: parseInt(coordinates.substring(1), 10) - 1,\r\n      };\r\n   }\r\n\r\n   placeShip(coordinates, orientation, shipType) {\r\n      let ship =this.#getShipType(shipType);\r\n      if(!ship) return false;\r\n\r\n      let {row, col} = this.#parseCoordinates(coordinates);\r\n\r\n      if(\r\n         (orientation === 'horizontal' && col + ship.length > 10) ||\r\n         (orientation === 'vertical' && row + ship.length > 10)\r\n      ) {\r\n         return false;\r\n      }\r\n\r\n      // let targetArray = this.board[row];\r\n\r\n      for(let i = 0; i < ship.length; i++) {\r\n         let targetRow = orientation === 'horizontal' ? row : row + i;\r\n         let targetCol = orientation === 'horizontal' ? col + i : col;\r\n         if(this.board[targetRow] && this.board[targetRow][targetCol] !== null) {\r\n            console.log('Space occupied already');\r\n            return false;\r\n         }\r\n      }\r\n   \r\n\r\n      if(ship !== null && row + ship.length <= 10 && col + ship.length <= 10) {\r\n         for(let i = 0; i < ship.length; i++) {\r\n            if(orientation == 'horizontal') {\r\n               this.board[row][col + i] = ship.name.slice(0, 2);\r\n            } else if(orientation == 'vertical') {\r\n               this.board[row + i][col] = ship.name.slice(0, 2);\r\n            }\r\n         }  \r\n         return true;\r\n      }\r\n      return false;\r\n   }\r\n\r\n   isAllSunk() {\r\n      const allSunk = this.ships.every(ship => ship.isSunk());\r\n      console.log(\"All ships sunk:\", allSunk);\r\n      return allSunk;\r\n   }\r\n   \r\n\r\n   receiveAttack(coordinates) {\r\n\r\n      let {row, col} = this.#parseCoordinates(coordinates);\r\n      let targetBox = this.board[row][col] ;\r\n\r\n      if (targetBox === 'H' || targetBox === 'X') {\r\n         console.log(\"Already attacked this cell.\");\r\n         return;\r\n      }\r\n\r\n      if (targetBox === null) {\r\n         this.board[row][col] = 'X';\r\n         console.log(\"Miss! No ship at this location.\");\r\n         return;\r\n      }\r\n\r\n      let targetShip = this.ships.find(ship => ship.name.slice(0,2) == targetBox);\r\n\r\n         if(targetShip) {\r\n            targetShip.hit();\r\n            console.log('hit');\r\n            this.board[row][col] = 'H';\r\n            if(targetShip.isSunk()) {\r\n               console.log(`${targetShip.name} is sunk!`);\r\n            }\r\n         } else {\r\n            console.error(\"Error: Could not find a ship for this attack.\");\r\n            return;\r\n         }\r\n   }\r\n\r\n    // Pretty print function\r\n   printGameBoard() {\r\n      const rows = 'ABCDEFGHIJ';  // Rows labeled A-J\r\n      const columns = Array.from({ length: 10 }, (_, i) => i + 1); // Columns labeled 0-9\r\n\r\n      // Create header row\r\n      let boardString = '   ' + columns.map(col => col.toString().padStart(2, ' ')).join(' ') + '\\n';\r\n\r\n      // Loop through each row to build the board display\r\n      for (let i = 0; i < rows.length; i++) {\r\n         const rowLabel = rows[i];\r\n         let rowString = rowLabel + ' |';  // Row label\r\n\r\n         for (let j = 0; j < columns.length; j++) {\r\n            const cell = this.board[i][j];\r\n            rowString += ` ${cell ? cell : '.'} |`;  // Show ship or empty cell\r\n         }\r\n         boardString += rowString + '\\n';  // Add row to the board string\r\n      }\r\n\r\n      console.log(boardString);  // Print the board to the console\r\n   }\r\n}\r\n\r\n\r\n// let player1 = new Player('computer', true);\r\n// console.log(player1.board.board);\r\n// player1.board.receiveAttack('A2');\r\n// player1.board.printGameBoard();\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/battleScript.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/battleDisplay.js");
/******/ 	
/******/ })()
;