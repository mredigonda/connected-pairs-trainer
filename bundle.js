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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n    font-size: 1.9rem;\\n    user-select: none;\\n}\\n\\n#wrapper {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100vw;\\n    height: 100vh;\\n}\\n\\n#innerWrapper {\\n    min-width: 60%;\\n    min-height: 60%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#innerInnerWrapper {}\\n\\n#question {\\n    width: fit-content;\\n    margin: 0 auto;\\n    user-select: text;\\n}\\n\\n#score {\\n    width: fit-content;\\n    margin: 0 auto;\\n    font-size: .5rem;\\n}\\n\\n#options {\\n    width: fit-content;\\n    margin: 0 auto;\\n}\\n\\nbutton:focus {\\n    outline: 0;\\n}\\n\\n.button {\\n    background-color: #4CAF50;\\n    border: none;\\n    color: white;\\n    padding: 15px 32px;\\n    text-align: center;\\n    text-decoration: none;\\n    display: inline-block;\\n    font-size: 1rem;\\n    margin: 10px auto;\\n    cursor: pointer;\\n    width: 6rem;\\n}\\n\\n.button-gray {\\n    background-color: #e7e7e7;\\n    color: black;\\n}\\n\\n.button-black {\\n    background-color: #555555;\\n}\\n\\n#message {\\n    width: 100%;\\n    margin: 0 auto;\\n    height: .5rem;\\n    background-color: gray;\\n}\\n\\n.green {\\n    animation: togreen 1s;\\n}\\n\\n.red {\\n    animation: tored 1s;\\n}\\n\\n.blue {\\n    color: #22a8ff;\\n}\\n\\n@keyframes togreen {\\n    20% {\\n        background-color: green;\\n    }\\n\\n    40% {\\n        background-color: green;\\n        width: 0%;\\n    }\\n\\n    60% {\\n        background-color: green;\\n        width: 0%;\\n    }\\n\\n    80% {\\n        background-color: green;\\n    }\\n}\\n\\n@keyframes tored {\\n    20% {\\n        background-color: red;\\n    }\\n\\n    40% {\\n        background-color: red;\\n        width: 0%;\\n    }\\n\\n    60% {\\n        background-color: red;\\n        width: 0%;\\n    }\\n\\n    80% {\\n        background-color: red;\\n    }\\n}\\n\\ntable>tbody>tr>td {\\n    font-size: 12px;\\n    color: gray;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.js */ \"./src/random.js\");\n/* harmony import */ var _meu_meu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meu/meu */ \"./src/meu/meu.js\");\n/* harmony import */ var _mel_mel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mel/mel */ \"./src/mel/mel.js\");\n\n\n\n\n\n\nlet CORRECT = 0\nlet TOTAL = 0\nlet selectedAudio = null\n\nconst questionsOptions = [{\n        firstOption: {\n            name: \"Mel\",\n            audios: _mel_mel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        },\n        secondOption: {\n            name: \"Meu\",\n            audios: _meu_meu__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        }\n    }\n    /*, {\n        firstOption: {\n            \"Rock\",\n            sounds: []\n        },\n        secondOption: {\n            \"Lock\",\n            sounds: []\n        }\n    }*/\n]\nlet playRandomAudio = (audios) => {\n    const audioPlayer = new Audio(audios[Object(_random_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, audios.length - 1)])\n    selectedAudio = audioPlayer\n    audioPlayer.play()\n}\n\nlet renderNewQuestion = () => {\n    let firstOptionNode = document.getElementById(\"first-option\")\n    let secondOptionNode = document.getElementById(\"second-option\")\n    let questionIndex = Object(_random_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, questionsOptions.length - 1)\n    let options = questionsOptions[questionIndex]\n\n    firstOptionNode.innerHTML = options.firstOption.name\n    secondOptionNode.innerHTML = options.secondOption.name\n    firstOptionNode.disabled = false\n    secondOptionNode.disabled = false\n\n    if (Object(_random_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, 1) == 0) {\n        playRandomAudio(options.firstOption.audios)\n        firstOptionNode.addEventListener(\"click\", onCorrectAnswer)\n        secondOptionNode.addEventListener(\"click\", onWrongAnswer)\n    } else {\n        playRandomAudio(options.secondOption.audios)\n        firstOptionNode.addEventListener(\"click\", onWrongAnswer)\n        secondOptionNode.addEventListener(\"click\", onCorrectAnswer)\n    }\n}\n\nlet cleanEventListeners = () => {\n    let firstOptionNode = document.getElementById(\"first-option\")\n    let secondOptionNode = document.getElementById(\"second-option\")\n\n    firstOptionNode.removeEventListener(\"click\", onCorrectAnswer)\n    firstOptionNode.removeEventListener(\"click\", onWrongAnswer)\n    secondOptionNode.removeEventListener(\"click\", onCorrectAnswer)\n    secondOptionNode.removeEventListener(\"click\", onWrongAnswer)\n\n    firstOptionNode.disabled = true\n    secondOptionNode.disabled = true\n}\nconst ANIMATION_DURATION = 1000\nlet feedbackEffect = (correct) => {\n    let message = document.getElementById('message')\n    message.classList.add(correct ? \"green\" : \"red\")\n    setTimeout(() => {\n        document.getElementById(\"score\").innerHTML = CORRECT + '/' + TOTAL\n    }, ANIMATION_DURATION / 2)\n    setTimeout(() => {\n        message.classList.remove(correct ? \"green\" : \"red\")\n        renderNewQuestion()\n    }, ANIMATION_DURATION)\n}\nlet handleButtonClick = (correct) => {\n    TOTAL++\n    cleanEventListeners()\n    feedbackEffect(correct)\n}\nlet onCorrectAnswer = () => {\n    CORRECT++\n    handleButtonClick(true)\n}\nlet onWrongAnswer = () => {\n    handleButtonClick(false)\n}\n\nlet start = document.getElementById(\"start\")\nstart.addEventListener(\"click\", renderNewQuestion)\nstart.addEventListener(\"click\", () => {\n    start.parentNode.removeChild(start)\n    document.getElementById(\"first-option\").hidden = false\n    document.getElementById(\"second-option\").hidden = false\n    document.getElementById(\"score\").hidden = false\n    document.getElementById(\"question\").hidden = false\n    document.getElementById(\"options\").hidden = false\n    document.getElementById(\"message\").hidden = false\n    document.getElementById(\"question\").innerHTML = \"What do you hear?\"\n    document.getElementById(\"instructions\").hidden = true\n})\n\ndocument.onkeydown = (e) => {\n    switch (e.code) {\n        case \"Space\": {\n            if (selectedAudio)\n                selectedAudio.play()\n            else\n                document.getElementById(\"start\").click()\n            break\n        }\n        case \"Digit1\": {\n            document.getElementById(\"first-option\").click()\n            break\n        }\n        case \"Digit2\": {\n            document.getElementById(\"second-option\").click()\n            break\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mel/1.mp3":
/*!***********************!*\
  !*** ./src/mel/1.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"08c1b1aa427f76cb740b3c0efd4cfc7a.mp3\");\n\n//# sourceURL=webpack:///./src/mel/1.mp3?");

/***/ }),

