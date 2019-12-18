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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/helpers/index.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
// ─── INPUT ──────────────────────────────────────────────────────────────────────
//
window.auto_focus = function (name) {
  setTimeout(function () {
    $("input[name=".concat(name, "]")).focus();
    $("textarea[name=".concat(name, "]")).focus();
  }, 500);
}; //
// ─── DATE AND TIME  ─────────────────────────────────────────────────────────────────────
//


window.get_current_year = function () {
  var today = new Date();
  return today.getFullYear();
};

window.get_current_date = function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
};

window.get_current_hour = function () {
  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();
  if (hh < 10) hh = '0' + hh;
  if (mm < 10) mm = '0' + mm;
  return "".concat(hh, ":").concat(mm);
}; //
// ─── ARRAY OBJECT ───────────────────────────────────────────────────────────────
//


window.sort_array_object = function (items, name_field) {
  return items.sort(function (a, b) {
    if (a[name_field] > b[name_field]) {
      return 1;
    }

    if (a[name_field] < b[name_field]) {
      return -1;
    }

    return 0;
  });
}; //
// ─── NUMBER ─────────────────────────────────────────────────────────────────────
//


window.is_float = function (n) {
  if (isNaN(n)) return false;else {
    var p_f = parseFloat(n);
    return p_f - p_f.toFixedDown(0) > 0;
  }
}; //
// ─── CONFIGURATION: message ─────────────────────────────────────────────────────────────────────
//


window.message = function (type, content) {
  var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  console.log("/resources/js/helpers/index.js: ".concat(content)); //window.Snotify[type](content, title)
};

/***/ }),

/***/ 2:
/*!*********************************************!*\
  !*** multi ./resources/js/helpers/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/danny/code/Laravel/laravel-vue/resources/js/helpers/index.js */"./resources/js/helpers/index.js");


/***/ })

/******/ });