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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/// <reference path="../../node_modules/@types/node/index.d.ts" />
var style = __webpack_require__(1);
var $ = function (selector) {
    var $elems;
    if (typeof selector === "string") {
        $elems = Array.prototype.slice.call(document.querySelectorAll(selector));
    }
    else if (selector instanceof Element) {
        $elems = [selector];
    }
    else {
        $elems = selector;
    }
    return {
        get: function (index) {
            return $elems[index];
        },
        on: function (event, callback) {
            $elems.forEach(function ($elem) {
                $elem.addEventListener(event, callback);
            });
        },
        find: function (selector) {
            var $foundElems = [];
            $elems.map(function ($elem) {
                $foundElems.push($elem.querySelector(selector));
            });
            return $foundElems[0];
        },
        scrollTo: function () {
            var target = $elems[0].offsetTop - 50;
            window.scrollTo({
                behavior: "smooth",
                left: 0,
                top: target,
            });
        }
    };
};
/*****************************************************************************/
var $headerNavLinks = $("header nav a");
$headerNavLinks.on("click", function (ev) {
    ev.preventDefault();
    var target = ev.currentTarget.getAttribute("href");
    var $target = $(target);
    $(target).scrollTo();
});
var $radioButtons = $("form .radio-button");
$radioButtons.on("keypress", function (ev) {
    if (ev.keyCode === 13) {
        var $input = ev.currentTarget.querySelector("input");
        $input.dispatchEvent(new MouseEvent("click"));
    }
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);