/***/ "./src/mel/2.mp3":
/*!***********************!*\
  !*** ./src/mel/2.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"04d12ec4aefa7ccabb9e8f7ebf081a1a.mp3\");\n\n//# sourceURL=webpack:///./src/mel/2.mp3?");

/***/ }),

/***/ "./src/mel/3.mp3":
/*!***********************!*\
  !*** ./src/mel/3.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2577b231a0ce1d28e9fe8a569f22c39a.mp3\");\n\n//# sourceURL=webpack:///./src/mel/3.mp3?");

/***/ }),

/***/ "./src/mel/4.mp3":
/*!***********************!*\
  !*** ./src/mel/4.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dbdd4501d8bcf154fbdb1b1156689306.mp3\");\n\n//# sourceURL=webpack:///./src/mel/4.mp3?");

/***/ }),

/***/ "./src/mel/5.mp3":
/*!***********************!*\
  !*** ./src/mel/5.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cf8294c382a40cf3d5db37d68a5110a8.mp3\");\n\n//# sourceURL=webpack:///./src/mel/5.mp3?");

/***/ }),

/***/ "./src/mel/mel.js":
/*!************************!*\
  !*** ./src/mel/mel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.mp3 */ \"./src/mel/1.mp3\");\n/* harmony import */ var _2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.mp3 */ \"./src/mel/2.mp3\");\n/* harmony import */ var _3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.mp3 */ \"./src/mel/3.mp3\");\n/* harmony import */ var _4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4.mp3 */ \"./src/mel/4.mp3\");\n/* harmony import */ var _5_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./5.mp3 */ \"./src/mel/5.mp3\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    _1_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    _2_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    _3_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    _4_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    _5_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n]);\n\n//# sourceURL=webpack:///./src/mel/mel.js?");

