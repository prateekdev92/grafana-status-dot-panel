define(["@grafana/data","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./tooltip.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./tooltip.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* Custom properties */\n:root {\n  --tooltip-text-color: white;\n  --tooltip-background-color: rgb(32, 34, 38);\n  --tooltip-margin: 30px;\n  --tooltip-arrow-size: 6px;\n}\n\n/* Wrapping */\n.Tooltip-Wrapper {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n/* Absolute positioning */\n.Tooltip-Tip {\n  position: absolute;\n  border-radius: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 10px;\n  color: white;\n  color: var(--tooltip-text-color);\n  background: rgb(32, 34, 38);\n  background: var(--tooltip-background-color);\n  font-size: 14px;\n  font-family: sans-serif;\n  line-height: 1;\n  z-index: 100;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n/* CSS border triangles */\n.Tooltip-Tip::before {\n  content: \" \";\n  left: 50%;\n  border: solid transparent;\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-width: 6px;\n  border-width: var(--tooltip-arrow-size);\n  margin-left: calc(6px * -1);\n  margin-left: calc(var(--tooltip-arrow-size) * -1);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.top {\n  top: calc(30px * -1);\n  top: calc(var(--tooltip-margin) * -1);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.top::before {\n  top: 100%;\n  border-top-color: rgb(32, 34, 38);\n  border-top-color: var(--tooltip-background-color);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.right {\n  left: calc(100% + 30px);\n  left: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.right::before {\n  left: calc(6px * -1);\n  left: calc(var(--tooltip-arrow-size) * -1);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-right-color: rgb(32, 34, 38);\n  border-right-color: var(--tooltip-background-color);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.bottom {\n  bottom: calc(30px * -1);\n  bottom: calc(var(--tooltip-margin) * -1);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.bottom::before {\n  bottom: 100%;\n  border-bottom-color: rgb(32, 34, 38);\n  border-bottom-color: var(--tooltip-background-color);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.left {\n  left: auto;\n  right: calc(100% + 30px);\n  right: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.left::before {\n  left: auto;\n  right: calc(6px * -2);\n  right: calc(var(--tooltip-arrow-size) * -2);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-left-color: rgb(32, 34, 38);\n  border-left-color: var(--tooltip-background-color);\n}", "",{"version":3,"sources":["tooltip.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,2BAA2B;EAC3B,2CAA2C;EAC3C,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA,aAAa;AACb;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA,yBAAyB;AACzB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,2BAA2B;EAC3B,aAAa;EACb,YAAgC;EAAhC,gCAAgC;EAChC,2BAA2C;EAA3C,2CAA2C;EAC3C,eAAe;EACf,uBAAuB;EACvB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA,yBAAyB;AACzB;EACE,YAAY;EACZ,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,oBAAoB;EACpB,iBAAuC;EAAvC,uCAAuC;EACvC,2BAAiD;EAAjD,iDAAiD;AACnD;;AAEA,yBAAyB;AACzB;EACE,oBAAqC;EAArC,qCAAqC;AACvC;;AAEA,yBAAyB;AACzB;EACE,SAAS;EACT,iCAAiD;EAAjD,iDAAiD;AACnD;;AAEA,yBAAyB;AACzB;EACE,uBAAwC;EAAxC,wCAAwC;EACxC,QAAQ;EACR,yCAAyC;AAC3C;;AAEA,yBAAyB;AACzB;EACE,oBAA0C;EAA1C,0CAA0C;EAC1C,QAAQ;EACR,yCAAyC;EACzC,mCAAmD;EAAnD,mDAAmD;AACrD;;AAEA,yBAAyB;AACzB;EACE,uBAAwC;EAAxC,wCAAwC;AAC1C;;AAEA,yBAAyB;AACzB;EACE,YAAY;EACZ,oCAAoD;EAApD,oDAAoD;AACtD;;AAEA,yBAAyB;AACzB;EACE,UAAU;EACV,wBAAyC;EAAzC,yCAAyC;EACzC,QAAQ;EACR,yCAAyC;AAC3C;;AAEA,yBAAyB;AACzB;EACE,UAAU;EACV,qBAA2C;EAA3C,2CAA2C;EAC3C,QAAQ;EACR,yCAAyC;EACzC,kCAAkD;EAAlD,kDAAkD;AACpD","file":"tooltip.css","sourcesContent":["/* Custom properties */\n:root {\n  --tooltip-text-color: white;\n  --tooltip-background-color: rgb(32, 34, 38);\n  --tooltip-margin: 30px;\n  --tooltip-arrow-size: 6px;\n}\n\n/* Wrapping */\n.Tooltip-Wrapper {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n/* Absolute positioning */\n.Tooltip-Tip {\n  position: absolute;\n  border-radius: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 10px;\n  color: var(--tooltip-text-color);\n  background: var(--tooltip-background-color);\n  font-size: 14px;\n  font-family: sans-serif;\n  line-height: 1;\n  z-index: 100;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n/* CSS border triangles */\n.Tooltip-Tip::before {\n  content: \" \";\n  left: 50%;\n  border: solid transparent;\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-width: var(--tooltip-arrow-size);\n  margin-left: calc(var(--tooltip-arrow-size) * -1);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.top {\n  top: calc(var(--tooltip-margin) * -1);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.top::before {\n  top: 100%;\n  border-top-color: var(--tooltip-background-color);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.right {\n  left: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.right::before {\n  left: calc(var(--tooltip-arrow-size) * -1);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-right-color: var(--tooltip-background-color);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.bottom {\n  bottom: calc(var(--tooltip-margin) * -1);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.bottom::before {\n  bottom: 100%;\n  border-bottom-color: var(--tooltip-background-color);\n}\n\n/* Absolute positioning */\n.Tooltip-Tip.left {\n  left: auto;\n  right: calc(100% + var(--tooltip-margin));\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n}\n\n/* CSS border triangles */\n.Tooltip-Tip.left::before {\n  left: auto;\n  right: calc(var(--tooltip-arrow-size) * -2);\n  top: 50%;\n  transform: translateX(0) translateY(-50%);\n  border-left-color: var(--tooltip-background-color);\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./StatusDotPanel.tsx":
/*!****************************!*\
  !*** ./StatusDotPanel.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tooltip_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip.css */ "./tooltip.css");
/* harmony import */ var _tooltip_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tooltip_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip */ "./tooltip.tsx");







function StatusDotPanel(props) {
  var styles = getStyles();
  var MIN_DIAMETER = 8;
  var MAX_DIAMETER = 50;
  var MIN_SPACE = 5;
  var MAX_SPACE = 20;
  var options = props.options;
  var width = props.width;
  var height = props.height;
  var data = props.data;

  function interpolateLabel(legend, obj) {
    if (!legend) {
      return '';
    }

    for (var key in obj) {
      if (legend.includes(key)) {
        legend = legend.replace(key, obj[key]);
      }
    }

    return legend.replace(/{/g, '').replace(/}/g, '');
  }

  function ascOrder(a, b) {
    var _a, _b;

    var entityHistoryA = (_a = a === null || a === void 0 ? void 0 : a.fields[1]) === null || _a === void 0 ? void 0 : _a.values.toArray();
    var valueA = entityHistoryA[entityHistoryA.length - 1];
    var entityHistoryB = (_b = b === null || b === void 0 ? void 0 : b.fields[1]) === null || _b === void 0 ? void 0 : _b.values.toArray();
    var valueB = entityHistoryB[entityHistoryB.length - 1];
    return valueA - valueB;
  }

  function descOrder(a, b) {
    return ascOrder(b, a);
  }

  var customSeries = (options === null || options === void 0 ? void 0 : options.sortOrder) === 'asc' ? data.series.sort(ascOrder) : (options === null || options === void 0 ? void 0 : options.sortOrder) === 'desc' ? data.series.sort(descOrder) : data.series;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, customSeries.map(function (frame) {
    var _a, _b;

    var entityHistory = (_a = frame === null || frame === void 0 ? void 0 : frame.fields[1]) === null || _a === void 0 ? void 0 : _a.values.toArray();

    if (!entityHistory) {
      return;
    }

    var config = frame === null || frame === void 0 ? void 0 : frame.fields[1].display(entityHistory[entityHistory.length - 1]);
    config.suffix = config.suffix ? config.suffix : '';
    var legend = ((_b = data === null || data === void 0 ? void 0 : data.request) === null || _b === void 0 ? void 0 : _b.targets[0]) || {
      legendFormat: ''
    };
    var approxDiameter = width * 1.1 / customSeries.length;
    var metric = config.text !== '' ? parseFloat(config.text) : '-';
    approxDiameter = parseInt(options === null || options === void 0 ? void 0 : options.radius, 10) || (approxDiameter < MIN_DIAMETER ? MIN_DIAMETER : approxDiameter > MAX_DIAMETER ? MAX_DIAMETER : approxDiameter);
    var circleStyle = {
      width: approxDiameter + 'px',
      height: approxDiameter + 'px',
      backgroundColor: config.color,
      borderRadius: options === null || options === void 0 ? void 0 : options.shape
    };
    var margin = ((options === null || options === void 0 ? void 0 : options.spacing) < MIN_SPACE || (options === null || options === void 0 ? void 0 : options.spacing) > MAX_SPACE ? MIN_SPACE : options === null || options === void 0 ? void 0 : options.spacing) + 'px';
    var tooltipContent = interpolateLabel(legend.legendFormat, frame.fields[1].labels) + ' (' + metric + config.suffix + ')';
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                margin: ", ";\n              "], ["\n                margin: ", ";\n              "])), margin)),
      key: frame.name,
      href: interpolateLabel(options === null || options === void 0 ? void 0 : options.externalApp, frame.fields[1].labels),
      rel: "noreferrer",
      target: (options === null || options === void 0 ? void 0 : options.externalApp) ? '_blank' : '_self'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: circleStyle
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.link, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    font-size: ", "px;\n                    display: ", ";\n                  "], ["\n                    font-size: ", "px;\n                    display: ", ";\n                  "])), approxDiameter / 2, (options === null || options === void 0 ? void 0 : options.showInlineMetric) ? 'flex' : 'none'))
    }, metric), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: tooltipContent,
      direction: "bottom"
    })));
  }));
} // StatusDotPanel.propTypes = {
//   options: PropTypes.object,
//   data: PropTypes.object,
//   width: PropTypes.number,
//   height: PropTypes.number,
// };


/* harmony default export */ __webpack_exports__["default"] = (StatusDotPanel);
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      flex-wrap: wrap;\n      overflow: scroll;\n      align-content: flex-start;\n    "], ["\n      display: flex;\n      flex-wrap: wrap;\n      overflow: scroll;\n      align-content: flex-start;\n    "]))),
    link: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      margin: 0px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      font-weight: 500;\n      letter-spacing: -0.6x;\n    "], ["\n      margin: 0px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      font-weight: 500;\n      letter-spacing: -0.6x;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StatusDotPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusDotPanel */ "./StatusDotPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_StatusDotPanel__WEBPACK_IMPORTED_MODULE_1__["default"]).useFieldConfig({
  disableStandardOptions: [_grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Min, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Max, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Links, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].DisplayName, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].NoValue, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Mappings]
}).setPanelOptions(function (builder) {
  return builder.addTextInput({
    path: 'externalApp',
    name: 'External Link',
    description: 'Enter url, use {var} for legends/labels',
    defaultValue: ''
  }).addRadio({
    path: 'radius',
    name: 'Dot Size',
    defaultValue: 'false',
    settings: {
      options: [{
        value: 'false',
        label: 'Default'
      }, {
        value: '15',
        label: 'Small'
      }, {
        value: '20',
        label: 'Medium'
      }, {
        value: '25',
        label: 'Large'
      }, {
        value: '30',
        label: 'Extra large'
      }]
    }
  }).addRadio({
    path: 'shape',
    name: 'Dot Shape',
    defaultValue: '100%',
    settings: {
      options: [{
        value: '100%',
        label: 'Default'
      }, {
        value: '0%',
        label: 'Square'
      }]
    }
  }).addRadio({
    path: 'spacing',
    name: 'Dot Spacing',
    defaultValue: '10',
    settings: {
      options: [{
        value: '10',
        label: 'Default'
      }, {
        value: '5',
        label: 'Less'
      }, {
        value: '15',
        label: 'Medium'
      }, {
        value: '20',
        label: 'More'
      }]
    }
  }).addRadio({
    path: 'sortOrder',
    name: 'Sort Order',
    defaultValue: 'no',
    settings: {
      options: [{
        value: 'asc',
        label: 'ASC'
      }, {
        value: 'desc',
        label: 'DSC'
      }]
    }
  }); // .addBooleanSwitch({
  //   path: 'showInlineMetric',
  //   name: 'Show metric inline',
  //   defaultValue: false,
  // })
});

/***/ }),

/***/ "./tooltip.css":
/*!*********************!*\
  !*** ./tooltip.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./tooltip.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./tooltip.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./tooltip.tsx":
/*!*********************!*\
  !*** ./tooltip.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.css */ "./tooltip.css");
/* harmony import */ var _tooltip_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tooltip_css__WEBPACK_IMPORTED_MODULE_2__);




var Tooltip = function Tooltip(props) {
  var timeout;

  var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      active = _a[0],
      setActive = _a[1];

  var showTip = function showTip() {
    timeout = setTimeout(function () {
      setActive(true);
    }, props.delay || 400);
  };

  var hideTip = function hideTip() {
    clearInterval(timeout);
    setActive(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Tooltip-Wrapper",
    // When to show the tooltip
    onMouseEnter: showTip,
    onMouseLeave: hideTip
  }, props.children, active && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "Tooltip-Tip " + (props.direction || 'top')
  }, props.content));
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map