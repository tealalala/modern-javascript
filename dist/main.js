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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var length = __webpack_require__(/*! length.js */ \"./node_modules/length.js/length.js\");\n\nconsole.log(\"test\");\n\nconsole.log(length(100, 'cm').to('m'));\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/length.js/length.js":
/*!******************************************!*\
  !*** ./node_modules/length.js/length.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * length.js v1.1.0 (https://github.com/appalaszynski/length.js)\n * Copyright (c) 2018 appalaszynski (https://github.com/appalaszynski)\n * Licensed under MIT (https://github.com/appalaszynski/length.js/blob/master/LICENSE)\n */\n;(function (global, factory) {\n  if (true) {\n    module.exports = factory();\n  } else {}\n}(this, (function () { 'use strict';\n\n  var standardUnitDependences = {\n    pm: Math.pow(10, -12),\n    nm: Math.pow(10, -9),\n    um: Math.pow(10, -6),\n    mm: Math.pow(10, -3),\n    cm: Math.pow(10, -2),\n    dm: Math.pow(10, -1),\n    m: 1,\n    dam: Math.pow(10, 1),\n    hm: Math.pow(10, 2),\n    km: Math.pow(10, 3),\n    nmi: 1852,\n    in: 0.0254,\n    ft: 0.3048,\n    yd: 0.9144,\n    fm: 1.8288,\n    mi: 1609.344,\n    ld: 384402000,\n    au: 149597870700,\n    ly: 9460730472580800,\n    pc: (648000 / Math.PI) * 149597870700,\n  };\n\n  var supportedUnits = Object.keys(standardUnitDependences);\n\n  var errors = {\n    unitType: 'Unsupported unit type! Supported types:\\n' + supportedUnits + '.',\n    valueType: 'Value must be a number!',\n    noUnit: 'You have to pass unit type!',\n    noValue: 'You have to pass value!',\n  };\n\n  function validate(value, unit) {\n    validateValue(value);\n    validateUnit(unit);\n  }\n\n  function validateUnit(unit) {\n    if (typeof unit === 'undefined') {\n      throw Error(errors.noUnit);\n    } else if (supportedUnits.indexOf(unit) == -1) {\n      throw Error(errors.unitType);\n    }\n  }\n\n  function validateValue(value) {\n    if (typeof value === 'undefined') {\n      throw Error(errors.noValue);\n    } else if (typeof value !== 'number') {\n      throw Error(errors.valueType);\n    }\n  }\n\n  function Length(value, unit) {\n    validate(value, unit);\n\n    this.value = value;\n    this.unit = unit;\n  }\n\n  var length = function (value, unit) {\n    return new Length(value, unit);\n  };\n\n  function getValueInStandardUnit(value, unit) {\n    return value * standardUnitDependences[unit];\n  }\n\n  function getValueByUnit(value, unit) {\n    return value * (1 / standardUnitDependences[unit]);\n  }\n\n  function to(unit) {\n    validateUnit(unit);\n    var valueInStandardUnit = getValueInStandardUnit(this.value, this.unit);\n    var convertedValue = getValueByUnit(valueInStandardUnit, unit);\n    return length(convertedValue, unit);\n  }\n\n  function add(value, unit) {\n    if (typeof unit === 'undefined' || this.unit === unit) {\n      validateValue(value);\n      return length(this.value + value, this.unit);\n    }\n    validate(value, unit);\n    if (value === 0) return length(this.value, this.unit);\n    var newValue = this.value + length(value, unit).to(this.unit).getValue();\n    return length(newValue, this.unit);\n  }\n\n  function getValue() {\n    return this.value;\n  }\n\n  function getUnit() {\n    return this.unit;\n  }\n\n  function getString() {\n    return this.value + this.unit;\n  }\n\n  function toPrecision(digits) {\n    var value = digits ? this.value.toFixed(digits) : this.value;\n    return length(parseFloat(value), this.unit);\n  }\n\n  var proto = Length.prototype;\n\n  proto.version = '1.1.0';\n\n  proto.to = to;\n  proto.add = add;\n  proto.getValue = getValue;\n  proto.getUnit = getUnit;\n  proto.getString = proto.toString = getString;\n  proto.toPrecision = toPrecision;\n\n  length.fn = proto;\n\n  return length;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/length.js/length.js?");

/***/ })

/******/ });