/***/ }),

/***/ "./src/meu/1.mp3":
/*!***********************!*\
  !*** ./src/meu/1.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4191d6b67a3e67d3a31ae853808cb2ef.mp3\");\n\n//# sourceURL=webpack:///./src/meu/1.mp3?");

/***/ }),

/***/ "./src/meu/2.mp3":
/*!***********************!*\
  !*** ./src/meu/2.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a86bae6a229f7031df9468bb25524372.mp3\");\n\n//# sourceURL=webpack:///./src/meu/2.mp3?");

/***/ }),

/***/ "./src/meu/3.mp3":
/*!***********************!*\
  !*** ./src/meu/3.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"39eb21c0e9d781fd256fa51ce61c9c01.mp3\");\n\n//# sourceURL=webpack:///./src/meu/3.mp3?");

/***/ }),

/***/ "./src/meu/4.mp3":
/*!***********************!*\
  !*** ./src/meu/4.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f7a9eeb5c11902e6925a6aa14734cd2f.mp3\");\n\n//# sourceURL=webpack:///./src/meu/4.mp3?");

/***/ }),

/***/ "./src/meu/5.mp3":
/*!***********************!*\
  !*** ./src/meu/5.mp3 ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0b3b5f75f999610690019e3ac67953f9.mp3\");\n\n//# sourceURL=webpack:///./src/meu/5.mp3?");

/***/ }),

/***/ "./src/meu/meu.js":
/*!************************!*\
  !*** ./src/meu/meu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.mp3 */ \"./src/meu/1.mp3\");\n/* harmony import */ var _2_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.mp3 */ \"./src/meu/2.mp3\");\n/* harmony import */ var _3_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.mp3 */ \"./src/meu/3.mp3\");\n/* harmony import */ var _4_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4.mp3 */ \"./src/meu/4.mp3\");\n/* harmony import */ var _5_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./5.mp3 */ \"./src/meu/5.mp3\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    _1_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    _2_mp3__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    _3_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    _4_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    _5_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n]);\n\n//# sourceURL=webpack:///./src/meu/meu.js?");

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! exports provided: getRandomArbitrary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomArbitrary\", function() { return getRandomArbitrary; });\n/**\n * Returns a random number between min (inclusive) and max (exclusive)\n */\nlet getRandomArbitrary = (min, max) => {\n    return Math.random() * (max - min) + min;\n}\n\n/**\n * Returns a random integer between min (inclusive) and max (inclusive).\n * The value is no lower than min (or the next integer greater than min\n * if min isn't an integer) and no greater than max (or the next integer\n * lower than max if max isn't an integer).\n * Using Math.round() will give you a non-uniform distribution!\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ((min, max) => {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n});\n\n//# sourceURL=webpack:///./src/random.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });